import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { Home } from 'components/home/Home';
import { LoadingScreen } from 'components/loading-screen/LoadingScreen';
import { Login } from 'components/login/Login';
import { Register } from 'components/register/Register';
import { NavigationScreen } from './NavigationScreen';
import { Profile } from 'components/profile/Profile';
import { Settings } from 'components/calculator/Calculator';
import { Search } from 'components/search/Search';
import { OrgDetail } from 'components/organizations/OrgDetail';
import { Card } from 'components/assets/Card';
import { CreditContainer } from 'components/credit-card/CreditContainer';

import { CardSwiper } from 'components/assets/CardSwiper';

//DrawerNavigator isn't doing anything as of now, So I comment it out. -RK

// const HomeScreen = DrawerNavigator({
//     Home: { screen: Home }
// });

export const MainScreen = StackNavigator({
    LoadingScreen: { screen: LoadingScreen },
    Home: { screen: Home },
    Search: { screen: Search },
    Login: { screen: Login },
    Register: { screen: Register },
    NavigationScreen: { screen: NavigationScreen }
});
