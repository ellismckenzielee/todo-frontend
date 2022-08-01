import { sveltekit } from '@sveltejs/kit/vite';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';
dotenv.config();

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		replace({
			// 2 level deep object should be stringify
			process: JSON.stringify({
				env: {
					API_URL: process.env.API_URL || ''
				}
			})
		}),
		sveltekit()
	]
};

export default config;
