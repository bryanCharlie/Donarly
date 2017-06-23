export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const PATCH = 'PATCH';
export const DELETE = 'DELETE';

import config from 'config';
import { AsyncStorage } from 'react-native';


const user_key = config.user_key;

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const getUser = async () => {
    let user;
    try{
        user = await AsyncStorage.getItem(user_key);
    } catch (error){
        console.log(`an error happened: ${error}`);
    }
    return user;
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
        await AsyncStorage.removeItem(user_key);
    } catch (error) {
        //you rly fked up fam
    }
};

const Authorize = ( endpoint, token ) => {
    if( token ){
        endpoint += `?access_token=${token}`;
        console.log('messed wth shit');
    }
    return endpoint;
};

export const _FETCH = ( endpoint, method, body, token = {} ) => {
    return fetch(endpoint, {
        method: method,
        headers: headers,
        body: body
    });
};

// export const POST = ( endpoint, options, token ) => {
//     return fetch( Authorize(endpoint, token),
//         { ...{ method: POST }, ...headers(), ...options }
//     );
// };

// export const DELETE = ( endpoint, options, token ) => {
//     return fetch( Authorize(endpoint, token),
//         { ...{ method: DELETE }, ...headers(), ...options }
//     );
// };

// export const PATCH = ( endpoint, options, token ) => {
//     return fetch( Authorize(endpoint, token),
//         { ...{ method: PATCH }, ...headers(), ...options }
//     );
// };

// export const PUT = ( endpoint, options, token ) => {
//     return fetch( Authorize(endpoint, token),
//         { ...{ method: PUT }, ...headers(), ...options }
//     );
// };

// export const GET = ( endpoint, options, token ) => {
//     return fetch( Authorize(endpoint, token),
//         { ...{ method: GET }, ...headers(), ...options }
//     );
// };
