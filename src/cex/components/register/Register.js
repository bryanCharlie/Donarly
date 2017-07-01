import React, { Component } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { RegisterForm } from './RegisterForm';

import { GlobalStyle, RegisterStyle } from 'styles/main';

export class Register extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Image source = {require('images/bg4.png')} style={RegisterStyle.container}>
                <ScrollView>
                    <View style = {RegisterStyle.logoContainer}>
                        <Image style={RegisterStyle.logo} source = {require('images/logo2.png')}/>
                        <Text style = {RegisterStyle.title}>
                        Donarly
                        </Text>
                    </View>
                    <View>
                        <RegisterForm navigation={this.props.navigation} />
                    </View>
                </ScrollView>
            </Image>
        );
    }
}
