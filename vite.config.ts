import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// ─────────────────────────────────────────────────────────────
// IMPORTANT — DEPLOYMENT BASE PATH:
// GitHub Pages serves this site from https://<username>.github.io/<repo-name>/
// (a sub-path), while Vercel serves it from the domain root ('/').
// `DEPLOY_TARGET=gh-pages` is set automatically by `npm run predeploy`
// and by the GitHub Actions workflow — you should never need to set
// this by hand. Vercel builds are unaffected and simply use '/'.
// ─────────────────────────────────────────────────────────────
const REPO_NAME = 'portfolio-saikat';
const isGitHubPagesBuild = process.env.DEPLOY_TARGET === 'gh-pages';

export default defineConfig({
  base: isGitHubPagesBuild ? `/${REPO_NAME}/` : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Improves Lighthouse performance score via smaller, cacheable chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
});
