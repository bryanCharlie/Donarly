import config from 'config';
import { GET, POST } from 'lib/http';

export const GET_CHARITY_CATEGORIES = 'GET_CHARITY_CATEGORIES';
export const GET_CHARITY_CATEGORIES_SUCCESS = 'GET_CHARITY_CATEGORIES_SUCCESS';
export const GET_CHARITY_CATEGORIES_FAILURE = 'GET_CHARITY_CATEGORIES_FAILURE';
export const SEARCH_CHARITY = 'SEARCH_CHARITY';
export const SEARCH_CHARITY_SUCCESS = 'SEARCH_CHARITY_SUCCESS';
export const SEARCH_CHARITY_FAILURE = 'SEARCH_CHARITY_FAILURE';
export const GET_CHARITY_DATA = 'GET_CHARITY_DATA';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';

export const retreiveCategories = () => {
    return{
        type: [ GET_CHARITY_CATEGORIES, GET_CHARITY_CATEGORIES_SUCCESS, GET_CHARITY_CATEGORIES_FAILURE ],
        http: {
            success: '',
            failure: 'Service currently unavailable. Please try again.',
            callAPI: (token) => {
                return GET(`${config.API_CHARITIES_ENDPOINT}/categories`, {}, token);
            }
        }
    };
};

export const searhCharity = (search_value, page_num) => {
    return{
        type: [ SEARCH_CHARITY, SEARCH_CHARITY_SUCCESS, SEARCH_CHARITY_FAILURE ],
        http: {
            success: '',
            failure: 'Service currently unavailable. Please try again.',
            callAPI: (token) => {
                return GET(`${config.API_CHARITIES_ENDPOINT}/organizations`, {
                    page_num,
                    search_value
                }, token);
            }
        }
    };
};
