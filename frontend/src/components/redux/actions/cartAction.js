import * as actionTypes from '../constants/constants';
import axios from 'axios';

export const addCupToCart = (id,qty) => async (dispatch, getState) => {
     const { data } = await axios.get(`/cups/${id}`);
               dispatch({
                    type: actionTypes.ADD_TO_CART,
                    payload:{
                         product: data._id,
                         name: data.name,
                         image: data.image,
                         price: data.price,
                         counterInStock: data.counterInStock,
                         qty,
                    },
               });

          localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}

export const addPlateToCart = (id,qty) => async (dispatch, getState) => {
     const { data } = await axios.get(`/plates/${id}`);
               dispatch({
                    type: actionTypes.ADD_TO_CART,
                    payload:{
                         product: data._id,
                         name: data.name,
                         image: data.image,
                         price: data.price,
                         counterInStock: data.counterInStock,
                         qty,
                    },
               });

          localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}

export const addPotToCart = (id,qty) => async (dispatch, getState) => {
     const { data } = await axios.get(`/pots/${id}`);
               dispatch({
                    type: actionTypes.ADD_TO_CART,
                    payload:{
                         product: data._id,
                         name: data.name,
                         image: data.image,
                         price: data.price,
                         counterInStock: data.counterInStock,
                         qty,
                    },
               });

          localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}

export const changeCartQty = (id,value) => (dispatch, getState) => {
               dispatch({
                    type: actionTypes.CHANGE_CART_QTY,
                    payload: {
                         _id: id ,
                         qty : value,
                    },
               });

          localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id) => (dispatch, getState) => {
     dispatch({
          type: actionTypes.REMOVE_FROM_CART,
          payload: id,
     });

     localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));

};
