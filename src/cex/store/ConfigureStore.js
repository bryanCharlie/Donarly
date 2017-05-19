import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from 'reducers'

const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store