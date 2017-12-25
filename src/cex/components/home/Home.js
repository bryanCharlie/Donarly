import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser, removeUser, getToken } from 'lib/http';
import { loginUser, loginReturningUser, logOutUser } from 'actions/auth';
import { getUserProfile } from 'actions/profile';
import { GlobalStyle, HomeStyle } from 'styles/main';

const mapStateToProps = state => {
    return {
        auth: state.auth,
        profile: state.profile
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loginUser,
        loginReturningUser,
        logOutUser,
        getUserProfile
    }, dispatch );
};

@connect(mapStateToProps, mapDispatchToProps)

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        getUser().then(res => {
            if(res){
                this.props.loginReturningUser(res);
            }
        }).then(res => {
            this.props.getUserProfile()
            .then(res => {
                if(this.props.profile.userIsAuthenticated){
                    this.goToNavigationScreen();
                }
                else {
                    this.props.logOutUser();
                }
            });
        }
        );
    }

    componentWillReceiveProps = (props) => {
        console.log(props);
    }

    static navigationOptions = {
        header: null
    }

    goToNavigationScreen = () => {//Note: not being used
        this.props.navigate('NavigationScreen');
    }

    goToSignUp = () => {
        this.props.navigation.navigate('Register');
    }

    goToLogin = () => {
        this.props.navigation.navigate('Login');
    }
    render() {
        return (
            <View style = {HomeStyle.viewContainer}>
                <View style = {HomeStyle.logoContainer}>
                    <Image style={HomeStyle.logo} source = {require('images/logo3.png')}/>
                    <Text style = {HomeStyle.title}>
                        Donarly
                    </Text>
                </View>
                
                <View style={HomeStyle.viewContainer}>

                    <TouchableOpacity
                        style = {HomeStyle.buttonContainer}
                        onPress={this.goToLogin}
                    >
                        <Text style={HomeStyle.button}>
                        Sign In
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {HomeStyle.buttonContainer}
                        onPress={this.goToSignUp}
                    >
                        <Text style={HomeStyle.button}>
                        Sign Up
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
