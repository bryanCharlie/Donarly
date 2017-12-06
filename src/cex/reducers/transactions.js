import { GET_TRANSACTIONS, GET_TRANSACTIONS_SUCCESS, GET_TRANSACTIONS_FAILURE } from 'actions/transactions';

const defaultState = {
    isfetching: true,
    error: false,
    message: undefined,
    transactions: undefined
};

export const transactions = (
    state = { ...defaultState },
    action
    ) => {

    const { type, data, message } = action;

    switch(type){
    case GET_TRANSACTIONS:
        return {
            ...state,
            isfetching: true,
            error: false
        };

    case GET_TRANSACTIONS_SUCCESS:
        return {
            ...state,
            isfetching: false,
            error: false,
            message: message,
            transactions: data
        };

    case GET_TRANSACTIONS_FAILURE:
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