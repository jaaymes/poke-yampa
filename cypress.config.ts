import { defineConfig } from "cypress";

const config = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    baseUrl: "https://poke-yampa.vercel.app/",
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
export default config;
