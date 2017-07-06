import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GameTypes } from '../Redux/GameRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getGame } from './GameSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // On doit lancer la fn startup du sous comp sagas StartupSagas.js
    takeLatest(StartupTypes.STARTUP, startup),
    // Ici on lance la fn du sous comp GameSagas.js qui va
    // fait un fetch sur l'API pour mettre à jour les donées
    takeLatest(GameTypes.GAME_REQUEST, getGame, api)
  ]
}