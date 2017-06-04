import { removeUser } from 'lib/http';
export const LOGIN_USER = 'LOGIN_USER';
export const LOG_OUT_USER = 'LOG_OUT_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_RETURNING_USER = 'LOGIN_RETURNING_USER';

export const loginUser = (user) => {
    return{
        type: LOGIN_USER,
        http: {
            success: 'Welcome!',
            failure: 'Invalid email or password',
            body: {
                username: user.name,
                password: user.password
            }
        }
    };
};
export const loginReturningUser = (user) => {
    return{
        type: LOGIN_RETURNING_USER,
        user,
        message: 'Welcome Back!'
    };
};
export const logOutUser = () => {
    removeUser();
    return {
        type: LOG_OUT_USER
    };
};
