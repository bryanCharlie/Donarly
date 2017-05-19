import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';

export class Login extends Component {
    constructor(props){
        super(props)
        this.setState = {
            email: '',
            password: '',
            error: false
        }
        this.onLogin = this.onLogin.bind(this);
    }

    static navigationOptions = {
        title: 'Welcome',
    }

    onLogin = () => {
      this.props.navigation.navigate('NavigationScreen')
    }
  render() {
    const displayError = () => {
        return ( <Text style={styles.hidden}>
            Invalid Password. Please try again.
        </Text> )
    }

    return (
    <Image source={require('images/bg3.jpg')} style={styles.container}>
        <View style={styles.viewContainer}>
            <TextInput
                placeholder="Username"
                placeholderTextColor= "#f7f2f2"
                returnKeyType="next"
                onSubmitEditing={() => this.password.focus()}
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.input}
                onTextChange={(text) => {
                    this.setState({username: text})
                }}
              />
            <TextInput
                placeholder="Password"
                placeholderTextColor= "#f7f2f2"
                returnKeyType="go"
                style={styles.input}
                secureTextEntry={true}
                ref = {(input) => this.password = input}
                onTextChange={(text) => {
                    this.setState({password: text})
                }}
                />
            <TouchableOpacity
            style = {styles.buttonContainer}
            onPress={this.onLogin}
            >
               <Text style={styles.button}>
                 Login
               </Text>
            </TouchableOpacity>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
  input: {
    height: 35,
    color: '#ffffff',
    marginBottom: 10,
    paddingHorizontal : 10,
    borderRadius: 10,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    opacity: 0.9
  },
  viewContainer: {
    flex: 1,
    justifyContent:'center'
  },
  buttonContainer:{
    backgroundColor: '#ffffff',
    opacity: 0.5,
    marginTop: 30,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center'
    },
  button: {
    textAlign: 'center',
    fontWeight: '600'
    },
})
