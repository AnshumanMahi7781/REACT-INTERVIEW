import React from 'react'
import { useState } from 'react'

function ConditionCompo() {
    const [value, setValue] = useState(true)
  return (
    <div>
      {value ? <Compo1/> : <Compo2/>}
      <button onClick={()=> setValue(!value)}>TOGGLE UI</button>
    </div>
  )
}

export default ConditionCompo

function  Compo1 (){
    return (
<h1>This is COMPO1</h1>
    )
}
function  Compo2 (){
    return (
<h2>This is COMPO2</h2>
    )
}
