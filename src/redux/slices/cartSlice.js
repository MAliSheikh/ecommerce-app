import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const getItemsSelector = createSelector(
  (state) => state.cart.cart,
  (cart) => cart
);
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
