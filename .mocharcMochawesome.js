"use strict";

module.exports = {
  reporter: "mochawesome",
  parallel: true,
  jobs: 5,
  recursive: true,
  reporterOptions: 'json=false,reportDir=report,reportFilename=index',
  require: ['tests/baseTests/global.js'],
  timeout: 5000,
  ui: "bdd",
  spec: ["tests/features/**/*.test.js"]
}
