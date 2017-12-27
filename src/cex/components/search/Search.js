import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Tile } from './Tile';
import { Header } from './Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CategoriesStyle } from 'styles/main';
import { retreiveCategories } from 'actions/charities';
import { FlatList } from 'components/assets/FlatList';
import { SearchBar } from 'components/assets/SearchBar';
import { retreiveCharitiesByCategory, resetPageCount } from 'actions/charities'

const mapStateToProps = state => {
    return {
        charities: state.charities
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        retreiveCharitiesByCategory,
        resetPageCount
    }, dispatch );
};

@connect(mapStateToProps, mapDispatchToProps)
export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            showCategories: true,
            charities: [],
            showCharities: false
        };
    }

    onCategoryClick = (index) => {
        this.props.retreiveCharitiesByCategory(index, this.props.charities.current_page)
        .then(res => {
            this.props.charities.charitiesList && this.setState({
                showCategories: false,
                showCharities: true
            })
        });
    }

    renderCategories = () => {
        return <FlatList
            showsVerticalScrollIndicator={true}
            scrollEnabled={true}
            data={[
                {text: 'Animals', onCategoryClick: () => this.onCategoryClick(1)},
                {text: 'Arts, Culture, Humanities', onCategoryClick: () => this.onCategoryClick(2)},
                {text: 'Education', onCategoryClick: () => this.onCategoryClick(3)},
                {text: 'Environment', onCategoryClick: () => this.onCategoryClick(4)},
                {text: 'Health', onCategoryClick: () => this.onCategoryClick(5)},
                {text: 'Human Services', onCategoryClick: () => this.onCategoryClick(6)},
                {text: 'International', onCategoryClick: () => this.onCategoryClick(7)},
                {text: 'Human and Civil Rights', onCategoryClick: () => this.onCategoryClick(8)},
                {text: 'Religion', onCategoryClick: () => this.onCategoryClick(9)},
                {text: 'Community Development', onCategoryClick: () => this.onCategoryClick(10)},
                {text: 'Research and Public Policy', onCategoryClick: () => this.onCategoryClick(11)}
            ]}
            type={'category'}
        />
    }

    renderCharities = (charities) => {
        return <FlatList
            showsVerticalScrollIndicator={true}
            scrollEnabled={true}
            data={charities}
            type={'charity'}
        />
    }

    render() {
        return (
            <View>
                <SearchBar>
                    {this.state.showCategories ? this.renderCategories() : null}
                    {this.state.showCharities ? this.renderCharities(this.props.charities.charitiesList) : null}
                </SearchBar>
            </View>
        );
    }
}

//TODO add constructor for props
//TODO add style for ScrollView
