import React, { Component } from 'react';
import { View, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ReduxRegisterForm } from 'components/register/RegisterForm';
import { NavigationActions } from 'react-navigation';

import { GlobalStyle, RegisterStyle } from 'styles/main';

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
            <View style={RegisterStyle.container}>
                <View style = {RegisterStyle.headerContainer}>
                    <TouchableOpacity onPress={this.navigateReturn}>
                        <ImageBackground style = {RegisterStyle.backButtonStyle} source={require('icons/back.png')}/>
                    </TouchableOpacity>

                    <Text style = {RegisterStyle.header}>
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
