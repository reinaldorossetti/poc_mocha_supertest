"use strict";

module.exports = {
  reporter: "allure-mocha",
  require: ['test/baseTests/global.js'],
  parallel: true,
  jobs: 4,
  timeout: 5000,
  ui: "bdd",
  spec: ["test/features/openweathermap/*.test.js"]
}
