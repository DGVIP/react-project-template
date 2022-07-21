/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
   server: { port: 3000 },
   plugins: [react()],
   test: {
      globals: true,
      environment: "jsdom",
   },
   resolve: {
      alias: {
         "@src": path.resolve(__dirname, "./src"),
         "@pages": path.resolve(__dirname, "./src/pages"),
         "@routes": path.resolve(__dirname, "./src/routes"),
         "@shared": path.resolve(__dirname, "./src/shared"),
      },
   },
});
