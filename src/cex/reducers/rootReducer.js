import { auth } from 'reducers/auth';
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

export const rootReducer = combineReducers({
    auth,
    form: reduxFormReducer// mounted under "form"
});
