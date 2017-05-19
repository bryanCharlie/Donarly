require('isomorphic-fetch')

import config from 'config'

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

export const getUser = () => {
    let user
    try {
        user = await AsyncStorage.getItem(user_key)
    } catch (error) {
        
    }
    return user ? user : undefined
}

export const setUser = user => {
    try{
        await AsyncStorage.setItem(user_key, JSON.stringify(user))
    } catch (error){
        //you fked up fam
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
