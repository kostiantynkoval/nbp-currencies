import {SET_ACTIVE_SCREEN} from '../actions/types'
import {ALL_CURRENCIES_SCREEN} from '../constants'

const initialState = {
  activeScreen: ALL_CURRENCIES_SCREEN
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_SCREEN:
      return {
        ...state,
        activeScreen: action.payload
      }
    default:
      return state
  }
}