const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    "defaultCommandTimeout": 18000,
    
    setupNodeEvents(on, config) {
     
    },
  },
});
