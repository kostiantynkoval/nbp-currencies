import {GET_CURRENCIES_REQUEST, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_FAIL} from './types'

export const apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/A'

export const requestCurrencies = () => ({
  type: GET_CURRENCIES_REQUEST
})

export const succeedCurrencies = currencies => ({
  type: GET_CURRENCIES_SUCCESS,
  payload: currencies
})

export const failedCurrencies = () => ({
  type: GET_CURRENCIES_FAIL
})

export const fetchAllCurrencies = () => dispatch => {
  dispatch(requestCurrencies())
  return fetch(apiUrl)
    .then(res => res.json())
    .then(res => dispatch(succeedCurrencies(res[0].rates)))
    .catch(err => {
      console.log('Error while fetching data', err)
      dispatch(failedCurrencies())
    })
}