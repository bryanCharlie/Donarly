import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import React, { Component } from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import { Home } from 'components/home/Home'
import { Categories } from 'components/categories/Categories'
import { Login } from 'components/login/Login'
import { Register } from 'components/register/Register'
import { NavigationScreen } from './NavigationScreen'

const HomeScreen = DrawerNavigator({
  Home: { screen: Home }
})

export const MainScreen = StackNavigator({
    Home: { screen: HomeScreen },
    Login: { screen: Login },
    SignUp: { screen: Register },
    NavigationScreen: { screen: NavigationScreen }
})