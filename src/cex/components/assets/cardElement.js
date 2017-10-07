import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Rating } from 'react-native-elements';
import { Button } from 'assets/button';


const ratingCompleted = (rating)=> {
    console.log('Rating is: ' + rating);
};

export const charityCard = ({charitySummary, charityImg, charityRating, charityTitle }) =>  { // es6 destructuring amicoollykebyranyet??

    return(
          // implemented with Text and Button as children
          <Card
            containerStyle = {{borderRadius:10}}
            image={ require('images/bg4.png')}
            wrapperStyle={{borderRadius:10}}
            imageStyle={{backgroundColor:'white'}}
            featuredTitle= 'SMH Alester'>
            <View>
            <Rating
              type='star'
              startingValue={charityRating}
              readonly
              ratingBackgroundColor= '#E4571E'
              onFinishRating ={ratingCompleted}
              imageSize={30}
              style={{ paddingVertical: 10}}
              />
            <Text style={{marginBottom: 10}}>
              {charitySummary}
            </Text>
            <Button
            buttonColor = '#F0A202'
            buttonText = 'See More '
            />
            </View>
          </Card>
        );
};
