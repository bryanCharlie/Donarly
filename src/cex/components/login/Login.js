import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';

import { GlobalStyle, LoginStyle } from 'styles/main';
export class Login extends Component {
    constructor(props){
        super(props);
        this.setState = {
            email: '',
            password: '',
            error: false
        };
        this.onLogin = this.onLogin.bind(this);
    }
    onLogin = () => {
        this.props.navigation.navigate('Profile');
    }
    render() {
        const displayError = () => {
            return ( <Text style={LoginStyle.hidden}>
                Invalid Password. Please try again.
            </Text> );
        };

        return (
            <Image source={require('images/bg4.png')} style={LoginStyle.container}>
                <View style={LoginStyle.viewContainer}>
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor= "#f7f2f2"
                        returnKeyType="next"
                        onSubmitEditing={() => this.password.focus()}
                        autoCorrect={false}
                        autoCapitalize="none"
                        style={LoginStyle.input}
                        onTextChange={(text) => {
                            this.setState({username: text});
                        }}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor= "#f7f2f2"
                        returnKeyType="go"
                        style={LoginStyle.input}
                        secureTextEntry={true}
                        ref = {(input) => this.password = input}
                        onTextChange={(text) => {
                            this.setState({password: text});
                        }}
                    />
                    <TouchableOpacity
                        style = {LoginStyle.buttonContainer}
                        onPress={this.onLogin}>
                        <Text style={LoginStyle.button}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </Image>
        );
    }
}
