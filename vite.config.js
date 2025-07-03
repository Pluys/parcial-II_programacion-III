import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        //Yo miré la documentación, pero no tuve suerte lastimosamente.
        //Puede ser porque vengo estando despierto dos dias seguidos con esto
      },
    },
  },
});
