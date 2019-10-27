import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { Download } from '../models/Download'
import SopList from '../components/SopList'

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      no: 0
    }
  }
  
  onChangeText(value) {
    this.setState({ value })
  }

  async handleAdd() {
    let {database} = this.props
    let {value} = this.state
    let collection = database.collections.get('downloads')

    await database.action(async() => {
      const newSop = await collection.create(sop => {
        sop.sopName = value
      })
    })

    this.setState( prev => {
      return {
        no: prev.no + 1
      }
    })
  }

  render() {
    return <View>

    <SopList 
      value={this.state.no} 
      database={this.props.database}/>

    <TextInput 
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => this.onChangeText(text)}
      value={this.state.value} />

    <Button 
      title="click me"
      onPress={() => this.handleAdd() }
    />
  </View>
  }
}

export default Root