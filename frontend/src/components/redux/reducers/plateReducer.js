import * as actionTypes from '../constants/constants';

export const getPlateReducers = (state = { plates: [] }, action) => {
     switch(action.type){
      case actionTypes.GET_PLATES_REQUEST:
          return{
               loading: true,
               plates: [],
          };
      case actionTypes.GET_PLATES_SUCCESS:
          return{
               loading: false,
               plates: action.payload,
          };
      case actionTypes.GET_PLATES_FAIL:
           return{
                loading: false,
                error: action.payload,
           };
      default:
          return state;

     }
};

export const getPlateDetailReducers = (state = { plate: {} }, action) => {
     switch(action.type){
      case actionTypes.GET_PLATES_DETAIL_REQUEST:
          return{
               loading: true,
          };
      case actionTypes.GET_PLATES_DETAIL_SUCCESS:
          return{
               loading: false,
               plate: action.payload,
          };
      case actionTypes.GET_PLATES_DETAIL_FAIL:
           return{
                loading: false,
                error: action.payload,
           };
      case actionTypes.GET_PLATES_DETAIL_RESET:
           return{
               cup: {},
           };
      default:
          return state;

     }
};
