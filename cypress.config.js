const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.conciliadora.com.br',
    setupNodeEvents(on, config) {
      config.projectId = "ws5913";
      config.experimentalSessionSupport = true;
      console.log(config); // Adicione esta linha para verificar a configuração


      require('cypress-mochawesome-reporter/plugin')(on);
      
      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: true,
      html: true,
      json: true
    },
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 120000,
    responseTimeout: 60000,
    execTimeout: 120000,
    experimentalRunAllSpecs: true,

    
    
  },
  env: {
    requestMode: true,
    snaptshotOnly: true
   
  },

});
