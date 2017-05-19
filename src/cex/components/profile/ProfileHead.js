import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    StyleSheet,
    ListView,
} from 'react-native';

var styles = StyleSheet.create({
  headerRow:{
    height: 200,
    padding: 20,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53F2D3'
  },
  image: {
    width: 100,
    height: 100
  },
  nameStyle: {
    paddingTop: 10
  }
});

class ProfileHead extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.headerRow}>

                <TouchableHighlight>
                    <Image source={require('../../Resources/avatar.png')} style={styles.image}/>
                </TouchableHighlight>
                <Text style={styles.nameStyle}>
                Alester
                </Text>
            </View>
        );
    }


}

export default ProfileHead;
