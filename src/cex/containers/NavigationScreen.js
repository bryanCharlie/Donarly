import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Home } from 'components/home/Home';
import { Categories } from 'components/categories/Categories';
import { Charities } from 'components/organizations/Charities';
import { Settings } from 'components/calculator/Calculator';

export const NavigationScreen = TabNavigator({
    Home: { screen: Charities },
    Settings: { screen: Settings }
}, //RouteConfigs
    {
        tabBarOptions: {
            // activeTintColor: '#2A9D8F',
            activeTintColor: '#2A9D8F',
            //style object for the tab bar
            style: {
                backgroundColor: '#F7FFF7'
            },
            //style object for the tab
            tabStyle: {//super tentative
                height: 50,
                width: 50
            },
            iconStyle: {
                height:16,
                width:16
            },
            //style object for the tab label
            labelStyle: {
                textAlign: 'center',
                fontSize: 10
                // marginBottom: 5
            },
            showIcon: true,
            showLabel: false
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom'
    }//TabNavigator configs
);
