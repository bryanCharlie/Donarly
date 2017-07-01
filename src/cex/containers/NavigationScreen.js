import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Home } from 'components/home/Home';
import { Categories } from 'components/categories/Categories';
import { Settings } from 'components/calculator/Calculator';
import { OrgList } from 'components/organizations/OrgList';

export const NavigationScreen = TabNavigator({
    Home: { screen: OrgList },
    Settings: { screen: Settings }
});
