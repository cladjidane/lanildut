import React from 'react'
import { Text, View, Image } from 'react-native'

// Data
import dataGame from '../Fixtures/game.json'

// Styles
import styles from './Styles/LaunchScreenStyles'

// Components
import RoundedButton from '../Components/RoundedButton'

export default class LaunchScreen extends React.Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.halfSectionPan} >

          <Text style={styles.titleTextHome}>{dataGame.introduction.name}</Text>
          <Text style={styles.subtitleHome}>{dataGame.introduction.title}</Text>
          <Text style={styles.subtitleHome_breizh}>{dataGame.introduction.title_breton}</Text>
          <Text style={styles.sectionTextHome}>
            {dataGame.introduction.desc}
          </Text>

          <RoundedButton
            text='Commencer'
            style={styles.buttonLaunch}
            onPress={() => {
              navigate('OriantationScreen')
            }}
          />
        </View>

        <Image style={styles.imageMediaHome} resizeMode='cover' source={require('../Images/game/thumbs-step2.jpg')}>
          <View style={styles.viewMediaHome} />
        </Image>
      </View>
    )
  }
}
