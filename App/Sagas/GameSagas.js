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

import { call, put, select } from 'redux-saga/effects'
import GameActions from '../Redux/GameRedux'


// gets the current screen from navigation state
export const getCurrentRouteName = (state) => {

  const route = state.nav.routes[state.nav.index]
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
  
}

export function * updateCurrentStep (NavigationActions, action) {
  const currentScreen = yield select(getCurrentRouteName)

  //console.tron.log(NavigationActions)
  //console.tron.log(NavigationActions.StateUtils.indexOf)

  if(currentScreen === 'StepScreen') yield put(GameActions.decrement())

  //const result = next(action)

  // const result = next(action)
  // const nextScreen = getCurrentRouteName(getState().nav)
  // if (nextScreen !== currentScreen) {
  //   try {
  //     if(nextScreen === 'StepScreen' && action.type === 'Navigation/BACK') {
  //       console.tron.log(getState)
  //     }
      
  //     // Example: Analytics.trackEvent('user_navigation', {currentScreen, nextScreen})
  //   } catch (e) {
  //     console.tron.log(e)
  //   }
  // }
}

export function * getGame (api, action) {
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
