import {GET_CURRENCIES_REQUEST, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_FAIL} from '../actions/types'

const initialState = {
  isLoading: false,
  currenciesList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCIES_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currenciesList: action.payload
      }
    case GET_CURRENCIES_FAIL:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}