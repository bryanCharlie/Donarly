import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


export class Tile extends Component {
  constructor(props) {
     super(props);
 }
   state = {
   chosen: false,
   opacity: 1
 }

   chooseColor() {
     //console.log('chosenColor called');
  if (this.state.chosen === true) {
    return 0.4;
  }
  return 1;
 }

  render() {
    //console.log('state opacity is', this.state.opacity);
    //console.log('chosen is: ', this.state.chosen);
  return (
    <View>
    <View style={styles.viewStyle}>
      <TouchableOpacity
        onPress={() => {
          // this.chooseColor();
          this.setState({
            chosen: !this.state.chosen
          });
          this.props.myFunction(this.props.info); }}>

          <Image
          source={this.props.uri}
          style={[styles.imageStyle, { opacity: this.chooseColor() }]}
          />

      </TouchableOpacity>
    </View>
    <View>
      <Text style={styles.textStyle}>
      {this.props.info}
      </Text>
    </View>

    </View>

        );
    }
}

const styles = {
  imageStyle: {
    height: responsiveHeight(20),
    width: responsiveWidth(66),
    borderRadius: 15,
  },
  viewStyle: {
    backgroundColor: 'white',
    height: responsiveHeight(20),
    width: responsiveWidth(66),
    flex: 1,
    paddingBottom: 20,
    borderRadius: 15,
  },
  textStyle: {
    color: '#000',
    fontSize: 18,
    paddingBottom: 20
  },
}
