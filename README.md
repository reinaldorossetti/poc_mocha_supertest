# Mocha e Supertest - POC

** Exemplo de estrutura de automação de testes de API, feita com Mocha, Chai, SuperTest e Allure-Mocha. 
Mocha fornece a execução dos testes e a forma que o mesmo é descrito, o Chai irá fornecer os asserts no formato style BDD, parecido com o Postman, e Allure fornece o relatório dos testes. **

Report allure: (https://reinaldorossetti.github.io/poc_mocha_supertest/allure-report/#)  <br>
Report mochawesome: (https://reinaldorossetti.github.io/poc_mocha_supertest/report/#)  <br>

- [Instalação e execução](#instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Clonando o repositório](#clonando-o-repositório)
- [Testes de API](#testes-de-api)
  - [Pré-requisito](#pré-requisito)
  - [Executando os testes](#executando-os-testes)
  - [Resultado](#resultado)
- [Sobre o projeto](#sobre-o-projeto)
  - [Dependências utilizadas](#dependências-utilizadas)
  - [Estrutura de diretórios](#estrutura-de-diretórios)
  - [Ambiente](#ambiente)
- [Lint](#lint)

---

## Instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/download/) e [Node.js](https://nodejs.org/en/download/) instalados.

### Clonando o repositório

Todos os comandos abaixo são feitos no terminal

**Passo 1** - Faça um clone do repositório e acesse o diretório criado pelo clone.

```sh
git https://github.com/reinaldorossetti/poc_mocha_supertest.git 
cd poc_mocha_supertest
```

**Passo 2** - Instale as dependências do projeto:

```sh
npm install
```
### Testes de API

**Passo 3** - Executando o projeto e gerando o Relatório:

Testes de API, todos os direito a Paulo Goncalves, pelo Serverest e esse projeto tem como base inicial o Serverest.

Os testes foram realizados em cima do [Serverest](https://github.com/PauloGoncalvesBH/ServeRest), que fornece rotas REST para fins de estudos.

#### Executando os testes

Caso queira apenas rodar os testes, sem precisar subir ambiente, execute o seguinte comando:

> Os testes serão executados em cima da página [serverest.dev](http://serverest.dev/)

```sh
npm run test.prod
npm run test.local
```
Para exibir o Report (Foi utilizado o Allure Report):
```sh
npm run report
```
Para executar os testes localmente (_http://localhost:3000_) é preciso subir o ambiente local utilizando NPM ou Docker. [Verifique aqui como](https://github.com/PauloGoncalvesBH/ServeRest#ambientes-dispon%C3%ADveis). Após isso execute:

```sh
npm test
```

As variáveis por ambiente estão definidos dentro dos arquivos _*.config.js_ em [config/](config).

#### Resultado

O resultado dos testes são apresentados no terminal e em report HTML gerado com [allure-mocha](https://www.npmjs.com/package/allure-mocha).

**Passo 4** - Como funciona a Estrutura do Projeto:

### Dependências utilizadas
| lib | descrição
| --- | ---
| [Supertest](https://www.npmjs.com/package/supertest) | Biblioteca de automação de API
| [Mocha](https://www.npmjs.com/package/mocha) | Estrutura (`describe`, `it`, etc) e runner da automação
| [Chai](https://www.npmjs.com/package/chai)| Asserção em formato de BDD / TDD
| [@hapi/joi](https://www.npmjs.com/package/@hapi/joi) | Biblioteca para criação de schemas
| [Faker](https://www.npmjs.com/package/faker)| Gera dados aleatórios para serem utilizados nos testes
| [Allure-mocha](https://www.npmjs.com/package/allure-mocha)| Gera report HTML
| [Standard](https://www.npmjs.com/package/standard)| Linter e formatter do código JS
| [Cross-env](https://www.npmjs.com/package/cross-env)| Criação de variável de ambiente

As dependências estão definidas no [package.json](./package.json).

### Estrutura de diretórios

```
poc-mocha-supertest/
 ├─ config/
 |   ├─ local.config.js
 |   └─ producao.config.js
 ├─ tests/
 |   ├─ baseTests
 |   ├─ features / Recurso /
 |       ├─ get.test.js
 |       └─ post.test.js
 |   └─ resources/
 ├─ .mocharc.js
 └─ package.json
```

- :file_folder: [config/](config): Dir com as variáveis que dependem do ambiente (ex.: _url, senha, password_)
- :file_folder: [tests/](tests): Dir com os testes das rotas e arquivos que auxiliam a automação.
  - :file_folder: [usuarios/](tests/usuarios) Dir com os testes da rota\recurso\end point _usuarios_. O nome do diretório sempre será o da rota validada.
    - :page_with_curl: [get.test.js](test/usuarios/get.test.js) Arquivo de teste do verbo GET.
  - :file_folder: [baseTests/](tests/baseTests): Dir com todos os métodos consumidos pelos testes.
- :page_with_curl: [.mocharc.js](.mocharc.js): Arquivo de configuração do Mocha.
- :page_with_curl: [package.json](package.json): Arquivo com informações das dependências do projeto, licença, scripts, autor, etc. Para saber mais [clique aqui](https://docs.npmjs.com/files/package.json)

### Ambiente

Determinados testes possuem dados atrelados a ambiente, como URL, que varia entre ambiente local, de homologação, produção, etc. Para isso é utilizada a lib [cross-env](https://www.npmjs.com/package/cross-env) para gerenciar as variáveis de ambientes diferentes.

Caso precisarmos setar password para o ambiente `local`, acesse o arquivo [local.config.js](config/local.config.js) e crie a variável `password` com seu respectivo valor.

``` js
= module.exports = {
+  password: 'SENHA_PRODUCAO_123',
=   url: 'http://localhost:3000'
= }
```

Para consumir essa variável no seu arquivo de teste, importe o dir [config/](config):
``` js
// tests/usuarios/post.test.js

const config = require('../../config')
console.log('Valor de Password:', config.password)
// Valor de Password: SENHA_PRODUCAO_123
```

Para informar em qual ambiente o seu teste irá rodar, informe em `cross-env`, no script de teste, o nome inicial do arquivo de conf.

##### Exemplo:

Para testar o ambiente `hom` deve ser criado o arquivo `hom.config.js` e o comando de execução fica igual a `cross-env AMBIENTE='hom' mocha`

#### Scripts atuais do [package.json](package.json)

``` json
"scripts": {
  "test.local": "cross-env AMBIENTE='local' mocha",
  "test.prod": "cross-env AMBIENTE='producao' mocha"
},
```

## Allure report  
Podemos adicionar variaveis e severidade dos testes para ser exibidos no report.
Tipos de severidade que podemos usar os tipos: blocker, critical, minor, trivial.O tipo normal é padrão, não precisando ser adicionada.
Nos testes precisamos adicionar os comandos abaixos:
````js
    allureMocha.allure.parameter('body', String(response.text))
    allureMocha.allure.severity('minor')
````

## Plugins
Para realizar o Debug do Mocha via VSCODE, utilizamos o Plugin Mocha Side Bar,
precisamos instalar o nyc como pré-requisito, segue os links abaixo:

https://www.npmjs.com/package/nyc
https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar#

** Com isso podemos executar os testes por dentro da IDE, monstrando todo

O plugin abaixo ativa o debug da IDE quando mando o comando via console:
https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug-nightly

## Lint  

É boa prática que os arquivos estejam padronizados, seguindo o padrão de estilo do JS.
Para isso é utilizado a lib [Standard](https://www.npmjs.com/package/standard).

Após o término da sua implementação, execute:

`npm run lint:fix`

##  Validaçãoes dos Testes
As validações foram feitas através do Chai Assertion Library, no formato que ele chama de  BDD style usando o Expect.
The BDD style is exposed through expect or should interfaces. In both scenarios, you chain together natural language assertions.
````JS
var expect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);
````

### Referências:  
[Supertest](https://github.com/ladjs/supertest#readme)   
[Mocha](https://mochajs.org)
[Allure Mocha](https://docs.qameta.io/allure/#_mocha)  
[Chai](https://www.chaijs.com/api/bdd/)  
