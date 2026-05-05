import React from 'react'

function App() {

  const inputRef = React.useRef()
  console.log(inputRef);
  console.log(typeof inputRef);
  
  return (
    
    <div className=' bg-amber-800 h-screen w-full   '>
      <input ref={inputRef} type="text" className='p-2 m-2 bg-amber-950 placeholder:text-amber-300' placeholder='Enter name' />
    </div>
 
  )
}

export default App