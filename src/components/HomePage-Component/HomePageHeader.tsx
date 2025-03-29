"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import DropDownMenu from '../Common-Component/DropDownMenu';
import Link from 'next/link';
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
                <p className={isStyle ? 'text-3xl absolute -top-10 transition-all font-mono font-semibold pointer-events-none dark:text-white' : 'text-3xl absolute  top-0 transition-all font-mono font-semibold pointer-events-none dark:text-white'}>WatchAlong.</p>
                <p className={isStyle ? 'text-3xl absolute top-0 transition-all uppercase font-mono font-semibold pointer-events-none dark:text-white' : 'text-3xl absolute top-10 transition-all font-mono font-semibold pointer-events-none dark:text-white'}>WatchAlong!</p>
            </div>
            <div className='hidden h-fit w-full sm:flex items-center justify-end gap-5'>
                <button className="bg-yellow-600 uppercase hidden sm:flex p-1.5 px-5 w-fit h-10 rounded-md text-xl font-mono font-semibold transition-all hover:text-yellow-600 hover:bg-transparent hover:border-2 border-zinc-700" onClick={handleClick}>Create Room</button>
                <button className="bg-green-600 hidden sm:flex p-1.5 h-10 w-fit px-5 rounded-md text-lg font-mono font-semibold uppercase transition-all hover:text-green-500 hover:bg-transparent hover:border-2 border-zinc-700" onClick={() => router.push('/signin')}>Sign-In</button>
            </div>
            <img className='h-[60px] sm:hidden cursor-pointer hover:scale-110 hover:rotate-12 transition-all' src='./Logo.png' alt='#Logo' onClick={() => setDropDown(!openDropDown)} />
            {openDropDown && <DropDownMenu />}
        </div>
    )
}

export default HomePageHeader
