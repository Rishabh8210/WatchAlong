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

    return (
        <div className='h-[60px] w-full flex items-center justify-between overflow-hidden flex-shrink-0 flex-grow-0 border-b-2 border-zinc-800'>
            <div className='h-10 w-2/3 relative overflow-hidden transition-all cursor-pointer' onClick={() => router.push('/')} onMouseEnter={() => setStyle(true)} onMouseOut={() => setStyle(false)}>
                <p className={isStyle ? 'text-3xl absolute -top-10 transition-all font-mono font-semibold pointer-events-none dark:text-white' : 'text-3xl absolute  top-0 transition-all font-mono font-semibold pointer-events-none dark:text-white'}>WatchAlong.</p>
                <p className={isStyle ? 'text-3xl absolute top-0 transition-all uppercase font-mono font-semibold pointer-events-none dark:text-white' : 'text-3xl absolute top-10 transition-all font-mono font-semibold pointer-events-none dark:text-white'}>WatchAlong!</p>
            </div>
            <div className='hidden h-fit w-full sm:flex items-center justify-end gap-5'>
                <Link href={`/rooms/${getrandomString()}`} className="hidden sm:flex h-10 w-44 justify-center items-center flex-col">
                    <button className="bg-yellow-600 h-fit uppercase p-1.5 w-full rounded-md text-xl font-mono font-semibold hover:text-yellow-600 hover:bg-transparent hover:border-2 border-zinc-700">Create Room</button>
                </Link>
                <Link href={'/signin'} className="hidden md:flex h-10 w-28 justify-center items-center flex-col">
                    <button className="bg-green-600 h-fit p-1.5 w-full rounded-md text-lg font-mono font-semibold uppercase hover:text-green-500 hover:bg-transparent hover:border-2 border-zinc-700">Sign-In</button>
                </Link>
            </div>
            <img className='h-[60px] sm:hidden cursor-pointer hover:scale-110 hover:rotate-12 transition-all' src='./Logo.png' alt='#Logo' onClick={() => setDropDown(!openDropDown)} />
            {openDropDown && <DropDownMenu />}
        </div>
    )
}

export default HomePageHeader
