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
    var SPACE = 0.01

    this.state = {
      region: {
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421
      },
      step1: {
        latitude: parseFloat(lat + SPACE),
        longitude: parseFloat(lng + SPACE)
      },
      step2: {
        latitude: parseFloat(lat - SPACE),
        longitude: parseFloat(lng - SPACE)
      }
    }
  }

  render () {
    return (
      <View style={Styles.mapContainer}>
        <MapView
          style={Styles.mapView}
          mapType='satellite'
          region={this.state.region}
        >
          <MapView.Marker
            coordinate={this.state.step1}
           />
          <MapView.Marker
            coordinate={this.state.step2}
          />
        </MapView>
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
