import {GET_CURRENCIES_REQUEST, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_FAIL} from './types'

const apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/A'

const requestCurrencies = () => ({
  type: GET_CURRENCIES_REQUEST
})

const succeedCurrencies = currencies => ({
  type: GET_CURRENCIES_SUCCESS,
  payload: currencies
})

const failedCurrencies = () => ({
  type: GET_CURRENCIES_FAIL
})

export const fetchAllCurrencies = () => dispatch => {
  dispatch(requestCurrencies())
  setTimeout(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(res => dispatch(succeedCurrencies(res[0].rates)))
      .catch(err => {
        console.log('Error while fetching data', err)
        dispatch(failedCurrencies())
      })
  }, 2000)
}