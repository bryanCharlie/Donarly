import { auth, charities, donations, profile, transactions } from 'reducers/auth';
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
