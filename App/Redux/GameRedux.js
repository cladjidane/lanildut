import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  gameRequest: ['idgame'],
  gameSuccess: ['game'],
  gameFailure: null,
  increment: null,
  decrement: null
})

export const GameTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  idgame: null,
  fetching: null,
  game: null,
  error: null,
  count: 0
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { idgame }) => {
  r = state.merge({ fetching: true, idgame  , game: null })
  return r
}

// successful api lookup
export const success = (state, action) => {
  const { game } = action
  return state.merge({ fetching: false, error: null, game })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, game: null })

// Increments
export const increment = (state, { action }) => {
  const count = state.count + 1
  return state.merge({ count })
}

export const decrement = (state, { action }) => {
  const count = state.count - 1
  return state.merge({ count })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GAME_REQUEST]: request,
  [Types.GAME_SUCCESS]: success,
  [Types.GAME_FAILURE]: failure,
  [Types.INCREMENT]: increment,
  [Types.DECREMENT]: decrement
})
