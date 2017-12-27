import React, { Component } from 'react';
import { TextInput,  View, Image } from 'react-native';
import { SearchStyle } from 'styles/main';
import { retreiveCategories } from 'actions/charities';


export class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [], //where we're filtering the data from
            searchText: ''
        };
    }

    componentWillMount=()=>{
        console.log('Search key: \"', this.state.searchText, '\" has been entered.');
    }

    onChange=(text)=>{
        const searchText = this.state.searchText;
        this.setState({searchText: text});

        console.log('\"', text, '\" has been entered. ----in on Change');
    }

    submitSearch=(text)=>{
        //TODO: modify to filter out searched items
        console.log('Text is submitted.');
    }

    render(){
        return (
            <View>
              <View style={SearchStyle.container}>
                  <View style={SearchStyle.bar}>
                  <Image source={require('images/search.png')} style={SearchStyle.image}/>
                  <TextInput
                  style={SearchStyle.input}
                  value={this.value}
                  onChangeText={this.onChange}
                  returnKeyType="search"
                  placeholderTextColor= "#A2A2A4"
                  placeholder='SEARCH'
                  underlineColorAndroid='transparent'
                  onSubmitEditing={this.submitSearch}
                  />

                  </View>
              </View>
              {this.props.children}
            </View>
        );
    }
}