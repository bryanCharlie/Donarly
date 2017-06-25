import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser, getToken } from 'lib/http';
import { loginUser, loginReturningUser, logOutUser } from 'actions/auth';
import { GlobalStyle, HomeStyle } from 'styles/main';

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loginUser,
        loginReturningUser,
        logOutUser
    }, dispatch );
};

@connect(mapStateToProps, mapDispatchToProps)

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        console.log(this.props);
        this.props.loginUser({username: 'bcharlie@mail.com', password: 'ttirocks123'}).then(console.log('OMFG THIS SHIT WORKS'));
    }

    componentWillReceiveProps = (props) => {
        console.log(props);
    }

    static navigationOptions = {
        header: null
    }

    goToSignUp = () => {
        this.props.navigation.navigate('Categories');
    }

    goToLogin = () => {
        this.props.navigation.navigate('Login');
    }
    render() {
        return (
            <Image source={require('images/bg4.png')} style={GlobalStyle.container}>

                <View style = {HomeStyle.logoContainer}>
                    <Image style={HomeStyle.logo} source = {require('images/logo2.png')}/>
                    <Text style = {HomeStyle.title}>
                        Donarly
                    </Text>
                </View>

                <View style={HomeStyle.viewContainer}>
                    <TouchableOpacity
                        style = {HomeStyle.buttonContainer}
                        onPress={this.goToSignUp}
                    >
                        <Text style={HomeStyle.button}>
                        Sign Up
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {HomeStyle.buttonContainer}
                        onPress={this.goToLogin}
                    >
                        <Text style={HomeStyle.button}>
                        Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </Image>
        );
    }
}
