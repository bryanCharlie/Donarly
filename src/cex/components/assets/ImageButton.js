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

/**
export class ImageButton extends Component {
    constructor(props){
        super(props);
        
        const imgUri = this.props.orgImageURI;
    }
    
    render(){
        return(
            <Button>
            <TouchableOpacity onPress= { onButtonPress }>
                <View>
                    <Image source={{uri: imgUri}} style={style}/>
                </View>
            </TouchableOpacity>
            </Button>
        );
    }
}

const style = {
    height: 150, 
    width: 200
}; */