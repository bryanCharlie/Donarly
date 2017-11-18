import { auth } from 'reducers/auth';
import { charities } from 'reducers/charities';
import { donations } from 'reducers/donations';
import { profile } from 'reducers/profile';
import { transactions } from 'reducers/transactions';
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

export const rootReducer = combineReducers({
    auth,
    charities,
    donations,
    profile,
    transactions,
    form: reduxFormReducer// mounted under "form"
});
