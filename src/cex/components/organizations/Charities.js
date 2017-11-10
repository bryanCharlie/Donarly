import React, { Component } from 'react';
import { OrgList } from './OrgList';
import { retreiveCategories, searhCharity } from 'action/charities'

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

export class OrganizationContainer extends Component{
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
