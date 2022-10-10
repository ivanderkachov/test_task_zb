import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

import createRootReducer from "./reducers";


const middleware = [thunk]
const enhancers = []
const initialState = {}

// const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composeFunc = composeWithDevTools
const composedEnchanters = composeFunc(applyMiddleware(...middleware), ...enhancers)

const store  = createStore(createRootReducer(), initialState, composedEnchanters)

export default store