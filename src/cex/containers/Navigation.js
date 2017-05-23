import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from 'store/configureStore'
import { MainScreen } from './MainScreen'
import { getUser } from 'lib/http'

const store = configureStore()

console.log(store.getState())

export default class Navigation extends Component {
  constructor(props){
    super(props)
    this.state = {
      isFetching: true
    }
  }

  componentWillMount = () => {

  }

  render(){
    return(
      <Provider store={store}>
        <MainScreen />
      </Provider>
    )
  }
}