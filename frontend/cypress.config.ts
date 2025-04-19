// frontend/cypress.config.ts
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Default Next.js port, matches our test setup
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Finds our .cy.ts file
    supportFile: 'cypress/support/e2e.ts', // Standard support file location
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed in the future
    },
  },
  // Viewport settings can be useful for responsive testing
  // viewportWidth: 1280,
  // viewportHeight: 720,
});
