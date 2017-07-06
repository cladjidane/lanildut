import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  IconButtonContainer: {
    width: 80,
    margin: 10
  },
  IconButtonView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  IconButtonViewIc: {
    borderRadius: 60,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.red,
    padding: 14
  },
  IconButtonIc: {
    color: Colors.red,
    width: 40,
    backgroundColor: 'transparent'
  },
  IconButtonText: {
    paddingTop: 5,
    textAlign: 'center'
  }
})
