import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { GlobalStyle, HomeStyle } from 'styles/main';
/* I moved everything to loading screen -RD */

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps = (props) => {
        console.log(props);
    }

    static navigationOptions = {
        header: null
    }

    goToSignUp = () => {
        this.props.navigation.navigate('Register');
    }

    goToLogin = () => {
        this.props.navigation.navigate('Login');
    }
    
    render() {
        return (
            <View style = {HomeStyle.viewContainer}>
                <View style = {HomeStyle.logoContainer}>
                    <Image style={HomeStyle.logo} source = {require('images/logo3.png')}/>
                    <Text style = {HomeStyle.title}>
                        Donarly
                    </Text>
                </View>
                
                <View style={HomeStyle.viewContainer}>

                    <TouchableOpacity
                        style = {HomeStyle.buttonContainer}
                        onPress={this.goToLogin}
                    >
                        <Text style={HomeStyle.button}>
                        Sign In
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {HomeStyle.buttonContainer}
                        onPress={this.goToSignUp}
                    >
                        <Text style={HomeStyle.button}>
                        Sign Up
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
