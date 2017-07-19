import React from 'react'
import { Dimensions, Modal, View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'

// Data
import dataGame from '../Fixtures/game.json'

// Styles
import styles from './Styles/StepScreenStyle'

// Components
import RoundedButton from '../Components/RoundedButton'
import Video from '../Components/Video'
import Icon from 'react-native-vector-icons/FontAwesome'
import HTMLView from 'react-native-htmlview'

const { width, height } = Dimensions.get('window')

class StepScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showModal: false,
      dimensions: {width, height},
      currentDataByStep: dataGame.steps[this.props.count]
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  onLayout = (evt) => {
    this.setState({
      dimensions: {
        height: evt.nativeEvent.layout.height,
        width: evt.nativeEvent.layout.width
      }
    })
  }

  render () {
    const { navigate } = this.props.navigation
    const currentDataByStep = this.state.currentDataByStep
    const namevideo = 'video' + (this.props.count + 1)

    // Is last screen ?
    const lastStep = ((dataGame.steps.length - 1) === this.props.count)

    return (
      <View
        style={styles.mainContainer}
        onLayout={this.onLayout}
      >
        <ScrollView style={styles.container}>

          <View style={styles.containerMedia} >
            <TouchableOpacity onPress={this.toggleModal}>
              <Image
                resizeMode='cover'
                source={Images.thumbs[this.props.count].th}
                style={{width: this.state.dimensions.width, height: 200}}
              >
                <View
                  style={{
                    backgroundColor: 'transparent',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon
                    name='play-circle' size={50} color='white'
                  />
                </View>
              </Image>
            </TouchableOpacity>
          </View>

          <View style={styles.halfSection} >

            <Text style={styles.titleText}>{currentDataByStep.orientation.title}</Text>
            <Text style={styles.titleText_breizh}>{currentDataByStep.orientation.title_breton}</Text>
            <View style={styles.containerHTMLView}>
              <HTMLView
                value={currentDataByStep.step.text}
                stylesheet={styles.html}
              />
              <HTMLView
                value={currentDataByStep.step.text_plus}
                stylesheet={styles.html}
              />
            </View>

            <RoundedButton
              text='Continuer'
              onPress={() => {
                if (lastStep) navigate('EndScreen')
                else navigate('OrientationScreen')
                this.props.increment()
              }}
            />
          </View>

          <Modal
            style={styles.modalVideo}
            animationType={'fade'}
            transparent={false}
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}
            supportedOrientations={['portrait', 'landscape']}
            >
            <Video
              source={Images.videos[namevideo]}
            />

            <TouchableOpacity
              style={{
                position: 'absolute',
                paddingTop: 30,
                paddingHorizontal: 10,
                zIndex: 10
              }}
              onPress={this.toggleModal}
            >
              <Image source={Images.closeButton} />
            </TouchableOpacity>
          </Modal>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.game.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => { dispatch({ type: 'INCREMENT' }) }
    // decrement: () => { dispatch({ type: 'DECREMENT' }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StepScreen)
