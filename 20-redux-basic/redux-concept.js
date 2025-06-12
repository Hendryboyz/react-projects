const redux = require('redux');

// must be a pure function
function counterReducer(prevState = {counter: 0}, action) {
  if (action.type === 'INCREMENT') {
    return {
    ...prevState,
        counter: prevState.counter + 1,
    }
  }

  if (action.type === 'DECREMENT') {
    return {
      ...prevState,
      counter: prevState.counter - 1,
    }
  }

  return  prevState;
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// like the callback function in useEffect()
store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
