import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableHighlight, ActivityIndicator } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';

export default class OrgList extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedOrg : []
        };
        this.selected = this.selected.bind(this);
    }

    selected(ein){
        const selected = this.props.orgs.filter((oid) => {
            if(ein === oid.ein){
                return oid;
            }
        });
        console.log('SLECTED',selected);
        this.props.navigator.push({
            name: 'OrgDetail',
            passProps: {
                org: selected[0]
            }
        });
    }

    render(){
        console.log('Props ',this.props.orgs.length);
        const orgs = this.props.orgs;
        if(orgs.length < 1){
            return(
                <View/>
            );
        }else{
            return(
                <View>
                    <List>
                        {
                            orgs.map((o,i) => (
                                <ListItem
                                    roundAvatar
                                    key={i}
                                    title={o.charityName}
                                    onPress={()=>{this.selected(o.ein);}}
                                />
                            ))
                        }
                    </List>
                </View>
            );
        }
    }
}
