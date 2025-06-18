import {configureStore} from "@reduxjs/toolkit";
import CartStore, {cartActions} from "./cart";
import UIStore, {uiActions} from "./ui";


const store = configureStore({
  reducer: {
    cart: CartStore.reducer,
    ui: UIStore.reducer,
  }
});

export const actions = {
  cart: cartActions,
  ui: uiActions,
}

export default store;