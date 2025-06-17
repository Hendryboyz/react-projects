import {createStore} from 'redux';
import {initialCounterState, counterStore} from "./counter";
import {authStore} from './auth';
import {configureStore} from "@reduxjs/toolkit";


function counterReducer(state = initialCounterState, action) {
  if (action.type === 'INCREMENT') {
    let { delta } = action.payload;
    if (!delta) { delta = 1 }
    return {
      ...state,
      count: state.count + delta,
    }
  }

  if (action.type === 'DECREMENT') {
    let { delta } = action.payload;
    if (!delta) { delta = 1 }
    return {
      ...state,
      count: state.count - delta,
    }
  }

  if (action.type === 'TOGGLE_COUNTER') {
    return {
      ...state,
      isShow: !state.isShow,
    };
  }

  return state;
}
// const store = createStore(counterReducer);

// configureStore in reduxjs/toolkit can help merge multiple slice of reducers to a central/single store
const store = configureStore({
  // reducer: counterStore.reducer,
  reducer: {
    counter: counterStore.reducer,
    auth: authStore.reducer,
  },
});

// methods in action will create an object like
// { type: SOME_UNIQUE_ID, payload: { ...objects_user_provide } }
export const counterActions = counterStore.actions;
export const authActions = authStore.actions;
export default store;