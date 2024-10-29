'use client'
import React from 'react'
import HomePageTitleSlidingBar from './HomePageTitleSlidingBar'
import Link from 'next/link'
const HomePageMain = () => {
    return (
        <div className='h-[60vh] w-full  flex flex-col items-center justify-center'>
            <div className='h-4/6 w-full border-2 rounded-lg bg-zinc-950 border-zinc-700 flex flex-col items-center justify-center gap-10'>
                <HomePageTitleSlidingBar />
                <Link className='h-fit w-fit px-4 py-2 text-lg font-semibold transition-all rounded-lg border-2 border-zinc-700 bg-zinc-900 hover:bg-zinc-950' href={'/rooms'}>Create Room</Link>
            </div>
        </div>
    )
}

export default HomePageMain