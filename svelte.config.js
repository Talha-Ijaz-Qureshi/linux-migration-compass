import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
      		assets: 'build',
      		fallback: 'index.html'
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to non-existent page (used to generate 404)
				if (path === '/not-found') return;
				
				// otherwise fail the build
				throw new Error(message);
			}
		}
	}
};

export default config;
