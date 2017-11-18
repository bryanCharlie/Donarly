import React from 'react';
import {ScrollView, Text} from 'react-native';
import { Dimensions } from 'react-native';

export const ScrollView = ({...restProps}) => { //es6 destructuring
    const scrolledToBottom = (e) => {
        const windowHeight = Dimensions.get('window').height,
            height = e.nativeEvent.contentSize.height,
            offset = e.nativeEvent.contentOffset.y;

        if( windowHeight + offset >= height ){
            console.log('End Scroll');
        }
    }; 
    return(
        <ScrollView onScroll={scrolledToBottom} {...restProps}>
            {...this.props.children}
        </ScrollView>
    );
};