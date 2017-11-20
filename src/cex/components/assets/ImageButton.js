import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { Button } from 'assets/Button';
import { GlobalStyle } from 'styles/main';

export const ImageButton = ({onButtonPress, imgSrc, imgH, imgW}) => {
    return(
        <View style = {GlobalStyle.imageButton} >
        <TouchableOpacity onPress= { onButtonPress }>
                <Image resizeMode='stretch' style={{height:imgH, width:imgW}} source={imgSrc}/>
        </TouchableOpacity>
        </View>
    );
};

ImageButton.defaultProps = {
	imgH: Dimensions.get('window').height*0.9, //90% of the screen's aspect ratio
	imgW: Dimensions.get('window').width*0.9, //90% of the screen's aspect ratio
	imgSrc: require('images/donate.jpg') //to be changed (or not) by a default image for image buttons
}