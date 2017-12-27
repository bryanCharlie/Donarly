import config from 'config';
import { GET, POST, formatQueryString } from 'lib/http';

export const GET_CHARITY_CATEGORIES = 'GET_CHARITY_CATEGORIES';
export const GET_CHARITY_CATEGORIES_SUCCESS = 'GET_CHARITY_CATEGORIES_SUCCESS';
export const GET_CHARITY_CATEGORIES_FAILURE = 'GET_CHARITY_CATEGORIES_FAILURE';
export const SEARCH_CHARITY = 'SEARCH_CHARITY';
export const SEARCH_CHARITY_SUCCESS = 'SEARCH_CHARITY_SUCCESS';
export const SEARCH_CHARITY_FAILURE = 'SEARCH_CHARITY_FAILURE';
export const GET_CHARITY_DATA = 'GET_CHARITY_DATA';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';
export const RESET_PAGE_COUNT = 'RESET_PAGE_COUNT'

/*
    Called with no parameter
*/

export const retreiveCategories = () => {
    return{
        type: [ GET_CHARITY_CATEGORIES, GET_CHARITY_CATEGORIES_SUCCESS, GET_CHARITY_CATEGORIES_FAILURE ],
        http: {
            success: '',
            failure: 'Service currently unavailable. Please try again.',
            callAPI: (token) => {
                return GET(`${config.API_CHARITIES_ENDPOINT}/category-list`, {}, token);
            }
        }
    };
};

/*
    Called with category={integer} page_num={integer}

    The Category will be the index of the selection. For example to get charities by category "Animals"

    retreiveCharitiesByCategory(0, <page_num>)

    [
        "Animals",
        "Arts, Culture, Humanities",
        "Education",
        "Environment",
        "Health",
        "Human Services",
        "International",
        "Human and Civil Rights",
        "Religion",
        "Community Development",
        "Research and Public Policy"
    ]
*/

export const retreiveCharitiesByCategory  = (category, page_num) => {
    const queryString = formatQueryString({category, page_num})
    return{
        type: [ SEARCH_CHARITY, SEARCH_CHARITY_SUCCESS, SEARCH_CHARITY_FAILURE ],
        http: {
            success: '',
            failure: 'Service currently unavailable. Please try again.',
            callAPI: (token) => {
                return GET(`${config.API_CHARITIES_ENDPOINT}/organizations-by-category?${queryString}`, {}, token);
            }
        }
    };
};

/*
    Called with search_value={string | integer} page_num={integer}
    general search function.
*/

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

export const resetPageCount = () => {
    return {
        type: RESET_PAGE_COUNT
    };
};
