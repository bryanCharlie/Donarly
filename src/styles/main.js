import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export const GlobalStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch'
    },
    image: {
        padding: 2
    },
    imageButton: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
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

export const LoadingScreenStyle = StyleSheet.create({
    text: {
        fontSize: 100,
        color: '#2A9D8F',
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        textAlign: 'center'
    },
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#444444',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export const SearchStyle = StyleSheet.create({
    input: {
        textAlign: 'left',
        height: 50,
        fontSize: 20,
        color: '#06594b',
        fontFamily: 'Avenir-Roman',
        flex: 1
    },
    image: {
        height: 32,
        width: 32,
        margin: 9
    },
    topBar: {
        height : (Platform.OS === 'ios') ? 15 : 0,
        backgroundColor: '#e4572e'
    },
    barContainer: {
        width: Dimensions.get('window').width,
        height: 54,
        borderWidth: 9,
        borderColor: '#e4572e',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingSpinner: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 40
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
        borderRadius: 18,
        borderWidth: 1.5,
        borderColor: '#F0A202',
        opacity: 0.8,
        height: 37,
        width: 230,
        padding: 8,
        marginBottom: 20
    },
    button: {
        color: '#F0A202',
        fontSize: 13,
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
        color: '#2A9D8F',
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

export const FormStyle = StyleSheet.create({
    errorNotice: {
        fontSize: 10,
        fontWeight: '100',
        color: '#880909'
    },
    inputLine: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        alignContent: 'flex-end'
    },
    input: {
        height: 50,
        fontSize: 15,
        color: 'white',
        fontWeight: '500',
    },
    agreement: {
        fontWeight: '100',
        fontSize: 12,
        marginTop: 100,
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
        marginTop: 15,
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        justifyContent: 'center'
    },
    button: {
        textAlign: 'center',
        fontWeight: '600'
    }
});

export const CreditFormStyle = StyleSheet.create({
    errorNotice: {
        fontSize: 10,
        fontWeight: '100',
        color: '#880909'
    },
    inputLine: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        alignContent: 'flex-end'
    },
    input: {
        height: 50,
        fontSize: 15,
        color: 'white',
        fontWeight: '500',
    },
    agreement: {
        fontWeight: '100',
        fontSize: 12,
        marginTop: 100,
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: 'transparent'
    },
    boldText: {
        fontWeight: '700'
    },
    buttonContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'rgb(9, 39, 50)',
        width: responsiveWidth(35),
        marginTop: 15,
        borderRadius: 10,
        padding: 7,
        marginBottom: 15
    },
    signUpButton: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 25,
        color: '#fff'
    }
});

export const CreditStyle = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        marginBottom: 30
    },
    header: {
        flex: 3,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20,
        color: '#ffffff',
        fontSize: 20,
        backgroundColor: 'transparent'
    },
    container: {
        padding: 30,
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'rgb(6, 48, 64)'
    },
    logoContainer:{
        alignItems: 'center',
        marginTop: 50
    },
    logo: {
        height: 100,
        width: 100
    },
    backButtonStyle: {
        width: 30,
        height: 32
    }
});

export const LoginFormStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: responsiveWidth(55)
    }
});

export const LoginRegisterStyle = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        marginBottom: 30
    },
    header: {
        flex: 3,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20,
        color: '#ffffff',
        fontSize: 20,
        backgroundColor: 'transparent'
    },
    container: {
        padding: 30,
        flex: 1,
        width: null,
        height: null,
        backgroundColor: '#F0A202'
    },
    logoContainer:{
        alignItems: 'center',
        marginTop: 50
    },
    logo: {
        height: 100,
        width: 100
    },
    backButtonStyle: {
        width: 30,
        height: 32
    }
});
