import React from 'react'
import { Modal, View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import dataGame from '../Fixtures/game.json'

// Styles
import styles from './Styles/StepScreenStyle'

// Components
import RoundedButton from '../Components/RoundedButton'
import Video from '../Components/Video'

class StepScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showModal: false,
      currentDataByStep: dataGame.steps[this.props.count]
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    const { navigate } = this.props.navigation
    const currentDataByStep = this.state.currentDataByStep
    const namevideo = 'videotest'

    // Is last screen ?
    const lastStep = ((dataGame.steps.length - 1) === this.props.count)

    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} style={styles.backButton}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView style={styles.container}>

          <View style={styles.containerMedia} >
            <View style={styles.centered}>
              <TouchableOpacity onPress={this.toggleModal}>
                <Image source={Images.thumbs[this.props.count].th} style={styles.thumbs} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.halfSection} >

            <Text style={styles.titleText}>{currentDataByStep.step.texts.title}</Text>
            <Text style={styles.subtitle}>{currentDataByStep.step.texts.title_breton}</Text>
            <Text style={styles.sectionText_left}>
              {currentDataByStep.step.texts.text}
              {/* currentDataByStep.step.text_plus */}
            </Text>

            <RoundedButton
              text='Continuer'
              onPress={() => {
                if (lastStep) navigate('EndScreen')
                else navigate('OriantationScreen')
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
            <Video source={Images.videos[namevideo]} />

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
    increment: () => { dispatch({ type: 'INCREMENT' }) },
    decrement: () => { dispatch({ type: 'DECREMENT' }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StepScreen)
