import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'

// Styles
import styles from './Styles/LaunchScreenStyles'

// Components
import RoundedButton from '../Components/RoundedButton'

export default class LaunchScreen extends React.Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <View style={styles.halfSection} >

            <Text style={styles.titleText}>Lanildut</Text>
            <Text style={styles.subtitle}>Lanildut</Text>
            <Text style={styles.sectionText}>
              Intro ...
            </Text>

            <RoundedButton
              text='Commencer'
              onPress={() => {
                navigate('OriantationScreen')
              }}
            />
          </View>

          <View style={styles.containerMedia} >
            <Image resizeMode='cover' source={require('../Images/game/thumbs-step2.jpg')} />
          </View>
        </ScrollView>
      </View>
    )
  }
}
