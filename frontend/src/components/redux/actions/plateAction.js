import * as actionTypes from '../constants/constants';
import axios from 'axios';

export const addPlates = () => async (dispatch) => {
     try {
         dispatch({ type: actionTypes.GET_PLATES_REQUEST });

         const { data } = await axios.get("/plates");

         dispatch({
               type: actionTypes.GET_PLATES_SUCCESS,
               payload: data,
          });
     }
     catch(error){
          dispatch({
               type: actionTypes.GET_PLATES_FAIL,
               payload: error.response && error.response.data.message ? error.response.data.message : error.message,
          });
     }

};

export const addPlateDetails = (id) => async (dispatch) => {
     try {
         dispatch({ type: actionTypes.GET_PLATES_DETAIL_REQUEST });

         const { data } = await axios.get(`/plates/${id}`);

         dispatch({
               type: actionTypes.GET_PLATES_DETAIL_SUCCESS,
               payload: data,
          });
     }
     catch(error){
          dispatch({
               type: actionTypes.GET_PLATES_DETAIL_FAIL,
               payload: error.response && error.response.data.message ? error.response.data.message : error.message,
          });
     }

};

export const removePlateDetails = () => (dispatch) => {
     dispatch({
          type: actionTypes.GET_PLATES_DETAIL_RESET,
     });
};
