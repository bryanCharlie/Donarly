import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { registerUser } from 'actions/auth';
import { RegisterFormStyle } from 'styles/main';


const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z-!$%^&*()_+|~=`{}\[\]:/;<>?,.@# ]{8,}$/.test(values.password))
        errors.password='Invalid password, must contain at least: 8 characters, one uppercase, one lowercase and, one number';

    if (!values.confirmPassword){
        errors.confirmPassword = 'Required';
    }else if(values.password != values.confirmPassword){
        errors.confirmPassword ='passwords not the same';
    }

    if(!values.firstname){
        errors.firstname ='Required';
    }else if (values.firstname.length > 35) {
        errors.firstname = 'name too long';
    }

    if(!values.lastname){
        errors.lastname ='Required';
    }else if (values.lastname.length > 35) {
        errors.lastname = 'name too long';
    }

    return errors;
};

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
        this.confirmPassword = this.confirmPassword.bind(this);
        this.onChange= this.onChange.bind(this);
    }

    confirmPassword = value =>{// TODO finish thissss
        console.log('password state val',this.state.password);
        if(value === this.state.password){
            return undefined;
        }
        else{
            return 'password not same';
        }
    };

// this is some dirty code ...
    MyTextInput=(props)=> {
        const { input, type, name, meta, touched, secureTextEntry, placeholder,  ...inputProps } = props;
        formStates = ['asyncValidating', 'dirty', 'pristine', 'valid', 'invalid', 'submitting',
            'submitSucceeded', 'submitFailed'];
        console.log({placeholder},{meta});
        console.log('this curr value: ', input.value);

        const passState = () => {//TODO I was fucking with this recently 
            if({name} != confirmPassword){
                this.setState({ name : input.value });
            }
        };
        return (
          <View>
            <TextInput
              {...inputProps}
              onChangeText={input.onChange}
              onBlur={input.onBlur}
              onFocus={input.onFocus}
              value={input.value}
              secureTextEntry={secureTextEntry}
              type ={type}
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
        // const stateprop = this.props.name;
        // this.setState({stateprop: text});
    }


    render() {
        console.log('regForm state', this.state);
        return (
            <View>

                <Field name='email'
                component={this.MyTextInput}
                secureTextEntry= {false}
                type= 'email'
                placeholder = "Email"
                 />

                <Field name='password'
                component={this.MyTextInput}
                secureTextEntry={true}
                type ='password'
                placeholder = "password"
                />

                <Field name='confirmPassword'
                component={this.MyTextInput}
                secureTextEntry={true}
                type ='password'
                placeholder = "confirm password"
                />

                <Field name="firstname"
                component={this.MyTextInput}
                secureTextEntry= {false}
                type ='text'
                placeholder = "Firstname"
                />

                <Field name="lastname"
                 component={this.MyTextInput}
                 secureTextEntry= {false}
                 type ='text'
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

export default reduxForm({ form: 'signIn',
    validate  })(RegisterForm);
