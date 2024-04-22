const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    "defaultCommandTimeout": 14000,
    setupNodeEvents(on, config) {
     
    },
  },
});
