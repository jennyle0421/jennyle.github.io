import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Vite configuration for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/jennyle.github.io/', // <-- Replace with your repo name if different
});
