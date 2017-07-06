import { StyleSheet } from 'react-native'
import {ApplicationStyles, Metrics} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mapContainer: {
    position: 'relative',
    height: (Metrics.screenHeight / 2) - 40
  },
  mapView: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
})
