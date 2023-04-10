const supertest = require('supertest')
const { url } = require('../../config')
const chai = require('chai')


global.request = supertest(url)
global.supertest = supertest
global.expect = chai.expect
global.faker = require('faker')
