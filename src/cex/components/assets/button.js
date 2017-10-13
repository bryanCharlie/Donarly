import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

export const Button = ({onButtonPress, buttonColor, buttonText, textColor}) => { //es6 destructuring
    const style = applyButtonBackgroundColor(buttonColor);    
    return(
        <TouchableOpacity onPress= { onButtonPress }>
            <View style = {style}>
                <Text style = {{ color: textColor }}> { buttonText } </Text>
            </View>
        </TouchableOpacity>
    );
};

const applyButtonBackgroundColor = (buttonColor) => {
    return {
        height: 40,
        width: 175,
        alignItems: 'center',
        backgroundColor: buttonColor, 
        justifyContent: 'center', 
        borderRadius: 90
    };
};