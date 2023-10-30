import React, { memo } from 'react'

function CountCompo(props) {
    console.log(` COUNT ${props.text} `)
  return (
    <div>
        {props.text} - {props.count}
      
    </div>
  )
}

export default memo(CountCompo)
