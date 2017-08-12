import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.html,
  ...ApplicationStyles.screen,
  // Override definition html
  p: {
    color: Colors.snow,
    textAlign: 'center'
  },
  containerHTMLViewModal: {
    paddingHorizontal: 0,
    marginHorizontal: 0
  },
  // Next
  container: {
    flex: 1,
    backgroundColor: Colors.blue
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  modalInfos: {
    flex: 1,
    margin: Metrics.doubleBaseMargin * 2,
    padding: Metrics.doubleBaseMargin * 2,
    backgroundColor: 'white', // rgba(255, 255, 255, .9)',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 30,
    elevation: 1
  },
  closeModal: {
    position: 'absolute',
    right: 33,
    top: 33,
    zIndex: 10
  }
})
