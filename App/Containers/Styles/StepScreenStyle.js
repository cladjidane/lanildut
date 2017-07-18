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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.red
  },
  thumbs: {
    resizeMode: 'cover',
    height: Metrics.screenHeight / 2
  },
  modalVideo: {
    flex: 1,
    backgroundColor: 'red'
  },
  iconPlay: {

  }
})
