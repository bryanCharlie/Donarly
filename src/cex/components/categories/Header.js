//import libraries for making a Component
import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { CategoriesStyle } from 'styles/main';
// make a Component
export const Header = (props) => {
    return (
        <View style={CategoriesStyle.headerViewStyle}>
            <Text>{props.headerText}</Text>
            <TouchableHighlight style={CategoriesStyle.nextButtonStyle} onPress={props.next}>
                <Image source={require('icons/right.png')}/>
            </TouchableHighlight>
        </View>
    );
};
