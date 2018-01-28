import React from 'react';
import {FlatList as RNFlatList, Text} from 'react-native';
import { Dimensions } from 'react-native';
import { ImageButton } from 'components/assets/ImageButton';
import { Card } from 'components/assets/Card';

export class FlatList extends React.PureComponent {
    keyExtractor = (item, index) => {
        return index;
    }

    renderItem = ({item}) => {
        const { type } = this.props;
        switch(type){
        case 'category':
            return <ImageButton
                text={item.text}
                onButtonPress={item.onCategoryClick}
            />;
        case 'charity':
            return <Card
                title = {item.charityName}
                description = {item.tagLine}
            />;
        }
    };

    render() {
        return (
            <RNFlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this.keyExtractor}
                renderItem={(data) => this.props.render(data, this.props.type)}
            />
        );
    }
}