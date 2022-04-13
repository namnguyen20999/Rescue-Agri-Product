import { combineReducers } from 'redux';

import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import { getAllProductReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';

const finalReducer = combineReducers({
  getAllProductReducer: getAllProductReducer,
  cartReducer: cartReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
  cartReducer: {
    cartItems: cartItems
  }
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
