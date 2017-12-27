import { getUser, setUser, removeUser } from 'lib/http';
import { GET_CHARITY_CATEGORIES, GET_CHARITY_CATEGORIES_SUCCESS, GET_CHARITY_CATEGORIES_FAILURE, SEARCH_CHARITY, SEARCH_CHARITY_SUCCESS, SEARCH_CHARITY_FAILURE, RESET_PAGE_COUNT } from 'actions/charities';
import { AsyncStorage } from 'react-native';

const defaultState = {
    //userAuthenticated: false
    isFetching: false,
    error: false,
    categories: undefined,
    current_page: 1,
    message: undefined,
    charitiesList: undefined
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
        };
    case SEARCH_CHARITY:
        return {
            ...state
        };
    case SEARCH_CHARITY_SUCCESS:
        return {
            ...state, ...{
                ...defaultState,
                isFetching: false,
                current_page: state.current_page++,
                charitiesList: data
            }
        };
    case SEARCH_CHARITY_FAILURE:
        return {
            ...state, ...{
                ...defaultState,
                isFetching: false,
                current_page: 1,
                error: true,
                message
            }
        };
    case RESET_PAGE_COUNT:
        return {
            ...state, ...{
                ...defaultState
            }
        }
    default:
        return defaultState;
    }
};
