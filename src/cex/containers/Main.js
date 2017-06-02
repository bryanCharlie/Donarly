import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from 'store/ConfigureStore'
import { MainScreen } from './MainScreen'

const store = configureStore()

console.log(store.getState())

export default class Navigation extends Component {
  render(){
    return(
      <Provider store={store}>
        <MainScreen/>
      </Provider>
    )
  }
}
