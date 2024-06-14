import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    cartItems:[],
    isLoading:false,
    subtotal:0,
    tax:0,
    total:0,
    shippingCharges:0,
    discount:0,

    shippingInfo:{
      name:"",
      email:"",
      address:"",
      pincode:"", 
      landmark:"",
      phone:"", 
    }

}

export const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers:{
    addToCart:(state,action)=>{
        state.isLoading = true;

      const index = state.cartItems.findIndex(
        (i) => i.productId === action.payload.productId
      );

      if (index !== -1) state.cartItems[index] = action.payload;
      else state.cartItems.push(action.payload);
      state.isLoading = false;


    },
    removeCartItem:(state,action)=>{
        state.isLoading= true
        state.cartItems = state.cartItems.filter((item)=>item.productId!==action.payload)
        state.isLoading= false

    },
    calculateTotalPrice: (state) => {
        const subtotal = state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
  
        state.subtotal = subtotal;
        state.shippingCharges = state.subtotal > 1000 ? 50 : 0;
        state.tax = Math.round(state.subtotal * 0.12);
        state.total =
          state.subtotal + state.tax + state.shippingCharges - state.discount;
      },
      saveShippingInfo: (state, action) => {
        state.shippingInfo = action.payload;
      },
  
  }
})

export const {addToCart, removeCartItem,calculateTotalPrice,saveShippingInfo} = cartReducer.actions
export default cartReducer.reducer