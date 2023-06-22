import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import postcssNesting from 'postcss-nesting';
import postcssCustomMedia from 'postcss-custom-media';
import atImport from 'postcss-import';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), eslintPlugin()],
	css: {
		postcss: {
			plugins: [postcssNesting, postcssCustomMedia, atImport],
		},
	},
});
