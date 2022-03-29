import * as actionTypes from '../constants/constants';

export const getPotReducers = (state = { pots: [] }, action) => {
     switch(action.type){
      case actionTypes.GET_POTS_REQUEST:
          return{
               loading: true,
               pots: [],
          };
      case actionTypes.GET_POTS_SUCCESS:
          return{
               loading: false,
               pots: action.payload,
          };
      case actionTypes.GET_POTS_FAIL:
           return{
                loading: false,
                error: action.payload,
           };
      default:
          return state;

     }
};

export const getPotDetailReducers = (state = { pot: {} }, action) => {
     switch(action.type){
      case actionTypes.GET_POTS_DETAIL_REQUEST:
          return{
               loading: true,
          };
      case actionTypes.GET_POTS_DETAIL_SUCCESS:
          return{
               loading: false,
               pot: action.payload,
          };
      case actionTypes.GET_POTS_DETAIL_FAIL:
           return{
                loading: false,
                error: action.payload,
           };
      case actionTypes.GET_POTS_DETAIL_RESET:
           return{
               pot: {},
           };
      default:
          return state;

     }
};
