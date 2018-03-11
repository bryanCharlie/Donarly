import React, { Component } from 'react';
import { View, StyleSheet, Modal, Text, Image, ScrollView, TouchableHighlight, ActivityIndicator, WebView, Platform } from 'react-native';
import { List, ListItem, Button} from 'react-native-elements';
import {WebViewAndroid} from 'react-native-webview-android';

const html = `


<!-- Include PandaJS -->
<script type="text/javascript" src="http://d2t45z63lq9zlh.cloudfront.net/panda-v0.0.5.min.js"></script>

<!--
<script type="text/javascript">function hello(){
    alert('hello');
}</script>
<button onclick="hello()">Hello</button>
-->

<form id="panda_cc_form">
  <div>
    <label>First Name</label>
    <input type="text" data-panda="first_name">
  </div>

  <div id="myid">
    <label>Last Name</label>
    <input type="text" data-panda="last_name">
  </div>

  <div>
    <label>Credit Card Number</label>
    <input type="text" data-panda="credit_card">
  </div>

  <div>
    <label>Expiration</label>
    <input type="text" data-panda="expiration">
  </div>

  <div>
    <label>CVV</label>
    <input type="text" data-panda="cvv">
  </div>

  <div id="tokenize">
    <button type="submit">Tokenize!</button>
  </div>
</form>

<script>
  // Call Panda.init() with your Panda Publishable Key and the DOM id of the
  // credit card-related form element
  console.log('me ah get cyal');
  Panda.init('pk_test_hoqO8vgA9RK-VSXr6gCU1Q', 'panda_cc_form');

  Panda.on('success', function(cardToken) {
    // You now have a token you can use to refer to that credit card later.
    // This token is used in PandaPay API calls for creating donations and grants
    // so that you don't have to worry about security concerns with dealing with
    // credit card data.
    alert('success!')
    window.postMessage(cardToken,*);
  });

  Panda.on('error', function(errors) {
    // errors is a human-readable list of things that went wrong
    //  (invalid card number, missing last name, etc.)
    console.log(errors);
    alert(errors);
    window.postMessage('something fuk up');
  });

</script>

`;

const js = `  // Call Panda.init() with your Panda Publishable Key and the DOM id of the
// credit card-related form element
console.log('me ah get cyall');
Panda.init('pk_test_hoqO8vgA9RK-VSXr6gCU1Q', 'panda_cc_form');

Panda.on('success', function(cardToken) {
  // You now have a token you can use to refer to that credit card later.
  // This token is used in PandaPay API calls for creating donations and grants
  // so that you don't have to worry about security concerns with dealing with
  // credit card data.
  console.log('tokenized called');
  window.postMessage(cardToken);
});

Panda.on('error', function(errors) {
  // errors is a human-readable list of things that went wrong
  //  (invalid card number, missing last name, etc.)
  window.postMessage('something fuk up');
});
`;
export class WebModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false
        };
     //   this.setModalVisible = this.setModalVisible.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.data !== null) {
    //         this.setModalVisible(true);
    //     }
    // }
    // setModalVisible(visible) {
    //     this.setState({isModalVisible: visible});
    // }
    static navigationOptions = {
        header: null
    }
    onMessage(data)
    {
        if(data !== 'something fuk up'){
            console.log('dis dat token',data);
        }
        else{
            console.log('token fuk up');
        }
    }

    injectjs()
    {
        let jsCode ='console.log("IWASRAN")';
        return jsCode;
    }
    render() {
        // console.log('Modal Props: ', this.props.data);
        // if (this.props.data === null) {
        //     console.log('Org Modal Prop Error: Data prop is null, the data prop was not passed in.');
        //     return null;
        // }
        // if(this.props.data === undefined) {
        //     console.log('Org Modal Prop Error: Data prop is undefined');
        //     return null;
        // }
        
        // const data = this.props.data;
        if(Platform.OS === 'Android')
        {
            return(
                <WebViewAndroid
                source={{html, baseUrl: '/'}}
                javaScriptEnabled={true}
                style={{flex: 1}}
                injectedJavaScript ={`document.querySelector("#myid").style.backgroundColor='blue'`}
                onMessage = {this.onMessage}
                domStorageEnabled={true}
                mixedContentMode='always' 
                />
            );
        }
        return (

               <WebView  source={{html, baseUrl: '/'}}
                style={{flex: 1}}
                injectedJavaScript ={`document.querySelector("#myid").style.backgroundColor='blue'`}
                onMessage = {this.onMessage}
                javaScriptEnabledAndroid={true}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                mixedContentMode='always' />

        );
    }
}



const styles = StyleSheet.create({
    flexParent: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        color: '#fff',
    },
    dots: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#fff',
        textAlign: 'center'
    },
    button: {
        width: 150,
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 20
    },
    modalContent: {
        width: '90%',
        height: 300,
        backgroundColor: '#35968a',
        paddingHorizontal: 30
    },
    modalButtons: {
        width: '90%',
        height: 75,
        backgroundColor: '#35968a',
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    webViewStyle: {
       width: 300,
       height: 300 
    }
});