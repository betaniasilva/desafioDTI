const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile:false,
    baseUrl: 'http://automationpractice.pl', 
    viewportWidth: 1280,
    viewportHeight: 720,
    env: {
      loginPath: '/index.php?controller=authentication&back=my-account',
      dashboardPath: '/index.php?controller=my-account',
      passwordRecoveryPath: '/index.php?controller=password',
    },
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 2, 
      openMode: 0, 
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
