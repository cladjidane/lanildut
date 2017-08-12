import React, { Component } from 'react'
import { Dimensions, Modal, View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Images } from '../Themes'

// Styles
import styles from './Styles/StepScreenStyle'

// Components
import RoundedButton from '../Components/RoundedButton'
import Video from '../Components/Video'
import Icon from 'react-native-vector-icons/FontAwesome'
import HTMLView from 'react-native-htmlview'

const { width, height } = Dimensions.get('window')

class StepScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showModal: false,
      showTextPlus: false,
      titleTextPlus: 'En savoir plus',
      dimensions: {width, height},
      currentDataByStep: this.props.datacurrentstep
    }
  }

  showTextPlus = () => {
    this.setState({
      showTextPlus: !this.state.showTextPlus,
      titleTextPlus: this.state.titleTextPlus === 'En savoir plus' ? 'Fermer' : 'En savoir plus'
    })
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  componentDidMount = () => {
    this.props.steper()
  }

  onLayout = (evt) => {
    this.setState({
      dimensions: {
        height: evt.nativeEvent.layout.height,
        width: evt.nativeEvent.layout.width
      }
    })
  }

  _renderTextPlus = () => {
    if (this.state.showTextPlus) {
      return (
        <View style={{padding: 20, backgroundColor: Colors.border}}>
          <HTMLView
            value={this.state.currentDataByStep.step.text_plus}
            stylesheet={styles.html}
            />
        </View>
      )
    } else {
      return null
    }
  }

  render () {
    const { navigate } = this.props.navigation
    const currentDataByStep = this.state.currentDataByStep
    const namevideo = 'video' + (this.props.count)

    // Is last screen ?
    const lastStep = ((this.props.datagame.steps.length - 2) === this.props.count)
    /*
    console.tron.display({
      name: currentDataByStep.orientation.title,
      preview: 'Step step ' + this.props.count
    })
    */

    return (
      <View
        style={styles.mainContainer}
        //onLayout={this.onLayout}
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
                stylesheet={styles}
              />

              {this.state.currentDataByStep.step.text_plus.length > 0 &&
                <TouchableOpacity
                  onPress={this.showTextPlus}
                  style={{
                    paddingVertical: 10,
                    marginTop: 30,
                    borderTopWidth: 1,
                    borderTopColor: Colors.border,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center'
                  }}
                >
                  <Text>
                    <Icon name='plus' size={15} color={Colors.red} />
                    <Text> {this.state.titleTextPlus}</Text>
                  </Text>
                </TouchableOpacity>
              }

              {this._renderTextPlus()}

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
    count: state.game.count,
    datacurrentstep: state.game.datacurrentstep,
    datagame: state.game.datagame
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => { dispatch({ type: 'INCREMENT' }) },
    steper: () => { dispatch({ type: 'STEPER' }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StepScreen)
