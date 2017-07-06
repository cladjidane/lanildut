import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'

// Styles
import Styles from './Styles/MapScreenStyle'

class StaticMap extends React.Component {
  constructor (props) {
    super(props)

    var lat = this.props.lat
    var lng = this.props.lng

    this.state = {
      region: {
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421
      }
    }
    console.tron.log(this.state)
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

export default connect(mapStateToProps, mapDispatchToProps)(StaticMap)