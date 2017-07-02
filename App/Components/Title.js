import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/TitleStyle'

export default class Title extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Title Component</Text>
      </View>
    )
  }
}

// // Prop type warnings
// Title.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// Title.defaultProps = {
//   someSetting: false
// }
