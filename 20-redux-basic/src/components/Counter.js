import {Component} from 'react';
import classes from './Counter.module.css';
import {useDispatch, useSelector, connect} from 'react-redux';

const FunctionCounter = () => {
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

class Counter extends Component {

  constructor(props) {
    super(props);

  }

  toggleCounterHandler () {};

  incrementHandler () {
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
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
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
