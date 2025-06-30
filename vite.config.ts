import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    analyzer({
      analyzerMode: "json",
      defaultSizes: "gzip",
      fileName: "stats.json",
    }),
    {
      name: "storybook-docs-handler",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Verificar se a requisição é para /docs
          if (req.url?.startsWith("/docs")) {
            const docsPath = path.join(__dirname, "public/docs");

            // Verificar se o diretório docs existe
            if (fs.existsSync(docsPath)) {
              // Remover /docs do início da URL para obter o caminho relativo
              const relativePath =
                req.url.replace(/^\/docs/, "") || "/index.html";
              const filePath = path.join(docsPath, relativePath);

              // Verificar se o arquivo existe
              if (fs.existsSync(filePath)) {
                // Servir o arquivo diretamente
                const content = fs.readFileSync(filePath);
                const contentType = getContentType(filePath);
                res.setHeader("Content-Type", contentType);
                res.end(content);
                return;
              }
            }
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    emptyOutDir: true,
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          query: ["@tanstack/react-query"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-tabs",
            "@radix-ui/react-accordion",
            "@radix-ui/react-label",
            "@radix-ui/react-slot",
          ],
          router: ["react-router"],
          icons: ["react-icons", "lucide-react"],
          i18n: [
            "i18next",
            "react-i18next",
            "i18next-browser-languagedetector",
          ],
          utils: [
            "axios",
            "clsx",
            "tailwind-merge",
            "class-variance-authority",
          ],
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId
                .split("/")
                .pop()
                ?.replace(".tsx", "")
                .replace(".ts", "")
            : "chunk";
          return `js/${facadeModuleId}-[hash].js`;
        },
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (/\.(css)$/.test(assetInfo.name || "")) {
            return "css/[name]-[hash].[ext]";
          }
          if (
            /\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || "")
          ) {
            return "images/[name]-[hash].[ext]";
          }
          return "assets/[name]-[hash].[ext]";
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
  },
  server: {
    hmr: {
      overlay: false,
    },
    port: 5174,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@tanstack/react-query",
      "react-router",
      "axios",
      "i18next",
      "react-i18next",
    ],
    exclude: ["@tanstack/react-virtual"],
  },
});

// Função auxiliar para determinar o tipo de conteúdo com base na extensão do arquivo
function getContentType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  const contentTypes: Record<string, string> = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
  };

  return contentTypes[ext] || "text/plain";
}
