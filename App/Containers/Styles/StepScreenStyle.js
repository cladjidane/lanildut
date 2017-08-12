import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.html,
  ...ApplicationStyles.screen,
  // Override definition html
  p: {
    fontSize: 18
  },
  // Next
  backButton: {
    position: 'absolute',
    paddingBottom: 5,
    zIndex: 10
  },
  buttonPlus: {
    color: Colors.red,
    fontSize: 14,
    marginLeft: 20,
    borderWidth: 1
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
