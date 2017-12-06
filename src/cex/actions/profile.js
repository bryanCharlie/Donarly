import config from 'config';
import { GET } from 'lib/http';

export const GET_PROFILE = 'GET_PROFILE';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

/*
    Called with no params
*/

export const getUserProfile = () => {
    return {
        type: [ GET_PROFILE, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE ],
        http: {
            success: '',
            failure: 'An error occured. Please try again.',
            callAPI: (token) => {
                return GET(`${config.API_PROFILE_ENDPOINT}/payment-profile`, {});
            }
        }
    };
};
