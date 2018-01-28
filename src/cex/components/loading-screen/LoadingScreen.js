//File added by Robbi 
import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoadingScreenStyle } from 'styles/main';
import { getUser, removeUser, getToken } from 'lib/http';
import { loginUser, loginReturningUser, logOutUser } from 'actions/auth';
import { getUserProfile } from 'actions/profile';
import StackNavigator from 'react-navigation/src/navigators/StackNavigator';

const mapStateToProps = state => {
    return {
        auth: state.auth,
        profile: state.profile
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({loginUser, loginReturningUser, logOutUser, getUserProfile},  dispatch);
};

@connect(mapStateToProps, mapDispatchToProps)
export class LoadingScreen extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
         this.props.logOutUser(); //to be used as necessarily while debugging
        getUser().then(res => {
            if(res){
                this.props.loginReturningUser(res);
            }
        }).then(res => {
            this.props.getUserProfile()
            .then(res => {
                if(this.props.profile.userIsAuthenticated){
                    this.props.navigation.navigate('NavigationScreen');
                }
                else {
                    this.props.logOutUser();
                    this.props.navigation.navigate('Home'); //go to login page
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

    render(){
        return(
            <View style={LoadingScreenStyle.container}>
                <Text style={LoadingScreenStyle.text}>
                    Logo {/* to be replaced by Loading Screen Image logo or gif */}
                </Text>
            </View>
        );
    }
}
