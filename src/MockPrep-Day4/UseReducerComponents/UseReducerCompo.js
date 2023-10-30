import React, { useReducer } from 'react'

const initialState = {
 count : 0
}
const reducer = (currentState, actions)=>{
  switch(actions){
    case 'increment':
      return {...currentState, count : currentState.count +1};
    case 'decrement':
      return {...currentState, count : currentState.count -1 }
    case 'multiply':
      return {...currentState, count : currentState.count * 5}
      default : {
        return currentState
      }
  }
  

}

function UseReducerCompo() {
  let [currentState, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>Counter Value: {currentState.count}</h1>
      {/* <input type="text" name='name' placeholder='Enter Your Name' />
      <input type="number" name='age' placeholder='Enter Your Age' /> */}
      <button onClick={()=> dispatch("increment")}>Increment Count</button>
      <button onClick={()=> dispatch('decrement')}>Decrement Count</button>
      <button onClick={()=> dispatch("multiply")}>Count Multiply by 5</button>
      
    </>
  )
}

export default UseReducerCompo
