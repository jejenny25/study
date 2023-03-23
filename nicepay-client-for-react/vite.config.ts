import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

const projectRootDir = path.resolve(__dirname)
const resolve = (p: string) => path.resolve(projectRootDir, p)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('src'),
      },
    ],
  },
  plugins: [react()],
})
