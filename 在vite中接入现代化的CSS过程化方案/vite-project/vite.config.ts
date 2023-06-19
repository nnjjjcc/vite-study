import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { normalizePath } from 'vite';
import path from 'path';
// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.scss'))
//通过 path.resolve('./src/variable.scss') 解析了一个相对路径，然后使用 normalizePath 处理路径，将其转换为规范化的路径。该路径指向了一个名为 ‘variable.scss’ 的文件。



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // css 相关的配置
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    }
  }

})
//自动引入配置方案