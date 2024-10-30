"use client"
import React, { useState } from 'react'
import DropDownMenu from './DropDownMenu';

const HeaderComponent = () => {
    const [isStyle, setStyle] = useState(false);
    const [openDropDown, setDropDown] = useState(false);
    return (
        <div className='h-fit w-full flex items-center justify-between overflow-hidden flex-shrink-0 flex-grow-0 border-b-2 border-zinc-800'>
            <div className='h-10 w-2/3 relative overflow-hidden transition-all' onMouseEnter={() => setStyle(true)} onMouseOut={() => setStyle(false)}>
                <p className={isStyle ? 'text-3xl absolute -top-10 transition-all font-mono font-semibold pointer-events-none dark:text-white' : 'text-3xl absolute  top-0 transition-all font-mono font-semibold pointer-events-none dark:text-white'}>WatchAlong.</p>
                <p className={isStyle ? 'text-3xl absolute top-0 transition-all uppercase font-mono font-semibold pointer-events-none dark:text-white' : 'text-3xl absolute top-10 transition-all font-mono font-semibold pointer-events-none dark:text-white'}>WatchAlong!</p>
            </div>
            <img className='h-[60px] cursor-pointer hover:scale-110 hover:rotate-12 transition-all' src='./Logo.png' alt='#Logo' onClick={() => setDropDown(!openDropDown)} />
            {openDropDown && <DropDownMenu />}
        </div>
    )
}

export default HeaderComponent













// import React from 'react'

// const HeaderComponent = () => {
//   return (
//     <div className='h-fit w-full flex  items-center  overflow-hidden flex-shrink-0 flex-grow-0'>
//         <div className='h-fit w-44 flex flex-shrink-0'>
//             <img className='w-20' src='./Logo.png' alt='#Logo'/>
//             <p className='text-3xl w-24 font-mono font-semibold break-words'>WatchAlong</p>
//         </div>
//     </div>
//   )
// }

// export default HeaderComponent