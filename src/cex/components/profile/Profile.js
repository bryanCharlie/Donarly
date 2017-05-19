'use strict';

import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    StyleSheet,
    ListView,
} from 'react-native';
import ProfileHead from './ProfileHead';
import {List, ListItem, Button} from 'react-native-elements';


var styles = StyleSheet.create({
  //...add styles
  header:{
    textAlign: 'center'
  },
  headerTextParent:{
    marginTop: 10,
    marginBottom:10,
  },
  profileInfoParent:{
    marginLeft: 20,
    marginRight: 20
  },
  headerText:{
    alignSelf: 'center',
    fontSize: 24,
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  buttonContainer:{
    backgroundColor: 'red',
    opacity: 0.5,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center'
  },
  button1:{
      backgroundColor:'#48BBEC'
  },
  button: {
    textAlign: 'center',
    fontWeight: '600'
  },
  textHighlight: {
    paddingHorizontal: 10,
    padding: 2
  },
  mainTextHighlight:{
    backgroundColor: '#F5F5F5',
    marginTop: 10,
    marginBottom: 10,
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-start',
  },
  // editbutton: {
  //   color: 'blue',
  //   fontSize: 10,
  //   fontWeight: '400',
  // }
});

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            avatar_url: '',
            user: 'llama_not_found',
            email: 'sample@email.com',
            name: 'John Doe',
            address: '123 Main Street Middleville, NY 101010',
            phone: '123-456-1234',
            charities : {
                char1: "Name1",
                char2: "Name2",
                char3: "Name3"
            },
        };
    }

    backHome(){
      this.props.navigator.pop();
    }

    // <View style={styles.headerTextParent}>
    //     <Text style={styles.headerText}>Profile</Text>
    //     <Text style={styles.headerText}>
    //         {this.state.user}
    //     </Text>
    // </View>
    // <TextInput
    // style={styles.searchInput}
    // placeholder={this.state.name}
    // underlineColorAndroid='transparent'/>
    // <Text>Address</Text>
    // <TextInput
    // style={styles.searchInput}
    // placeholder={this.state.address}
    // underlineColorAndroid='transparent'/>
    // <Text>Phone</Text>
    // <TextInput
    // style={styles.searchInput}
    // keyboardType = 'phone-pad'
    // maxLength = {10}
    // placeholder={this.state.phone}
    // underlineColorAndroid='transparent'/>
    // <View style={styles.reportButton}>
    //     <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
    //         <Text style={styles.buttonText}>Save Changes</Text>
    //     </TouchableHighlight>
    //     <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
    //         <Text style={styles.buttonText}>Get Donation Report</Text>
    //     </TouchableHighlight>
    // </View>

    //remel, this line is not part of a code

    // <TouchableHighlight>
    // <Text style={styles.editbutton}>
    // Edit
    // </Text>
    // </TouchableHighlight>

    render(){
        return (
            <ScrollView style={styles.container}>
                <ProfileHead/>
                <View style={styles.profileInfoParent}>
                  <View style={styles.mainTextHighlight}>
                  <Text>
                  Profile Info
                  </Text>
                  </View>

                    <Text style={styles.textHighlight}>Name: Alester Lewis</Text>
                    <Text style={styles.textHighlight}>Email: alester465@gmail.com</Text>
                    <Text style={styles.textHighlight}>Phone: (347) 605-8555</Text>
                    <Text style={styles.textHighlight}>Location: Richmond Hills</Text>
                    <Text style = {styles.mainTextHighlight}>
                    Top Picks
                    </Text>
                    <TouchableHighlight style={styles.textHighlight}>
                        <Text>{`\u2022 United Way Worldwide`}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.textHighlight}>
                        <Text>{`\u2022 Animal Welfare Institute: A+`}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.textHighlight}>
                        <Text>{`\u2022 Feeding America`}</Text>
                    </TouchableHighlight>
                    <Text style={styles.textHighlight}>Donation Year to Date: $97.52</Text>
                    <TouchableHighlight style={styles.buttonContainer}>
                        <Text style={styles.button}>Help</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonContainer}>
                        <Text style={styles.button}>Payment</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonContainer}>
                        <Text style={styles.button}>Settings</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.backHome()}} style={styles.buttonContainer}>
                        <Text style={styles.button}>Back To Home</Text>
                    </TouchableHighlight>

                </View>
            </ScrollView>

        );

    }
}
export default Profile;
