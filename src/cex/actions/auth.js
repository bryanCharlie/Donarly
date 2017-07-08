import { removeUser, _FETCH, POST } from 'lib/http';
import config from 'config';

export const LOGIN_USER = 'LOGIN_USER';
export const LOG_OUT_USER = 'LOG_OUT_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_RETURNING_USER = 'LOGIN_RETURNING_USER';

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
    removeUser();
    return {
        type: LOG_OUT_USER
    };
};
