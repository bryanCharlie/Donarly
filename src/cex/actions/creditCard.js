import { GET, POST } from 'lib/http';
import config from 'config';

export const SAVE_CC= 'SAVE_CC';
export const SAVE_CC_SUCCESS = 'SAVE_CC_SUCCESS';
export const SAVE_CC_FAILURE = 'SAVE_CC_FAILURE';

/*
    Called with OBJECT
    {
        donation_target: 50, //target for timeframe
        donation_threshold: 4.50, //trigger donation after this amount
        donation_timeframe: monthly //monthly timeframe
    }
*/

export const saveCreditCardToken = (cc_token) => {
    return {
        type: [ SAVE_CC, SAVE_CC_SUCCESS, SAVE_CC_FAILURE ],
        http: {
            success: 'Saved credit card details.',
            failure: 'Invalid credit card information.',
            callAPI: (token) => {
                return POST(`${config.API_CREDIT_CARD_ENDPOINT}`, {
                    'token': cc_token
                });
            }
        }
    };
};