import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Card } from './Card';

const styles = {
    container: {
        height: responsiveHeight(27)
    },
    slide: {
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 2
    }
};

export class CardSwiper extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper autoplay>
                    <View style={styles.slide}>
                        <Card imageHeight={responsiveHeight(20)} descWidth={responsiveWidth(90)} imgSrc={require('images/donate.jpg')} title="Charity" />
                    </View>
                    <View style={styles.slide}>
                        <Card imageHeight={responsiveHeight(20)} descWidth={responsiveWidth(90)} imgSrc={require('images/logo3.png')} />
                    </View>
                    <View style={styles.slide}>
                        <Card imageHeight={responsiveHeight(20)} descWidth={responsiveWidth(90)} imgSrc={require('images/donate.jpg')} />
                    </View>
                </Swiper>
            </View>
        );
    }
}