import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { registerUser } from 'actions/auth';
import { CreditFormStyle } from 'styles/main';
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

class CreditCardForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cardNumber: '',
            exp: '',
            cvv: '',
            error: false
        };
      //  this.confirmPassword = this.confirmPassword.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    // confirmPassword = (value) =>{
    //     console.log('password state val', this.state.password);
    //     if(value === this.state.password){
    //         return undefined;
    //     }
    //     else{
    //         return 'password not same';
    //     }
    // };

    MyTextInput=(props)=> {
        const {
            input,
            type,
            name,
            meta,
            touched,
            secureTextEntry,
            placeholder,
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
        console.log('CreditForm props',this.state);
        console.log('this curr value: ', input.value);

        const passState = () => {
            if({name} != confirmPassword){
                this.setState({ name : input.value });
            }
        };

        return (
          <View>
            <View style = {CreditFormStyle.inputLine}>

            <TextInput
              underlineColorAndroid='transparent'
              {...inputProps}
              onChangeText={input.onChange}
              onBlur={input.onBlur}
              onFocus={input.onFocus}
              value={input.value}
              secureTextEntry={secureTextEntry}
              type ={type}
              placeholder ={placeholder}
              placeholderTextColor = '#0379a5'
              style={CreditFormStyle.input}
              />
            </View>

            {/* <Text style = {RegisterFormStyle.errorNotice}>
            {this.showError(meta.dirty, meta.touched, meta.error)}
            </Text> */}

         </View>
        );
    }

    // componentWillMount=()=>{
       //  console.log(this.props.handleSubmit);
    // }

//Robbi
    // showError = (dirty, touched, error) => {
    //     if(dirty & touched){
    //         if(!error)
    //             return '';
    //         return <Text> - {error} </Text>;
    //     }
    // }

    // onSignUp=()=>{
    //     this.props.registerUser({
    //         lastname: this.state.lastname,
    //         firstname: this.state.firstname,
    //         email:this.state.email,
    //         password: this.state.password
    //     }).then(res =>{
    //         if(this.props.auth.user){
    //           this.props.navigation.dispatch(resetAction);
    //         }
    //     });
    // }

    onChange=(text)=>{
        const stateprop = this.props.name;
        this.setState({stateprop : text}).then(res => {
            this.validate(text);
        });
    }

    render() {
        console.log('credform state',this.state); //for checking
        return (

            <View>

                <Field name = 'name'
                component = {this.MyTextInput}
                secureTextEntry = {false}
                type = 'text'
                placeholder = "Name on card"
                />

                <Field name = "CardNumber "
                component = {this.MyTextInput}
                secureTextEntry = {false}
                type ='text'
                placeholder = "Card Number"
                />

                <Field name = "Exp"
                 component = {this.MyTextInput}
                 secureTextEntry = {false}
                 type = 'text'
                 placeholder = "Exp. Date"
                />

                <Field name = 'CVV'
                component = {this.MyTextInput}
                secureTextEntry = {false}
                type = 'email'
                placeholder = "CVV"
                 />

                <Text style = {CreditFormStyle.agreement}>
                By adding a payment card, you agree to our {'\n'}
                    <Text style = {CreditFormStyle.boldText}>
                    Terms &amp; Conditions
                    </Text> and <Text style = {CreditFormStyle.boldText}>
                    Privacy Policy
                    </Text>
                </Text>
                <View style={CreditFormStyle.buttonContainer}>
                    <TouchableOpacity onPress = {this.onSignUp} style = {CreditFormStyle.button}>
                        <Text style = {CreditFormStyle.signUpButton}>
                            ADD
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export const CCScreen = reduxForm({ form: 'CreditForm',validate  })(CreditCardForm);
