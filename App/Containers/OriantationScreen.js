import React from 'react'
import { TouchableHighlight, View, ScrollView, Text, TouchableOpacity, Image, Modal } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import { StackNavigator } from 'react-navigation'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/OriantationScreenStyle'

// Components
import RoundedButton from '../Components/RoundedButton'
import FullButton from '../Components/FullButton'
import ListviewSectionsExample from './ignite-ir-boilerplate/SectionExample'
import dataGame from '../Fixtures/game.json'


class OriantationScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
    var currentDataByStep = dataGame.step[props.count]

    const p = this.props
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }
  
  componentDidMount() {
    this.props.increment()
  }

  render () {
    const { navigate } = this.props.navigation
    const currentDataByStep = dataGame.step[this.props.count]
    //const { count } = this.props.game
    return (
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.containerMap} >
            <View style={styles.map} >
              <Text>///</Text>
            </View>
          </View>

          <View style={styles.halfSection} >
            <Text style={styles.titleText}>{currentDataByStep.title}</Text>
            <Text style={styles.subtitle}>ETAPE : {this.props.count}</Text>
            <Text style={styles.sectionText}>{currentDataByStep.desc}</Text>

            <RoundedButton
              text="J'y SUIS !"
              onPress={() => navigate('StepScreen')}
            />

            {/*
            <DrawerButton
              text='Example left drawer button'
              onPress={() => navigate('StepScreen')}
            />
            <TouchableHighlight onPress={this.toggleModal}>
              <Text>Show Modal</Text>
            </TouchableHighlight>

            <ListviewSectionsExample />
            
            <Modal
              animationType={"fade"}
              transparent={false}
              visible={this.state.showModal}
              onRequestClose={this.toggleModal}
              >
              <View style={{marginTop: 22}}>
                <View>
                  <Text>Hello World!</Text>
                </View>
              </View>

              <TouchableOpacity onPress={this.toggleModal} >
                <Image source={Images.closeButton} />
              </TouchableOpacity>
            </Modal>
            */}
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

export default connect(mapStateToProps, mapDispatchToProps)(OriantationScreen)
