import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';

export const Button = ({onButtonPress, buttonColor, buttonText, textColor}) => { //es6 destructuring.
    return(
        <TouchableOpacity onPress= { onButtonPress }>
            <View style = {{backgroundColor: buttonColor, alignItems: 'center', justifyContent: 'center', borderRadius: 15}}>
                <Text style = {{ color: textColor }}> { buttonText } </Text>
            </View>
        </TouchableOpacity>
    );
};