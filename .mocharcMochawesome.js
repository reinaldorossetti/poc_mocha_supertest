"use strict";

module.exports = {
  reporter: "mochawesome",
  require: ['test/baseTests/global.js'],
  // parallel: true,
  // jobs: 4,
  reporterOptions: 'json=false,reportDir=report,reportFilename=index',
  timeout: 3000,
  ui: "bdd",
  quiet: true,
  spec: ["test/features/openweathermap/*.test.js"]
}
