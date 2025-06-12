import { createStore } from 'redux';

const initialState = {
  count: 0,
}

function counterReducer(state = initialState, action) {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      count: state.count + 1,
    }
  }

  if (action.type === 'DECREMENT') {
    return {
      ...state,
      count: state.count - 1,
    }
  }

  return state;
}

const store = createStore(counterReducer);

export default store;