import { defineConfig } from "@playwright/test";

export default defineConfig({
  testIgnore: ['**/*.test.tsx'],
  use: {
    baseURL: "http://localhost:3000", // Make sure this matches your local dev server
    headless: false,
     // Set to true if running tests in CI/CD
  },
});
