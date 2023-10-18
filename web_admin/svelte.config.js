import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // prerender: {
    //     default: true,
    // },
	kit: {
        // prerender: {
        //     default: true,
        // },
		adapter: adapter({
			// fallback: '200.html' // may differ from host to host
		})
        // hooks: 'src/hooks',
	}
};

export default config;