import { StyleSheet } from 'react-native'
import {ApplicationStyles, Colors} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  backButton: {
    position: 'absolute',
    paddingTop: 30,
    paddingHorizontal: 5,
    zIndex: 10
  },
  containerMedia: {
    flex: 0.5,
    backgroundColor: Colors.red
  },
  thumbs: {
    flex: 1
  },
  modalVideo: {
    flex: 1,
    backgroundColor: 'red'
  }
})
