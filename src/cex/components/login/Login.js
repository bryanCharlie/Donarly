import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, logOutUser } from 'actions/auth';
import { getUserProfile } from 'actions/profile';
import { GlobalStyle, LoginStyle } from 'styles/main';


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

    onLogin = () => {
        console.log(this.state.email);
        this.props.loginUser({username: this.state.email, password: this.state.password}).then(res => {
            if(this.props.auth.user){
                this.props.getUserProfile()
                .then(res => {
                        console.log("IN LOGIN GETTING USER PROFILE ", this.props.profile)
                });
            }
        });
    }

    render() {
        const displayError = () => {
            return ( <Text style={LoginStyle.hidden}>
                Invalid Password. Please try again.
            </Text> );
        };

        return (
            <Image source={require('images/bg4.png')} style={LoginStyle.container}>
                <View style={LoginStyle.viewContainer}>
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor= "#f7f2f2"
                        returnKeyType="next"
                        onSubmitEditing={() => this.password.focus()}
                        autoCorrect={false}
                        autoCapitalize="none"
                        style={LoginStyle.input}
                        onChangeText={(text) => {
                            this.setState({email: text});
                        }}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor= "#f7f2f2"
                        returnKeyType="go"
                        style={LoginStyle.input}
                        secureTextEntry={true}
                        ref = {(input) => this.password = input}
                        onChangeText={(text) => {
                            this.setState({password: text});
                        }}
                    />
                    <TouchableOpacity
                        style = {LoginStyle.buttonContainer}
                        onPress={this.onLogin}>
                        <Text style={LoginStyle.button}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </Image>
        );
    }
}
