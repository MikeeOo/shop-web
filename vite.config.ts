import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/dist/',
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
});
