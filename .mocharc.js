module.exports = {
  reporter: "allure-mocha",
  //reporterOptions: 'json=false,reportDir=report,reportFilename=automacao-api',
  require: 'tests/baseTests/global.js',
  timeout: 5000,
  parallel: false,
  jobs: 4,
  ui: "bdd",
  spec: ["tests/features/**/*.test.js"]
}
