import {SET_ACTIVE_SCREEN} from './types'

export const setActiveScreen = screen => ({
  type: SET_ACTIVE_SCREEN,
  payload: screen
})