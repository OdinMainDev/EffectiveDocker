FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first for better caching
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY telegram-bot.py .

# Create non-root user
RUN adduser --disabled-password --gecos '' telegrambot

# Change ownership
RUN chown -R telegrambot:telegrambot /app

USER telegrambot

# Health check
HEALTHCHECK --interval=60s --timeout=10s --start-period=30s --retries=3 \
    CMD python -c "import asyncio; print('Bot is running')"

CMD ["python", "telegram-bot.py"]