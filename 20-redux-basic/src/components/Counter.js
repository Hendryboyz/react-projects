import {Component} from 'react';
import classes from './Counter.module.css';
import {useDispatch, useSelector, connect} from 'react-redux';
import {counterActions} from '../store';

const FunctionCounter = () => {
  const dispatch = useDispatch();
  // useSelector() will subscribe the store automatically
  const { counter, isCounterShow } = useSelector(state => ({
    counter: state.counter.count,
    isCounterShow: state.counter.isShow,
  }));
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = (delta) => {
    dispatch(counterActions.increment({ delta }));
  };

  function decrementHandler(delta) {
    dispatch(counterActions.decrement({ delta }));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{isCounterShow && counter}</div>
      <div>
        <button onClick={() => incrementHandler(1)}>Increment</button>
        <button onClick={() => decrementHandler(1)}>Decrement</button>
        <button onClick={() => incrementHandler(5)}>Increase by 5</button>
        <button onClick={() => decrementHandler(5)}>Decrease by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

class Counter extends Component {

  constructor(props) {
    super(props);

  }

  toggleCounterHandler() {
  };

  incrementHandler() {
    this.props.increment();
  };

  decrementHandler() {
    this.props.decrement();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={() => {
            this.incrementHandler();
          }}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.count
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  }
}

export default FunctionCounter;
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
