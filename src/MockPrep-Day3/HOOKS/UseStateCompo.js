import React from 'react'
import { useState } from 'react'

function UseStateCompo() {
    let [count, setCount] = useState(1)
  return (
    <div>
        <h2>Multiply : {count}</h2>
        <button onClick={()=> setCount(count * 2)}>Gunna</button>
      
    </div>
  )
}

export default UseStateCompo
