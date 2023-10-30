
import React, { useState, useMemo } from 'react'

function UseMemoCompo() {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const countIncrementOne = () => {
        setCount(count + 1)
    }

    const countIncrementTwo = () => {
        setCountTwo(countTwo + 1)
    }
    const isEven = useMemo(() => {
        let i = 2000000000;
        while (i > 0) i--;
        return count % 2 === 0
    }, [count])

    // const isEven = () => {
    //     console.log(1)
    //     let i = 2000000000;
    //     while (i > 0) i--;
    //     return count % 2 === 0
    // }

    return (
        <>
            <button onClick={countIncrementOne}>CountButton One Clicked {count} Times :  {isEven ? 'Even' : 'Odd'}</button>
            <button onClick={countIncrementTwo}>CountButton Two Clicked {countTwo} Times</button>

        </>
    )
}

export default UseMemoCompo

