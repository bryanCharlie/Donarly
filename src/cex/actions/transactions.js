export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const GET_TRANSACTIONS_SUCCESS = 'GET_TRANSACTIONS_SUCCESS';
export const GET_TRANSACTIONS_FAILURE = 'GET_TRANSACTIONS_FAILURE';

/*
    Called with INTEGER
*/

const getRecentTransactions = (pageNumber) => {
    return {
        type: [ GET_TRANSACTIONS, GET_TRANSACTION_SUCCESS, GET_TRANSACTION_FAILURE ],
        http: {
            success: '',
            failure: 'Please try again.',
            callAPI: (token) => {
                return GET(`${config.API_TRANSACTION_ENDPOINT}/recent-transactions`, {
                    pageNumber
                }, token);
            }
        }
    };
};
