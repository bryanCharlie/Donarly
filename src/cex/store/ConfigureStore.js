import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers/rootReducer'

const middleWare = []

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore)

export const makeStore = () => {
  return createStoreWithMiddleware(rootReducer)
}