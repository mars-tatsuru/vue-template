import { fileURLToPath, URL } from 'node:url'

import { unheadVueComposablesImports } from '@unhead/vue'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({

  // plugins
  plugins: [
    vue(),

    vueDevTools(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-i18n',
        '@vueuse/core',
        'vue-router',
        unheadVueComposablesImports,
        // TODO: Think need or not
        // {
        //   // add any other imports you were relying on
        //   'vue-router/auto': ['useLink'],
        // },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
      resolvers: [
        IconsResolver(),
      ],
    }),

    // https://github.com/unplugin/unplugin-icons
    Icons(
      {
        autoInstall: true,
      },
    ),
  ],

  // css for shadcn https://www.shadcn-vue.com/docs/installation/vite.html
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },

  // alias
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
