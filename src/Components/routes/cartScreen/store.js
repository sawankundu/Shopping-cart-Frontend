import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {cartReducer} from '../../../Reducers/CartReducers';

const initialStare = {
  cart:{
    cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    :[],
  }
};
const reducer = combineReducers({
  cart: cartReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialStare,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
