const supertest = require('supertest')
const { url } = require('../../config')
const chai = require('chai')
chai.use(require('dirty-chai')) // use dirty-chai to avoid eslint errors

global.expect = chai.expect
global.request = supertest(url)
global.allure = require('allure-mocha/runtime').allure
global.faker = require('faker')