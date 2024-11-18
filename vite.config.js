import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory (default is 'dist')
    assetsDir: 'assets', // Subdirectory for assets (default is 'assets')
  },
  base: './', // Ensures assets are relative, useful for static file hosting
});
