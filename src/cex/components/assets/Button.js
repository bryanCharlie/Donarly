import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

export const Button = ({onButtonPress, buttonColor, buttonText, textColor, height, width}) => { //es6 destructuring
    const style = applyButtonBackgroundColor(buttonColor, height, width);    
    return(
        <TouchableOpacity onPress= { onButtonPress }>
            <View style = {style}>
                <Text style = {{ color: textColor }}> { buttonText } </Text>
            </View>
        </TouchableOpacity>
    );
};

const applyButtonBackgroundColor = (buttonColor, height, width) => {
    return {
        height: height,
        width: width,
        alignItems: 'center',
        backgroundColor: buttonColor, 
        justifyContent: 'center', 
        borderRadius: 90
    };
};
