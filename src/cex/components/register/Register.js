import React, { Component } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { RegisterForm } from './RegisterForm';

import style from 'styles/main';

export class Register extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <Image source = {require('images/bg4.png')} style={style.container}>
          <ScrollView>
          <View style = {style.logoContainer}>
              <Image style={style.logo} source = {require('images/logo2.png')}/>
              <Text style = {style.title}>
              Spare Change
              </Text>
          </View>
          <View>
              <RegisterForm navigator={this.props.navigator} />
          </View>
          </ScrollView>
          </Image>
        );
    }
}
