import React, { useState } from 'react'

function Child(props) {
    const [name, setName] = useState("");

    const handleDataVejo = () => {
        props.getData(name);
        // console.log(name)
    }
    return (
        <div>
            <h2>This is our Child Component</h2>
            <input type="text" name='name' onChange={(e) => setName(e.target.value)} />
            <button onClick={handleDataVejo}> Data Vejo</button>
        </div>
    )
}

export default Child
