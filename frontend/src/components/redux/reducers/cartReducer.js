import * as actionTypes from "../constants/constants";

export const cartReducers = (state = { cartItems:[] }, action) => {
     switch(action.type){
      case actionTypes.ADD_TO_CART:
          const item = action.payload;

          const existItem = state.cartItems.find((x)=> x.product === item.product);

          if(existItem){
               return{
                    ...state,
                    cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x),
               };
          }
          else{
               return{
                    ...state,
                    cartItems: [...state.cartItems, item],
               };
          }
      case actionTypes.CHANGE_CART_QTY:
          const exist = state.cartItems.find((x) => x.product === action.payload._id);

          if (exist){
              return {
                    ...state,
                   cartItems: state.cartItems.map((x) => x.product === action.payload._id ? {...exist, qty: action.payload.qty } : x ),
              };
          }
       break;
      case actionTypes.REMOVE_FROM_CART:
          return{
               ...state,
               cartItems: state.cartItems.filter((x) => x.product !== action.payload),
          };
      default:
          return state;
     }
};
