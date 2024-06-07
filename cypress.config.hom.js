const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://intranet-hom.conciliadora.com.br/',
    setupNodeEvents(on, config) {
      config.projectId = "ws5913";
      config.experimentalSessionSupport = true;

      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },
    defaultCommandTimeout: 40000,
    pageLoadTimeout: 120000,
    responseTimeout: 60000,
    execTimeout: 120000
  },
  env: {
    username: 'testesautomatizados@conciliadora.com.br',
    password: 'Teste123'
  }
});
