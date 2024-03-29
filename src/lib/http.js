import config from 'config';
import { AsyncStorage } from 'react-native';

const URLSearchParams = require('url-search-params');

const user_key = config.user_key;

const default_headers = {
    'credentials': 'include',
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data; charset=utf-8'
};

export const getUser = async () => {
    try{
        return await AsyncStorage.getItem(user_key);
    } catch (error){
        console.log(`an error happened: ${error}`);
    }
};

export const setUser = async (user) => {
    try{
        await AsyncStorage.setItem(user_key, JSON.stringify(user));
    } catch (error){
        console.log(`an error happened: ${error}`);
    }
};

export const removeUser = async () => {
    try{
        return await AsyncStorage.removeItem(user_key);
    } catch (error) {
        //you rly fked up fam
      // lol -from Alester
    }
};

const apply_auth_header = ( token ) => {
    let headers;
    if(!token){
        headers = default_headers;
    } else {
        headers = {
            ...default_headers,
            Authorization: token ? `Basic ${token}` : undefined
        };
    }

    console.log(headers);
    return headers;
};

export const _FETCH = ( endpoint, method, body, token ) => {
    return fetch(endpoint, {
        method: method,
        headers: apply_auth_header(token),
        body: body
    });
};

export const POST = ( endpoint, options, token ) => {
    return fetch( endpoint,
        { ...{ method: 'POST' }, headers: apply_auth_header(token), ...options }
    );
};

export const DELETE = ( endpoint, options, token ) => {
    return fetch( endpoint,
        { ...{ method: 'DELETE' }, headers: apply_auth_header(token), ...options }
    );
};

export const PATCH = ( endpoint, options, token ) => {
    return fetch( endpoint,
        { ...{ method: 'PATCH' }, headers: apply_auth_header(token), ...options }
    );
};

export const PUT = ( endpoint, options, token ) => {
    return fetch( endpoint,
        { ...{ method: 'PUT' }, headers: apply_auth_header(token), ...options }
    );
};

export const GET = ( endpoint, options, token ) => {
    return fetch( endpoint,
        { ...{ method: 'GET' }, headers: apply_auth_header(token), ...options }
    );
};

export const formatQueryString = (params) => {
    const searchParams = new URLSearchParams();
    for(const key in params) {
        if(params.hasOwnProperty(key)){
            searchParams.append(key, params[key]);
        }
    }
    return searchParams.toString();
};

export const formEncodedData = (params) => {
    const formData = new FormData();
    for(const key in params) {
        if(params.hasOwnProperty(key)){
            formData.append(key, params[key]);
        }
    }
    return formData;
};
