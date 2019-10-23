import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from "../actions/types";

const initialState = {
  favoriteCodes: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const favoriteCodes = [...state.favoriteCodes]
      favoriteCodes.push(action.payload)
      return {
        ...state,
        favoriteCodes,
      }
    case REMOVE_FROM_FAVORITES:
      const newFavoriteCodes = [...state.favoriteCodes]
      const index = newFavoriteCodes.indexOf(action.payload)
      newFavoriteCodes.splice(index,1)
      return {
        ...state,
        favoriteCodes: newFavoriteCodes
      }
    default:
      return state
  }
}