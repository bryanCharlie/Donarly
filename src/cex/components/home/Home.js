import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from 'lib/http'
import * as authActions from 'actions/auth'

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        ...authActions
    }, dispatch )
}

@connect(mapStateToProps, mapDispatchToProps)

export class Home extends Component {
  constructor(props) {
     super(props);
  }

  componentWillMount = () => {
        console.log(this.props)
        getUser().then(res => {
            if(res){
                this.props.logInUser(res)
                this.props.navigation.navigate('NavigationScreen')
            }
        })
   }

  static navigationOptions = {
        header: null,
  }

  goToSignUp = () => {
   this.props.navigation.navigate('SignUp')
  }

 goToLogin = () => {
   this.props.navigation.navigate('Login')
 }
  render() {
    return (
    <Image source={require('images/bg4.png')} style={styles.container}>

        <View style = {styles.logoContainer}>
            <Image style={styles.logo} source = {require('images/logo2.png')}/>
              <Text style = {styles.title}>
              Spare Change
              </Text>
        </View>

        <View style={styles.viewContainer}>
            <TouchableOpacity
            style = {styles.buttonContainer}
            onPress={this.goToSignUp}
            >
               <Text style={styles.button}>
                 Sign Up
               </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.buttonContainer}
            onPress={this.goToLogin}
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
    padding: 5,
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch'
  },

viewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonContainer:{
    backgroundColor: '#ffffff',
    opacity: 0.5,
    marginTop: 0,
    borderRadius: 10,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 125,
    justifyContent: 'flex-end'
    },
  button: {
    textAlign: 'center',
    fontWeight: '600',
    margin: 5
  },

  logoContainer:{
    alignItems: 'center',
    marginTop: 100,
    opacity: 0.8,
  },
  logo: {
    height: 200,
    width: 200,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 100,
  },
  title: {
    paddingTop: 20,
    opacity: 0.7,
    marginBottom: 20

  },
})
