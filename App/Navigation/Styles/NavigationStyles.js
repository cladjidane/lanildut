import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.blue
  },
  headerLaunch: {
    backgroundColor: Colors.darkBlue
  },
  headerOrientation: {
    backgroundColor: Colors.red,
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    },
    elevation: 0
  },
  headerStep: {
    backgroundColor: 'transparent'
  },
  rightButton: {
    color: 'white'
  }
})
