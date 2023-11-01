import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CounterSlice from '../Slice/CounterSlice';

function CounterCompo() {
  let Data = useSelector((state) => state.CounterApp.countVal);
  let dispatch = useDispatch();
  
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(CounterSlice.actions.add(10));

  }
  const handleSub = (e) => {
    e.preventDefault();
    dispatch(CounterSlice.actions.sub(5));

  }
  const handleMulti = (e) => {
    e.preventDefault();
    dispatch(CounterSlice.actions.multi(2));

  }
  const handleDiv = (e) => {
    e.preventDefault();
    dispatch(CounterSlice.actions.division(5));

  }
  return (
    <div>
      <h1>Counter Value : {Data}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <button onClick={handleMulti}>Multiply</button>
      <button onClick={handleDiv}>Division</button>
    </div>
  )
}

export default CounterCompo
