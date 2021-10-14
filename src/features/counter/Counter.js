import React, { useState } from 'react'
import { increment, decrement, incrementByAmount } from './CounterSlice'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Counter.module.css';

export function Counter() {
  const [value, setValue] = useState(0)
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const addAsync = (value) => {
    setTimeout(() => {
      dispatch(incrementByAmount(value))
    }, 1200)
  }
  const addIfOdd = (count) => {
    if(count % 2 !== 0) {
      dispatch(incrementByAmount(parseInt(value)))
    }
  }
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(parseInt(value)))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => addAsync(parseInt(value))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => addIfOdd(count)}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
