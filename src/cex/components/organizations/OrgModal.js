import React, { Component } from 'react';
import { View, StyleSheet, Modal, Text, Image, ScrollView, TouchableHighlight, ActivityIndicator } from 'react-native';
import { List, ListItem, Button} from 'react-native-elements';

export class OrgModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false
        };
        this.setModalVisible = this.setModalVisible.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== null) {
            this.setModalVisible(true);
        }
    }
    setModalVisible(visible) {
        this.setState({isModalVisible: visible});
    }

    render() {
        console.log('Modal Props: ', this.props.data);
        if (this.props.data === null) {
            console.log('Org Modal Prop Error: Data prop is null, the data prop was not passed in.');
            return null;
        }
        if(this.props.data === undefined) {
            console.log('Org Modal Prop Error: Data prop is undefined');
            return null;
        }
        const data = this.props.data;
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.isModalVisible}
                style={{ paddingHorizontal: 30 }}
                onRequestClose={() => {
                    this.setModalVisible(false);
                }}>
                <View style={styles.flexParent}>
                    <Image
                        style={{width: '90%', height: 250, paddingHorizontal: 30}}
                        resizeMode="cover"
                        source={require('/images/donate.jpg')}
                    />
                    <View style={styles.modalContent}>
                        <Text style={styles.title}>{data.charityName}</Text>
                        <Text style={styles.dots}>. . .</Text>
                        <Text style={styles.text}>City: {data.city}</Text>
                        <Text style={styles.text}>State: {data.state} </Text>
                        <Text style={styles.text}>Zip: {data.zipCode}</Text>
                        <Text style={styles.text}>Url: {data.url}</Text>
                        <Text style={styles.text}>Accepting Donations: Yes!</Text>
                        <Text style={styles.text}>Income Tax Deduction Eligible: Yes!</Text>
                    </View>
                    <View style={styles.modalButtons}>
                        <Button
                            backgroundColor='#53F2D3'
                            fontFamily='Lato'
                            borderRadius={20}
                            buttonStyle={styles.button}
                            title='Donate'
                        />
                        <Button
                            backgroundColor='#629DF3'
                            fontFamily='Lato'
                            borderRadius={20}
                            buttonStyle={styles.button}
                            title='Add'
                        />
                    </View>
                </View>
                {/*
                    // in case we want a close/hide button
                    <TouchableHighlight onPress={() => {
                        this.setModalVisible(!this.state.isModalVisible);
                    }}>
                        <Text style={{textAlign: 'center'}}>Hide Modal</Text>
                    </TouchableHighlight>
                */}
            </Modal>
        );
    }
}

OrgModal.defaultProps = {
    data: null
};

const styles = StyleSheet.create({
    flexParent: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center'
    },
    text: {
        fontFamily: 'Lato',
        fontSize: 16,
        color: '#fff',
    },
    dots: {
        fontFamily: 'Lato',
        fontWeight: 'bold',
        fontSize: 32,
        color: '#fff',
        textAlign: 'center'
    },
    button: {
        width: 150,
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 20
    },
    modalContent: {
        width: '90%',
        height: 300,
        backgroundColor: '#35968a',
        paddingHorizontal: 30
    },
    modalButtons: {
        width: '90%',
        height: 75,
        backgroundColor: '#35968a',
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});