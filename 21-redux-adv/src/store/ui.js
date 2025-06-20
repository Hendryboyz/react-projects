import {createSlice} from "@reduxjs/toolkit";

const UISlices = createSlice({
  name: 'ui',
  initialState: {
    isShowCart: false,
    notification: null,
  },
  reducers: {
    toggleCart: (state, _) => {
      state.isShowCart = !state.isShowCart;
    },
    showNotification(state, action) {
      const {status, title, message} = action.payload;
      state.notification = {status, title, message};
    }
  },
})

export const uiActions = UISlices.actions;

export default UISlices;