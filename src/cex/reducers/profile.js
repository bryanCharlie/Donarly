import { GET_PROFILE, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from 'actions/transactions';

const defaultState = {
    isfetching: true,
    error: false,
    message: undefined,
    profile: undefined
};

export const profile = (
    state = { ...defaultState },
    action
    ) => {

    const { type, data, message } = action;

    switch(type){
    case GET_PROFILE:
        return {
            ...state,
            isfetching: true,
            error: false
        };

    case GET_PROFILE_SUCCESS:
        return {
            ...state,
            isfetching: false,
            error: false,
            message: message,
            profile: data
        };

    case GET_PROFILE_FAILURE:
        return {
            ...state,
            isfetching: false,
            error: true,
            message: message
        };

    default:
        return state;
    }
};
