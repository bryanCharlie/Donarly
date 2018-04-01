import React, { Component } from 'react';
import { Alert, View, StyleSheet, Modal, Text, Image, ScrollView, TouchableHighlight, ActivityIndicator, WebView, Platform } from 'react-native';
import { List, ListItem, Button} from 'react-native-elements';
import { GET, getUser } from 'lib/http';
import {WebViewAndroid} from 'react-native-webview-android';

const html = `
<!-- Include PandaJS -->
<script type="text/javascript" src="lib/pandaLib.js"></script>

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
//NOTE: Placing comments inside the injectedJavaScript property of WebView breaks bridge communication on Android
const js = `
<script>
  var postMessage = window.postMessage;

  Panda.init('pk_test_hoqO8vgA9RK-VSXr6gCU1Q', 'panda_cc_form');

  Panda.on('success', function(cardToken) {
    $.ajax({
      type: "POST",
      url: '/trial',
      data: {token:cardToken},
      success: function func(){},
      dataType: 'application/json'
    });
    alert("success!");
    postMessage(cardToken, '*');
  });

  Panda.on('error', function(errors) {
  });
</script>`;

export class WebModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false
        };
        // this.setModalVisible = this.setModalVisible.bind(this);
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

    onMessage(event){
        console.log('onMessage in frontend: ' + event.nativeEvent.data);
    }
      
    injectjs(){
        let jsCode ='console.log("IWASRAN")';
        return js;
    }
    render() {
        console.log("test");
        if(Platform.OS === 'Android')
        {
            return(
                <WebViewAndroid
                source={{html, baseUrl: '/'}}
                javaScriptEnabledAndroid={true}
                style={{flex: 1}}
                injectedJavaScript ={`document.querySelector("#myid").style.backgroundColor='blue'`}
                onMessage = {this.onMessage}
                domStorageEnabled={true}
                mixedContentMode='always' 
                />
            );
        }
        return (
               <WebView  source={{uri: 'http://127.0.0.1:5000/signup'}}
                style={{flex: 1}}
                onMessage = {this.onMessage}
                javaScriptEnabled={true}
                injectedJavaScript ={js}
                javaScriptEnabled={true}
                mixedContentMode='always' />
        );
        console.log("after ios");
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