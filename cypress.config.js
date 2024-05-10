const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 60000,
    baseUrl: "https://app.conciliadora.com.br/",
    
    setupNodeEvents(on, config) {
      
    },
  },
});
