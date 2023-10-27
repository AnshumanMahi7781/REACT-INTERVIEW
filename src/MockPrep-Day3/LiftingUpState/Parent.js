import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [childValue, setChildValue] = useState("")
    let getFunction = (data)=>{
        console.log(data)
        setChildValue(data)

    }
  return (
    <div>
        <h2>This is my Parent Compo</h2>
        <h3>This is My Data Come From Child Component : {childValue}</h3>
      <Child getData={getFunction}/>
    </div>
  )
}

export default Parent
