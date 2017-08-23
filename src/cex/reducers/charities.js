import { getUser, setUser, removeUser } from 'lib/http';
import { GET_CHARITY_CATEGORIES, GET_CHARITY_CATEGORIES_SUCCESS, GET_CHARITY_CATEGORIES_FAILURE, SEARCH_CHARITY, SEARCH_CHARITY_SUCCESS, SEARCH_CHARITY_FAILURE } from 'actions/charities';
import { AsyncStorage } from 'react-native';

const defaultState = {
    //userAuthenticated: false
    isFetching: false,
    error: false,
    categories: undefined,
    current_page: 1,
    selected_charity: undefined,
    message: undefined
};

export const charities = (
    state = { ...defaultState },
    action
) => {
    const { type, data, message } = action;

    switch(type){
    case GET_CHARITY_CATEGORIES:
        return '';
    case GET_CHARITY_CATEGORIES_SUCCESS:
        return '';
    case GET_CHARITY_CATEGORIES_FAILURE:
        return '';
    case SEARCH_CHARITY:
        return '';
    case SEARCH_CHARITY_SUCCESS:
        return '';
    case SEARCH_CHARITY_FAILURE:
        return '';
    default:
        return defaultState;
    }
};
