import React from 'react'
import { TouchableOpacity, Modal, ScrollView, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'

// Data
import dataGame from '../Fixtures/game.json'

// Styles
import Images from '../Themes/Images'
import styles from './Styles/EndScreenStyle'

// Components
import RoundedButton from '../Components/RoundedButton'
import HTMLView from 'react-native-htmlview'
import Icon from 'react-native-vector-icons/FontAwesome'

class EndScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => { this.setState({ showModal: !this.state.showModal }) }

  render () {
    // const { navigate } = this.props.navigation
    const lastkey = this.props.datagame.steps.length - 1
    const endData = this.props.datagame.steps[lastkey].end
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={require('../Images/end.png')} style={styles.logo} />
          </View>

          <View style={styles.sectionMan} >
            <Text style={[styles.titleText, {color: 'white'}]}>{endData.title_end}</Text>
            <Text style={[styles.titleText_breizh, {color: 'white'}]}>{endData.title_end_breton}</Text>

            <View style={styles.containerHTMLView}>
              <HTMLView
                value={endData.text_end}
                stylesheet={styles}
              />
            </View>
          </View>

          <View style={styles.sectionCredits} >
            <View style={styles.separator} />
            <RoundedButton
              text='CREDITS'
              onPress={this.toggleModal}
            />
          </View>

          <Modal
            transparent
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}
            >
            <View style={styles.modalInfos}>
              <ScrollView>
              <Text style={styles.titleTextModal}>CREDITS</Text>
              <View style={styles.containerHTMLViewModal}>
                <HTMLView
                  value={endData.credits}
                  stylesheet={{textAlign: 'center'}}
                />
              </View>
              </ScrollView>
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
    count: state.game.count,
    datagame: state.game.datagame
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetGame: () => { dispatch({ type: 'RESET_GAME' }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndScreen)
