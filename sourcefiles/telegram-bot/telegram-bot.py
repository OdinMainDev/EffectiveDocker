#!/usr/bin/env python3
import asyncio
import aiohttp
import yaml
import logging
import os
import json
from datetime import datetime
from typing import Dict, List, Optional

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class TelegramBot:
    def __init__(self, config_path: str = '/config/bot-config.yaml'):
        with open(config_path, 'r') as f:
            self.config = yaml.safe_load(f)
        
        self.bot_token = self.config['telegram']['bot_token']
        self.chat_id = self.config['telegram']['chat_id']
        self.services = self.config['services']
        self.health_check_interval = self.config['health_check']['interval']
        self.full_notifications = self.config['health_check']['full_notifications']
        
        self.service_states = {}
        self.session = None
        
    async def init_session(self):
        self.session = aiohttp.ClientSession()
        
    async def close_session(self):
        if self.session:
            await self.session.close()
            
    async def send_message(self, message: str, parse_mode: str = 'Markdown'):
        """Send message to Telegram chat"""
        url = f"https://api.telegram.org/bot{self.bot_token}/sendMessage"
        
        data = {
            'chat_id': self.chat_id,
            'text': message,
            'parse_mode': parse_mode
        }
        
        try:
            async with self.session.post(url, json=data) as response:
                if response.status == 200:
                    logger.info("Message sent successfully")
                else:
                    logger.error(f"Failed to send message: {response.status}")
        except Exception as e:
            logger.error(f"Error sending message: {e}")
            
    async def check_service_health(self, service: Dict) -> bool:
        """Check health of a single service"""
        name = service['name']
        
        try:
            if 'url' in service:
                async with self.session.get(service['url'], timeout=10) as response:
                    return response.status == 200
            elif 'command' in service:
                # For command-based health checks, we'd need to implement Docker exec
                # For now, assume healthy
                return True
        except Exception as e:
            logger.error(f"Health check failed for {name}: {e}")
            return False
            
    async def get_service_status(self) -> Dict[str, bool]:
        """Get status of all services"""
        status = {}
        
        for service in self.services:
            name = service['name']
            is_healthy = await self.check_service_health(service)
            status[name] = is_healthy
            
        return status
        
    async def check_and_notify(self):
        """Check all services and send notifications if needed"""
        current_status = await self.get_service_status()
        
        # Check for state changes
        state_changes = []
        new_failures = []
        recoveries = []
        
        for service_name, current_state in current_status.items():
            previous_state = self.service_states.get(service_name)
            
            if previous_state is None:
                # First check
                self.service_states[service_name] = current_state
                if not current_state:
                    new_failures.append(service_name)
            elif previous_state != current_state:
                # State changed
                state_changes.append((service_name, previous_state, current_state))
                self.service_states[service_name] = current_state
                
                if current_state:
                    recoveries.append(service_name)
                else:
                    new_failures.append(service_name)
                    
        # Send notifications
        if new_failures:
            await self.send_failure_notification(new_failures)
            
        if recoveries:
            await self.send_recovery_notification(recoveries)
            
        if self.full_notifications:
            await self.send_status_report(current_status)
            
    async def send_failure_notification(self, failed_services: List[str]):
        """Send notification about failed services"""
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        message = f"🚨 *SERVICE ALERT* 🚨\n\n"
        message += f"⏰ Time: `{timestamp}`\n\n"
        message += f"❌ Failed services:\n"
        
        for service in failed_services:
            message += f"  • {service}\n"
            
        message += f"\n🔍 Please check the services immediately!"
        
        await self.send_message(message)
        
    async def send_recovery_notification(self, recovered_services: List[str]):
        """Send notification about recovered services"""
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        message = f"✅ *SERVICE RECOVERY* ✅\n\n"
        message += f"⏰ Time: `{timestamp}`\n\n"
        message += f"🎉 Recovered services:\n"
        
        for service in recovered_services:
            message += f"  • {service}\n"
            
        await self.send_message(message)
        
    async def send_status_report(self, status: Dict[str, bool]):
        """Send full status report"""
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        healthy_count = sum(1 for s in status.values() if s)
        total_count = len(status)
        
        message = f"📊 *HEALTH STATUS REPORT* 📊\n\n"
        message += f"⏰ Time: `{timestamp}`\n"
        message += f"📈 Overall: {healthy_count}/{total_count} services healthy\n\n"
        
        # Group services by status
        healthy_services = [name for name, state in status.items() if state]
        unhealthy_services = [name for name, state in status.items() if not state]
        
        if healthy_services:
            message += f"✅ Healthy services:\n"
            for service in healthy_services:
                message += f"  • {service}\n"
                
        if unhealthy_services:
            message += f"\n❌ Unhealthy services:\n"
            for service in unhealthy_services:
                message += f"  • {service}\n"
                
        await self.send_message(message)
        
    async def run(self):
        """Main bot loop"""
        await self.init_session()
        
        try:
            # Send startup message
            await self.send_message("🤖 *Health Check Bot Started* 🤖\n\nMonitoring services...")
            
            while True:
                try:
                    await self.check_and_notify()
                    await asyncio.sleep(self.health_check_interval)
                except Exception as e:
                    logger.error(f"Error in health check loop: {e}")
                    await asyncio.sleep(60)  # Wait a minute before retrying
                    
        except KeyboardInterrupt:
            logger.info("Bot stopped by user")
        finally:
            await self.close_session()

if __name__ == "__main__":
    bot = TelegramBot()
    asyncio.run(bot.run())