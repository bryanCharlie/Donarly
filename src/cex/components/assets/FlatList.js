import React from 'react';
import { View, FlatList as RNFlatList, Text, ActivityIndicator} from 'react-native';
import { Dimensions } from 'react-native';
import { ImageButton } from 'components/assets/ImageButton';
import { Card } from 'components/assets/Card'

export class FlatList extends React.PureComponent {
    constructor(props){
        super(props);

        this.state = {
            dataCount: 6,
            data: [],
            error: null,
            refreshing: false
        }
    }

    componentDidMount(){
        this.handleLoadMore();
    }

    handleLoadMore = () => {
        setTimeout(() => {
            this.setState({
                refreshing: true,
                dataCount: this.state.dataCount + 3
            })
        }, 2500);
    };

    keyExtractor = (item, index) => {
        return index;
    }

    renderFooter = () => {
        if(!this.state.refreshing) return null
        return(
            <View style={{paddingVertical: 20}}>
                <ActivityIndicator animating size="large"/>
            </View>
        )
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
            />
        }
    };

    render() {
        return (
            <RNFlatList
                data={this.props.data.slice(0, this.state.dataCount)}
                extraData={this.state}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                refreshing={this.state.refreshing}
                ListFooterComponent={this.renderFooter}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={100}
            />
        );
    }
}