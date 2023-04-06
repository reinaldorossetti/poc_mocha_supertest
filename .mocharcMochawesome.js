"use strict";

module.exports = {
  reporter: "mochawesome",
  parallel: true,
  jobs: 5,
  recursive: true,
  reporterOptions: 'json=false,html=true,reportDir=report,reportFilename=index',
  require: ['tests/baseTests/global.js','mochawesome/register'],
  timeout: 5000,
  ui: "bdd",
  spec: ["tests/features/**/*.test.js"]
}
