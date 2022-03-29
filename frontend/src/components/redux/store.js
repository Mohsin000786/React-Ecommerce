import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducers } from './reducers/cartReducer';
import { getCupReducers,getCupDetailReducers } from './reducers/cupReducer';
import { getPlateReducers,getPlateDetailReducers } from './reducers/plateReducer';
import { getPotReducers,getPotDetailReducers } from './reducers/potReducer';
import { statusReducers } from './reducers/userReducer';

const reducer = combineReducers({
     cart: cartReducers,
     getCups: getCupReducers,
     getCupDetails : getCupDetailReducers,
     getPlates: getPlateReducers,
     getPlateDetails: getPlateDetailReducers,
     getPots: getPotReducers,
     getPotDetails: getPotDetailReducers,
     auth: statusReducers,
});

const middleware = [thunk];

const cartFromStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
const statusFromStorage = localStorage.getItem("isAuth") ? JSON.parse(localStorage.getItem("isAuth")) : false;

const INITIAL_STATE = {
     cart: {
          cartItems: cartFromStorage,
     },
     auth: {
          isAuth: statusFromStorage,
     }
};

const store = createStore(
     reducer,
     INITIAL_STATE,
     composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
