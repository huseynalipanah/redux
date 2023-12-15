import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount } from './counterSlice'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(-5))}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}