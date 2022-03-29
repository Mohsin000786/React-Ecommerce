import * as actionTypes from '../constants/constants';

export const getCupReducers = (state = { cups: [] }, action) => {
     switch(action.type){
      case actionTypes.GET_CUPS_REQUEST:
          return{
               loading: true,
               cups: [],
          };
      case actionTypes.GET_CUPS_SUCCESS:
          return{
               loading: false,
               cups: action.payload,
          };
      case actionTypes.GET_CUPS_FAIL:
           return{
                loading: false,
                error: action.payload,
           };
      default:
          return state;

     }
};

export const getCupDetailReducers = (state = { cup: {} }, action) => {
     switch(action.type){
      case actionTypes.GET_CUPS_DETAIL_REQUEST:
          return{
               loading: true,
          };
      case actionTypes.GET_CUPS_DETAIL_SUCCESS:
          return{
               loading: false,
               cup: action.payload,
          };
      case actionTypes.GET_CUPS_DETAIL_FAIL:
           return{
                loading: false,
                error: action.payload,
           };
      case actionTypes.GET_CUPS_DETAIL_RESET:
           return{
               cup: {},
           };
      default:
          return state;

     }
};
