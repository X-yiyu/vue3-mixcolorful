import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    plugins: [vue()],
    server: {
      host: "localhost",
      port: 3333,
      open: true,
      strictPort: false,
      https: false

      // 反向代理
      // proxy: {
      //   '/admin': {
      //     target: 'http://api.vite-admin.com',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/admin/, '')
      //   },
      // }

      // proxy: {
      //   // string shorthand
      //   '/foo': 'http://localhost:4567/foo',
      //   // with options
      //   '/api': {
      //     target: 'http://jsonplaceholder.typicode.com',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   },
      //   // with RegEx
      //   '^/fallback/.*': {
      //     target: 'http://jsonplaceholder.typicode.com',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/fallback/, '')
      //   }
      // }
    },
    //生产模式打包配置
    build: {
      outDir: "dist/" + env.VITE_APP_ENV + "_dist" //Specify the output directory (relative to project root).
    }
  };
});
