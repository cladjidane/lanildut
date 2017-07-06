import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Modal } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/OriantationScreenStyle'

// Components
import RoundedButton from '../Components/RoundedButton'
import dataGame from '../Fixtures/game.json'
import StaticMap from '../Components/StaticMap'
import IconButton from '../Components/IconButton'

class OriantationScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      contentModal: {},
      currentDataByStep: dataGame.steps[this.props.count]
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  onPressForModalTip = () => {
    this.setState({
      contentModal: this.state.currentDataByStep.orientation.infos.tip,
      showModal: true
    })
  }

  onPressForModalTime = () => {
    this.setState({
      contentModal: this.state.currentDataByStep.orientation.infos.time,
      showModal: true
    })
  }

  onPressForModalHardness = () => {
    this.setState({
      contentModal: this.state.currentDataByStep.orientation.infos.hardness,
      showModal: true
    })
  }

  render () {
    const { navigate } = this.props.navigation
    // console.tron.log(dataGame.steps[this.props.count])
    // const { count } = this.props.game
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.wrapperMap} >
            <StaticMap lat={this.state.currentDataByStep.orientation.lat} lng={this.state.currentDataByStep.orientation.lng} />
            <Text style={styles.subtitle}>ETAPE : {this.props.count + 1}</Text>
          </View>

          <View style={styles.halfSection} >
            <Text style={styles.titleText}>{this.state.currentDataByStep.orientation.texts.title}</Text>
            <Text style={styles.titleText_breizh}>Ar Fourn soud</Text>
            <Text style={styles.sectionText}>{this.state.currentDataByStep.orientation.texts.desc}</Text>

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
              <IconButton
                icon='note'
                text='Infos'
                onPress={this.onPressForModalHardness}
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

export default connect(mapStateToProps, mapDispatchToProps)(OriantationScreen)
