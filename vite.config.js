import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.jsx',
      name: 'ReactPageReview',
      fileName: (format) => `react-page-review.${format === 'umd' ? 'umd.cjs' : 'js'}`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // react/jsx-runtime 必须外部化，否则会把构建机上的旧版 jsx-runtime 打进
      // 产物，在 React 19 宿主下读取已移除的 __SECRET_INTERNALS 导致崩溃
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime', 'antd'],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'react/jsx-dev-runtime': 'jsxRuntime',
          antd: 'antd'
        }
      }
    }
  }
})
