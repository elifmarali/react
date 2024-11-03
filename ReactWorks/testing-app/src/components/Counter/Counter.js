import React, { useEffect } from 'react'
import { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Calisti");
    }, [])
    return (
        <div>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default Counter