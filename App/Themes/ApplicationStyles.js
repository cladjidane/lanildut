import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  html: {
    // For html render
    containerHTMLView: {
      padding: Metrics.doubleBaseMargin
    },
    p: {
      // ...Fonts.style.small,
      color: Colors.snow
    }
  },
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.red
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: 0,
      backgroundColor: Colors.background
    },
    section: {
      flex: 1,
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    halfSection: {
      flex: 0.5,
      padding: Metrics.baseMargin
    },
    halfSectionPan: {
      flex: 0.5,
      backgroundColor: Colors.charcoal
    },
    sectionText: {
      ...Fonts.style.small,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.text,
      marginVertical: Metrics.smallMargin,
      paddingHorizontal: Metrics.doubleBaseMargin,
      textAlign: 'left'
    },
    sectionText_left: {
      ...Fonts.style.small,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.text,
      marginVertical: Metrics.smallMargin,
      paddingHorizontal: Metrics.doubleBaseMargin,
      textAlign: 'justify'
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      paddingHorizontal: Metrics.doubleBaseMargin - 10,
      textAlign: 'left',
      fontSize: 12
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 24,
      color: Colors.textBlack,
      textAlign: 'left',
      margin: Metrics.smallMargin,
      marginTop: Metrics.doubleBaseMargin,
      paddingHorizontal: Metrics.doubleBaseMargin - 5
    },
    titleText_breizh: {
      ...Fonts.style.h2,
      fontSize: 20,
      textAlign: 'left',
      margin: Metrics.tinyMargin,
      marginTop: Metrics.BaseMargin,
      paddingHorizontal: Metrics.doubleBaseMargin,
      color: Colors.red
    },
    // Orientation Text
    orientationText: {
      flex: 1,
      margin: Metrics.doubleBaseMargin,
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    // Credits
    sectionCredits: {
      flex: 1,
      padding: Metrics.baseMargin,
      marginHorizontal: Metrics.doubleBaseMargin * 2
    },
    sectionTextCredits: {
      fontSize: 12,
      textAlign: 'left',
      color: Colors.snow,
      padding: Metrics.baseMargin
    },
    separator: {
      borderTopColor: Colors.snow,
      borderTopWidth: 1,
      margin: Metrics.baseMargin
    },
    separator_red: {
      borderTopColor: Colors.red,
      borderTopWidth: 1,
      marginHorizontal: Metrics.doubleBaseMargin,
      marginTop: Metrics.doubleBaseMargin + 10
    }
    // End Credits,
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  }
}

export default ApplicationStyles
