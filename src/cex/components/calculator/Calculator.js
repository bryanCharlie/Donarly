import { Dimensions, View, Picker, Text, Slider, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import React, { Component } from 'react';

const viewWidth = (percentageWidth) => {
    return Dimensions.get('window').width * (percentageWidth / 100);
};

const viewHeight = (percentageHeight) => {
    return Dimensions.get('window').height * (percentageHeight / 100);
};

const COLUMNS = 1;
const MARGIN = viewWidth(1);
const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN;

const grid = {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start'
};

const cell = {
    marginLeft: MARGIN,
    marginTop: MARGIN,
    width: viewWidth(100) / COLUMNS - SPACING,
    backgroundColor: 'red',
    height: viewHeight(30)
};

const styles = StyleSheet.create({
    slider: {
        height: 10,
        margin: 10
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        margin: 10
    },
    slider: {
        height: cell.height * (2/5)
    },
    info: {
        height: cell.height * (2/5)
    },
    donationHeading:{

    },
    transactionHeading:{

    },
    total: {

    }
});

const chart_wh = 80;
const series = [123, 321, 123, 789, 537];
const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800'];


export class Settings extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedValue: 'monthly',
            maximumValue: 10,
            sliderValue: 5.24,
            madeUpDonationTotal: 8.40
        };
    }

    render(){
        return(
            <View style={grid}>
                <View style={cell}>
                    <Picker
                        disabled={true}
                        selectedValue={this.state.selectedValue}
                        onValueChange={(setting) => this.setState({selectedValue: setting})}>
                        <Picker.Item label="Weekly" value="weekly" />
                        <Picker.Item label="Monthly" value="monthly" />
                        <Picker.Item label="Yearly" value="yearly" />
                    </Picker>
                </View>
                <View style={cell}>
                    <Text style={styles.donationHeading}>
                            Your donation cap
                    </Text>
                    <View style={styles.slider}>
                        <Slider
                            maximumValue={this.state.maximumValue}
                            value={this.state.sliderValue}
                            disabled={true}
                            step={.01}
                            onValueChange={(value) => this.setState({sliderValue: value})} />
                    </View>
                    <View style={styles.info}>
                        <Text> Current yearly donation cap: ${this.state.maximumValue}</Text>
                        <Text> Your {this.state.selectedValue} donation target: ${this.state.maximumValue / 12}</Text>
                    </View>
                </View>
                <View style={cell}>
                    <View style={styles.donationHeading}>
                        <Text> Dontations to Date: $20.50</Text>
                    </View>
                    <View style={styles.transactionHeading}>
                        <Text> Your Recent Transactions </Text>
                        <Text> $0.56 </Text>
                        <Text> $0.43 </Text>
                        <Text> $0.02 </Text>
                        <Text> $0.15 </Text>
                        <Text> $0.08 </Text>
                    </View>
                </View>
            </View>
        );
    }
}
