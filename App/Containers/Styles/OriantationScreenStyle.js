import { StyleSheet } from 'react-native'
import {ApplicationStyles, Fonts, Metrics, Colors} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  containerMap: {
    flex: .5,
    backgroundColor: Colors.red
  },
  map: {
    flex: 1,
    backgroundColor: Colors.background,
    margin: Metrics.section,
    padding: Metrics.baseMargin
  }
})
