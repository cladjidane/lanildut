'use strict'
import React, {
  Component
} from 'react'

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import Video from 'react-native-video'
import { Metrics } from '../Themes/'

const { width, height } = Dimensions.get('window')

export default class video extends Component {
  constructor (props) {
    super(props)
    this.onLoad = this.onLoad.bind(this)
    this.onProgress = this.onProgress.bind(this)
    this.onBuffer = this.onBuffer.bind(this)
  }
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    paused: true,
    skin: 'embed',
    ignoreSilentSwitch: null,
    isBuffering: false,
    dimensions: {width, height},
    resizeMode: ''
  }

  onLayout = (evt) => {
    this.setState({
      dimensions: {
        height: evt.nativeEvent.layout.height,
        width: evt.nativeEvent.layout.width
      },
      resizeMode: evt.nativeEvent.layout.width > evt.nativeEvent.layout.height ? 'cover': 'contain' 
    })
  }

  onLoad (data) {
    this.setState({duration: data.duration})
  }

  onProgress (data) {
    this.setState({currentTime: data.currentTime})
  }

  onBuffer ({ isBuffering }: { isBuffering: boolean }) {
    this.setState({ isBuffering })
  }

  getCurrentTimePercentage () {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration)
    } else {
      return 0
    }
  }

  renderSkinControl (skin) {
    const isSelected = this.state.skin === skin
    const selectControls = skin === 'native' || skin === 'embed'
    return (
      <TouchableOpacity onPress={() => {
        this.setState({
          controls: selectControls,
          skin: skin
        })
      }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? 'bold' : 'normal'}]}>
          {skin}
        </Text>
      </TouchableOpacity>
    )
  }

  renderRateControl (rate) {
    const isSelected = (this.state.rate === rate)

    return (
      <TouchableOpacity onPress={() => { this.setState({rate: rate}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? 'bold' : 'normal'}]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl (volume) {
    const isSelected = (this.state.volume === volume)

    return (
      <TouchableOpacity onPress={() => { this.setState({volume: volume}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? 'bold' : 'normal'}]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }

  renderIgnoreSilentSwitchControl (ignoreSilentSwitch) {
    const isSelected = (this.state.ignoreSilentSwitch === ignoreSilentSwitch)

    return (
      <TouchableOpacity onPress={() => { this.setState({ignoreSilentSwitch: ignoreSilentSwitch}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? 'bold' : 'normal'}]}>
          {ignoreSilentSwitch}
        </Text>
      </TouchableOpacity>
    )
  }

  _onPressPlay () {
    // console.tron.log(this.ref)
  }

  renderNativeSkin () {
    const videoStyle = styles.fullScreen
    const source = this.props.source

    return (
      <View 
        style={styles.container}
        onLayout={this.onLayout}
      >
        <View style={styles.fullScreen}>
          <Video
            source={source}
            style={{
              width: this.state.dimensions.width, 
              height: this.state.dimensions.height,
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              backgroundColor: 'black'
            }} 
            resizeMode={this.state.resizeMode}
          />
        </View>

      </View>
    )
  }

  render () {
    return this.renderNativeSkin()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fullScreen: {
  },
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 44,
    left: 4,
    right: 4
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden'
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc'
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C'
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingBottom: 10
  },
  skinControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  ignoreSilentSwitchControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12
  },
  nativeVideoControls: {
    top: 184,
    height: 300
  }
})
