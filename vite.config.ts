import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      //按需自动引入svg组件
      resolvers: [
        IconsResolver({
          //消除前缀  默认的前缀是 i
          prefix: false, // <--
          // this is optional, default enabling all the collections supported by Iconify
          //注意要报取消前缀的图标对应的图标集ID添加至下方，否则不生效
          //只要是取消了前缀，之前的使用方式也不生效，除非手动引入
          enabledCollections: ['ep']
        })
      ]
    }),

    Icons({
      /* 自动下载图标集 */
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
