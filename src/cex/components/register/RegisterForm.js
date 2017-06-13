import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native';

import style from 'styles/main';

export class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.onSignUp= this.onSignUp.bind(this);
    }

    onSignUp(){
        this.props.navigator.push({
            name: 'Login',
            passProps: {}
        });
    }

    render() {
        return (
            <View>
            <TextInput
                placeholder="Username"
                placeholderTextColor= "#f7f2f2"
                returnKeyType="next"
                onSubmitEditing={() => this.email.focus()}
                autoCorrect={false}
                autoCapitalize="none"
                underlineColorAndroid='transparent'
                style={style.input}
            />
            <TextInput
                placeholder="Email"
                placeholderTextColor= "#f7f2f2"
                returnKeyType="next"
                ref = {(input) => this.email = input}
                onSubmitEditing={() => this.password.focus()}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                underlineColorAndroid='transparent'
                style={style.input}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor= "#f7f2f2"
                returnKeyType="next"
                secureTextEntry={true}
                ref = {(input) => this.password = input}
                onSubmitEditing={() => this.name.focus()}
                autoCorrect={false}
                autoCapitalize="none"
                underlineColorAndroid='transparent'
                style={style.input}
            />
            <TextInput
                placeholder="Name"
                placeholderTextColor= "#f7f2f2"
                returnKeyType="next"
                ref = {(input) => this.name = input}
                onSubmitEditing={() => this.dob.focus()}
                autoCorrect={false}
                autoCapitalize="none"
                underlineColorAndroid='transparent'
                style={style.input}
            />
            <TextInput
                placeholder="Date of Birth"
                placeholderTextColor= "#f7f2f2"
                returnKeyType="next"
                style={style.input}
                ref = {(input) => this.dob = input}
                onSubmitEditing={() => this.location.focus()}
                autoCorrect={false}
                autoCapitalize="none"
                underlineColorAndroid='transparent'
              />
            <TextInput
                placeholder="Location"
                placeholderTextColor= "#f7f2f2"
                returnKeyType="go"
                ref = {(input) => this.location = input}
                autoCorrect={false}
                autoCapitalize="none"
                underlineColorAndroid='transparent'
                style={style.input}
              />
            <Text style = {style.agreement}>
            By creating an account you agree to our {'\n'}
            <Text style={style.boldText}>
            Terms & Conditions
            </Text> and
            <Text style={style.boldText}>
            Privacy Policy
            </Text>
            </Text>
            <TouchableHighlight onPress={this.onSignUp} style = {style.buttonContainer}>
            <Text style={style.signUpButton}>
              Sign Up
            </Text>
            </TouchableHighlight>
            </View>
        );
    }
}
