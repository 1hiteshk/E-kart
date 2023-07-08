const INIT_STATE = {
    carts: []
}

export const cartreducer = (state=INIT_STATE,action) => {
    switch(action.type){
        case "ADD_CART" :
// if we add the same item again ,so the quantity increases not the same item added again as other individual

        const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

        if(itemIndex >= 0){
            state.carts[itemIndex].qnty += 1;
        }else{
            const temp = {...action.payload,qnty:1}
            return {
                ...state,               // here ...state spread operator is used to ,when we add other items in the cart so the previous item does not get removes ,item adds up
                carts: [...state.carts, temp]
            }
        }

            
          

        case "RMV_CART" :
            const data = state.carts.filter((el) => el.id !== action.payload)  // if id didnt match then return that id data    
          return{
            ...state,
            carts: data
          }

        case "RMV_ONE" :
            const itemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);
        if(state.carts[itemIndex_dec].qnty >= 1){
            const dltitem = state.carts[itemIndex_dec].qnty -= 1;

            return{
                ...state,
                carts:[...state.carts]
            }
        }
        else if(state.carts[itemIndex_dec].qnty === 1){
            const data = state.carts.filter((el) => el.id !== action.payload)  // if id didnt match then return that id data    
            return{
              ...state,
              carts: data
            }
        }

            default :
        return state
    }
}