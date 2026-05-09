import React, { useState } from 'react'
import useCounter from './useCounter'

function App() {
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={useCounter}>
        Click me
      </button>
    </div>
  )
}

export default App