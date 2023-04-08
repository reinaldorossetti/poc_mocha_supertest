"use strict";

module.exports = {
  reporter: "mochawesome",
  parallel: true,
  jobs: 5,
  recursive: true,
  reporterOptions: 'json=true,html=true,reportDir=report,reportFilename=index',
  require: ['test/baseTests/global.js','mochawesome/register'],
  timeout: 5000,
  ui: "bdd",
  spec: ["test/features/**/*.test.js"]
}
