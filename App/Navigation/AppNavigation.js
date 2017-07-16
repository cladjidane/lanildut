import { StackNavigator } from 'react-navigation'
import React from 'react'
import FullMapScreen from '../Containers/FullMapScreen'
import EndScreen from '../Containers/EndScreen'
import StepScreen from '../Containers/StepScreen'
import OrientationScreen from '../Containers/OrientationScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import HeaderRight from './HeaderRight'

import styles from './Styles/NavigationStyles'

StepScreen.navigationOptions = props => {
  const { navigation } = props
  return {
    headerTitleStyle: { color: '#fff' },
    headerTintColor: 'white',
    headerStyle: styles.headerOrientation,
    title: 'Ecoutez',
    headerBackTitle: null,
    headerRight: <HeaderRight navigation={navigation} />
  }
}

OrientationScreen.navigationOptions = props => {
  const { navigation } = props
  return {
    headerTitleStyle: { color: '#fff' },
    headerTintColor: 'white',
    headerStyle: styles.headerOrientation,
    title: 'Orientation',
    headerBackTitle: null,
    headerRight: <HeaderRight navigation={navigation} />
  }
}

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  FullMapScreen: {
    screen: FullMapScreen,
    mode: 'modal',
    navigationOptions: {
      headerStyle: styles.headerOrientation,
      title: 'Plan général',
      headerTitleStyle: { color: '#fff' },
      headerTintColor: 'white'
    }
  },
  EndScreen: {
    screen: EndScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  StepScreen: {
    screen: StepScreen
  },
  OrientationScreen: {
    screen: OrientationScreen
  },
  LaunchScreen: {
    screen: LaunchScreen,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
      headerBackTitle: null
    }
  }
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header,
    titleStyle: {
      color: 'white'
    }
  }
})

export default PrimaryNav
