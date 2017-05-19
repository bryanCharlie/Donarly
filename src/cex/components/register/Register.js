import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { RegisterForm } from './RegisterForm';


export class Register extends Component {
  constructor(props) {
     super(props);
 }
  render() {
    return (
      <Image source = {require('images/bg3.jpg')} style={styles.container}>
      <ScrollView>
        <View style = {styles.logoContainer}>
          <Image style={styles.logo} source = {require('images/logo.png')}/>
          <Text style = {styles.title}>
            Spare Change
          </Text>
        </View>
        <View style={styles.formContainer}>
          <RegisterForm navigator={this.props.navigator} />
        </View>
        </ScrollView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
  logoContainer:{
    alignItems: 'center',
    marginTop: 50
  },
  logo: {
    height: 100,
    width: 100
  },
  title: {
    paddingTop: 10,
    opacity: 0.9,
    marginBottom: 20,
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 20
  }
});
