require('../../baseTests/global.js')

describe('Feature Checking the weather', () => {

  const url = 'https://api.openweathermap.org'
  
  it('Checking the weather by city', async function() {
    const response = await supertest(url).get('/data/2.5/weather?q=Manaus&appid=e2f1d841cc16cff49a0aa18b531d71e0')
    .set({Accept: 'application/json' })

    expect(response.header['content-type']).to.contain('application/json')
    expect(response.status).to.equal(200);
    expect(response.text).to.contain('Manaus');
  })
})
