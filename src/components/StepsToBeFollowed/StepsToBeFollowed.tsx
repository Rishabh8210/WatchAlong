import React from 'react'
import Header from './Header'

const StepsToBeFollowed = () => {
  return (
    <div className='h-[60vh] w-full flex flex-col justify-around items-center p-5 gap-2 '>
        <Header />
        <div className='h-fit w-full border-b-2 border-zinc-800 dark:border-white p-3 rounded-xl hover:text-white hover:bg-zinc-900'>
            <p className='text-xl font-semibold  pointer-events-none'>1. Create a room</p>
        </div>
        <div className='h-fit w-full border-b-2 border-zinc-800 dark:border-white hover:text-white p-3 rounded-xl hover:bg-zinc-900'>
            <p className='text-xl font-semibold pointer-events-none'>2. Share the code</p>
        </div>
        <div className='h-fit w-full border-b-2 border-zinc-800 dark:border-white hover:text-white p-3 rounded-xl hover:bg-zinc-900'>
            <p className='text-xl font-semibold pointer-events-none'>3. Watch Together</p>
        </div>
    </div>
  )
}

export default StepsToBeFollowed