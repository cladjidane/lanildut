import React from 'react'
import { Text, View, Image } from 'react-native'

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

          <Text style={styles.titleTextHome}>LANILDUT</Text>
          <Text style={styles.subtitleHome}>Parcours découverte</Text>
          <Text style={styles.subtitleHome_breizh}>Pourmenadenn dizoleiñ</Text>
          <Text style={styles.sectionTextHome}>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
