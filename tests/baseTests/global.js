const supertest = require('supertest')
const { expect } = require("chai");
const { url } = require('../../config')
const allureMocha = require("allure-mocha/runtime");
const faker = require('faker')

global.request = supertest(url)
global.expect = expect
global.allureMocha = allureMocha
global.faker = faker