import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
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
  imageMediaHome: {
    flex: 0.5
  },
  viewMediaHome: {
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
  titleTextHome: {
    ...Fonts.style.h2,
    fontSize: 40,
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
