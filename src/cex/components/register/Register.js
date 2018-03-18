import React, { Component } from 'react';
import { View, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ReduxRegisterForm } from 'components/register/RegisterForm';
import { NavigationActions } from 'react-navigation';

import { GlobalStyle, LoginRegisterStyle } from 'styles/main';

export class Register extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    navigateReturn = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={LoginRegisterStyle.container}>
                <View style = {LoginRegisterStyle.headerContainer}>
                    <TouchableOpacity onPress={this.navigateReturn}>
                        <ImageBackground style = {LoginRegisterStyle.backButtonStyle} source={require('icons/back.png')}/>
                    </TouchableOpacity>

                    <Text style = {LoginRegisterStyle.header}>
                        Enter Profile Info
                    </Text>
                </View>

                <ScrollView>
                    <View>
                        <ReduxRegisterForm navigation={this.props.navigation} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
