import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'

// Styles
import Styles from './Styles/FullMapScreenStyle'

class FullMapScreen extends React.Component {
  constructor (props) {
    super(props)

    var lat = '48.47074466655615'
    var lng = '-4.756929874420166'

    this.state = {
      region: {
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421
      }
    }
  }

  render () {
    return (
      <View style={Styles.mapContainer}>
        <MapView
          style={Styles.mapView}
          region={this.state.region}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullMapScreen)
