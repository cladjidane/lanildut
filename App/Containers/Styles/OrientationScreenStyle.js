import { StyleSheet } from 'react-native'
import {ApplicationStyles, Metrics, Colors} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.html,
  ...ApplicationStyles.screen,
  // Override definition html
  containerHTMLView: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    borderRightColor: Colors.border,
    marginRight: 10,
    borderRightWidth: 1
  },
  containerHTMLViewModal: {
    paddingHorizontal: 0,
    marginHorizontal: 0
  },
  p: {
    color: Colors.text,
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 18
  },
  // Next
  wrapperMap: {
    flex: 0.5,
    backgroundColor: Colors.red,
    padding: Metrics.doubleBaseMargin,
    paddingTop: 0,
    paddingBottom: 0
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent'
  },
  infos: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
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
    zIndex: 10,
    right: 33,
    top: 33,
    zIndex: 10
  },
  closeModalView: {

  }
})
