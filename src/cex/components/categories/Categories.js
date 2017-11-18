import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Tile } from './Tile';
import { Header } from './Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CategoriesStyle } from 'styles/main';
import { retreiveCategories } from 'actions/charities';

const mapStateToProps = state => {
    return {
        categories: state.categories
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
        this.onNext = this.onNext.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    static navigationOptions = {
        header: null
    }

    state = {
        categories: [],
        title: 'category'
    };

    onPress = (category) => { // possibly move to sperate lib file
        if (this.inArray(this.state.categories, category) === false) {
            const arr = this.state.categories.slice();
            arr.push(category);
            console.log('a category just got pushed');
            this.setState({
                categories: arr
            });
        } else {
            const arr = this.state.categories.slice();
            const index = arr.indexOf(category);
            console.log('a category just got removed');
            arr.splice(index, 1);
            this.setState({
                categories: arr
            });
        }
    }

    inArray(arr, obj) {
        return (arr.indexOf(obj) !== -1);
    }

    goBack() {
        this.props.navigator.pop();
    }


    // this function puts location information into a view
    renderLocations() {
        // array or json objects that hold the city and the picture for the city
        const loc = [{ category: 'Animals', uri: { uri: 'https://cdn.pixabay.com/photo/2016/03/16/11/38/animal-1260334_960_720.jpg' } },
            { category: 'Arts, Culture, Humanities', uri: { uri: 'https://cdn.pixabay.com/photo/2016/05/25/11/39/bristish-1414560_960_720.jpg' } },
            { category: 'Community Development', uri: { uri: 'https://cdn.pixabay.com/photo/2012/05/07/17/51/apartment-48821_960_720.png' } },
            { category: 'Environment', uri: { uri: 'https://cdn.pixabay.com/photo/2014/03/17/14/34/elephant-289134_960_720.jpg' } },
            { category: 'Education', uri: { uri: 'https://cdn.pixabay.com/photo/2016/11/29/01/21/classroom-1866519_960_720.jpg' } },
            { category: 'Health', uri: { uri: 'https://cdn.pixabay.com/photo/2014/12/10/21/01/doctor-563428_960_720.jpg' } },
            { category: 'Human and Civil Rights', uri: { uri: 'https://cdn.pixabay.com/photo/2015/01/12/10/08/right-597134_960_720.jpg' } },
            { category: 'Human Services', uri: { uri: 'https://cdn.pixabay.com/photo/2016/03/31/19/15/social-service-1294853_960_720.png' } },
            { category: 'International', uri: { uri: 'https://cdn.pixabay.com/photo/2015/09/23/09/33/war-953246__340.jpg' } },
            { category: 'Religion', uri: { uri: 'https://images.pexels.com/photos/213/blur-old-antique-book.jpg?w=1260&h=750&auto=compress&cs=tinysrgb' } },
            { category: 'Research and Public Policy', uri: { uri: 'https://static.pexels.com/photos/4154/clinic-doctor-health-hospital.jpg' } }];

        return loc.map(data =>
            <Tile uri={data.uri} info={data.category} key={data.category} myFunction={this.onPress} />

        );
    }

    onNext= () => {
        console.log('Categories props ',this.props);
        this.props.updateCategory(this.state.categories);
        this.props.navigation.navigate('Register');
    }

    render() {
        console.log('state is :', this.state.categories);
        return (
            <View style={{ flex: 1, backgroundColor: '#FAFAFA'}}>
                <Header headerText={'Charity Category'} next={this.onNext} back={this.goBack} />
                <View style={CategoriesStyle.container}>
                    <Text style={{ fontSize: 16, paddingTop: 10, paddingBottom: 10}}>
                        What charity orginizations are you interesed in ?
                    </Text>
                    <ScrollView>
                        {this.renderLocations()}
                    </ScrollView>
                    <TouchableOpacity onPress={this.onNext}>
                        <Text>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

//TODO add constructor for props
//TODO add style for ScrollView
