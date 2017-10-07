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
import { OrganizationContainer } from 'components/organizations/OrganizationContainer';
import { OrgDetail } from 'components/organizations/OrgDetail';
// import { charityCard } from 'components/assets/cardElement';
import { CardBase } from 'components/assets/Card';

// const HomeScreen = DrawerNavigator({
//     Home: { screen: Home }
// });

export const MainScreen = StackNavigator({
    Home: { screen: Home },
    Categories: { screen: Categories },
    Login: { screen: Login },
    Register: { screen: Register },
    NavigationScreen: { screen: NavigationScreen },
    OrgDetail: {screen: OrgDetail,
        mode: 'modal',
        navigationOptions: ({navigation}) =>({
            org: navigation.state.params.org
        })}
});
