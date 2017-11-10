import React, { Component } from 'react';
import { View, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image, StyleSheet } from 'react-native';

export const ImageButton = ({onButtonPress, orgImageURI}) => {
    return(
        <TouchableOpacity onPress= { onButtonPress }>
            <View style = {style}>
                <Image source={{uri: orgImageURI}} style={style.image}/>
            </View>
        </TouchableOpacity>
    );
};
