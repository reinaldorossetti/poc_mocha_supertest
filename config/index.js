const AMB =process.env.AMBIENTE

if (AMB) {
    module.exports = require(`./${AMB}.config.js`)
} else {
    module.exports = require(`./producao.config.js`)
}
