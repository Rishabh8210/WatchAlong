"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const HeaderComponent = () => {
    const [isStyle, setStyle] = useState(false);
    const router = useRouter();
    return (
        <div className='h-[60px] w-full flex items-center justify-between overflow-hidden flex-shrink-0 flex-grow-0 border-b-2 border-zinc-800'>
            <div className='h-10 w-2/3 relative overflow-hidden transition-all cursor-pointer' onClick={() => router.push('/')} onMouseEnter={() => setStyle(true)} onMouseOut={() => setStyle(false)}>
                <p className={isStyle ? 'text-3xl absolute -top-10 transition-all font-mono font-semibold pointer-events-none dark:text-white' : 'text-3xl absolute  top-0 transition-all font-mono font-semibold pointer-events-none dark:text-white'}>Watch<span className='text-purple-600 pr-2'>Along</span><span className='h-2 w-2 inline-block dark:bg-white bg-black rotate-45'></span></p>
                <p className={isStyle ? 'text-3xl absolute top-0 transition-all uppercase font-mono font-semibold pointer-events-none dark:text-white' : 'text-3xl absolute top-10 transition-all font-mono font-semibold pointer-events-none dark:text-white'}><span className='text-purple-600'>Watch</span>Along<span className='text-purple-600'>!</span></p>
            </div>
        </div>
    )
}

export default HeaderComponent
