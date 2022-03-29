import * as actionTypes from '../constants/constants';

const initialState = {
     isAuth: false,
     user: {},
     error: null,
};

export const statusReducers = (state = initialState, action) => {
     switch(action.type){
     case actionTypes.USER_LOGIN_SUCCESS:
          return{
               ...state,
               user: action.payload,
               prompt: action.message,
               isAuth: true,
          }
     case actionTypes.USER_LOGIN_FAIL:
          return{
               ...state,
               user: {},
               isAuth: false,
               error: action.payload,
          }
     case actionTypes.USER_LOGOUT_SUCCESS:
          return{
               ...state,
               user: {},
               isAuth: false,
          }
     default:
          return state;
     }
};




