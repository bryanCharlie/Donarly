import React from 'react';
import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export const GlobalStyle = StyleSheet.create({
    container: {
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
    }
});

export const HomeStyle = StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer:{
        backgroundColor: '#ffffff',
        opacity: 0.5,
        marginTop: 0,
        borderRadius: 10,
        padding: 5,
        marginLeft: 5,
        marginRight: 5,
        width: 150,
        justifyContent: 'flex-end'
    },
    button: {
        textAlign: 'center',
        fontWeight: '600',
        margin: 5
    },
    logoContainer:{
        alignItems: 'center',
        marginTop: 100,
        opacity: 0.8
    },
    logo: {
        height: 200,
        width: 200,
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 100
    },
    title: {
        paddingTop: 20,
        opacity: 0.7,
        marginBottom: 20,
        backgroundColor: 'transparent'
    }
});

export const CategoriesStyle = StyleSheet.create({
    container: {
        padding:10,
        alignItems: 'center',
        marginBottom: 40
    },
    headerViewStyle: {
        backgroundColor: '#E57373',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.2,
        elevation: 2
    },
    nextButtonStyle: {
        left: 90
    },
    imageStyle: {
        height: responsiveHeight(20),
        width: responsiveWidth(66),
        borderRadius: 15
    },
    viewStyle: {
        backgroundColor: 'white',
        height: responsiveHeight(20),
        width: responsiveWidth(66),
        flex: 1,
        paddingBottom: 20,
        borderRadius: 15
    },
    textStyle: {
        color: '#000',
        fontSize: 18,
        paddingBottom: 20
    }
});

export const LoginStyle = StyleSheet.create({
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
        borderColor: '#FFFFFF',
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
    }
});

export const RegisterFormStyle = StyleSheet.create({
    container: {
        padding: 30
    },
    input: {
        height: 35,
        color: '#ffffff',
        marginBottom: 10,
        paddingHorizontal : 10,
        borderRadius: 10,
        fontWeight: '500',
        borderWidth: 1,
        borderColor: '#f9e5e5'
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
    buttonContainer:{
        backgroundColor: '#ffffff',
        opacity: 0.5,
        marginTop: 40,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center'
    },
    signUpButton: {
        textAlign: 'center',
        fontWeight: '600'
    }
});

export const RegisterStyle = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch'
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
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 20,
        backgroundColor: 'transparent'
    }
});
