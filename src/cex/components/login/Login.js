import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';

import style from 'styles/main';
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
    this.props.navigator.push({
      name: 'Welcome',
      passProps: {}
    });
  }
  render() {
    const displayError = () => {
      return ( <Text style={style.hidden}>
        Invalid Password. Please try again.
      </Text> );
    };

      return (
          <Image source={require('images/bg4.png')} style={style.container}>
          <View style={style.viewContainer}>
          <TextInput
              placeholder="Username"
              placeholderTextColor= "#f7f2f2"
              returnKeyType="next"
              onSubmitEditing={() => this.password.focus()}
              autoCorrect={false}
              autoCapitalize="none"
              style={style.input}
              onTextChange={(text) => {
                  this.setState({username: text});
              }}
            />
          <TextInput
              placeholder="Password"
              placeholderTextColor= "#f7f2f2"
              returnKeyType="go"
              style={style.input}
              secureTextEntry={true}
              ref = {(input) => this.password = input}
              onTextChange={(text) => {
                  this.setState({password: text});
              }}
            />
          <TouchableOpacity
              style = {style.buttonContainer}
              onPress={this.onLogin}>
              <Text style={style.button}>
                Login
              </Text>
          </TouchableOpacity>
          </View>
          </Image>
      );
  }
}
