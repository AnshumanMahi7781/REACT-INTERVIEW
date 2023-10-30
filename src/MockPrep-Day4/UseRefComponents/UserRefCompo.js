import React, { useEffect, useRef, useState } from 'react'

function UserRefCompo() {
    const [name, setName]= useState("")
    let inputRef = useRef();
    let buttonRef = useRef();
 
    useEffect(()=>{
        console.log(inputRef.current);
        console.log(buttonRef.current);
      
    }, [name])
    return (
   <>
   <p>My Name Is : {name}</p>
      <input type="text" ref={inputRef} />
      <button ref={buttonRef} onClick={()=>  setName(inputRef.current.value) }>Click</button>
   </>
  )
}

export default UserRefCompo
