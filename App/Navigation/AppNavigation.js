import { StackNavigator } from 'react-navigation'
import EndScreen from '../Containers/EndScreen'
import StepScreen from '../Containers/StepScreen'
import OriantationScreen from '../Containers/OriantationScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  EndScreen: { screen: EndScreen },
  StepScreen: { screen: StepScreen },
  OriantationScreen: { screen: OriantationScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'EndScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
