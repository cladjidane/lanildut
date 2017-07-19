import { StyleSheet } from 'react-native'
import {Metrics, ApplicationStyles, Colors} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.html,
  ...ApplicationStyles.screen,
  backButton: {
    position: 'absolute',
    paddingBottom: 5,
    zIndex: 10
  },
  containerMedia: {
    backgroundColor: Colors.red
  },
  thumbs: {
    borderWidth: 1
  },
  modalVideo: {
    flex: 1,
    backgroundColor: 'red',
    borderWidth: 3,
    borderColor: 'white'
  },
  iconPlay: {

  }
})
