import {ADD_TO_CART} from "../actions/ShoppingCardActions";

const initialState = {
    addedProducts: [],
    total: 0
  };

  export const cartReducer= (state = initialState, action)=>{
    switch (action.type) {
      default:
        return state;
    }
    
//     if(action.type === ADD_TO_CART){
//       //check if the action id exists in the addedItems
//      let existeditem= state.addedProducts.find(item=> action.id === item.id)
//      if(existeditem)
//      {
//         addedItem.quantity += 1 
//          return{
//             ...state,
//              total: state.total + addedItem.price 
//               }
//     }
//      else{
//         addedItem.quantity = 1;
//         //calculating the total
//         let newTotal = state.total + addedItem.price 
        
//         return{
//             ...state,
//             addedItems: [...state.addedItems, addedItem],
//             total : newTotal
//         }
        
//     }
// } else {
//     return state
//   } 
}