import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Modal } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

// Data
import dataGame from '../Fixtures/game.json'

// Styles
import styles from './Styles/OrientationScreenStyle'

// Components
import RoundedButton from '../Components/RoundedButton'
import StaticMap from '../Components/StaticMap'
import IconButton from '../Components/IconButton'
import FullMapScreen from './FullMapScreen'

class OrientationScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      showModalMap: false,
      contentModal: {},
      currentDataByStep: dataGame.steps[this.props.count]
    }
  }

  toggleModal = () => { this.setState({ showModal: !this.state.showModal }) }
  toggleModalMap = () => { this.setState({ showModalMap: !this.state.showModalMap }) }

  onPressForModalTip = () => {
    this.setState({
      contentModal: this.state.currentDataByStep.orientation.accessibility,
      showModal: true
    })
  }

  onPressForModalTime = () => {
    this.setState({
      contentModal: this.state.currentDataByStep.orientation.time,
      showModal: true
    })
  }

  render () {
    const { navigate } = this.props.navigation
    const currentDataByStep = this.state.currentDataByStep
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container} bounces={false}>
          <View style={styles.wrapperMap} >
            <StaticMap orientation={currentDataByStep.orientation} />
            <Text style={styles.subtitle}>ETAPE : {this.props.count + 1}</Text>
          </View>

          <View style={styles.halfSection} >
            <Text style={styles.titleText}>{currentDataByStep.orientation.title}</Text>
            <Text style={styles.titleText_breizh}>{currentDataByStep.orientation.title_breton}</Text>
            <Text style={styles.sectionText}>{currentDataByStep.orientation.desc}</Text>

            <View style={styles.infos}>
              <IconButton
                icon='present'
                text='Durée'
                onPress={this.onPressForModalTime}
              />
              <IconButton
                icon='bulb'
                text='Conseils'
                onPress={this.onPressForModalTip}
              />
            </View>

            <RoundedButton
              text="J'y SUIS !"
              onPress={() => navigate('StepScreen')}
            />

          </View>

          <Modal
            transparent
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}
            >
            <View
              style={styles.modalInfos}>
              <Text style={styles.titleText}>{this.state.contentModal.title}</Text>
              <Text style={styles.sectionText}>{this.state.contentModal.text}</Text>
            </View>

            <TouchableOpacity
              style={styles.closeModal}
              onPress={this.toggleModal}
            >
              <View style={styles.closeModalView}>
                <Icon name='times-circle' size={30} color='#f94d63' />
              </View>
            </TouchableOpacity>
          </Modal>

          <Modal
            transparent
            visible={this.state.showModalMap}
            onRequestClose={this.toggleModalMap}
            >
            <FullMapScreen />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrientationScreen)
