import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'

// Data
import dataGame from '../Fixtures/game.json'

// Styles
import Styles from './Styles/FullMapScreenStyle'

class FullMapScreen extends React.Component {
  constructor (props) {
    super(props)

    var lat = '48.47074466655615'
    var lng = '-4.761029874420166'
    // var SPACE = 0.01

    this.state = {
      region: {
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        latitudeDelta: 0.00822,
        longitudeDelta: 0.00321
      }
    }
  }

  MarkerMap () {
    return dataGame.steps.map(function (step, i) {
      if(i === 0 || i === dataGame.steps.length - 1 ) return
      const coor = {
        latitude: parseFloat(step.orientation.latitude + 0.01),
        longitude: parseFloat(step.orientation.longitude + 0.01)
      }
      /*
      console.tron.display({
        name: 'COORDONNEES',
        value: coor
      })
      */
      return (
        <View key={i}>
          <MapView.Marker title={step.orientation.title} coordinate={coor} />
        </View>
      )
    })
  }

  render () {
    return (
      <View style={Styles.mapContainer}>
        <MapView
          style={Styles.mapView}
          mapType='satellite'
          region={this.state.region}
        >
          {this.MarkerMap()}
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
