import currenciesReducer from "./currenciesReducer";
import {succeedCurrencies, failedCurrencies, requestCurrencies} from "../actions/currenciesActions";

describe('Currencies Reducer Testing', () => {
  describe('succeedCurrencies reducer testing', () => {
    const initialState = {
      isLoading: false,
      currenciesList: []
    }
    const fetchedCurrencies = [
      {
        currency: "bat (Tajlandia)",
        code: "THB",
        mid: 0.1269
      },
      {
        currency: "dolar amerykański",
        code: "USD",
        mid: 3.8473
      },
      {
        currency: "dolar australijski",
        code: "AUD",
        mid: 2.6322
      },
    ]
    const action = succeedCurrencies(fetchedCurrencies)
    const newState = currenciesReducer(initialState, action)
  
    test('fetched currencies length should be 3 items', () => {
      expect(newState.currenciesList.length).toEqual(3)
    });
  
    test('first currency mid equals 0.1269', () => {
      expect(newState.currenciesList[0].mid).toEqual(0.1269)
    });
  
    test('second currency code equals USD', () => {
      expect(newState.currenciesList[1].code).toEqual('USD')
    });
  
    test('third currency name should be dolar australijski', () => {
      expect(newState.currenciesList[2].currency).toEqual('dolar australijski')
    });
  
    test('isLoading should be false', () => {
      expect(newState.isLoading).toEqual(false)
    });
  })
  
  describe('requestCurrencies action testing', () => {
    const state = {
      isLoading: false,
      currenciesList: [
        {
          currency: "bat (Tajlandia)",
          code: "THB",
          mid: 0.1269
        },
        {
          currency: "dolar amerykański",
          code: "USD",
          mid: 3.8473
        },
        {
          currency: "dolar australijski",
          code: "AUD",
          mid: 2.6322
        }
      ]
    }
  
    const action = requestCurrencies()
    const newState = currenciesReducer(state, action)
  
    test('third currency name should be dolar australijski', () => {
      expect(newState.currenciesList[2].currency).toEqual('dolar australijski')
    });
  
    test('fetched currencies should not have been changed', () => {
      expect(newState.currenciesList.length).toEqual(3)
      expect(newState.currenciesList).toEqual(state.currenciesList)
    });
  
    test('isLoading should be true', () => {
      expect(newState.isLoading).toEqual(true)
    });
  })
  
  describe('failedCurrencies action testing', () => {
    const state = {
      isLoading: false,
      currenciesList: [
        {
          currency: "bat (Tajlandia)",
          code: "THB",
          mid: 0.1269
        },
        {
          currency: "dolar amerykański",
          code: "USD",
          mid: 3.8473
        },
        {
          currency: "dolar australijski",
          code: "AUD",
          mid: 2.6322
        }
      ]
    }
    
    const action = failedCurrencies()
    const newState = currenciesReducer(state, action)
    
    test('fetched currencies should not have been changed', () => {
      expect(newState.currenciesList.length).toEqual(3)
      expect(newState.currenciesList).toEqual(state.currenciesList)
    });
    
    test('isLoading should be false', () => {
      expect(newState.isLoading).toEqual(false)
    });
  })
})