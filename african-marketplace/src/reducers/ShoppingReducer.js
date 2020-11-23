import {ADD_TO_CART} from "../actions/ShoppingCardActions";

const initialState = {
    productData: {},
    addedProducts: [],
    total: 0
  };

  export const cartReducer= (state = initialState, action)=>{
    
    if(action.type === ADD_TO_CART){
      let addedItem = state.productData.find(item=> item.id === action.id)
      //check if the action id exists in the addedItems
     let existed_item= state.addedProducts.find(item=> action.id === item.id)
     if(existed_item)
     {
        addedItem.quantity += 1 
         return{
            ...state,
             total: state.total + addedItem.price 
              }
    }
     else{
        addedItem.quantity = 1;
        //calculating total
        let newTotal = state.total + addedItem.price 
        
        return{
            ...state,
            addedProducts: [...state.addedProducts, addedItem],
            total : newTotal
        }
        
    }
} else{
    return state
  }
}