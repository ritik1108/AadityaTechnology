import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        products: resolve(__dirname, 'products.html'),
        projects: resolve(__dirname, 'projects.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        blog: resolve(__dirname, 'blog.html'),
        careers: resolve(__dirname, 'careers.html'),
        contact: resolve(__dirname, 'contact.html'),
        industries: resolve(__dirname, 'industries.html'),
        'smart-city': resolve(__dirname, 'smart-city.html'),
        'traffic-management': resolve(__dirname, 'traffic-management.html'),
        cctv: resolve(__dirname, 'cctv.html'),
        'road-safety': resolve(__dirname, 'road-safety.html'),
      },
    },
  },
});
