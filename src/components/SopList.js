import React from 'react'
import { View, Text } from 'react-native'
import withObservables from "@nozbe/with-observables"

const SopList = ({ movies }) => {
  return <View>
    {
      movies.map ( m => <Text>{m.sopName}</Text>)
    }
  </View>
}

const enhance = withObservables(['value'], ({database}) => ({
  movies: database.collections.get('downloads').query().fetch()
}))

export default enhance(SopList)