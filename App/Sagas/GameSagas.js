/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import GameActions from '../Redux/GameRedux'

export function * getGame (api, action) {

  console.tron.display({
    name: '🔥 GameSagas.js 🔥',
    preview: 'On lance la saga game',
    value: {
      action
    }
  })

  const { data } = action

  // On appelle l'API pour sortir les datas qui nous faut
  const response = yield call(api.getGame, data)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(GameActions.gameSuccess(response.data))
  } else {
    yield put(GameActions.gameFailure())
  }
}
