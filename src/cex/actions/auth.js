import { _FETCH, POST } from 'lib/http';
import config from 'config';

export const LOGIN_USER = 'LOGIN_USER';
export const LOG_OUT_USER = 'LOG_OUT_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_RETURNING_USER = 'LOGIN_RETURNING_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_SUCCESS ='REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

/*
    Called with OBJECT
    {
        username: "something@mail.com",
        password: "12345"
    }
*/

export const loginUser = (user) => {
    console.log(`${config.API_AUTH_ENDPOINT}/login`);
    return{
        type: [ LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAILURE ],
        http: {
            success: 'Welcome!',
            failure: 'Invalid email or password',
            callAPI: (token) => {
                return POST(`${config.API_AUTH_ENDPOINT}/login`, {
                    body: JSON.stringify({ username: user.username, password: user.password })
                });
            }
        }
    };
};

export const loginReturningUser = (user) => {
    console.log(user, ' in auth action');
    return{
        type: LOGIN_RETURNING_USER,
        data: JSON.parse(user),
        message: 'Welcome Back!'
    };
};

export const logOutUser = () => {
    return {
        type: LOG_OUT_USER
    };
};

/*
    Called with OBJECT
    {
        first_name: "john",
        last_name: "doe",
        email: "something@mail.com",
        password: "1234"
    }
*/

export const registerUser = (user) =>{
  // TODO Finish this...
    console.log(`${config.API_AUTH_ENDPOINT}/register`);
    return{
        type: [REGISTER_USER, REGISTER_SUCCESS, REGISTER_FAILURE],
        http: {
            success: 'Welcome!',
            failure: 'Please try again.',
            callAPI: (token) => {
                return POST(`${config.API_AUTH_ENDPOINT}/register`, {
                    body: JSON.stringify({ first_name: user.firstname, last_name: user.lastname, email: user.username, password: user.password })
                });
            }
        }
    };
};
