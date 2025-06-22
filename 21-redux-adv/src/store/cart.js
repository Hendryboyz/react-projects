import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItem: 0,
    changed: false,
  },
  reducers: {
    addItem(state, action) {
      const {item} = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.count += 1
        existingItem.totalPrice = existingItem.totalPrice + item.price;
      }
      else {
        // only change state directly with @reduxjs/toolkit
        state.items.push({
          ...item,
          count: 1,
          totalPrice: item.price,
        });
      }

      state.totalItem += 1;
      state.changed = true;
    },
    removeItem: (state, action) => {
      const {id} = action.payload;
      const existingItem = state.items.find(i => i.id === id);
      if (existingItem.count === 1) {
        state.items = state.items.filter(i => i.id !== id);
      } else {
        existingItem.count -= 1
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }

      state.totalItem -= 1;
      state.changed = true;
    },
    replaceCart: (state, action) => {
      const {items, totalItem} = action.payload;
      state.items = items;
      state.totalItem = totalItem;
    }
  }
});




export const cartActions = cartSlice.actions;

export default cartSlice;
