import { getUser, setUser, removeUser } from 'lib/http';
import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT_USER, LOGIN_RETURNING_USER,REGISTER_USER,REGISTER_SUCCESS,REGISTER_FAILURE } from 'actions/auth';
import { AsyncStorage } from 'react-native';

const defaultState = {
    //userAuthenticated: false
    isFetching: true,
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
        removeUser();
        return {
            ...state, ...defaultState
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
                ...defaultState,
                isFetching: false,
                user: data,
                message
            }
        };
    case LOGIN_FAILURE:
        removeUser();
        return {
            ...state, ...{
                ...defaultState,
                isFetching: false,
                error: true,
                message
            }
        };
    case LOG_OUT_USER:
        removeUser();
        return {
            ...state, ...{
                ...defaultState,
                isFetching: false,
                error: false,
                user: undefined,
                message: undefined
            }
        };
    case REGISTER_USER:
        return{
            ... state, ...defaultState
        };
    case REGISTER_SUCCESS:
        setUser(data);
        return {
            ...state, ...{
                ...defaultState,
                isFetching: false,
                user: data,
                message
            }
        };
    case REGISTER_FAILURE:
        return{
            ...state, ...{
                ...defaultState,
                isFetching: false,
                user: undefined,
                error: true,
                message
            }
        };

    default:
        return state;
    }
};
