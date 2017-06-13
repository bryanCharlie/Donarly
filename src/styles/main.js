import React from 'react';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
  input: {
    height: 35,
    color: '#ffffff',
    marginBottom: 10,
    paddingHorizontal : 10,
    borderRadius: 10,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: '#f9e5e5',
    opacity: 0.9
  },
  viewContainer: {
    flex: 1,
    justifyContent:'center'
  },
  buttonContainer:{
    backgroundColor: '#ffffff',
    opacity: 0.5,
    marginTop: 30,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center'
  },
  button: {
    textAlign: 'center',
    fontWeight: '600'
  },
  agreement: {
    fontWeight: '100',
    fontSize: 10,
    marginTop: 10,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent'
  },
  boldText: {
    fontWeight: '700'
  },
  signUpButton: {
    textAlign: 'center',
    fontWeight: '600'
  },
  logoContainer:{
    alignItems: 'center',
    marginTop: 50
  },
  logo: {
    height: 100,
    width: 100
  },
  title: {
    paddingTop: 10,
    opacity: 0.9,
    marginBottom: 20,
    fontWeight: '700',
    fontSize: 20,
    backgroundColor: 'transparent'
  }
});

export default style;
