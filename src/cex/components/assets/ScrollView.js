import React from 'react';
import {RNScrollView, Text} from 'react-native';
import { Dimensions } from 'react-native';

export class ScrollView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.children
        };
    }

    onScroll = (e) => {
        if(this.props.onScroll){
            this.props.onScroll(e);
        }

        //scroll logic
    }

    render(){
        const {onScroll, ...restProps} = this.props;
        return <RNScrollView onScroll={this.onScroll} {...restProps} >
            {this.state.content}
        </RNScrollView>;
    }
}