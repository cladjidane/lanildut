import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.html,
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.blue,
    //borderWidth: 3,
    //borderColor: 'red'
  },
  launchContainer: {
    flex: 1
    // backgroundColor: Colors.red
  },
  launchHalfSectionPan: {
    height: Metrics.screenHeight / 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewImageMediaHome: {
    flex: 1,
    height: Metrics.screenHeight / 2
  },
  imageMediaHome: {
    height: Metrics.screenHeight / 2,
    width: Metrics.screenWidth,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewMediaHome: {
    position: 'absolute',
    flex: 1,
    borderTopWidth: Metrics.screenWidth / 2,
    borderBottomWidth: Metrics.screenWidth / 2,
    borderLeftWidth: Metrics.screenWidth / 2,
    borderRightWidth: Metrics.screenWidth / 2,
    borderTopColor: Colors.blue,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    width: Metrics.screenWidth
  },
  titleGameHome: {
    ...Fonts.style.h2,
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.snow,
    textAlign: 'center',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 5
  },
  titleTextHome: {
    ...Fonts.style.h2,
    fontSize: 34,
    fontWeight: 'bold',
    color: Colors.snow,
    textAlign: 'center',
    margin: Metrics.smallMargin,
    marginTop: Metrics.doubleBaseMargin * 2
  },
  titleTextHome_breizh: {
    ...Fonts.style.h2,
    fontSize: 20,
    textAlign: 'center',
    margin: Metrics.tinyMargin,
    marginTop: Metrics.BaseMargin,
    color: Colors.red
  },
  subtitleHome: {
    color: Colors.snow,
    textAlign: 'center',
    fontSize: 25
  },
  subtitleHome_breizh: {
    color: Colors.snow,
    textAlign: 'center',
    fontSize: 25
  },
  sectionTextHome: {
    ...Fonts.style.small,
    paddingVertical: Metrics.doubleBaseMargin,
    color: Colors.snow,
    marginVertical: Metrics.smallMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    textAlign: 'center'
  }
})
