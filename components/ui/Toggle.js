import React from 'react'

function Toggle({ type }) {
    return (
        type ? <div className='cursor-pointer'>
            <label class="relative flex justify-between items-center group text-xl cursor-pointer" >
                <input type="checkbox" class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-lg" />
                <span class="w-[48px] h-[25px] flex items-center flex-shrink-0 ml-4 p-1 bg-[#262626] border border-[#464646] rounded-md duration-300 ease-in-out peer-checked:border peer-checked:border-[#22F38F] after:w-[18px] after:h-[18px] after:bg-[#323232] after:rounded-lg after:shadow-md after:duration-300 peer-checked:after:bg-[#22F38F] peer-checked:after:-translate-x-5  "></span>
            </label>
        </div > : <div className='cursor-pointer'>
            <label class="relative flex justify-between items-center group text-xl cursor-pointer" >
                <input type="checkbox" class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
                <span class="w-16 h-8 flex items-center flex-shrink-0 ml-4 p-1 bg-[#262626] border border-[#464646] rounded-md duration-300 ease-in-out peer-checked:border peer-checked:border-[#22F38F] after:w-6 after:h-6 after:bg-[#323232] after:rounded-md after:shadow-md after:duration-300 peer-checked:after:bg-[#22F38F] peer-checked:after:-translate-x-7  "></span>
            </label>
        </div >


    )
}

export default Toggle