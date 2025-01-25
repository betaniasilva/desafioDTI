const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://automationpractice.pl', 
    viewportWidth: 1280, 
    viewportHeight: 720, 
    retries: {
      runMode: 2,
      openMode: 0, 
    },
    defaultCommandTimeout: 10000, 
    responseTimeout: 15000, 
    video: false, 
    env: {
  
      loginPath: '/index.php?controller=authentication&back=my-account',
      dashboardPath: '/index.php?controller=my-account',
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
