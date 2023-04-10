"use strict";

module.exports = {
  reporter: "mochawesome",
  parallel: true,
  jobs: 4,
  reporterOptions: 'json=false,html=true,reportDir=report,reportFilename=index',
  require: ['test/baseTests/global.js'],
  timeout: 5000,
  ui: "bdd",
  spec: ["test/features/openweathermap/*.test.js"]
}
