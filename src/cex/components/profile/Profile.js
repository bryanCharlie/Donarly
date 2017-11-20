import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser, removeUser, getToken } from 'lib/http';
import { loginUser, loginReturningUser, logOutUser } from 'actions/auth';
import { getUserProfile } from 'actions/profile';
import { GlobalStyle, HomeStyle } from 'styles/main';
import { Button } from 'components/assets/Button';

export class Profile extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        getUser().then(res => {
            if(res){
                this.props.loginReturningUser(res);
            }
        }).then(res => console.log('logged in'));
    }

    componentWillReceiveProps = (props) => {
        console.log(props);
    }

    static navigationOptions = {
        header: null
    }

    goToNavigationScreen = () => {
        this.props.navigate('NavigationScreen');
    }

    goToSignUp = () => {
        this.props.navigation.navigate('Categories');
    }

    goToLogin = () => {
        this.props.navigation.navigate('Login');
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View
                    style={{
                        alignItems: 'center',
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        height: Dimensions.get('window').height / 3
                    }}>
                    <Button onButtonPress={() => {}} buttonColor={'orange'} buttonText={'HEYYYYY'} textColor={'blue'}/>
                    <Text style={{ color: 'white' }}>Test</Text>
                    </View>
                    <View
                    style={{
                        alignItems: 'flex-start',
                        backgroundColor: 'green',
                        justifyContent:'center',
                        height: Dimensions.get('window').height / 3
                    }}>
                    <Text style={{ color: 'white' }}>Test</Text>
                    </View>
                    <View
                    style={{
                        alignItems: 'center',
                        backgroundColor: 'blue',
                        justifyContent: 'center',
                        height: Dimensions.get('window').height / 3
                    }}>
                    <Text style={{ color: 'white' }}>Test</Text>
                    </View>
                </View>
            </View>
        );
    }
}
