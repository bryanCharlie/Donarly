import { createStore, applyMiddleware, compose } from 'redux';
import { callFetchMiddleware } from 'middleware/fetch';
import { rootReducer } from 'reducers/rootReducer';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    applyMiddleware(callFetchMiddleware)
)(createStore);

export const configureStore = (initialState = {}) => {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
};