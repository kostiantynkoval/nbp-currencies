import {combineReducers} from 'redux'
import currenciesReducer from "./currenciesReducer";
import screenReducer from "./screenReducer";

export default combineReducers({
  CurrenciesData: currenciesReducer,
  ActiveScreenData: screenReducer,
})