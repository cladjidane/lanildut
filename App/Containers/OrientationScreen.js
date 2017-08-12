import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Modal } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

// Styles
import styles from './Styles/OrientationScreenStyle'

// Components
import RoundedButton from '../Components/RoundedButton'
import StaticMap from '../Components/StaticMap'
import IconButton from '../Components/IconButton'
import FullMapScreen from './FullMapScreen'
import HTMLView from 'react-native-htmlview'

class OrientationScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      showModalMap: false,
      contentModal: '',
      currentDataByStep: this.props.datacurrentstep
    }
  }

  toggleModal = () => { this.setState({ showModal: !this.state.showModal }) }
  toggleModalMap = () => { this.setState({ showModalMap: !this.state.showModalMap }) }

  onPressForModalAccessibility = () => {
    this.setState({
      contentModal: this.state.currentDataByStep.orientation.accessibility,
      showModal: true
    })
  }

  render () {
    const { navigate } = this.props.navigation
    const currentDataByStep = this.state.currentDataByStep
    /*
    console.tron.display({
      name: currentDataByStep.orientation.title,
      preview: 'Orientation step ' + this.props.count
    })
    */

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container} bounces={false}>
          <View style={styles.wrapperMap} >
            <StaticMap orientation={currentDataByStep.orientation} />
            <Text style={styles.subtitle}>ETAPE : {this.props.count} - {currentDataByStep.orientation.time}</Text>
          </View>

          <View style={styles.halfSection} >
            <Text style={styles.titleText}>{currentDataByStep.orientation.title}</Text>
            <Text style={styles.titleText_breizh}>{currentDataByStep.orientation.title_breton}</Text>
            <View style={styles.orientationText}>
              <View style={styles.containerHTMLView}>
                <HTMLView
                  value={currentDataByStep.orientation.desc}
                  stylesheet={styles}
                />
              </View>

              <IconButton
                icon='bulb'
                text='Conseils'
                onPress={this.onPressForModalAccessibility}
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
              <Text style={styles.titleTextModal}>Informations</Text>
              <View style={styles.containerHTMLViewModal}>
                <Text style={styles.subtitle}>ETAPE : {this.props.count + 1} - {currentDataByStep.orientation.time}</Text>
                <HTMLView
                  value={this.state.contentModal}
                  stylesheet={{textAlign: 'center'}}
                />
              </View>
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
    count: state.game.count,
    datacurrentstep: state.game.datacurrentstep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrientationScreen)
