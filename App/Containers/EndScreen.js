import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'

// Data
import dataGame from '../Fixtures/game.json'

// Styles
import Images from '../Themes/Images'
import styles from './Styles/EndScreenStyle'

// Components
import RoundedButton from '../Components/RoundedButton'

class EndScreen extends React.Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={require('../Images/launch-icon.png')} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={[styles.titleText, {color: 'white'}]}>{dataGame.end.title_end}</Text>
            <Text style={[styles.titleText_breizh, {color: 'white'}]}>{dataGame.end.title_end_breton}</Text>
            <Text style={[styles.sectionText, {color: 'white'}]}>{dataGame.end.text_end}</Text>

            <RoundedButton
              text='Recommencer'
              onPress={() => {
                navigate('LaunchScreen')
                this.props.resetGame()
              }}
            />
          </View>

          <View style={styles.sectionCredits} >
            <View style={styles.separator} />
            <Text style={styles.sectionTextCredits}>{dataGame.end.credits}</Text>
          </View>

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
    resetGame: () => { dispatch({ type: 'RESET_GAME' }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndScreen)
