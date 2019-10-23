import {combineReducers} from 'redux'
import currenciesReducer from "./currenciesReducer";
import screenReducer from "./screenReducer";
import favoritesReducer from './favoritesReducer'

export default combineReducers({
  CurrenciesData: currenciesReducer,
  ActiveScreenData: screenReducer,
  FavoritesData: favoritesReducer,
})