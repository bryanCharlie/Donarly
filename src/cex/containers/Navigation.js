import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from 'store/configureStore'
import { MainScreen } from './MainScreen'

const store = makeStore()

export default class Navigation extends Component {
  render(){
    return(
      <Provider store={store}>
        <MainScreen />
      </Provider>
    )
  }
}