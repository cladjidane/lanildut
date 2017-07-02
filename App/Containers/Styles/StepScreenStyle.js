import { StyleSheet } from 'react-native'
import {ApplicationStyles, Fonts, Metrics, Colors} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  backButton: {
    position: 'absolute',
    paddingTop: 30,
    paddingHorizontal: 5,
    zIndex: 10
  },
  containerMedia: {
    flex: .5,
    backgroundColor: Colors.red
  },
  media: {
    flex: 1,
    backgroundColor: Colors.background,
    margin: Metrics.section,
    padding: Metrics.baseMargin
  }
})
