import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ro9691',
  e2e: {
    baseUrl: 'https://amazon.com',
    setupNodeEvents(on, config) {
    }
  },
});
