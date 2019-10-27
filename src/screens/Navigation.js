import React from "react"

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Root from './Root'

export const createNavigation = props => 
  createAppContainer(
    createStackNavigator({
      Root: {
        screen: ({ navigation }) => {
          const { database } = props
          return <Root database={database} navigation={navigation} />
        }
      }
    })
  )