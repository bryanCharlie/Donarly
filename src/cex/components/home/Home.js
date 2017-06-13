import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from 'lib/http';
import * as authActions from 'actions/auth';
import style from 'styles/main';

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        ...authActions
    }, dispatch );
};

@connect(mapStateToProps, mapDispatchToProps)

export class Home extends Component {
    constructor(props) {
        super(props);
    }

  componentWillMount = () => {
        console.log(this.props)
        getUser().then(res => {
            if(res){
                this.props.loginReturningUser(res)
                this.props.navigation.navigate('NavigationScreen')
            }
        })
   }

   componentWillReceiveProps = (props) => {
    console.log(props)
   }

  static navigationOptions = {
        header: null
  }

  goToSignUp = () => {
   this.props.navigation.navigate('SignUp');
  }

 goToLogin = () => {
   this.props.navigation.navigate('Login');
 }
  render() {
    return (
    <Image source={require('images/bg4.png')} style={style.container}>

        <View style = {style.logoContainer}>
            <Image style={style.logo} source = {require('images/logo2.png')}/>
              <Text style = {style.title}>
              Spare Change
              </Text>
        </View>

        <View style={style.viewContainer}>
            <TouchableOpacity
            style = {style.buttonContainer}
            onPress={this.goToSignUp}
            >
               <Text style={style.button}>
                 Sign Up
               </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {style.buttonContainer}
            onPress={this.goToLogin}
            >
               <Text style={style.button}>
                 Login
               </Text>
            </TouchableOpacity>


        </View>
      </Image>
    );
  }
}
