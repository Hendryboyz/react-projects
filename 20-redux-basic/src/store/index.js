import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  isShow: true
}

// prepare a slice of global states in this application
const counterStore = createSlice({
  name: 'counter',
  initialState: initialState,
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

function counterReducer(state = initialState, action) {
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
  reducer: counterStore.reducer,
  // reducer: { counter: counterStore.reducer },
});

// methods in action will create an object like
// { type: SOME_UNIQUE_ID, payload: { ...objects_user_provide } }
export const counterActions = counterStore.actions;
export default store;