import React, { memo } from 'react'

function ButtonCompo(props) {
    console.log(` Button ${props.text}`)
  return (
  <button onClick={props.clickFun}>{props.text}</button>
  )
}

export default memo(ButtonCompo)
