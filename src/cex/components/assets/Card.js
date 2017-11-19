//Author- @Remel Kabir
//Generic Card

import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, Platform } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import StarRating from 'react-native-star-rating';

export class Card extends Component {
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
                    
                    <View style ={{
                        paddingTop: responsiveHeight(2),
                        paddingBottom: responsiveHeight(2),
                        width: responsiveWidth(100),
                        backgroundColor: this.props.descriptionColor, //Dynamic color change
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: 0
                    }}>
                        <View style={{ //Rating 
                            justifyContent: 'center',
                            marginLeft: responsiveWidth(3),
                            marginRight: responsiveWidth(2),
                            width: responsiveWidth(30),
                            flexDirection: 'column'
                        }}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                starColor={'#022F40'}
                                starSize={20}
                            />
                        </View>
                        <View style={{
                            width: responsiveWidth(65),
                            flexDirection: 'column'
                        }}>
                            <Text>{this.props.description}</Text>
                        </View>
                    </View>
                </ImageBackground>
            
            </View>
        );
    }
}
    
//All the props that can be passes while using this card. 
//Default values if custom props weren't given. 
Card.defaultProps = {
    title: 'Donarly', // Charity's Title
    imgSrc: require('images/bg3.jpg'), // Charity's promotion picutre
    descriptionColor: '#E4572E', // background color of rating and description
    description: 'Donarly Inc. helps connect charities with donars', // Details about the Charity/Compnay
    imageHeight: responsiveHeight(30), //ranges from 0-200
    rating: 5 //Inital rating for any Charity
};
