import React from 'react'

function SmallButton({children}) {
  return (
    <button className='Button bg-[#323232] border hover:border-b hover:border-r-0 hover:border-l-0 hover:border-t-0 hover:text-white text-[#AAAAAA] border-[#414141] hover:border-[#22F38F] rounded-[10px] p-2'>
      {children}
      <div className='w-1/3 h-2 bottom-0 blur-md bg-[#22F38F] rounded-xl mx-auto -mb-2 Blurred'></div>
    </button>
  )
}

export default SmallButton;
