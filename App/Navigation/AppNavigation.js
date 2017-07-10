import { StackNavigator } from 'react-navigation'
import FullMapScreen from '../Containers/FullMapScreen'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import EndScreen from '../Containers/EndScreen'
import StepScreen from '../Containers/StepScreen'
import OriantationScreen from '../Containers/OriantationScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import styles from './Styles/NavigationStyles'

OriantationScreen.navigationOptions = props => {
  const { navigation } = props
  return {
    headerTitleStyle: { color: '#fff' },
    headerTintColor: 'white',
    headerStyle: styles.headerOriantation,
    title: 'Oriantation',
    headerBackTitle: null,
    headerRight: (
      <TouchableOpacity
        accessibilityTraits='button'
        onPress={() =>
        navigation.navigate('FullMapScreen')
      }
        activeOpacity={0.8}
    >
        <Icon name='location-pin' style={{paddingRight: 10}} size={25} color='white' />
      </TouchableOpacity>
    )
  }
}

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  FullMapScreen: {
    screen: FullMapScreen,
    mode: 'modal'
    // navigationOptions: { header: null }
  },
  EndScreen: {
    screen: EndScreen,
    navigationOptions: { header: null }
  },
  StepScreen: {
    screen: StepScreen,
    navigationOptions: {
      headerStyle: styles.headerStep,
      title: 'Ecoutez',
      headerBackTitle: null
    }
  },
  OriantationScreen: {
    screen: OriantationScreen
  },
  LaunchScreen: {
    screen: LaunchScreen,
    navigationOptions: {
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
