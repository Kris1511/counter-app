import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice";
import './Counter.css';


const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <section className="center">
      <h2 className="count">{count}</h2>
      <div className="counter">
      <button className="increment" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="reset" onClick={() => dispatch(reset())}>
        Reset
      </button>
      <button className="decrement" onClick={() => dispatch(decrement())}>
        -
      </button>
      </div>
    </section>
  );
};

export default Counter;
