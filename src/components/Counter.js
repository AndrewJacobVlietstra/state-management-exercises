import classes from './Counter.module.css';
import { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter, toggleReduxCounter } from '../redux/reducers/counterSlice';
import { counterContext } from '../context/counterContext';

const Counter = () => {
  
  // Local Counter state
  const [localCounter, setLocalCounter] = useState(0);
  
  // Redux counter state
  // useSelector causes this component to be subscribed to the redux store
  const { counterValue, showReduxCounter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(toggleReduxCounter());
  };

  // Context counter state
  const { contextCounter, setContextCounter } = useContext(counterContext);
  console.log(contextCounter);

  return (
    <main className={classes.counter}>
      {showReduxCounter ? 
      <>
        <h1>Redux Counter</h1>
        <div className={classes.counterInfoContainer}>
          <button className={classes.counterButton} onClick={ () => dispatch(decrementCounter(1)) }>-</button>
          <h2 className={classes.counterCountValue}>{counterValue}</h2>
          <button className={classes.counterButton} onClick={ () => dispatch(incrementCounter(1)) }>+</button>
        </div>
      </>
      : null}
      <button onClick={toggleCounterHandler}>Toggle Redux Counter</button>

      <div className={classes.value}>
        <h3 className={classes.localCounterTitle}>LOCAL COUNTER</h3>
        <div className={classes.counterInfoContainer}>
          <button className={classes.counterButton} onClick={ () => setLocalCounter(currentVal => currentVal - 1) }>-</button>
          <h2 className={classes.counterCountValue}>{localCounter}</h2>
          <button className={classes.counterButton} onClick={ () => setLocalCounter(currentVal => currentVal + 1) }>+</button>
        </div>
      </div>

      <div className={classes.value}>
        <h3 className={classes.localCounterTitle}>CONTEXT COUNTER</h3>
        <div className={classes.counterInfoContainer}>
          <button className={classes.counterButton} onClick={ () => setContextCounter(currentVal => currentVal - 1) }>-</button>
          <h2 className={classes.counterCountValue}>{contextCounter}</h2>
          <button className={classes.counterButton} onClick={ () => setContextCounter(currentVal => currentVal + 1) }>+</button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
