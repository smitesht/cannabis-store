import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQty: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const cartData = { ...item, qty: 1 };
      state.cartItems = [...state.cartItems, cartData];
      state.totalQty = state.totalQty + 1;
    },
    removeQty: (state, action) => {},
  },
});

export const { addToCart, removeQty } = cartSlice.actions;
export default cartSlice.reducer;
