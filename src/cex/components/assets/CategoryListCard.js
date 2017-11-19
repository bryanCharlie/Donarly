//Author- @Remel Kabir
//Generic Card

import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, Platform } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import StarRating from 'react-native-star-rating';

export class Card extends Component {
    static defaultProps = {
        title: 'Donarly', // Charity's Title
        imgSrc: require('images/bg3.jpg'), // Charity's promotion picutre
        descriptionColor: '#E4572E', // background color of rating and description
        description: 'Donarly Inc. helps connect charities with donars', // Details about the Charity/Compnay
        imageHeight: responsiveHeight(30), //ranges from 0-200
        rating: 5 //Inital rating for any Charity
    }

    constructor(props) {
        super(props);

        //state of this Component
        this.state = {
            starCount: this.props.rating
        };
    }

    //Changes the state with the new rating
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        return (
            <View style= {{
                height: this.props.imageHeight,
                margin: 5
            }}>
                <ImageBackground source={this.props.imgSrc} style={{ //Image
                    height: this.props.imageHeight,
                    width: null,
                    borderRadius: 10,
                    overflow: 'hidden',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                
                    <Text style={{  //Title
                        backgroundColor: 'transparent',
                        color: '#ffffff',
                        fontWeight: '700',
                        fontSize: responsiveFontSize(3),
                        marginTop: responsiveHeight(-6)
                    }}>
                        {this.props.title}
                    </Text>
                </ImageBackground>
            </View>
        );
    }
}