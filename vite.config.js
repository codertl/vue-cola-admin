import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 安装这个插件可以让svg文件当组件一样引入使用
import svgLoader from 'vite-svg-loader'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: { '@': resolve(__dirname, './src') }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
