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
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer:{
        borderRadius: 12,
        borderWidth: 1.2,
        borderColor: '#D6D700',
        opacity: 0.8,
        height: 28,
        width: 140,
        padding: 7.5,
        marginBottom: 20
    },
    button: {
        color: '#D6D700',
        fontSize: 9,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    logoContainer:{
        alignItems: 'center',
        marginTop: 90,
        opacity: 0.8
    },
    logo: {
        height: 275,
        width: 240
    },
    title: {
        fontFamily: 'Euphemia UCAS',
        color: '#48A898',
        fontSize: 60,
        textAlign: 'center'
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
        color: '#D6D700',
        fontSize: 7,
        textAlign: 'center',
        fontWeight: 'bold'
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
