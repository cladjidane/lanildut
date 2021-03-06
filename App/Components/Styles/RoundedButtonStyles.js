import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    height: 45,
    minWidth: 150,
    borderRadius: 5,
    marginHorizontal: Metrics.baseMargin + 10,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.red,
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  },
  buttonLaunch: {
    margin: Metrics.smallMargin * 3,
    padding: Metrics.smallMargin * 3,
    backgroundColor: Colors.blue
  }
})
