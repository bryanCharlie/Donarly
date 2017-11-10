import React, { Component } from 'react';
import { View, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { Button } from 'assets/button';

export const ImageButton = ({onButtonPress, orgImageURI}) => {
    return(
        <TouchableOpacity onPress= { onButtonPress }>
            <View style = {style}>
                <Image source={{uri: orgImageURI}} style={style}/>
            </View>
        </TouchableOpacity>
    );
};

const style = {
    height: 150, 
    width: 200
};