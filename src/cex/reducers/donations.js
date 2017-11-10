import { getUser, setUser, removeUser } from 'lib/http';
import { GET_DONATION_PROFILE, GET_DONATION_PROFILE_SUCCESS, GET_DONATION_PROFILE_FAILURE } from 'actions/auth';
import { AsyncStorage } from 'react-native';

const defaultState = {
    //userAuthenticated: false
    isFetching: false,
    error: false,
    donation_profile: undefined,
    message: undefined
};

export const donations = (
    state = { ...defaultState },
    action
) => {
    const { type, data, message } = action;

    switch(type){
    case GET_DONATION_PROFILE:
        return {
            ...state, ...{
                isFetching: true
            }
        };
    case GET_DONATION_PROFILE_SUCCESS:
        return {
            ...state, ...{
                isFetching: false,
                donation_profile: data,
                message
            }
        };
    case GET_DONATION_PROFILE_FAILURE:
        return {
            ...state, ...{
                isFetching: false,
                error: true,
                message
            }
        };
    default:
        return state;
    }
};
