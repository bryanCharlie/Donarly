import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { OrgDetail } from './OrgDetail';
import { retrieveCategories, searchCharity } from 'actions/charities';

const mapStateToProps = state => {
    return {
        charities: state.charities
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        retrieveCategories,
        // retrieveCharitiesByCategory,
        searchCharity
    }, dispatch );
};

@connect(mapStateToProps, mapDispatchToProps)

export class Charities extends Component{
    componentWillMount = () => {
        // this.props.retrieveCharitiesByCategory('');
    }

    render(){
        // dummy data
        // return(<OrgDetail data={[
        //     {
        //         charityName: 'Angelo foundation',
        //         city: 'Cambridge',
        //         state: 'Massachusetts',
        //         zipCode: '02478',
        //         url: 'www.deeznuts.com',
        //         ein: 1
        //     },
        //     {
        //         charityName: 'NOT ANGELO foundation',
        //         city: 'NEW YORK CITY',
        //         state: 'NEW YORK',
        //         zipCode: '11372',
        //         url: 'www.nyc.gov.com',
        //         ein: 2
        //     }
        // ]} />);
        return <OrgDetail data={this.props.charities.charitiesList} />;
    }

}

