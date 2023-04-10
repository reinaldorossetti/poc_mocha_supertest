describe('Feature Checking the weather', () => {

  const request = supertest('https://api.openweathermap.org')
  
  it('Checking the weather by city', async function() {
    const response = await request.get('/data/2.5/weather?q=Manaus&appid=e2f1d841cc16cff49a0aa18b531d71e0')
    .set({Accept: 'application/json' })

    expect(response.header['content-type']).to.contain('application/json')
    expect(response.status).to.equal(200);
    expect(response.text).to.contain('Manaus');
  })

  it('Checking the weather by id', async function () {
    const response = await request.get('/data/2.5/weather?id=3448439&appid=e2f1d841cc16cff49a0aa18b531d71e0')
    .set({Accept: 'application/json' })
    expect(response.header['content-type']).to.contain('application/json')
    expect(response.status).to.equal(200)
  })

  it('Checking weather by longitude and latitude', async function () {
    const response = await request.get('/data/2.5/weather?lat=-23.5475&lon=-46.6361&appid=e2f1d841cc16cff49a0aa18b531d71e0')
    .set({Accept: 'application/json' })
    expect(response.status).to.equal(200)
  })

  it('Checking weather by zip code', async function () {
    const response = await request.get('/data/2.5/weather?zip=94040%2Cus&appid=e2f1d841cc16cff49a0aa18b531d71e0')
    .set({Accept: 'application/json' })
    expect(response.status).to.equal(200)
  })

  it('Checking weather by not found zip code', async function () {
    const response = await request.get('/data/2.5/weather?zip=040%2Cus&appid=e2f1d841cc16cff49a0aa18b531d71e0')
    .set({Accept: 'application/json' })
    expect(response.status).to.equal(404)
    expect(response.body.message).to.equal("city not found")
  })


  it('Checking cities within a rectangle zone', async function () {
    const response = await request.get('/data/2.5/weather?bbox=12%2C32%2C15%2C37%2C10&appid=e2f1d841cc16cff49a0aa18b531d71e0')
    .set({Accept: 'application/json' })
    expect(response.status).to.equal(404)
    expect(response.body.message).to.equal("Nothing to geocode")
  })

  it('Checking cities in circle', async function() {
    const response = await request.get('/data/2.5//weather?lat=-23.5475&lon=-46.6361&cnt=10&appid=e2f1d841cc16cff49a0aa18b531d71e0')
    .set({Accept: 'application/json' })
    expect(response.status).to.equal(200)
    expect(response.body.coord.lon).to.equal(-46.6361)
    expect(response.body.coord.lat).to.equal("-23.5475 ")
  })

  it('Checking multilingual support', async function() {
    const response = await request.get('/data/2.5/weather?id=3448439&lang=sp&appid=e2f1d841cc16cff49a0aa18b531d71e0')
    .set({Accept: 'application/json' })
    expect(response.status).to.equal(200)
    expect(response.body.sys.country).to.contain("BR")
    expect(response.body.name).to.equal("São Paulo")
  })

  it('Checking Call back functionfully', async function () {
    const response = await request.get('/data/2.5/weather?q=S%C3%A3o+Paulo&appid=e2f1d841cc16cff49a0aa18b531d71e0')
    .set({Accept: 'application/json' })
    expect(response.status).to.equal(200)
    expect(response.body.name).to.contain("São Paulo")
  })

  it('Checking Units of measurement - For temperature in Fahrenheit use units=imperial', async function () {
    const response = await request.get('/data/2.5/weather?q=S%C3%A3o+Paulo&units=imperial&appid=e2f1d841cc16cff49a0aa18b531d71e0')
    .set({Accept: 'application/json' })
      expect(response.status).to.equal(200)
      expect(response.body.sys.country).to.contain("BR")
      expect(response.body.name).to.equal("São Paulo")
  })

  it('Checking Units of measurement - For temperature in Celsius use units=metric', async function () {
    const response = await request.get('/data/2.5/weather?q=S%C3%A3o+Paulo&units=metric&appid=e2f1d841cc16cff49a0aa18b531d71e0')
    .set({Accept: 'application/json' })
    expect(response.status).to.equal(200)
    expect(response.body.sys.country).to.contain("BR")
    expect(response.body.name).to.equal("São Paulo")
  })

  it('Checking Units of measurement - For temperature in Kelvin use units=standard', async function () {
    const response = await request.get('/data/2.5/weather?q=S%C3%A3o+Paulo&units=standard&appid=e2f1d841cc16cff49a0aa18b531d71e0')
    .set({Accept: 'application/json' })
    expect(response.status).to.equal(200)
    expect(response.body.sys.country).to.contain("BR")
    expect(response.body.name).to.equal("São Paulo")
  })

})
