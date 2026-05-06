import React from 'react'

function Input() {
  return (
    <div className='bg-amber-400 w-full h-[10vh] flex  items-center justify-center gap-2  '>
        <input type="text" placeholder='Write todo' className=' h-[60%] w-[50%]   bg-gray-300 text-gray-950 rounded-2xl pl-6 pr-6 '  />
        <button className=' bg-gray-900 text-white h-[60%] rounded p-1'>Add</button>
    </div>
  )
}

export default Input