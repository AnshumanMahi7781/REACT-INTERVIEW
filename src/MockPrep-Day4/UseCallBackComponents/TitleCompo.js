import React, {memo} from 'react'

function TitleCompo() {
    console.log("TITLE");
  return (
   <h1>UseMemo CallBack Hook Revision</h1>
  )
}

export default memo(TitleCompo)
