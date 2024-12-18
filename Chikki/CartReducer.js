

 const CartReducer = (state,action)=>{

     switch(action.type){
        case "Add":
           return [...state,action.product]
        case "Remover":
            
        case "Increase":

        case "Decrease":

        default:
            return state;
     }
 }

 export default CartReducer;