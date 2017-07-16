import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export default class HeaderRight extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
    console.tron.display({
      name: 'TEST',
      value: props
    })
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <TouchableOpacity
        accessibilityTraits='button'
        onPress={() =>
            navigate('FullMapScreen')
            // console.tron.log(OrientationScreen)
          }
        activeOpacity={0.8}
        >
        <Icon name='location-pin' style={{paddingRight: 10}} size={25} color='white' />
      </TouchableOpacity>
    )
  }
}
