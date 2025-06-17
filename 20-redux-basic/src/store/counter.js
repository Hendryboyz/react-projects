import {createSlice} from '@reduxjs/toolkit';

export const initialCounterState = {
  count: 0,
  isShow: true
}

// prepare a slice of global states in this application
export const counterStore = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      let { delta } = action.payload;
      if (!delta) { delta = 1 }
      state.count += delta;
    },
    decrement: (state, action) => {
      let { delta } = action.payload;
      if (!delta) { delta = 1 }
      state.count -= delta;
    },
    toggleCounter: (state) => {
      state.isShow = !state.isShow;
    }
  }
})