import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/dmiher-uat',
  // base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './index.html',
    },
  },
  server: {
    historyApiFallback: true,
  },
});

// export default defineConfig({
//   base: '/dmiher-web',
//   plugins: [react(), tailwindcss()],
//   server: {
//     historyApiFallback: true
//   }
// });

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   base: '/dmiher-newsite/duat/dhmr-web/dist',
//   plugins: [react(), tailwindcss()],
//   server: {
//     historyApiFallback: true
//   }
// });

// export default defineConfig({
//   base: '/',
//   plugins: [react(), tailwindcss()],
//   build: {
//     outDir: 'dist',
//     emptyOutDir: true,
//     rollupOptions: {
//       input: './index.html',
//     },
//   },
//   server: {
//     historyApiFallback: true,
//   },
// });
