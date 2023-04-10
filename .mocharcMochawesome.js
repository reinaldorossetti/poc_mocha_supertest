"use strict";

module.exports = {
  reporter: "mochawesome",
  parallel: true,
  jobs: 4,
  reporterOptions: 'json=false,html=true,reportDir=report,reportFilename=index',
  require: ['test/baseTests/global.js'],
  timeout: 3000,
  ui: "bdd",
  quiet: true,
  spec: ["test/features/openweathermap/*.test.js"]
}
