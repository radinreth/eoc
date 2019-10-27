import React from 'react'
import { View, Text } from 'react-native'

class Root extends React.Component {
  render() {
    console.log( this.props.database )
    return <View>
    <Text>Hello</Text>
  </View>
  }
}

export default Root