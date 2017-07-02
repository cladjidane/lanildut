import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null
})

export const StartupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  startup: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const go = (state, { data }) => {
  r = state.merge({ startup: true })
  console.tron.display({
    name: '🔥 Startup OVERRIDE.js - go 🔥',
    value: {
      startup
    }
  })
  return r
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: go
})

