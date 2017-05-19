import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
//import store from 'store/ConfigureStore'
import { MainScreen } from './MainScreen'


export default class Navigation extends Component {
  render(){
    return(
      <Provider store={{}}>
        <MainScreen />
      </Provider>
    )
  }
}