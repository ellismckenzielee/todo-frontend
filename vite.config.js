import { sveltekit } from '@sveltejs/kit/vite';
import replace from '@rollup/plugin-replace';
/** @type {import('vite').UserConfig} */
import dotenv from 'dotenv';
dotenv.config();
const config = {
	plugins: [sveltekit()]
};

export default config;
