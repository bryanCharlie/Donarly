require('fetch-everywhere')

import config from 'config'
import { AsyncStorage } from 'react-native'

const user_key = config.user_key

const headers = () => {
    return {
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
}

export const getUser = async () => {
    let user
    try {
        await AsyncStorage.getItem(user_key).then(res => {
            user = res
        })
    } catch (error) {
        console.log(`an error happened: ${error}`)
    }

    return user ? JSON.parse(user) : undefined
}

export const setUser = async (user) => {
    try{
        await AsyncStorage.setItem(user_key, JSON.stringify(user))
    } catch (error){
        console.log(`an error happened: ${error}`)
    }
}

setUser({
    name: 'bob',
    token: 'some_token'
})

export const removeUser = async () => {
    try{
        await AsyncStorage.removeItem(user_key)
    } catch (error) {
        //you rly fked up fam
    }
}

export const getToken = () => {
    const user = getUser()
    if( user ) {
        return JSON.parse(user).access_token
    }
}

const Authorize = ( endpoint ) => {
    const token = getToken()
    if( token ){
        endpoint += `?access_token=${token}`
    }
    return endpoint
}

export const POST = ( endpoint, options ) => {
    return fetch( Authorize(endpoint),
        { ...headers(), ...options, ...{ method: POST } }
    )
}

export const DELETE = ( endpoint, options ) => {
    return fetch( Authorize(endpoint),
        { ...headers(), ...options, ...{ method: DELETE } }
    )
}

export const PATCH = ( endpoint, options ) => {
    return fetch( Authorize(endpoint),
        { ...headers(), ...options, ...{ method: PATCH } }
    )
}

export const PUT = ( endpoint, options ) => {
    return fetch( Authorize(endpoint),
        { ...headers(), ...options, ...{ method: PUT } }
    )
}

export const GET = ( endpoint, options ) => {
    return fetch( Authorize(endpoint),
        { ...headers(), ...options, ...{ method: GET } }
    )
}
