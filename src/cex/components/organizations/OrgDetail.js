import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';
import {List, ListItem, Button, Card} from 'react-native-elements';

export default class OrgDetail extends Component{
    constructor(props){
        super(props);
        const org = this.props.org
        this.backToList = this.backToList.bind(this);
    }

    backToList(){
        this.props.navigator.pop();
    }


    render(){
        var org = this.props.org;
        return(
        <ScrollView style={{flex: 1, flexDirection: 'column', alignSelf: 'center'}}>
            <Card
                title={org.charityName}
                image={require('./images/donate.jpg')}
                containerStye={{}}>
                <Text style={styles.text}>City: {org.city}</Text>
                <Text style={styles.text}>State: {org.state} </Text>
                <Text style={styles.text}>Zip: {org.zipCode}</Text>
                <Text style={styles.text}>Url: {org.url}</Text>
                <Text style={styles.text}>Accepting Donations: Yes!</Text>
                <Text style={styles.text}>Income Tax Deduction Eligible: Yes!</Text>
                <Button
                    icon={{name: 'code'}}
                    backgroundColor='#53F2D3'
                    fontFamily='Lato'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 5}}
                    title='Add To Favorites' />
                <Button
                    icon={{name: 'code'}}
                    backgroundColor='#629DF3'
                    fontFamily='Lato'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 5}}
                    title='Donate Now' />
                <Button
                    icon={{name: 'code'}}
                    backgroundColor='#FFC157'
                    fontFamily='Lato'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 5}}
                    onPress={() => {this.backToList()}}
                    title='Back To List' />
            </Card>


        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    },
});
