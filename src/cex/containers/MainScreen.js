import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { Home } from 'components/home/Home';
import { Categories } from 'components/categories/Categories';
import { Login } from 'components/login/Login';
import { Register } from 'components/register/Register';
import { NavigationScreen } from './NavigationScreen';
import { Profile } from 'components/profile/Profile';
import { Settings } from 'components/calculator/Calculator';

const HomeScreen = DrawerNavigator({
    Home: { screen: Home }
});

export const MainScreen = StackNavigator({
    Home: { screen: Home },
    Categories: { screen: Categories },
    Login: { screen: Login },
    Register: { screen: Register },
    NavigationScreen: { screen: NavigationScreen }
});
