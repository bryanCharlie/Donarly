import React, { Component } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { CCScreen } from 'components/credit-card/CreditCardForm';
import { NavigationActions } from 'react-navigation';

import { GlobalStyle, CreditStyle } from 'styles/main';

export class CreditContainer extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    navigateReturn = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={CreditStyle.container}>
                <View style = {CreditStyle.headerContainer}>
                    <TouchableOpacity onPress={this.navigateReturn}>
                        <Image style = {CreditStyle.backButtonStyle} source={require('icons/back.png')}/>
                    </TouchableOpacity>

                    <Text style = {CreditStyle.header}>
                        Payment
                    </Text>
                </View>

                <ScrollView>
                    <View>
                        <CCScreen navigation={this.props.navigation} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
