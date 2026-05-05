import React from 'react'
import Card from './Components/Card'

function App() {
  let List = [name="Bhaskar", name="Suraj"]
  return (
    <>
    <Card name={List} />
    </>
  )
}

export default App