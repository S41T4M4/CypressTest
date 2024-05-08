const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 60000,
    baseUrl: "https://app-qas.conciliadora.com.br/",
    
    setupNodeEvents(on, config) {
      
    },
  },
});
