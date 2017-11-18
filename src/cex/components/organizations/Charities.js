import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { OrgList } from './OrgList';
import { retreiveCategories, searhCharity } from 'actions/charities';

const mapStateToProps = state => {
    return {
        charities: state.charities
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        retreiveCategories,
        searhCharity
    }, dispatch );
};

@connect(mapStateToProps, mapDispatchToProps)

export class Charities extends Component{
    componentDidMount = () => {
        this.props.retreiveCategories();
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    button:{
        backgroundColor:'#48BBEC'
    },
    input: {
        height: 35,
        color: '#000000',
        margin : 20,
        borderRadius: 10,
        fontWeight: '500',
        borderWidth: 1,
        borderColor: '#f9e5e5'
    },
    listItem:{
        color: '#000000'
    },
    icon:{
        width: 6,
        height: 6
    }
});
