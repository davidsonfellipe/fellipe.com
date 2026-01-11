const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: `http://localhost:3000`,
    specPattern: `cypress/e2e`,
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
});