const supertest = require('supertest')
const { url } = require('../../config')
const chai = require('chai')
chai.use(require('dirty-chai')) // use dirty-chai to avoid eslint errors
const allureMocha = require("allure-mocha/runtime");

global.request = supertest(url)
global.expect = chai.expect
global.allureMocha = allureMocha
global.faker = require('faker')
