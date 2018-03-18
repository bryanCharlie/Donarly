import React, { Component } from 'react';
import { View, TextInput, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, logOutUser } from 'actions/auth';
import { getUserProfile } from 'actions/profile';
import { GlobalStyle, LoginFormStyle, LoginRegisterStyle, FormStyle } from 'styles/main';
import Foundation from 'react-native-vector-icons/Foundation';


const mapStateToProps = state => {
    return {
        auth: state.auth,
        profile: state.profile
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loginUser,
        logOutUser,
        getUserProfile
    }, dispatch );
};

@connect(mapStateToProps, mapDispatchToProps)


export class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: false
        };
    }

    static navigationOptions = {
        header: null
    }

    navigateReturn = () => {
        this.props.navigation.goBack();
    }

    onLogin = () => {
        console.log(this.state.email);
        this.props.loginUser({username: this.state.email, password: this.state.password}).then(res => {
            if(this.props.auth.user){
                this.props.getUserProfile()
                .then(res => {
                    this.props.navigation.navigate('NavigationScreen');
                    console.log('IN LOGIN GETTING USER PROFILE ', this.props.profile);
                });
            }
        });
    }

    render() {
        const displayError = () => {
            return ( <Text>
                Invalid Password. Please try again.
            </Text> );
        };

        return (
            <View style={LoginRegisterStyle.container}>
                <View style = {LoginRegisterStyle.headerContainer}>
                    <TouchableOpacity onPress={this.navigateReturn}>
                        <Foundation name='x' size={32} color='#fff' />
                    </TouchableOpacity>

                </View>
                <View style={LoginFormStyle.container}>
                    <View style={[FormStyle.inputLine, LoginFormStyle.input]}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder="Username"
                            returnKeyType="next"
                            onSubmitEditing={() => this.password.focus()}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(text) => {
                                this.setState({email: text});
                            }}
                            style={FormStyle.input}
                        />
                    </View>
                    <View style={[FormStyle.inputLine, LoginFormStyle.input]}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder="Password"
                            returnKeyType="go"
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                this.setState({password: text});
                            }}
                            style={FormStyle.input}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={this.onLogin}
                        style = {FormStyle.buttonContainer}    
                    >
                        <Text style = {FormStyle.button}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
