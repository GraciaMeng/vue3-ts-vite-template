import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': 'src',
      'views': '@/views',
      'components': '@/components',
      'content': 'components/content',
      'common': 'components/common',
      'assets': '@/assets',
      'api': '@/api',
      'utils': '@/utils',
      'store': '@/store',
      'hooks': '@/hooks',
    },
  },
  server: {
    proxy: {
      '/api': {
        // 自定义
        target: '', // 这里可以跟随项目实际部署服务器来
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
