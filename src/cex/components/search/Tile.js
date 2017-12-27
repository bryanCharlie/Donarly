import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { CategoriesStyle } from 'styles/main';

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
                <View style={CategoriesStyle.viewStyle}>
                    <TouchableOpacity
                        onPress={() => {
                        // this.chooseColor();
                            this.setState({
                                chosen: !this.state.chosen
                            });
                            this.props.myFunction(this.props.info); }}>

                        <Image
                            source={this.props.uri}
                            style={[CategoriesStyle.imageStyle, { opacity: this.chooseColor() }]}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={CategoriesStyle.textStyle}>
                        {this.props.info}
                    </Text>
                </View>

            </View>

        );
    }
}
