import { useSelector, useDispatch } from "react-redux"
import { increament, decreament, reset, increamentByAmount } from "./counterSlice"
import { useState } from "react";

const Counter = () => { 

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [increamentAmount, setIncreamentAmount ] = useState(0);
  const addValue = Number(increamentAmount) || 0;

  const resetAll = () => {
    setIncreamentAmount(0);
    dispatch(reset())
  }

  return (
      <section>
        <p>{count}</p>
        <button onClick={() => dispatch(increament())}>+</button>
        <button onClick={() => dispatch(decreament())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(increamentByAmount())}>increamentByAmount</button>
        <input>
        </input>
      </section>
  )
}

export default Counter