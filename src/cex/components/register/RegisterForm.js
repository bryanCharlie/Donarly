import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native';

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
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          placeholderTextColor= "#f7f2f2"
          returnKeyType="next"
          onSubmitEditing={() => this.email.focus()}
          autoCorrect={false}
          autoCapitalize="none"
          underlineColorAndroid='transparent'
          style={styles.input}
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
          style={styles.input}
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
          style={styles.input}
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
          style={styles.input}
        />
        <TextInput
          placeholder="Date of Birth"
          placeholderTextColor= "#f7f2f2"
          returnKeyType="next"
          style={styles.input}
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
          style={styles.input}
        />
        <Text style = {styles.agreement}>
          By creating an account you agree to our {"\n"}
          <Text style={styles.boldText}>
          Terms & Conditions
          </Text> and
          <Text style={styles.boldText}>
          Privacy Policy
          </Text>
        </Text>
        <TouchableHighlight onPress={this.onSignUp} style = {styles.buttonContainer}>
        <Text style={styles.signUpButton}>
          Sign Up
        </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  input: {
    height: 35,
    color: '#ffffff',
    marginBottom: 10,
    paddingHorizontal : 10,
    borderRadius: 10,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: '#f9e5e5'
  },
  agreement: {
    fontWeight: '100',
    fontSize: 10,
    marginTop: 10,
    textAlign: 'center',
    color: '#ffffff'
  },
  boldText: {
    fontWeight: '700',
  },
  buttonContainer:{
    backgroundColor: '#ffffff',
    opacity: 0.5,
    marginTop: 40,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center'
  },
  signUpButton: {
    textAlign: 'center',
    fontWeight: '600'
  }
})
