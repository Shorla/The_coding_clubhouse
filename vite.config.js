import { defineConfig } from 'vite'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'components/*', dest: 'components' },
        { src: 'assets/*', dest: 'assets' },
        { src: 'fonts/*', dest: 'fonts' },
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        programs: resolve(__dirname, 'programs.html'),
      }
    }
  },
  server: {
    open: true,
    watch: {
      usePolling: true,
      ignored: ['!**/dist/**']
    }
  }
})
