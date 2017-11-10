import { getUser, setUser, removeUser } from 'lib/http';
import { GET_CHARITY_CATEGORIES, GET_CHARITY_CATEGORIES_SUCCESS, GET_CHARITY_CATEGORIES_FAILURE, SEARCH_CHARITY, SEARCH_CHARITY_SUCCESS, SEARCH_CHARITY_FAILURE } from 'actions/charities';
import { AsyncStorage } from 'react-native';

const defaultState = {
    //userAuthenticated: false
    isFetching: false,
    error: false,
    categories: undefined,
    current_page: 1,
    message: undefined,
    charities: undefined
};

export const charities = (
    state = { ...defaultState },
    action
) => {
    const { type, data, message } = action;

    switch(type){
    case GET_CHARITY_CATEGORIES:
        return {
            ...state,
            isFetching: true
        };
    case GET_CHARITY_CATEGORIES_SUCCESS:
        return {
            ...state,
            isFetching: false,
            categories: data
        };
    case GET_CHARITY_CATEGORIES_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: true,
            message
        }
    case SEARCH_CHARITY:
        return {
            ...state,
            isFetching: true
        }
    case SEARCH_CHARITY_SUCCESS:
        return {
            ...state,
            isFetching: false,
            current_page: state.current_page++,
            charities: data
        }
    case SEARCH_CHARITY_FAILURE:
        return {
            ...state,
            isFetching: false,
            current_page: 1,
            error: true,
            message
        };
    default:
        return defaultState;
    }
};
