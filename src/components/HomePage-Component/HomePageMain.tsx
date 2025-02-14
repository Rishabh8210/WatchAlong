'use client'
import React, { useState } from 'react'
import HomePageTitleSlidingBar from './HomePageTitleSlidingBar'
import CreateAndJoinRoom from '../CreateRoom-Component/CreateAndJoinRoom'
const HomePageMain = () => {
    const [isPopup, setPopup] = useState(false);

    function handleClick(){
        setPopup(!isPopup);
    }

    return (
        <div className='h-[60vh] w-full  flex flex-col items-center justify-center'>
            <div className='h-5/6 w-full sm:w-10/12 md:w-9/12 lg:max-w-3xl border-2 rounded-lg bg-zinc-950 border-zinc-700 flex flex-col items-center justify-center gap-10 shadow-2xl shadow-zinc-800'>
                <HomePageTitleSlidingBar />
                <div className='h-fit w-fit flex text-white justify-center items-center flex-col gap-3'>
                    <button className='h-fit w-fit px-4 py-2 text-lg font-semibold transition-all rounded-lg border-2 border-zinc-700 bg-zinc-900 hover:bg-zinc-950 dark:text-white hover:border-white' onClick={() => handleClick()} >Create Room</button>
                    <p className='font-thin dark:text-white'>(No user account required)</p>
                </div>
            </div>
            {isPopup && <CreateAndJoinRoom setTrigger={handleClick} />}
        </div>
    )
}

export default HomePageMain