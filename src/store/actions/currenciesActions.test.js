import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {GET_CURRENCIES_REQUEST, GET_CURRENCIES_SUCCESS} from "./types";
import {fetchAllCurrencies, apiUrl} from "./currenciesActions";
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })
  
  const initialState = {
    isLoading: false,
    currenciesList: []
  }
  
  const body =[
    {
      "table":"A",
      "no":"206/A/NBP/2019",
      "effectiveDate":"2019-10-23",
      "rates":[
        {"currency":"bat (Tajlandia)","code":"THB","mid":0.1269},
        {"currency":"dolar amerykański","code":"USD","mid":3.8473},
        {"currency":"dolar australijski","code":"AUD","mid":2.6322},
        {"currency":"dolar Hongkongu","code":"HKD","mid":0.4906},
        {"currency":"dolar kanadyjski","code":"CAD","mid":2.9375},
        {"currency":"dolar nowozelandzki","code":"NZD","mid":2.4629},
        {"currency":"dolar singapurski","code":"SGD","mid":2.8226},
        {"currency":"euro","code":"EUR","mid":4.2778},
        {"currency":"forint (Węgry)","code":"HUF","mid":0.013004},
        {"currency":"frank szwajcarski","code":"CHF","mid":3.8887},
        {"currency":"funt szterling","code":"GBP","mid":4.9449},
        {"currency":"hrywna (Ukraina)","code":"UAH","mid":0.1545},
        {"currency":"jen (Japonia)","code":"JPY","mid":0.0355},
        {"currency":"korona czeska","code":"CZK","mid":0.1672},
        {"currency":"korona duńska","code":"DKK","mid":0.5726},
        {"currency":"korona islandzka","code":"ISK","mid":0.030798},
        {"currency":"korona norweska","code":"NOK","mid":0.4199},
        {"currency":"korona szwedzka","code":"SEK","mid":0.3990}
      ]
    }
  ]
  
  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    fetchMock.getOnce(apiUrl, {
      body,
      headers: { 'content-type': 'application/json' }
    })
    
    const expectedActions = [
      { type: GET_CURRENCIES_REQUEST },
      { type: GET_CURRENCIES_SUCCESS, payload: body[0].rates }
    ]
    const store = mockStore(initialState)
    
    return store.dispatch(fetchAllCurrencies()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})