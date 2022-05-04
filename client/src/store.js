import { combineReducers } from 'redux';

import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import { getAllProductReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer } from './reducers/userReducer';
import { authenticateUserReducer } from './reducers/userReducer';

const finalReducer = combineReducers({
  getAllProductReducer: getAllProductReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  authenticateUserReducer: authenticateUserReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem("loginInfo") ? JSON.parse(localStorage.getItem('loginInfo')) : {};
const loginErrorMessage = "";

const initialState = {
  cartReducer: {
    cartItems: cartItems
  },
  authenticateUserReducer: {
    currentUser: currentUser,
    loginErrorMessage: loginErrorMessage
  },
  logoutReducer: {
    currentUser: currentUser
  }
};


const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => console.log('Updated state', store.getState()))

export default store;
