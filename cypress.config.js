require('dotenv').config();
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor"); 
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: 'http://zero.webappsecurity.com',
    env: {
      username: process.env.CYPRESS_username,
      password: process.env.CYPRESS_password
    },
    setupNodeEvents(on, config) {
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      preprocessor.addCucumberPreprocessorPlugin(on, config);

      return config;
    },
  },
});
