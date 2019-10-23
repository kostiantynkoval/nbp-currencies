import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from "../actions/types";

export const addToFavorites = code => ({
  type: ADD_TO_FAVORITES,
  payload: code
})

export const removeFromFavorites = code => ({
  type: REMOVE_FROM_FAVORITES,
  payload: code
})