import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Tile } from './Tile';
import { Header } from './Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CategoriesStyle } from 'styles/main';
import { retreiveCategories } from 'actions/charities';
import { ScrollView } from 'components/assets/ScrollView';

const mapStateToProps = state => {
    const { isFetching, error, categories, current_page } = this.props.charities;
    return {
        isFetching,
        error,
        categories,
        current_page
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        retreiveCategories
    }, dispatch );
};

@connect(mapStateToProps, mapDispatchToProps)
export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    componentWillMount = () => {
        this.props.retreiveCategories();
    }

    formatCategoryCards = () => {

    }

    render() {
        console.log('state is :', this.state.categories);
        return (
            <View>
                { !this.props.isFetching ? this.formatCategoryCards() : null }
            </View>
        );
    }
}

//TODO add constructor for props
//TODO add style for ScrollView
