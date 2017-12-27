import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image, Text } from 'react-native';
import { Button } from 'assets/Button';
import { GlobalStyle } from 'styles/main';

export const ImageButton = ({onButtonPress, imgSrc, imgH, imgW, text}) => {
    return(
        <View style = {GlobalStyle.imageButton} >
            <TouchableOpacity onPress= { onButtonPress }>
                    <Image resizeMode='stretch' style={{height:imgH, width:imgW}} source={imgSrc}>
                        <Text>
                            {text}
                        </Text>
                    </Image>
            </TouchableOpacity>
        </View>
    );
};

ImageButton.defaultProps = {
	imgH: Dimensions.get('window').height*0.1, //90% of the screen's aspect ratio
	imgW: Dimensions.get('window').width*0.95, //90% of the screen's aspect ratio
	imgSrc: require('images/donate.jpg') //to be changed (or not) by a default image for image buttons
};
