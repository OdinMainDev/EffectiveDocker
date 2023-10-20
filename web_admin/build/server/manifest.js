const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/css/svelecte.css","assets/css/theme-rtl.css","assets/css/theme-rtl.css.map","assets/css/theme-rtl.min.css","assets/css/theme-rtl.min.css.map","assets/css/theme.css","assets/css/theme.css.map","assets/css/theme.min.css","assets/css/theme.min.css.map","assets/css/user-rtl.css","assets/css/user-rtl.css.map","assets/css/user-rtl.min.css","assets/css/user-rtl.min.css.map","assets/css/user.css","assets/css/user.css.map","assets/css/user.min.css","assets/css/user.min.css.map","assets/img/.DS_Store","assets/img/animated-icons/rotating-earth-dark.json","assets/img/animated-icons/rotating-earth.json","assets/img/animated-icons/typing.json","assets/img/animated-icons/typing2.json","assets/img/bg/10.png","assets/img/bg/13.png","assets/img/bg/25.png","assets/img/bg/26.png","assets/img/bg/27.png","assets/img/bg/28.png","assets/img/bg/29.png","assets/img/bg/30.png","assets/img/bg/31.png","assets/img/bg/32.png","assets/img/bg/33.png","assets/img/bg/34.png","assets/img/bg/35.png","assets/img/bg/36.png","assets/img/bg/37.png","assets/img/bg/38.png","assets/img/bg/39.png","assets/img/bg/8.png","assets/img/bg/9.png","assets/img/bg/bg-1-2.png","assets/img/bg/bg-11.png","assets/img/bg/bg-12.png","assets/img/bg/bg-13.png","assets/img/bg/bg-17.png","assets/img/bg/bg-18.png","assets/img/bg/bg-19.png","assets/img/bg/bg-2.png","assets/img/bg/bg-21.png","assets/img/bg/bg-22.png","assets/img/bg/bg-23.png","assets/img/bg/bg-24.png","assets/img/bg/bg-28.png","assets/img/bg/bg-29.png","assets/img/bg/bg-30.png","assets/img/bg/bg-31.png","assets/img/bg/bg-32.png","assets/img/bg/bg-33.png","assets/img/bg/bg-34.png","assets/img/bg/bg-35.png","assets/img/bg/bg-36.png","assets/img/bg/bg-38.png","assets/img/bg/bg-39.png","assets/img/bg/bg-5.png","assets/img/bg/bg-8.png","assets/img/bg/bg-9.png","assets/img/bg/bg-dark-5.png","assets/img/bg/bg-left-15.png","assets/img/bg/bg-left-17.png","assets/img/bg/bg-left-20.png","assets/img/bg/bg-left-21.png","assets/img/bg/bg-left-22.png","assets/img/bg/bg-left-23.png","assets/img/bg/bg-left-24.png","assets/img/bg/bg-left-25.png","assets/img/bg/bg-left-26.png","assets/img/bg/bg-left-5.png","assets/img/bg/bg-right-15.png","assets/img/bg/bg-right-17.png","assets/img/bg/bg-right-20.png","assets/img/bg/bg-right-21.png","assets/img/bg/bg-right-22.png","assets/img/bg/bg-right-23.png","assets/img/bg/bg-right-24.png","assets/img/bg/bg-right-25.png","assets/img/bg/bg-right-26.png","assets/img/bg/bg-right-6.png","assets/img/bg/figma.png","assets/img/bg/gradient-bg.png","assets/img/blog/blog-1.png","assets/img/blog/blog-2.png","assets/img/blog/blog-3.png","assets/img/blog/blog-4.png","assets/img/blog/blog-5.png","assets/img/blog/blog-6.png","assets/img/blog/blog-7.png","assets/img/brand/honda.png","assets/img/brand/hp.png","assets/img/brand/huawei.png","assets/img/brand/oppo.png","assets/img/brand2/1.png","assets/img/brand2/2.png","assets/img/brand2/apple-2.png","assets/img/brand2/asus-rog.png","assets/img/brand2/b.png","assets/img/brand2/blender.png","assets/img/brand2/dell.png","assets/img/brand2/discord.png","assets/img/brand2/facebook-f.png","assets/img/brand2/google-g.png","assets/img/brand2/google-store.png","assets/img/brand2/honda.png","assets/img/brand2/hp.png","assets/img/brand2/huawei.png","assets/img/brand2/ibm.png","assets/img/brand2/intel-2.png","assets/img/brand2/lenovo.png","assets/img/brand2/mail-bluster-1.png","assets/img/brand2/netflix-n.png","assets/img/brand2/oneplus-2.png","assets/img/brand2/oppo.png","assets/img/brand2/pocket.png","assets/img/brand2/redragon.png","assets/img/brand2/suzuki-2.png","assets/img/brand2/theme-wagon.png","assets/img/brand2/upwork.png","assets/img/brand2/xbox.png","assets/img/brand2/xiaomi.png","assets/img/brand2/yamaha.png","assets/img/brands/apple-2.png","assets/img/brands/asus-rog.png","assets/img/brands/dell.png","assets/img/brands/google-store.png","assets/img/brands/honda.png","assets/img/brands/hp.png","assets/img/brands/ibm.png","assets/img/brands/intel-2.png","assets/img/brands/lenovo.png","assets/img/brands/oneplus-2.png","assets/img/brands/oppo.png","assets/img/brands/redragon.png","assets/img/brands/suzuki-2.png","assets/img/brands/xbox.png","assets/img/brands/xiaomi.png","assets/img/brands/yamaha.png","assets/img/chat/1.png","assets/img/chat/10.png","assets/img/chat/11.png","assets/img/chat/12.png","assets/img/chat/13.png","assets/img/chat/14.png","assets/img/chat/15.png","assets/img/chat/2.png","assets/img/chat/3.png","assets/img/chat/4.png","assets/img/chat/5.png","assets/img/chat/6.png","assets/img/chat/7.png","assets/img/chat/8.png","assets/img/chat/9.png","assets/img/country/china.png","assets/img/country/india.png","assets/img/country/mexico.png","assets/img/country/south-korea.png","assets/img/country/usa.png","assets/img/country/vietnam.png","assets/img/e-commerce/1.png","assets/img/e-commerce/2.png","assets/img/e-commerce/3.png","assets/img/e-commerce/4.png","assets/img/e-commerce/5.png","assets/img/e-commerce/6.png","assets/img/e-commerce/best-in-market-bg-2.png","assets/img/e-commerce/best-in-market-bg.png","assets/img/e-commerce/gift-items-banner-bg.png","assets/img/e-commerce/review-1.png","assets/img/e-commerce/review-11.jpg","assets/img/e-commerce/review-12.jpg","assets/img/e-commerce/review-13.jpg","assets/img/e-commerce/review-14.jpg","assets/img/e-commerce/review-15.jpg","assets/img/e-commerce/review-16.jpg","assets/img/e-commerce/review-2.png","assets/img/e-commerce/review-3.png","assets/img/e-commerce/review-4.png","assets/img/e-commerce/review-5.png","assets/img/e-commerce/review-6.png","assets/img/e-commerce/whooping_banner_bag.png","assets/img/e-commerce/whooping_banner_product.png","assets/img/e-commerce/whooping_banner_shape.png","assets/img/e-commerce/whooping_banner_shape_2.png","assets/img/favicons/android-chrome-192x192.png","assets/img/favicons/android-chrome-512x512.png","assets/img/favicons/apple-touch-icon.png","assets/img/favicons/browserconfig.xml","assets/img/favicons/favicon-16x16.png","assets/img/favicons/favicon-32x32.png","assets/img/favicons/favicon.ico","assets/img/favicons/manifest.json","assets/img/favicons/mstile-150x150.png","assets/img/favicons/site.webmanifest","assets/img/gallery/1.png","assets/img/gallery/10.png","assets/img/gallery/11.png","assets/img/gallery/12.png","assets/img/gallery/13.png","assets/img/gallery/14.png","assets/img/gallery/15.png","assets/img/gallery/16.png","assets/img/gallery/17.png","assets/img/gallery/18.png","assets/img/gallery/19.jpg","assets/img/gallery/19.png","assets/img/gallery/2.png","assets/img/gallery/20.jpg","assets/img/gallery/20.png","assets/img/gallery/21.jpg","assets/img/gallery/21.png","assets/img/gallery/22.png","assets/img/gallery/23.png","assets/img/gallery/24.png","assets/img/gallery/25.png","assets/img/gallery/26.png","assets/img/gallery/27.png","assets/img/gallery/28.png","assets/img/gallery/29.png","assets/img/gallery/3.png","assets/img/gallery/30.png","assets/img/gallery/31.png","assets/img/gallery/32.png","assets/img/gallery/33.png","assets/img/gallery/34.png","assets/img/gallery/4.png","assets/img/gallery/5.png","assets/img/gallery/6.png","assets/img/gallery/7.png","assets/img/gallery/8.png","assets/img/gallery/9.png","assets/img/generic/1.jpg","assets/img/generic/10 (2).jpg","assets/img/generic/10.jpg","assets/img/generic/11.jpg","assets/img/generic/12.jpg","assets/img/generic/13.jpg","assets/img/generic/2.jpg","assets/img/generic/23.jpg","assets/img/generic/24.jpg","assets/img/generic/25.jpg","assets/img/generic/26.png","assets/img/generic/28.jpg","assets/img/generic/3.jpg","assets/img/generic/30.jpg","assets/img/generic/31.jpg","assets/img/generic/32.jpg","assets/img/generic/33.jpg","assets/img/generic/34.jpg","assets/img/generic/34.png","assets/img/generic/35.jpg","assets/img/generic/36.png","assets/img/generic/37.png","assets/img/generic/38.png","assets/img/generic/4.jpg","assets/img/generic/40.png","assets/img/generic/41.png","assets/img/generic/42.png","assets/img/generic/43.png","assets/img/generic/44.png","assets/img/generic/45.png","assets/img/generic/46.png","assets/img/generic/47.png","assets/img/generic/48.png","assets/img/generic/49.png","assets/img/generic/5.jpg","assets/img/generic/50.png","assets/img/generic/51.png","assets/img/generic/52.png","assets/img/generic/53.png","assets/img/generic/54.png","assets/img/generic/55.png","assets/img/generic/56.png","assets/img/generic/57.png","assets/img/generic/59.png","assets/img/generic/6 (2).jpg","assets/img/generic/6.jpg","assets/img/generic/60.png","assets/img/generic/61.png","assets/img/generic/63.png","assets/img/generic/64.png","assets/img/generic/65.png","assets/img/generic/66.jpg","assets/img/generic/66.png","assets/img/generic/7.jpg","assets/img/generic/8.jpg","assets/img/generic/9.jpg","assets/img/generic/Frame-14.png","assets/img/generic/bg-1.jpg","assets/img/generic/bg-2.jpg","assets/img/generic/bg-navbar.png","assets/img/generic/calander-65.png","assets/img/generic/capterra.png","assets/img/generic/card.png","assets/img/generic/chat-66.png","assets/img/generic/cover-photo.png","assets/img/generic/dark-mode.png","assets/img/generic/dashboard-alt-dark.png","assets/img/generic/dashboard-alt.jpg","assets/img/generic/dashboard-alt.png","assets/img/generic/dashboard-old.png","assets/img/generic/default-dark.png","assets/img/generic/default-light.png","assets/img/generic/default.png","assets/img/generic/email-64.png","assets/img/generic/falcon-mode-dark.jpg","assets/img/generic/falcon-mode-default.jpg","assets/img/generic/html-falcon.png","assets/img/generic/inverted.png","assets/img/generic/nav-combo-dark.png","assets/img/generic/nav-combo-light.png","assets/img/generic/navbar-top-style-light.png","assets/img/generic/showcase-footer-bg.png","assets/img/generic/top-default-dark.png","assets/img/generic/top-default.png","assets/img/generic/top-slim-dark.png","assets/img/generic/top-slim.png","assets/img/generic/top-style-darker.png","assets/img/generic/top-style-default-dark.png","assets/img/generic/top-style-default.png","assets/img/generic/top-style-lighter.png","assets/img/generic/vertical-darker.png","assets/img/generic/vertical-lighter.png","assets/img/generic/vibrant.png","assets/img/icons/all-night-dark.png","assets/img/icons/all-night.png","assets/img/icons/best-statistics-dark.png","assets/img/icons/best-statistics.png","assets/img/icons/blue.png","assets/img/icons/caret-down-solid.svg","assets/img/icons/caret-right-solid.svg","assets/img/icons/cloud-upload.svg","assets/img/icons/danger-cancel.svg","assets/img/icons/editable-features-dark.png","assets/img/icons/editable-features.png","assets/img/icons/figma.png","assets/img/icons/file.png","assets/img/icons/green.png","assets/img/icons/illustrations/10.png","assets/img/icons/illustrations/11.png","assets/img/icons/illustrations/12.png","assets/img/icons/illustrations/13.png","assets/img/icons/illustrations/14.png","assets/img/icons/illustrations/15.png","assets/img/icons/illustrations/16.png","assets/img/icons/illustrations/17.png","assets/img/icons/illustrations/18.png","assets/img/icons/illustrations/19.png","assets/img/icons/illustrations/20.png","assets/img/icons/illustrations/21.png","assets/img/icons/illustrations/22.png","assets/img/icons/illustrations/23.png","assets/img/icons/illustrations/24.png","assets/img/icons/illustrations/25.png","assets/img/icons/illustrations/26.png","assets/img/icons/illustrations/2l.png","assets/img/icons/illustrations/3l.png","assets/img/icons/illustrations/4l.png","assets/img/icons/illustrations/5.png","assets/img/icons/illustrations/6.png","assets/img/icons/illustrations/7.png","assets/img/icons/illustrations/8.png","assets/img/icons/illustrations/9.png","assets/img/icons/illustrations/bolt.png","assets/img/icons/illustrations/edit.png","assets/img/icons/illustrations/moon.svg","assets/img/icons/illustrations/pie.png","assets/img/icons/illustrations/shield.png","assets/img/icons/illustrations/sun.svg","assets/img/icons/image-icon.png","assets/img/icons/info-circle.svg","assets/img/icons/lightning-speed-dark.png","assets/img/icons/lightning-speed.png","assets/img/icons/logo-1.png","assets/img/icons/logo-bg.png","assets/img/icons/logo-primary.png","assets/img/icons/logo-white.png","assets/img/icons/logo.png","assets/img/icons/map-marker.png","assets/img/icons/phoenix.png","assets/img/icons/primary-stopwatch.svg","assets/img/icons/red.png","assets/img/icons/secondary-cancel.svg","assets/img/icons/skyblue.png","assets/img/icons/star.svg","assets/img/icons/star_on.svg","assets/img/icons/stop.png","assets/img/icons/success-check.svg","assets/img/icons/thumbs-up.png","assets/img/icons/warning-stopwatch.svg","assets/img/icons/warning-stopwatch2.svg","assets/img/icons/yellow.png","assets/img/logo/logo.png","assets/img/logo/logo_op1.png","assets/img/logo/logo_op2.png","assets/img/logo/logo_op3.png","assets/img/logo/logo_op4.png","assets/img/logo/logo_op5.png","assets/img/logo/logo_op6.png","assets/img/logo/logo_op7.png","assets/img/logo/logo_op8.png","assets/img/logo/logo_op9.png","assets/img/logo/o1.svg","assets/img/logo/o1_kek.svg","assets/img/logo/o1_roga.svg","assets/img/logo/o2.svg","assets/img/logo/o2_kek.svg","assets/img/logo/o2_roga.svg","assets/img/logos/american_express.png","assets/img/logos/discover.png","assets/img/logos/mastercard.png","assets/img/logos/phoenix-mart.png","assets/img/logos/visa.png","assets/img/map-marker.png","assets/img/nav-icons/Gitlab-icon-rgb_2022 1.webp","assets/img/nav-icons/In.webp","assets/img/nav-icons/behance-1 1 (1).webp","assets/img/nav-icons/behance.webp","assets/img/nav-icons/bitbucket-icon 1.webp","assets/img/nav-icons/bitbucket.webp","assets/img/nav-icons/figma-1 1.webp","assets/img/nav-icons/figma.webp","assets/img/nav-icons/github.webp","assets/img/nav-icons/gitlab.webp","assets/img/nav-icons/google-cloud-1 1.webp","assets/img/nav-icons/google-cloud.webp","assets/img/nav-icons/google-drive.webp","assets/img/nav-icons/google-maps-2020-icon 1.webp","assets/img/nav-icons/google-maps.webp","assets/img/nav-icons/google-photos-6 1.webp","assets/img/nav-icons/google-photos.webp","assets/img/nav-icons/linkedin.webp","assets/img/nav-icons/ln.webp","assets/img/nav-icons/new-logo-drive-google 1.webp","assets/img/nav-icons/pinterest-1 1.webp","assets/img/nav-icons/pinterest.webp","assets/img/nav-icons/slack-new-logo 1.webp","assets/img/nav-icons/slack.webp","assets/img/nav-icons/spotify-2 1.webp","assets/img/nav-icons/spotify.webp","assets/img/nav-icons/trello 1.webp","assets/img/nav-icons/trello.webp","assets/img/nav-icons/twitter-6 1.webp","assets/img/nav-icons/twitter.webp","assets/img/products/1.png","assets/img/products/10.png","assets/img/products/11.png","assets/img/products/12.png","assets/img/products/13.png","assets/img/products/14.png","assets/img/products/15.png","assets/img/products/16.png","assets/img/products/17.png","assets/img/products/18.png","assets/img/products/19.png","assets/img/products/2.png","assets/img/products/20.png","assets/img/products/21.png","assets/img/products/22.png","assets/img/products/23.png","assets/img/products/24.png","assets/img/products/25.png","assets/img/products/26.png","assets/img/products/27.png","assets/img/products/3.png","assets/img/products/300x300/1.png","assets/img/products/300x300/10.png","assets/img/products/300x300/11.png","assets/img/products/300x300/12.png","assets/img/products/300x300/13.png","assets/img/products/300x300/14.png","assets/img/products/300x300/15.png","assets/img/products/300x300/17.png","assets/img/products/300x300/18.png","assets/img/products/300x300/19.png","assets/img/products/300x300/2.png","assets/img/products/300x300/20.png","assets/img/products/300x300/21.png","assets/img/products/300x300/3.png","assets/img/products/300x300/4.png","assets/img/products/300x300/5.png","assets/img/products/300x300/6.png","assets/img/products/300x300/7.png","assets/img/products/300x300/8.png","assets/img/products/300x300/9.png","assets/img/products/4.png","assets/img/products/5.png","assets/img/products/6.png","assets/img/products/60x60/1.png","assets/img/products/60x60/10.png","assets/img/products/60x60/11.png","assets/img/products/60x60/12.png","assets/img/products/60x60/13.png","assets/img/products/60x60/14.png","assets/img/products/60x60/15.png","assets/img/products/60x60/17.png","assets/img/products/60x60/18.png","assets/img/products/60x60/19.png","assets/img/products/60x60/2.png","assets/img/products/60x60/20.png","assets/img/products/60x60/21.png","assets/img/products/60x60/3.png","assets/img/products/60x60/4.png","assets/img/products/60x60/5.png","assets/img/products/60x60/6.png","assets/img/products/60x60/7.png","assets/img/products/60x60/8.png","assets/img/products/60x60/9.png","assets/img/products/7.png","assets/img/products/8.png","assets/img/products/9.png","assets/img/products/details/blue_back.png","assets/img/products/details/blue_front.png","assets/img/products/details/blue_side.png","assets/img/products/details/green_back.png","assets/img/products/details/green_front.png","assets/img/products/details/green_side.png","assets/img/products/details/orange_back.png","assets/img/products/details/orange_front.png","assets/img/products/details/orange_side.png","assets/img/products/details/purple_back.png","assets/img/products/details/purple_front.png","assets/img/products/details/purple_side.png","assets/img/products/details/red_back.png","assets/img/products/details/red_front.png","assets/img/products/details/red_side.png","assets/img/products/details/silver_back.png","assets/img/products/details/silver_front.png","assets/img/products/details/silver_side.png","assets/img/products/details/yellow_back.png","assets/img/products/details/yellow_front.png","assets/img/products/details/yellow_side.png","assets/img/products/thumb-1.png","assets/img/products/thumb-2.png","assets/img/products/thumb-3.png","assets/img/products/thumb-4.png","assets/img/sections/1.webp","assets/img/sections/10.webp","assets/img/sections/11.webp","assets/img/sections/12.webp","assets/img/sections/13.webp","assets/img/sections/14.webp","assets/img/sections/15.webp","assets/img/sections/16.webp","assets/img/sections/2.webp","assets/img/sections/21.webp","assets/img/sections/22.webp","assets/img/sections/23.webp","assets/img/sections/24.webp","assets/img/sections/25.webp","assets/img/sections/26.webp","assets/img/sections/3.webp","assets/img/sections/4.webp","assets/img/sections/5.webp","assets/img/sections/6.webp","assets/img/sections/63.webp","assets/img/sections/64.webp","assets/img/sections/65.webp","assets/img/sections/66.webp","assets/img/sections/7.webp","assets/img/sections/8.webp","assets/img/sections/9.webp","assets/img/sections/combo-nav.webp","assets/img/sections/demo-1.webp","assets/img/sections/demo-2.webp","assets/img/sections/demo-4.webp","assets/img/sections/demo-5.webp","assets/img/sections/demo-6.webp","assets/img/sections/demo-7.webp","assets/img/sections/demo-8.webp","assets/img/sections/demo.webp","assets/img/sections/horizontal-slim.webp","assets/img/sections/sidenav-collapse.webp","assets/img/sections/sidenav-dark.webp","assets/img/sections/topnav-double.webp","assets/img/sections/topnav-only.webp","assets/img/sections/topnav-slim-combo.webp","assets/img/sections/vertical-sidenav.webp","assets/img/spot-illustrations/1.png","assets/img/spot-illustrations/13.png","assets/img/spot-illustrations/14.png","assets/img/spot-illustrations/15.png","assets/img/spot-illustrations/16.png","assets/img/spot-illustrations/18.png","assets/img/spot-illustrations/19.png","assets/img/spot-illustrations/2.png","assets/img/spot-illustrations/21.png","assets/img/spot-illustrations/22.png","assets/img/spot-illustrations/22_2.png","assets/img/spot-illustrations/23.png","assets/img/spot-illustrations/23_2.png","assets/img/spot-illustrations/24.png","assets/img/spot-illustrations/24_2.png","assets/img/spot-illustrations/27.png","assets/img/spot-illustrations/3.png","assets/img/spot-illustrations/30.png","assets/img/spot-illustrations/31.png","assets/img/spot-illustrations/32.png","assets/img/spot-illustrations/33-s.webp","assets/img/spot-illustrations/34.png","assets/img/spot-illustrations/34_2.png","assets/img/spot-illustrations/35.png","assets/img/spot-illustrations/35_2.png","assets/img/spot-illustrations/36.png","assets/img/spot-illustrations/36_2.png","assets/img/spot-illustrations/37.png","assets/img/spot-illustrations/37_2.png","assets/img/spot-illustrations/38.webp","assets/img/spot-illustrations/404-illustration.png","assets/img/spot-illustrations/404.png","assets/img/spot-illustrations/500-illustration.png","assets/img/spot-illustrations/500.png","assets/img/spot-illustrations/air-plane-dark.png","assets/img/spot-illustrations/air-plane.png","assets/img/spot-illustrations/auth-dark.png","assets/img/spot-illustrations/auth.png","assets/img/spot-illustrations/bag-2.png","assets/img/spot-illustrations/bag.png","assets/img/spot-illustrations/bg-1.png","assets/img/spot-illustrations/dark_1.png","assets/img/spot-illustrations/dark_13.png","assets/img/spot-illustrations/dark_14.png","assets/img/spot-illustrations/dark_15.png","assets/img/spot-illustrations/dark_16.png","assets/img/spot-illustrations/dark_17.png","assets/img/spot-illustrations/dark_2.png","assets/img/spot-illustrations/dark_21.png","assets/img/spot-illustrations/dark_22.png","assets/img/spot-illustrations/dark_23.png","assets/img/spot-illustrations/dark_24.png","assets/img/spot-illustrations/dark_26.png","assets/img/spot-illustrations/dark_27.png","assets/img/spot-illustrations/dark_30.png","assets/img/spot-illustrations/dark_38.webp","assets/img/spot-illustrations/dark_404-illustration.png","assets/img/spot-illustrations/dark_404.png","assets/img/spot-illustrations/dark_500-illustration.png","assets/img/spot-illustrations/dark_500.png","assets/img/spot-illustrations/earth-plane-dark.png","assets/img/spot-illustrations/earth-plane.png","assets/img/spot-illustrations/light_17.png","assets/img/spot-illustrations/light_30.png","assets/img/spot-illustrations/paper-plane.png","assets/img/spot-illustrations/plane.png","assets/img/spot-illustrations/rocket.png","assets/img/spot-illustrations/shield-2.png","assets/img/spot-illustrations/shield.png","assets/img/spot-illustrations/star.png","assets/img/spot-illustrations/startup-shape.png","assets/img/spot-illustrations/timeline-dark.png","assets/img/spot-illustrations/timeline.png","assets/img/spot-illustrations/untitled folder/darkk_17.png","assets/img/spot-illustrations/untitled folder/lightt_17.png","assets/img/team/1.webp","assets/img/team/10.webp","assets/img/team/11.webp","assets/img/team/12.webp","assets/img/team/13.webp","assets/img/team/14.webp","assets/img/team/15.webp","assets/img/team/150x150/1.webp","assets/img/team/150x150/10.webp","assets/img/team/150x150/11.webp","assets/img/team/150x150/12.webp","assets/img/team/150x150/13.webp","assets/img/team/150x150/14.webp","assets/img/team/150x150/15.webp","assets/img/team/150x150/16.webp","assets/img/team/150x150/17.webp","assets/img/team/150x150/18.webp","assets/img/team/150x150/19.webp","assets/img/team/150x150/2.webp","assets/img/team/150x150/20.webp","assets/img/team/150x150/21.webp","assets/img/team/150x150/22.webp","assets/img/team/150x150/23.webp","assets/img/team/150x150/24.webp","assets/img/team/150x150/25.webp","assets/img/team/150x150/26.webp","assets/img/team/150x150/27.webp","assets/img/team/150x150/28.webp","assets/img/team/150x150/29.webp","assets/img/team/150x150/3.webp","assets/img/team/150x150/30.webp","assets/img/team/150x150/31.webp","assets/img/team/150x150/32.webp","assets/img/team/150x150/33.webp","assets/img/team/150x150/34.webp","assets/img/team/150x150/36.webp","assets/img/team/150x150/4.webp","assets/img/team/150x150/5.webp","assets/img/team/150x150/57.webp","assets/img/team/150x150/58.webp","assets/img/team/150x150/59.webp","assets/img/team/150x150/6.webp","assets/img/team/150x150/60.webp","assets/img/team/150x150/61.webp","assets/img/team/150x150/62.webp","assets/img/team/150x150/63.webp","assets/img/team/150x150/64.webp","assets/img/team/150x150/65.webp","assets/img/team/150x150/66.webp","assets/img/team/150x150/67.webp","assets/img/team/150x150/68.webp","assets/img/team/150x150/69.webp","assets/img/team/150x150/7.webp","assets/img/team/150x150/8.webp","assets/img/team/150x150/9.webp","assets/img/team/150x150/avatar.webp","assets/img/team/16.webp","assets/img/team/17.webp","assets/img/team/18.webp","assets/img/team/19.webp","assets/img/team/2.webp","assets/img/team/20.webp","assets/img/team/21.webp","assets/img/team/22.webp","assets/img/team/23.webp","assets/img/team/24.webp","assets/img/team/24x24/1.webp","assets/img/team/24x24/10.webp","assets/img/team/24x24/11.webp","assets/img/team/24x24/12.webp","assets/img/team/24x24/13.webp","assets/img/team/24x24/14.webp","assets/img/team/24x24/15.webp","assets/img/team/24x24/16.webp","assets/img/team/24x24/17.webp","assets/img/team/24x24/18.webp","assets/img/team/24x24/19.webp","assets/img/team/24x24/2.webp","assets/img/team/24x24/20.webp","assets/img/team/24x24/21.webp","assets/img/team/24x24/22.webp","assets/img/team/24x24/23.webp","assets/img/team/24x24/24.webp","assets/img/team/24x24/25.webp","assets/img/team/24x24/26.webp","assets/img/team/24x24/27.webp","assets/img/team/24x24/28.webp","assets/img/team/24x24/29.webp","assets/img/team/24x24/3.webp","assets/img/team/24x24/30.webp","assets/img/team/24x24/31.webp","assets/img/team/24x24/32.webp","assets/img/team/24x24/33.webp","assets/img/team/24x24/34.webp","assets/img/team/24x24/36.webp","assets/img/team/24x24/4.webp","assets/img/team/24x24/5.webp","assets/img/team/24x24/57.webp","assets/img/team/24x24/58.webp","assets/img/team/24x24/59.webp","assets/img/team/24x24/6.webp","assets/img/team/24x24/60.webp","assets/img/team/24x24/61.webp","assets/img/team/24x24/62.webp","assets/img/team/24x24/63.webp","assets/img/team/24x24/64.webp","assets/img/team/24x24/65.webp","assets/img/team/24x24/66.webp","assets/img/team/24x24/67.webp","assets/img/team/24x24/68.webp","assets/img/team/24x24/69.webp","assets/img/team/24x24/7.webp","assets/img/team/24x24/8.webp","assets/img/team/24x24/9.webp","assets/img/team/24x24/avatar.webp","assets/img/team/25.webp","assets/img/team/26.webp","assets/img/team/27.webp","assets/img/team/28.webp","assets/img/team/29.webp","assets/img/team/3.webp","assets/img/team/30.webp","assets/img/team/31.webp","assets/img/team/32.webp","assets/img/team/33.webp","assets/img/team/34.webp","assets/img/team/35.webp","assets/img/team/4.webp","assets/img/team/40x40/1.webp","assets/img/team/40x40/10.webp","assets/img/team/40x40/11.webp","assets/img/team/40x40/12.webp","assets/img/team/40x40/13.webp","assets/img/team/40x40/14.webp","assets/img/team/40x40/15.webp","assets/img/team/40x40/16.webp","assets/img/team/40x40/17.webp","assets/img/team/40x40/18.webp","assets/img/team/40x40/19.webp","assets/img/team/40x40/2.webp","assets/img/team/40x40/20.webp","assets/img/team/40x40/21.webp","assets/img/team/40x40/22.webp","assets/img/team/40x40/23.webp","assets/img/team/40x40/24.webp","assets/img/team/40x40/25.webp","assets/img/team/40x40/26.webp","assets/img/team/40x40/27.webp","assets/img/team/40x40/28.webp","assets/img/team/40x40/29.webp","assets/img/team/40x40/3.webp","assets/img/team/40x40/30.webp","assets/img/team/40x40/31.webp","assets/img/team/40x40/32.webp","assets/img/team/40x40/33.webp","assets/img/team/40x40/34.webp","assets/img/team/40x40/36.webp","assets/img/team/40x40/4.webp","assets/img/team/40x40/5.webp","assets/img/team/40x40/57.webp","assets/img/team/40x40/58.webp","assets/img/team/40x40/59.webp","assets/img/team/40x40/6.webp","assets/img/team/40x40/60.webp","assets/img/team/40x40/61.webp","assets/img/team/40x40/62.webp","assets/img/team/40x40/63.webp","assets/img/team/40x40/64.webp","assets/img/team/40x40/65.webp","assets/img/team/40x40/66.webp","assets/img/team/40x40/67.webp","assets/img/team/40x40/68.webp","assets/img/team/40x40/69.webp","assets/img/team/40x40/7.webp","assets/img/team/40x40/8.webp","assets/img/team/40x40/9.webp","assets/img/team/40x40/avatar.webp","assets/img/team/5.webp","assets/img/team/57.webp","assets/img/team/58.webp","assets/img/team/59.webp","assets/img/team/6.webp","assets/img/team/60.webp","assets/img/team/61.webp","assets/img/team/62.webp","assets/img/team/63.webp","assets/img/team/64.webp","assets/img/team/65.webp","assets/img/team/66.webp","assets/img/team/67.webp","assets/img/team/68.webp","assets/img/team/69.webp","assets/img/team/7.webp","assets/img/team/70.webp","assets/img/team/71.webp","assets/img/team/72.webp","assets/img/team/72x72/1.webp","assets/img/team/72x72/10.webp","assets/img/team/72x72/11.webp","assets/img/team/72x72/12.webp","assets/img/team/72x72/13.webp","assets/img/team/72x72/14.webp","assets/img/team/72x72/15.webp","assets/img/team/72x72/16.webp","assets/img/team/72x72/17.webp","assets/img/team/72x72/18.webp","assets/img/team/72x72/19.webp","assets/img/team/72x72/2.webp","assets/img/team/72x72/20.webp","assets/img/team/72x72/21.webp","assets/img/team/72x72/22.webp","assets/img/team/72x72/23.webp","assets/img/team/72x72/24.webp","assets/img/team/72x72/25.webp","assets/img/team/72x72/26.webp","assets/img/team/72x72/27.webp","assets/img/team/72x72/28.webp","assets/img/team/72x72/29.webp","assets/img/team/72x72/3.webp","assets/img/team/72x72/30.webp","assets/img/team/72x72/31.webp","assets/img/team/72x72/32.webp","assets/img/team/72x72/33.webp","assets/img/team/72x72/34.webp","assets/img/team/72x72/36.webp","assets/img/team/72x72/4.webp","assets/img/team/72x72/5.webp","assets/img/team/72x72/57.webp","assets/img/team/72x72/58.webp","assets/img/team/72x72/59.webp","assets/img/team/72x72/6.webp","assets/img/team/72x72/60.webp","assets/img/team/72x72/61.webp","assets/img/team/72x72/62.webp","assets/img/team/72x72/63.webp","assets/img/team/72x72/64.webp","assets/img/team/72x72/65.webp","assets/img/team/72x72/66.webp","assets/img/team/72x72/67.webp","assets/img/team/72x72/68.webp","assets/img/team/72x72/69.webp","assets/img/team/72x72/7.webp","assets/img/team/72x72/8.webp","assets/img/team/72x72/9.webp","assets/img/team/72x72/avatar.webp","assets/img/team/73.webp","assets/img/team/74.webp","assets/img/team/75.webp","assets/img/team/76.webp","assets/img/team/8.webp","assets/img/team/9.webp","assets/img/team/avatar-placeholder.webp","assets/img/team/avatar-rounded.webp","assets/img/team/avatar.webp","assets/img/team/empty-thumb.webp","assets/img/team/r.webp","assets/img/test/38.png","assets/img/test/dark_38.png","assets/js/calendar.js","assets/js/calendar.js.map","assets/js/config.js","assets/js/config.js.map","assets/js/crm-dashboard.js","assets/js/crm-dashboard.js.map","assets/js/ecommerce-dashboard.js","assets/js/ecommerce-dashboard.js.map","assets/js/esplatform.js","assets/js/esplatform.js.map","assets/js/project-details.js","assets/js/project-details.js.map","assets/js/projectmanagement-dashboard.js","assets/js/projectmanagement-dashboard.js.map","assets/js/showcase.js","assets/js/showcase.js.map","favicon.png","logo/logo.png","logo/logo_op1.png","logo/logo_op2.png","logo/logo_op3.png","logo/logo_op4.png","logo/logo_op5.png","logo/logo_op6.png","logo/logo_op7.png","logo/logo_op8.png","logo/logo_op9.png","logo/o1.svg","logo/o1_kek.svg","logo/o1_roga.svg","logo/o2.svg","logo/o2_kek.svg","logo/o2_roga.svg","robots.txt","vendors/anchorjs/anchor.min.js","vendors/bigpicture/BigPicture.js","vendors/bootstrap/bootstrap.min.js","vendors/bootstrap/bootstrap.min.js.map","vendors/chart/chart.min.js","vendors/choices/base.min.css","vendors/choices/choices.min.css","vendors/choices/choices.min.js","vendors/dayjs/dayjs.min.js","vendors/dhtmlx-gantt/dhtmlxgantt.css","vendors/dhtmlx-gantt/dhtmlxgantt.js","vendors/dropzone/dropzone.min.css","vendors/dropzone/dropzone.min.js","vendors/echarts/echarts.min.js","vendors/feather-icons/feather.min.js","vendors/fontawesome/all.min.js","vendors/fullcalendar/main.js","vendors/fullcalendar/main.min.css","vendors/fullcalendar/main.min.js","vendors/glightbox/glightbox.min.css","vendors/glightbox/glightbox.min.js","vendors/imagesloaded/imagesloaded.pkgd.min.js","vendors/is/is.min.js","vendors/isotope-layout/isotope.pkgd.min.js","vendors/isotope-packery/packery-mode.pkgd.min.js","vendors/list.js/list.min.js","vendors/list.js/list.min.js.map","vendors/lodash/lodash.min.js","vendors/lottie/lottie.min.js","vendors/popper/popper.min.js","vendors/popper/popper.min.js.map","vendors/prism/prism-okaidia.css","vendors/prism/prism.js","vendors/rater-js/index.js","vendors/rater-js/rater-js.js","vendors/rater-js/star_0.svg","vendors/rater-js/star_1.svg","vendors/rater-js/style.css","vendors/simplebar/simplebar.min.css","vendors/simplebar/simplebar.min.js","vendors/swiper/swiper-bundle.min.css","vendors/swiper/swiper-bundle.min.js","vendors/tinymce/CHANGELOG.md","vendors/tinymce/README.md","vendors/tinymce/bower.json","vendors/tinymce/composer.json","vendors/tinymce/icons/default/icons.js","vendors/tinymce/icons/default/icons.min.js","vendors/tinymce/icons/default/index.js","vendors/tinymce/license.txt","vendors/tinymce/models/dom/index.js","vendors/tinymce/models/dom/model.js","vendors/tinymce/models/dom/model.min.js","vendors/tinymce/package.json","vendors/tinymce/plugins/advlist/index.js","vendors/tinymce/plugins/advlist/plugin.js","vendors/tinymce/plugins/advlist/plugin.min.js","vendors/tinymce/plugins/anchor/index.js","vendors/tinymce/plugins/anchor/plugin.js","vendors/tinymce/plugins/anchor/plugin.min.js","vendors/tinymce/plugins/autolink/index.js","vendors/tinymce/plugins/autolink/plugin.js","vendors/tinymce/plugins/autolink/plugin.min.js","vendors/tinymce/plugins/autoresize/index.js","vendors/tinymce/plugins/autoresize/plugin.js","vendors/tinymce/plugins/autoresize/plugin.min.js","vendors/tinymce/plugins/autosave/index.js","vendors/tinymce/plugins/autosave/plugin.js","vendors/tinymce/plugins/autosave/plugin.min.js","vendors/tinymce/plugins/charmap/index.js","vendors/tinymce/plugins/charmap/plugin.js","vendors/tinymce/plugins/charmap/plugin.min.js","vendors/tinymce/plugins/code/index.js","vendors/tinymce/plugins/code/plugin.js","vendors/tinymce/plugins/code/plugin.min.js","vendors/tinymce/plugins/codesample/index.js","vendors/tinymce/plugins/codesample/plugin.js","vendors/tinymce/plugins/codesample/plugin.min.js","vendors/tinymce/plugins/directionality/index.js","vendors/tinymce/plugins/directionality/plugin.js","vendors/tinymce/plugins/directionality/plugin.min.js","vendors/tinymce/plugins/emoticons/index.js","vendors/tinymce/plugins/emoticons/js/emojiimages.js","vendors/tinymce/plugins/emoticons/js/emojiimages.min.js","vendors/tinymce/plugins/emoticons/js/emojis.js","vendors/tinymce/plugins/emoticons/js/emojis.min.js","vendors/tinymce/plugins/emoticons/plugin.js","vendors/tinymce/plugins/emoticons/plugin.min.js","vendors/tinymce/plugins/fullscreen/index.js","vendors/tinymce/plugins/fullscreen/plugin.js","vendors/tinymce/plugins/fullscreen/plugin.min.js","vendors/tinymce/plugins/help/index.js","vendors/tinymce/plugins/help/plugin.js","vendors/tinymce/plugins/help/plugin.min.js","vendors/tinymce/plugins/image/index.js","vendors/tinymce/plugins/image/plugin.js","vendors/tinymce/plugins/image/plugin.min.js","vendors/tinymce/plugins/importcss/index.js","vendors/tinymce/plugins/importcss/plugin.js","vendors/tinymce/plugins/importcss/plugin.min.js","vendors/tinymce/plugins/insertdatetime/index.js","vendors/tinymce/plugins/insertdatetime/plugin.js","vendors/tinymce/plugins/insertdatetime/plugin.min.js","vendors/tinymce/plugins/link/index.js","vendors/tinymce/plugins/link/plugin.js","vendors/tinymce/plugins/link/plugin.min.js","vendors/tinymce/plugins/lists/index.js","vendors/tinymce/plugins/lists/plugin.js","vendors/tinymce/plugins/lists/plugin.min.js","vendors/tinymce/plugins/media/index.js","vendors/tinymce/plugins/media/plugin.js","vendors/tinymce/plugins/media/plugin.min.js","vendors/tinymce/plugins/nonbreaking/index.js","vendors/tinymce/plugins/nonbreaking/plugin.js","vendors/tinymce/plugins/nonbreaking/plugin.min.js","vendors/tinymce/plugins/pagebreak/index.js","vendors/tinymce/plugins/pagebreak/plugin.js","vendors/tinymce/plugins/pagebreak/plugin.min.js","vendors/tinymce/plugins/preview/index.js","vendors/tinymce/plugins/preview/plugin.js","vendors/tinymce/plugins/preview/plugin.min.js","vendors/tinymce/plugins/quickbars/index.js","vendors/tinymce/plugins/quickbars/plugin.js","vendors/tinymce/plugins/quickbars/plugin.min.js","vendors/tinymce/plugins/save/index.js","vendors/tinymce/plugins/save/plugin.js","vendors/tinymce/plugins/save/plugin.min.js","vendors/tinymce/plugins/searchreplace/index.js","vendors/tinymce/plugins/searchreplace/plugin.js","vendors/tinymce/plugins/searchreplace/plugin.min.js","vendors/tinymce/plugins/table/index.js","vendors/tinymce/plugins/table/plugin.js","vendors/tinymce/plugins/table/plugin.min.js","vendors/tinymce/plugins/template/index.js","vendors/tinymce/plugins/template/plugin.js","vendors/tinymce/plugins/template/plugin.min.js","vendors/tinymce/plugins/visualblocks/index.js","vendors/tinymce/plugins/visualblocks/plugin.js","vendors/tinymce/plugins/visualblocks/plugin.min.js","vendors/tinymce/plugins/visualchars/index.js","vendors/tinymce/plugins/visualchars/plugin.js","vendors/tinymce/plugins/visualchars/plugin.min.js","vendors/tinymce/plugins/wordcount/index.js","vendors/tinymce/plugins/wordcount/plugin.js","vendors/tinymce/plugins/wordcount/plugin.min.js","vendors/tinymce/skins/content/dark/content.css","vendors/tinymce/skins/content/dark/content.min.css","vendors/tinymce/skins/content/default/content.css","vendors/tinymce/skins/content/default/content.min.css","vendors/tinymce/skins/content/document/content.css","vendors/tinymce/skins/content/document/content.min.css","vendors/tinymce/skins/content/tinymce-5/content.css","vendors/tinymce/skins/content/tinymce-5/content.min.css","vendors/tinymce/skins/content/tinymce-5-dark/content.css","vendors/tinymce/skins/content/tinymce-5-dark/content.min.css","vendors/tinymce/skins/content/writer/content.css","vendors/tinymce/skins/content/writer/content.min.css","vendors/tinymce/skins/ui/oxide/content.css","vendors/tinymce/skins/ui/oxide/content.inline.css","vendors/tinymce/skins/ui/oxide/content.inline.min.css","vendors/tinymce/skins/ui/oxide/content.min.css","vendors/tinymce/skins/ui/oxide/skin.css","vendors/tinymce/skins/ui/oxide/skin.min.css","vendors/tinymce/skins/ui/oxide/skin.shadowdom.css","vendors/tinymce/skins/ui/oxide/skin.shadowdom.min.css","vendors/tinymce/skins/ui/oxide-dark/content.css","vendors/tinymce/skins/ui/oxide-dark/content.inline.css","vendors/tinymce/skins/ui/oxide-dark/content.inline.min.css","vendors/tinymce/skins/ui/oxide-dark/content.min.css","vendors/tinymce/skins/ui/oxide-dark/skin.css","vendors/tinymce/skins/ui/oxide-dark/skin.min.css","vendors/tinymce/skins/ui/oxide-dark/skin.shadowdom.css","vendors/tinymce/skins/ui/oxide-dark/skin.shadowdom.min.css","vendors/tinymce/skins/ui/tinymce-5/content.css","vendors/tinymce/skins/ui/tinymce-5/content.inline.css","vendors/tinymce/skins/ui/tinymce-5/content.inline.min.css","vendors/tinymce/skins/ui/tinymce-5/content.min.css","vendors/tinymce/skins/ui/tinymce-5/skin.css","vendors/tinymce/skins/ui/tinymce-5/skin.min.css","vendors/tinymce/skins/ui/tinymce-5/skin.shadowdom.css","vendors/tinymce/skins/ui/tinymce-5/skin.shadowdom.min.css","vendors/tinymce/skins/ui/tinymce-5-dark/content.css","vendors/tinymce/skins/ui/tinymce-5-dark/content.inline.css","vendors/tinymce/skins/ui/tinymce-5-dark/content.inline.min.css","vendors/tinymce/skins/ui/tinymce-5-dark/content.min.css","vendors/tinymce/skins/ui/tinymce-5-dark/skin.css","vendors/tinymce/skins/ui/tinymce-5-dark/skin.min.css","vendors/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.css","vendors/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.min.css","vendors/tinymce/themes/silver/index.js","vendors/tinymce/themes/silver/theme.js","vendors/tinymce/themes/silver/theme.min.js","vendors/tinymce/tinymce.d.ts","vendors/tinymce/tinymce.js","vendors/tinymce/tinymce.min.js"]),
	mimeTypes: {".css":"text/css",".map":"application/json",".json":"application/json",".png":"image/png",".jpg":"image/jpeg",".xml":"application/xml",".webmanifest":"application/manifest+json",".svg":"image/svg+xml",".webp":"image/webp",".js":"application/javascript",".txt":"text/plain",".md":"text/markdown",".ts":"video/mp2t"},
	_: {
		client: {"start":"_app/immutable/entry/start.21bfef7a.js","app":"_app/immutable/entry/app.0cd32a1b.js","imports":["_app/immutable/entry/start.21bfef7a.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/singletons.d1582c97.js","_app/immutable/chunks/index.8a6022c3.js","_app/immutable/chunks/paths.ac76c62c.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.0cd32a1b.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.5decb053.js","_app/immutable/chunks/index.570d5097.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-bafe68eb.js')),
			__memo(() => import('./chunks/1-9b2e1cdf.js')),
			__memo(() => import('./chunks/2-7bfdb7b2.js')),
			__memo(() => import('./chunks/3-bf110a1f.js')),
			__memo(() => import('./chunks/4-5a611727.js')),
			__memo(() => import('./chunks/5-4f68a03e.js')),
			__memo(() => import('./chunks/6-24442ef7.js')),
			__memo(() => import('./chunks/7-cdf600ab.js')),
			__memo(() => import('./chunks/8-51a3cb5f.js')),
			__memo(() => import('./chunks/9-a2041855.js')),
			__memo(() => import('./chunks/10-e4f759e1.js')),
			__memo(() => import('./chunks/11-fad1c772.js')),
			__memo(() => import('./chunks/12-83414ac0.js')),
			__memo(() => import('./chunks/13-8b1d57ae.js')),
			__memo(() => import('./chunks/14-82dded53.js')),
			__memo(() => import('./chunks/15-b18f1a4e.js')),
			__memo(() => import('./chunks/16-0e62c182.js')),
			__memo(() => import('./chunks/17-aa4fccef.js')),
			__memo(() => import('./chunks/18-85cec52f.js')),
			__memo(() => import('./chunks/19-93985670.js')),
			__memo(() => import('./chunks/20-b3ec568e.js')),
			__memo(() => import('./chunks/21-04d5b23e.js')),
			__memo(() => import('./chunks/22-1f8972c7.js')),
			__memo(() => import('./chunks/23-fee77e8c.js')),
			__memo(() => import('./chunks/24-5945d90f.js')),
			__memo(() => import('./chunks/25-6abc9fb8.js')),
			__memo(() => import('./chunks/26-9da4f958.js')),
			__memo(() => import('./chunks/27-283765e0.js')),
			__memo(() => import('./chunks/28-999e8252.js')),
			__memo(() => import('./chunks/29-e71565d9.js')),
			__memo(() => import('./chunks/30-822de170.js')),
			__memo(() => import('./chunks/31-bea1f9cb.js')),
			__memo(() => import('./chunks/32-0fb9c3be.js')),
			__memo(() => import('./chunks/33-b8bac1fe.js')),
			__memo(() => import('./chunks/34-f2040b26.js')),
			__memo(() => import('./chunks/35-08cdf3bf.js')),
			__memo(() => import('./chunks/36-8c292233.js')),
			__memo(() => import('./chunks/37-f386d8af.js')),
			__memo(() => import('./chunks/38-611ef131.js')),
			__memo(() => import('./chunks/39-5c251447.js')),
			__memo(() => import('./chunks/40-244e0d8c.js')),
			__memo(() => import('./chunks/41-854fa6cd.js')),
			__memo(() => import('./chunks/42-7d96ea13.js')),
			__memo(() => import('./chunks/43-39abd403.js')),
			__memo(() => import('./chunks/44-83676535.js')),
			__memo(() => import('./chunks/45-ed8e96aa.js')),
			__memo(() => import('./chunks/46-bc5a77b4.js')),
			__memo(() => import('./chunks/47-09c0ed8f.js'))
		],
		routes: [
			{
				id: "/[lang]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/casino/bonuses",
				pattern: /^\/([^/]+?)\/casino\/bonuses\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/casino/bonuses/stat",
				pattern: /^\/([^/]+?)\/casino\/bonuses\/stat\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/casino/bonuses/tiers",
				pattern: /^\/([^/]+?)\/casino\/bonuses\/tiers\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/casino/events/edit/[[id]]",
				pattern: /^\/([^/]+?)\/casino\/events\/edit(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/casino/events/list",
				pattern: /^\/([^/]+?)\/casino\/events\/list\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/dashboard",
				pattern: /^\/([^/]+?)\/dashboard\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/dev/casinos",
				pattern: /^\/([^/]+?)\/dev\/casinos\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/dev/casinos/edit/[[id]]",
				pattern: /^\/([^/]+?)\/dev\/casinos\/edit(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/dev/currencies/edit/[[id]]",
				pattern: /^\/([^/]+?)\/dev\/currencies\/edit(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/dev/currencies/list",
				pattern: /^\/([^/]+?)\/dev\/currencies\/list\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/dev/games/edit/[[id]]",
				pattern: /^\/([^/]+?)\/dev\/games\/edit(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/dev/games/list",
				pattern: /^\/([^/]+?)\/dev\/games\/list\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/dev/users/add",
				pattern: /^\/([^/]+?)\/dev\/users\/add\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/finances/payments/providers/edit/[[id]]",
				pattern: /^\/([^/]+?)\/finances\/payments\/providers\/edit(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/finances/payments/providers/list",
				pattern: /^\/([^/]+?)\/finances\/payments\/providers\/list\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/finances/withdraws/providers/edit/[[id]]",
				pattern: /^\/([^/]+?)\/finances\/withdraws\/providers\/edit(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/finances/withdraws/providers/list",
				pattern: /^\/([^/]+?)\/finances\/withdraws\/providers\/list\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/games/apis/edit/[[id]]",
				pattern: /^\/([^/]+?)\/games\/apis\/edit(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/games/apis/list",
				pattern: /^\/([^/]+?)\/games\/apis\/list\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/games/categories/edit/[[id]]",
				pattern: /^\/([^/]+?)\/games\/categories\/edit(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/games/categories/list",
				pattern: /^\/([^/]+?)\/games\/categories\/list\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/games/categories/sort/[[id]]",
				pattern: /^\/([^/]+?)\/games\/categories\/sort(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/games/edit/[[id]]",
				pattern: /^\/([^/]+?)\/games\/edit(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/games/list",
				pattern: /^\/([^/]+?)\/games\/list\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/games/providers/edit/[[id]]",
				pattern: /^\/([^/]+?)\/games\/providers\/edit(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/games/providers/list",
				pattern: /^\/([^/]+?)\/games\/providers\/list\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/games/providers/sort/[[id]]",
				pattern: /^\/([^/]+?)\/games\/providers\/sort(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/[lang]/login/[key]",
				pattern: /^\/([^/]+?)\/login\/([^/]+?)\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"key","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/[lang]/logout",
				pattern: /^\/([^/]+?)\/logout\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/plugins/email",
				pattern: /^\/([^/]+?)\/plugins\/email\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/plugins/email/edit/[[id]]",
				pattern: /^\/([^/]+?)\/plugins\/email\/edit(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/plugins/slider/edit/[[id]]",
				pattern: /^\/([^/]+?)\/plugins\/slider\/edit(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/plugins/slider/list",
				pattern: /^\/([^/]+?)\/plugins\/slider\/list\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/profile",
				pattern: /^\/([^/]+?)\/profile\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/settings/apis",
				pattern: /^\/([^/]+?)\/settings\/apis\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/settings/auth",
				pattern: /^\/([^/]+?)\/settings\/auth\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/settings/bots",
				pattern: /^\/([^/]+?)\/settings\/bots\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/settings/finances",
				pattern: /^\/([^/]+?)\/settings\/finances\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/settings/general",
				pattern: /^\/([^/]+?)\/settings\/general\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/settings/notifications",
				pattern: /^\/([^/]+?)\/settings\/notifications\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/settings/verification",
				pattern: /^\/([^/]+?)\/settings\/verification\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/users/bots/edit/[[id]]",
				pattern: /^\/([^/]+?)\/users\/bots\/edit(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/[lang]/(protected)/users/bots/list",
				pattern: /^\/([^/]+?)\/users\/bots\/list\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 45 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
