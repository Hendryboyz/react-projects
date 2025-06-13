import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  // useSelector() will subscribe the store automatically
  const { counter } = useSelector(state => ({
    counter: state.count
  }));
  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  };

  function decrementHandler() {
    dispatch({ type: 'DECREMENT' });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
