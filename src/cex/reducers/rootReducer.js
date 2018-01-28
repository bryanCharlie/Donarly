import { auth } from 'reducers/auth';
import { charities } from 'reducers/charities';
import { donations } from 'reducers/donations';
import { profile } from 'reducers/profile';
import { transactions } from 'reducers/transactions';
import { creditCard } from 'reducers/creditCard';
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

export const rootReducer = combineReducers({
    auth,
    charities,
    donations,
    profile,
    transactions,
    creditCard,
    form: reduxFormReducer// mounted under "form"
});
