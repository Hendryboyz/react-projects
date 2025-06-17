import {createSlice} from "@reduxjs/toolkit";

const initialAuthState = {
  isLoggedIn: false,
};

export const authStore = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    }
  }
})