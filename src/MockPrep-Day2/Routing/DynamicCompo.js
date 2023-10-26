import React from 'react'
import { useParams } from 'react-router-dom'
function DynamicCompo() {
    let paramData = useParams();
  return (
    <div>
    <h1>  STUDENT ID : {paramData.ID}</h1>
    </div>
  )
}

export default DynamicCompo
