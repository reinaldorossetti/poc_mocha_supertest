const rotaUsuarios = '/usuarios'
const utils = require('../../baseTests/cadastrar')
const allureMocha = require("allure-mocha/runtime");

describe(rotaUsuarios + ' GET', () => {
  it('Query string - Busca por todos as chaves', async () => {
    const usuario = await utils.cadastrarUsuario()
    const { body } = await request.get(rotaUsuarios).query({
      nome: usuario.nome,
      email: usuario.email,
      password: usuario.password,
      administrador: usuario.administrador,
      _id: usuario._id
    }).expect(200)
    allureMocha.allure.severity('critical')
    expect(body).to.deep.equal({
      quantidade: 1,
      usuarios: [
        {
          nome: usuario.nome,
          email: usuario.email,
          password: usuario.password,
          administrador: usuario.administrador,
          _id: usuario._id
        }
      ]
    })
  })

  it('Query string - Nenhum usuário encontrado', async function () {
    const response = await request.get(rotaUsuarios).query({ _id: 'a' }).set('Accept', 'application/json')
    console.log(response.body)
    allureMocha.allure.parameter('body', String(response.text))
    allureMocha.allure.severity('minor')
    expect(response.body).to.deep.equal({ quantidade: 0, usuarios: [] })
  })

  it('Query string - Chave inexistente', async function () {
    const response = await request.get(rotaUsuarios).query({ inexistente: 'a' }).expect(400)
    console.log(response.body)
    allureMocha.allure.parameter('body', response.text)
    expect(response.body).to.deep.equal({ inexistente: 'inexistente não é permitido' })
  })
})

