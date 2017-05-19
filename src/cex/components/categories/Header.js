//import libraries for making a Component
import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';

// make a Component
export const Header = (props) => {
  const { textStyle, viewStyle, nextButtonStyle, titleStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={titleStyle}>{props.headerText}</Text>

      <TouchableHighlight style={nextButtonStyle} onPress={props.next}>
      <Image source={require('icons/right.png')}/>
      </TouchableHighlight>

    </View>
  );
};


//styling
const styles = {
  viewStyle: {
    backgroundColor: '#E57373',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  nextButtonStyle: {
    left: 90
  },
};
