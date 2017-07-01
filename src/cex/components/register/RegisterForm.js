import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native';

import { RegisterFormStyle } from 'styles/main';

export class RegisterForm extends Component {
    constructor(props) {
        super(props);
      //  this.onSignUp= this.onSignUp.bind(this);
    }

    onSignUp=()=>{
        console.log('RegisterForm props ',this.props);
        this.props.navigation.navigate('NavigationScreen');

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
                    style={RegisterFormStyle.input}
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
                    style={RegisterFormStyle.input}
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
                    style={RegisterFormStyle.input}
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
                    style={RegisterFormStyle.input}
                />
                <TextInput
                    placeholder="Date of Birth"
                    placeholderTextColor= "#f7f2f2"
                    returnKeyType="next"
                    style={RegisterFormStyle.input}
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
                    style={RegisterFormStyle.input}
                />
                <Text style = {RegisterFormStyle.agreement}>
                By creating an account you agree to our {'\n'}
                    <Text style={RegisterFormStyle.boldText}>
                    Terms & Conditions
                    </Text> and
                    <Text style={RegisterFormStyle.boldText}>
                    Privacy Policy
                    </Text>
                </Text>
                <TouchableHighlight onPress={this.onSignUp} style = {RegisterFormStyle.buttonContainer}>
                    <Text style={RegisterFormStyle.signUpButton}>
                        Sign Up
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}
