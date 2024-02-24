import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQty(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQty(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQty,
  decreaseItemQty,
  clearCart,
} = cartSlice.actions;

export const getCartItems = (state) => state.cart.cart;

export const getTotalCartQuantity = createSelector(
  [getCartItems],
  (cartItems) =>
    cartItems.reduce((sumQuantity, item) => sumQuantity + item.quantity, 0),
);

export const getTotalCartPrice = createSelector([getCartItems], (cartItems) =>
  cartItems.reduce((sumPrice, item) => sumPrice + item.totalPrice, 0),
);

export const getCurrentQuantityById = (id) =>
  createSelector(
    [getCartItems],
    (cartItems) => cartItems.find((item) => item.pizzaId === id)?.quantity ?? 0,
  );

export default cartSlice.reducer;
