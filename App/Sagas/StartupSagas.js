import { put } from 'redux-saga/effects'
import GameActions from '../Redux/GameRedux'
// import { is } from 'ramda'

// process STARTUP actions
export function * startup (action) {
  /* console.tron.display({
    name: '🔥 StartupSagas.js 🔥',
    preview: 'fn',
    value: {
      action
    }
  }) */

  // On lance l'action initiale qui va définir l'id du jeu que l'on souhaite
  yield put(GameActions.gameRequest(1))
}
