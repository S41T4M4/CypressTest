const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      experimentalSessionSupport: true,
      require('cypress-mochawesome-reporter/plugin')(on);
      
      
      return config;
    },
    baseUrl: 'https://app.conciliadora.com.br/',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 120000,
    responseTimeout: 60000,
    execTimeout: 120000
  }
});