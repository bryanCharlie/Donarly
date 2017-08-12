import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { registerUser } from 'actions/auth';
import { RegisterFormStyle } from 'styles/main';

//form validition constants
const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

const password = value =>
value && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value)?
'Invalid password, must contain at least: 8 characters, one uppercase, one lowercase and, one number': undefined;

const required = value => value ? undefined : 'Required';

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
    }

// this is some dirty code ...
    MyTextInput=(props)=> {
        const { input, type , meta, touched, secureTextEntry, placeholder,  ...inputProps } = props;
        formStates = ['asyncValidating', 'dirty', 'pristine', 'valid', 'invalid', 'submitting',
            'submitSucceeded', 'submitFailed'];
        console.log({placeholder},{meta});
        console.log('this curr value: ', input.value);
        return (
          <View>
            <TextInput
              {...inputProps}
              onChangeText={input.onChange}
              onBlur={input.onBlur}
              onFocus={input.onFocus}
              value={input.value}
              secureTextEntry={secureTextEntry}
              placeholder ={placeholder}
              style={RegisterFormStyle.input}
              />
              {touched && ((error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))}

              <Text>The { input.name} input is:</Text>
 {
   formStates.filter((state) => meta[state]).map((state) => {
       return <Text key={state}> - { state }</Text>;
   })
 }
          </View>
        );
    }

    componentWillMount=()=>{
      //  console.log(this.props.handleSubmit);
    }

    onSignUp=()=>{
        console.log('RegisterForm props ',this.props);
        // this.props.navigation.navigate('NavigationScreen'); for testing purposes
        this.props.registerUser({email:this.state.email,
            password: this.state.password,
            lastname: this.state.lastname,
            firstname: this.state.firstname}).then(res =>{
                if(this.props.auth.user){
                    this.props.navigation.navigate('NavigationScreen');
                }
            });
    }

    onChange=(text)=>{
        const stateprop = this.props.name;
        this.setState({stateprop: text});
    }


    render() {
        console.log('regFrom state', this.state);
        return (
            <View>

                <Field name='email'
                component={this.MyTextInput}
                validate={[email, required]}
                secureTextEntry= {false}
                placeholder = "Email"
                 />

                <Field name='password'
                component={this.MyTextInput}
                validate={[password, required]}
                secureTextEntry={true}
                placeholder = "password"
                />

                <Field name="password confirm"
                component={this.MyTextInput}
                validate={[password, required]}
                secureTextEntry={true}
                placeholder = "confirm password"
                />

                <Field name="firstname"
                component={this.MyTextInput}
                secureTextEntry= {false}
                placeholder = "Firstname"
                />

                <Field name="lastname"
                 component={this.MyTextInput}
                 secureTextEntry= {false}
                 placeholder = "Lastname"
                />


                <Text style = {RegisterFormStyle.agreement}>
                By creating an account you agree to our {'\n'}
                    <Text style={RegisterFormStyle.boldText}>
                    Terms & Conditions
                    </Text> and
                    <Text style={RegisterFormStyle.boldText}>
                    Privacy Policy
                    </Text>
                </Text>
                <TouchableHighlight onPress={this.onSignUp} style = {RegisterFormStyle.buttonContainer}>
                    <Text style={RegisterFormStyle.signUpButton}>
                        Sign Up
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default reduxForm({ form: 'signIn' })(RegisterForm);
