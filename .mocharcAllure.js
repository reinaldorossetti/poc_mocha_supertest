"use strict";

module.exports = {
  reporter: "allure-mocha",
  require: ['test/baseTests/global.js'],
  timeout: 5000,
  ui: "bdd",
  spec: ["test/features/**/*.test.js"]
}
