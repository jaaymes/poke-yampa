import { defineConfig } from "cypress";

const config = defineConfig({
  e2e: {
    supportFile: false,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:5174",
    video: false,
    screenshotOnRunFailure: true,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});

export default config;
