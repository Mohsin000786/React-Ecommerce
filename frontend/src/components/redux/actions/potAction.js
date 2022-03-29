import * as actionTypes from '../constants/constants';
import axios from 'axios';

export const addPots = () => async (dispatch) => {
     try {
         dispatch({ type: actionTypes.GET_POTS_REQUEST });

         const { data } = await axios.get("/pots");

         dispatch({
               type: actionTypes.GET_POTS_SUCCESS,
               payload: data,
          });
     }
     catch(error){
          dispatch({
               type: actionTypes.GET_POTS_FAIL,
               payload: error.response && error.response.data.message ? error.response.data.message : error.message,
          });
     }

};

export const addPotDetails = (id) => async (dispatch) => {
     try {
         dispatch({ type: actionTypes.GET_POTS_DETAIL_REQUEST });

         const { data } = await axios.get(`/pots/${id}`);

         dispatch({
               type: actionTypes.GET_POTS_DETAIL_SUCCESS,
               payload: data,
          });
     }
     catch(error){
          dispatch({
               type: actionTypes.GET_POTS_DETAIL_FAIL,
               payload: error.response && error.response.data.message ? error.response.data.message : error.message,
          });
     }

};

export const removePotDetails = () => (dispatch) => {
     dispatch({
          type: actionTypes.GET_POTS_DETAIL_RESET,
     });
};
