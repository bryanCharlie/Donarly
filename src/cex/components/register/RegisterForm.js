import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { registerUser } from 'actions/auth';
import { RegisterFormStyle } from 'styles/main';
import { validate } from 'lib/validation';

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        registerUser
    }, dispatch );
};

const resetAction = NavigationActions.reset({// The Reset action wipes the whole navigation state and replaces it with the result of several actions.
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'NavigationScreen'})
    ]
});

@connect(mapStateToProps, mapDispatchToProps)
class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            error: false
        };
        this.confirmPassword = this.confirmPassword.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    confirmPassword = (value) =>{
        console.log('password state val', this.state.password);
        if(value === this.state.password){
            return undefined;
        }
        else{
            return 'password not same';
        }
    };

// this is some dirty code ...
    MyTextInput=(props)=> {
        const {
            input,
            type,
            name,
            meta,
            touched,
            secureTextEntry,
            placeholder,
            onChangeText,
            ...inputProps
        } = props;

        formStates = [
        'asyncValidating',
        'dirty',
        'pristine',
        'valid',
        'invalid',
        'submitting',
        'submitSucceeded',
        'submitFailed'];
//for checking
        console.log({placeholder},{meta});
        console.log('RegisterForm props',this.state);
        console.log('this curr value: ', input.value);

        const passState = () => {
            if({name} != confirmPassword){
                this.setState({ name : input.value });
            }
        };

        return (
          <View>
            <View style = {RegisterFormStyle.inputLine}>

            <TextInput
            underlineColorAndroid='transparent'
            {...inputProps}
            onChangeText={(val) => {
                input.onChange(val)
                onChangeText(val)
            }}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            value={input.value}
            secureTextEntry={secureTextEntry}
            type ={type}
            placeholder ={placeholder}
            placeholderTextColor = '#C08200'
            style={RegisterFormStyle.input}
            />
            </View>

            <Text style = {RegisterFormStyle.errorNotice}>
            {this.showError(meta.dirty, meta.touched, meta.error)}
            </Text>

         </View>
        );
    }

    componentWillMount=()=>{
      //  console.log(this.props.handleSubmit);
    }

//Robbi
    showError = (dirty, touched, error) => {
        if(dirty & touched){
            if(!error)
                return '';
            return <Text> - {error} </Text>;
        }
    }

    onSignUp=()=>{
        this.props.registerUser({
            lastname: this.state.lastname,
            firstname: this.state.firstname,
            email:this.state.email,
            password: this.state.password
        }).then(res =>{
            if(this.props.auth.user){
              this.props.navigation.dispatch(resetAction);
            }
        }); 
    }

    onChange=(text)=>{
        const stateprop = this.props.name;
        this.setState(stateprop: text).then(res => {
            this.validate(text);
        })
    }

    render() {
        console.log('regForm state',this.state); //for checking
        return (

            <View>

                <Field name = "firstname"
                component = {this.MyTextInput}
                secureTextEntry = {false}
                type ='text'
                placeholder = "First Name"
                onChangeText = {(val) => this.setState({firstname: val})}
                />

                <Field name = "lastname"
                 component = {this.MyTextInput}
                 secureTextEntry = {false}
                 type = 'text'
                 placeholder = "Last Name"
                 onChangeText = {(val) => this.setState({lastname: val})}
                />

                <Field name = 'email'
                component = {this.MyTextInput}
                secureTextEntry = {false}
                type = 'email'
                placeholder = "Email"
                onChangeText = {(val) => this.setState({email: val})}
                 />

                <Field name = 'password'
                component = {this.MyTextInput}
                secureTextEntry = {true}
                type = 'password'
                placeholder = "Password"
                onChangeText = {() => {}}
                />

                <Field name = 'confirmPassword'
                component = {this.MyTextInput}
                secureTextEntry = {true}
                type = 'password'
                placeholder = "Confirm Password"
                onChangeText = {(val) => this.setState({password: val})}
                />

                <Text style = {RegisterFormStyle.agreement}>
                By creating an account, you agree to our {'\n'}
                    <Text style = {RegisterFormStyle.boldText}>
                    Terms & Conditions
                    </Text> and <Text style = {RegisterFormStyle.boldText}>
                    Privacy Policy
                    </Text>
                </Text>
                <TouchableHighlight onPress = {this.onSignUp} style = {RegisterFormStyle.buttonContainer}>
                    <Text style = {RegisterFormStyle.signUpButton}>
                        Next
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export const ReduxRegisterForm = reduxForm({ form: 'signIn',validate  })(RegisterForm);
