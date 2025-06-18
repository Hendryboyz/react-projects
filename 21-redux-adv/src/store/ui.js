import {createSlice} from "@reduxjs/toolkit";

const UISlices = createSlice({
  name: 'ui',
  initialState: {
    isShowCart: false,
  },
  reducers: {
    toggleCart: (state, _) => {
      state.isShowCart = !state.isShowCart;
    },
  },
})

export const uiActions = UISlices.actions;

export default UISlices;