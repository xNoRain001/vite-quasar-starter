import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { 
    alias: { '@': path.resolve(__dirname, 'src') }},
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar({ sassVariables: 'src/quasar-variables.sass' }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    })
  ]
})