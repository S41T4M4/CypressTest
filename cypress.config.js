const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    "defaultCommandTimeout": 120000,
    setupNodeEvents(on, config) {
     
    },
  },
});
