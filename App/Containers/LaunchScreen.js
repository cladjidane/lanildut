import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'

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
      <View style={styles.mainContainer}>
        <ScrollView style={styles.launchContainer}>
          <View style={styles.launchHalfSectionPan} >

            <Text style={styles.titleTextHome}>{dataGame.introduction.name}</Text>
            <Text style={styles.subtitleHome}>{dataGame.introduction.title}</Text>
            <Text style={styles.subtitleHome_breizh}>{dataGame.introduction.title_breton}</Text>
            <Text style={styles.sectionTextHome}>
              {dataGame.introduction.desc}
            </Text>

          </View>

          <View style={styles.viewImageMediaHome}>
            <Image style={styles.imageMediaHome} resizeMode='cover' source={require('../Images/game/thumbs-step2.jpg')}>
              <Text style={styles.titleGameHome}>Parcours mer</Text>
              <RoundedButton
                text='Commencer'
                style={styles.buttonLaunch}
                onPress={() => {
                  navigate('OrientationScreen')
                }}
              />
            </Image>
          </View>
        </ScrollView>
      </View>
    )
  }
}
