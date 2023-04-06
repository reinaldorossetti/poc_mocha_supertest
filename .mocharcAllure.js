"use strict";

module.exports = {
  reporter: "allure-mocha",
  parallel: false,
  recursive: true,
  require: ['tests/baseTests/global.js'],
  timeout: 5000,
  ui: "bdd",
  spec: ["tests/features/**/*.test.js"]
}
