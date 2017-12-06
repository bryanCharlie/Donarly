import { GET, POST } from 'lib/http';
import config from 'config';

export const GET_DONATION_PROFILE = 'GET_DONATION_PROFILE';
export const GET_DONATION_PROFILE_SUCCESS = 'GET_DONATION_PROFILE_SUCCESS';
export const GET_DONATION_PROFILE_FAILURE = 'GET_DONATION_PROFILE_FAILURE';
export const SAVE_DONATION_PROFILE = 'SAVE_DONATION_PROFILE';
export const SAVE_DONATION_PROFILE_SUCCESS = 'SAVE_DONATION_PROFILE_SUCCESS';
export const SAVE_DONATION_PROFILE_FAILURE = 'SAVE_DONATION_PROFILE_FAILURE';

/*
    Called with no params
*/

const getDonationProfile = () => {
    return {
        type: [ GET_DONATION_PROFILE, GET_DONATION_PROFILE_SUCCESS, GET_DONATION_PROFILE_FAILURE ],
        http: {
            success: 'Welcome!',
            failure: 'Invalid email or password',
            callAPI: (token) => {
                return GET(`${config.API_DONATION_ENDPOINT}/donation-profile`, {});
            }
        }
    };
};

/*
    Called with OBJECT
    {
        donation_target: 50, //target for timeframe
        donation_threshold: 4.50, //trigger donation after this amount
        donation_timeframe: monthly //monthly timeframe
    }
*/

const saveDonationProfile = (data) => {
    return {
        type: [ SAVE_DONATION_PROFILE, SAVE_DONATION_PROFILE_SUCCESS, SAVE_DONATION_PROFILE_FAILURE ],
        http: {
            success: '',
            failure: 'Please try again.',
            callAPI: (token) => {
                return POST(`${config.API_DONATION_ENDPOINT}`, {
                    'donation_target': data.donation_target,
                    'donation_threshold': data.donation_threshold,
                    'donation_timeframe': data.donation_timeframe
                });
            }
        }
    };
};