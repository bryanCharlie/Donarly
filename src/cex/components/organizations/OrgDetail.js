import React, { Component } from 'react';
import { View, StyleSheet, Modal, Text, Image, ScrollView, TouchableHighlight, ActivityIndicator } from 'react-native';
import { List, ListItem, Button} from 'react-native-elements';
import { OrgModal } from './OrgModal';

export class OrgDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedOrg : {},
        };
        this.selected = this.selected.bind(this);
    }

    selected(ein){
        const selected = this.props.data.find((oid) => {
            return ein === oid.ein;
        });
        console.log('SELECTED', selected);
        this.setState({ selectedOrg: selected});
    }

    render(){
        console.log('Props ',this.props.data);
        const data = this.props.data;
        if(data.length < 1){
            return(
                <View>
                    <Text style={{textAlign: 'center'}}>Nothing to show...</Text>
                </View>
            );
        }else{
            return(
                <View>
                    <OrgModal data={this.state.selectedOrg}/>
                    <List>
                        {
                            data.map((d,i) => (
                                <ListItem
                                    roundAvatar
                                    key={i}
                                    title={d.charityName}
                                    onPress={()=>{this.selected(d.ein);}}
                                />
                            ))
                        }
                    </List>
                </View>
            );
        }
    }
}
