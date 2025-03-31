"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import DropDownMenu from '../Common-Component/DropDownMenu';
import { getrandomString } from '../../utils/getRandomstring';

const HomePageHeader = () => {
    const [isStyle, setStyle] = useState(false);
    const [openDropDown, setDropDown] = useState(false);
    const router = useRouter();

    function handleClick(){
        const str = getrandomString()
        router.push(`/rooms/${str}`);
    }

    return (
        <div className='h-[60px] w-full flex items-center justify-between overflow-hidden flex-shrink-0 flex-grow-0 border-b-2 border-zinc-800'>
            <div className='h-10 w-2/3 relative overflow-hidden transition-all cursor-pointer' onClick={() => router.push('/')} onMouseEnter={() => setStyle(true)} onMouseOut={() => setStyle(false)}>
                <p className={isStyle ? 'text-3xl absolute -top-10 transition-all font-mono font-semibold pointer-events-none dark:text-white' : 'text-3xl absolute  top-0 transition-all font-mono font-semibold pointer-events-none dark:text-white'}>Watch<span className='text-purple-600 pr-2'>Along</span><span className='h-2 w-2 inline-block bg-white rotate-45'></span></p>
                <p className={isStyle ? 'text-3xl absolute top-0 transition-all uppercase font-mono font-semibold pointer-events-none dark:text-white' : 'text-3xl absolute top-10 transition-all font-mono font-semibold pointer-events-none dark:text-white'}><span className='text-purple-600'>Watch</span>Along<span className='text-purple-600'>!</span></p>
            </div>
            <div className='hidden h-fit w-full sm:flex items-center justify-end gap-5'>
                <button className="bg-yellow-600 uppercase text-white hidden sm:flex py-1 px-5 w-fit h-fit rounded-md text-xl border-2 border-yellow-600 font-mono font-semibold transition-all hover:text-yellow-600 hover:bg-transparent hover:border-2 hover:border-zinc-700" onClick={handleClick}>Create Room</button>
                <button className="bg-green-600 hidden text-white sm:flex py-1 w-fit px-5 h-fit rounded-md text-lg font-mono border-2 border-green-600 font-semibold uppercase transition-all hover:text-green-500 hover:bg-transparent hover:border-2 hover:border-zinc-700" onClick={() => router.push('/signin')}>Sign-In</button>
            </div>
            <img className='h-[60px] sm:hidden cursor-pointer hover:scale-110 hover:rotate-12 transition-all' src='./Logo.png' alt='#Logo' onClick={() => setDropDown(!openDropDown)} />
            {openDropDown && <DropDownMenu />}
        </div>
    )
}

export default HomePageHeader
