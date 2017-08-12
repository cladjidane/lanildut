import React from 'react'
import { Dimensions, ScrollView, Text, View, Image } from 'react-native'
import HTMLView from 'react-native-htmlview'

// Data
import dataGame from '../Fixtures/game.json'

// Styles
import styles from './Styles/LaunchScreenStyles'

// Components
import RoundedButton from '../Components/RoundedButton'

const { width, height } = Dimensions.get('window')

export default class LaunchScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dimensions: {width, height}
    }
  }

  onLayout = (evt) => {
    this.setState({
      dimensions: {
        height: evt.nativeEvent.layout.height,
        width: evt.nativeEvent.layout.width
      }
    })
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View
        style={styles.mainContainer}
        onLayout={this.onLayout}
      >
        <ScrollView style={styles.launchContainer}>
          <View style={styles.launchHalfSectionPan} >

            <Text style={styles.titleTextHome}>{dataGame.steps[0].introduction.name_application}</Text>
            <Text style={styles.subtitleHome}>{dataGame.steps[0].introduction.title_home}</Text>
            <Text style={styles.subtitleHome_breizh}>{dataGame.steps[0].introduction.title_home_breton}</Text>
            <View style={styles.containerHTMLView}>
              <HTMLView
                value={dataGame.steps[0].introduction.text_intro}
                stylesheet={styles}
              />
            </View>

          </View>

          <View style={styles.viewImageMediaHome}>
            <Image
              resizeMode='cover'
              source={require('../Images/game/INTRO1.jpg')}
              style={[styles.imageMediaHome, {
                flex: 1,
                width: this.state.dimensions.width
              }]}
            >
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
