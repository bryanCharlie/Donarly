import { getUser, setUser, removeUser } from 'lib/http';
import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT_USER, LOGIN_RETURNING_USER } from 'actions/auth';
import { AsyncStorage } from 'react-native';

const defaultState = {
    //userAuthenticated: false
    isFetching: false,
    error: false,
    user: undefined,
    message: undefined
};

export const auth = (
    state = { ...defaultState },
    action
) => {
    const { type, data, message } = action;

    switch(type){
    case LOGIN_USER:
        return {
            ...state, ...{
                isFetching: true
            }
        };
    case LOGIN_RETURNING_USER:
        return {
            ...state, ...{
                user: data,
                message
            }
        };
    case LOGIN_SUCCESS:
        setUser(data);
        return {
            ...state, ...{
                isFetching: false,
                user: data,
                message
            }
        };
    case LOGIN_FAILURE:
        return {
            ...state, ...{
                isFetching: false,
                error: true,
                message
            }
        };
    case LOG_OUT_USER:
        removeUser();
        return {
            ...state, ...{
                isFetching: false,
                error: false,
                user: undefined,
                message: undefined
            }
        };
    default:
        return state;
    }
};
