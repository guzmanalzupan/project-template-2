import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: resolve(__dirname, "src/"),
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                home: resolve(__dirname, "src/index.html"),
                about: resolve(__dirname, "src/about/index.html"),
                blog: resolve(__dirname, "src/blog/index.html")
            }
        }
    }
})