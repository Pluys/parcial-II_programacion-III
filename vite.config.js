import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        random: resolve(__dirname, "./src/pages/jsonRandoms/jsonRandoms.html"),
        templates: resolve(
          __dirname,
          "./src/pages/jsonTemplates/jsonTemplates.html"
        ),
        saves: resolve(__dirname, "./src/pages/jsonSaves/jsonSaves.html"),
      },
    },
  },
});
