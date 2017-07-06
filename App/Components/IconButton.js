import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/IconButtonStyle'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export default class IconButton extends React.Component {
  render () {
    return (
      <TouchableOpacity
        accessibilityTraits='button'
        onPress={this.props.onPress}
        activeOpacity={0.8}
        style={[styles.IconButtonContainer, this.props.style]}
        source={this.props.source}
      >
        <View style={styles.IconButtonView}>
          <View style={styles.IconButtonViewIc}>
            <Icon style={styles.IconButtonIc} name={this.props.icon} size={20} />
          </View>
          <Text style={styles.IconButtonText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

// // Prop type warnings
// IconButton.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// IconButton.defaultProps = {
//   someSetting: false
// }
