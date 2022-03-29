import * as actionTypes from '../constants/constants';
import axios from 'axios';

export const userLogin = (email, password) => (dispatch, getState) => {

     const config = {
          headers: {
               "Content-Type": "application/json",
          },
          credentials: "include",
     };
     axios.post("/auth/login", {email, password}, config)
          .then(res => {
               dispatch({
               type: actionTypes.USER_LOGIN_SUCCESS,
               payload: res.data.user,
               message: res.data.message,
               });
               localStorage.setItem("isAuth", JSON.stringify(getState().auth.isAuth));
          })
          .catch(error => {
               dispatch({
               type: actionTypes.USER_LOGIN_FAIL,
               payload: error.response.data.error,
               });
          });
};

export const userLogout = () => (dispatch, getState) => {

     const config = {
          headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
          },
          credentials: "include",
     };
     axios.get("/auth/logout", config)
          .then(res => {
               dispatch({
               type: actionTypes.USER_LOGOUT_SUCCESS,
               });

               localStorage.setItem("isAuth", JSON.stringify(getState().auth.isAuth));
          })
          .catch(error => {
               console.log(error);
          });
};



