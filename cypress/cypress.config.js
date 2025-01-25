const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://automationpractice.pl',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
  },
});
