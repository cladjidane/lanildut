import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import { StackNavigator } from 'react-navigation'

// Styles
import styles from './Styles/StepScreenStyle'

// Components
import RoundedButton from '../Components/RoundedButton'

class StepScreen extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} style={styles.backButton}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.container}>

          <View style={styles.containerMedia} >
            <View style={styles.containerMedia} >
              <Text>///</Text>
            </View>
          </View>

          <View style={styles.section} >
            <RoundedButton
              text='Continuer'
              onPress={() => navigate('OriantationScreen')}
            />
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
    increment: () => { dispatch({ type: 'INCREMENT' }) },
    decrement: () => { dispatch({ type: 'DECREMENT' }) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepScreen)
