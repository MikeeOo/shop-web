import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

const isProduction = process.env.NODE_ENV === 'production';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: isProduction ? '/dist/' : '/',
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:8000',
			},
		},
	},
	build: {
		outDir: '../shop-api/public/dist',
		emptyOutDir: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
