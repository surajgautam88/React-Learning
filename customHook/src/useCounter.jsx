import React from 'react'

const [count, setCount] = useState(0)

function useCounter() {
    setCount(count + 1)

    return {count, useCounter}
}

export default useCounter   