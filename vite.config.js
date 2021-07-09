import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


export default ({ mode }) => {
	// require('dotenv').config({ path: `./.env.${mode}` });

	// import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
	// import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

	return defineConfig({
		plugins: [vue()],
		resolve: {
			alias: {
			'@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
			}
		},
		base: './',
		server: {
			port: 4500,
			open: true,
			cors: true,
			fs: {
				// Allow serving files from one level up to the project root
				allow: [
					// './src/lib/statics.js'
				]
			}

			// proxy: {
			//   '/api': {
			//     target: 'http://xxx.xxx.xxx.xxx:x000',
			//     changeOrigin: true,
			//     secure: false,
			//     rewrite: (path) => path.replace('/api/', '/')
			//   }
			// },
		}
	});
}
