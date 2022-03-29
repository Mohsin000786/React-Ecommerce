import * as actionTypes from '../constants/constants';
import axios from 'axios';

export const addCups = () => async (dispatch) => {
     try {
         dispatch({ type: actionTypes.GET_CUPS_REQUEST });

         const { data } = await axios.get("/cups");

         dispatch({
               type: actionTypes.GET_CUPS_SUCCESS,
               payload: data,
          });
     }
     catch(error){
          dispatch({
               type: actionTypes.GET_CUPS_FAIL,
               payload: error.response && error.response.data.message ? error.response.data.message : error.message,
          });
     }

};

export const addCupDetails = (id) => async (dispatch) => {
     try {
         dispatch({ type: actionTypes.GET_CUPS_DETAIL_REQUEST });

         const { data } = await axios.get(`/cups/${id}`);

         dispatch({
               type: actionTypes.GET_CUPS_DETAIL_SUCCESS,
               payload: data,
          });
     }
     catch(error){
          dispatch({
               type: actionTypes.GET_CUPS_DETAIL_FAIL,
               payload: error.response && error.response.data.message ? error.response.data.message : error.message,
          });
     }

};

export const removeCupDetails = () => (dispatch) => {
     dispatch({
          type: actionTypes.GET_CUPS_DETAIL_RESET,
     });
};
