//Author- @Remel Kabir
//Generic Card

import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, Platform, TouchableHighlight } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import StarRating from 'react-native-star-rating';
import { Button } from './Button';

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
        // //state of this Component
        // this.state = {
        //     starCount: this.props.rating
        // };
    }

    // //Changes the state with the new rating
    // onStarRatingPress(rating) {
    //     this.setState({
    //         starCount: rating
    //     });
    // }

    onCardClick = () => {
        this.props.onClick && this.props.onClick()
    }

    render() {
        const { 
            imageHeight,
            imgSrc,
            title, 
            descWidth, 
            rating, 
            description, 
            descriptionColor,
            onClick
        } = this.props;

        return (
            <TouchableHighlight 
                onPress = {this.onCardClick}
                style = {{
                    height: imageHeight,
                    marginTop: 5
                }}
            >
                <ImageBackground source={imgSrc} style={{ //Image
                    height: imageHeight,
                    width: descWidth,
                    borderRadius: 10,
                    overflow: 'hidden',
                    alignSelf: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                
                    <Text style={{  //Title
                        backgroundColor: 'transparent',
                        color: '#F7FFF7',
                        fontWeight: '700',
                        fontSize: responsiveFontSize(3),
                        marginTop: responsiveHeight(-6),
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2
                    }}>
                        {title}
                    </Text>
                    
                    <View style={{
                        position: 'absolute',
                        bottom: 0
                    }}>
                        <View style={{
                            paddingLeft: 8,
                            paddingBottom: 4,
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            backgroundColor: 'transparent',
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{flex: 0.6}}>
                                <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    rating={rating}
                                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    starColor={'#F0A202'}
                                    emptyStarColor={'#022F40'}
                                    starSize={15}
                                />
                            </View>
                            <View style={{flex: 2}} />
                            <View style={{flex: 1.1}}>
                                <Button
                                    buttonColor="#F0A202"
                                    buttonText="Read More"
                                    height={'auto'}
                                    width={responsiveWidth(25)}
                                />
                            </View>
                        </View>

                        <View style={{
                            paddingTop: 2,
                            paddingLeft: 8,
                            height: (imageHeight * 30) / 100,
                            width: descWidth,
                            backgroundColor: descriptionColor //Dynamic color change
                        }}>
                            <Text>{description}</Text>
                        </View>
                    </View>
                </ImageBackground>
            
            </TouchableHighlight>
        );
    }
}
