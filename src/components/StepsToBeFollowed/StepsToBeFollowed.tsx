import React from 'react'
import Header from './Header'

const StepsToBeFollowed = () => {
  return (
    <div className='h-[60vh] w-full flex flex-col justify-around items-center p-5 gap-2 '>
        <Header />
        <div className='h-fit w-full border-b-2 p-3 rounded-xl hover:bg-zinc-900'>
            <p className='text-xl font-semibold pointer-events-none'>1. Create a room</p>
        </div>
        <div className='h-fit w-full border-b-2 p-3 rounded-xl hover:bg-zinc-900'>
            <p className='text-xl font-semibold pointer-events-none'>2. Share the link</p>
        </div>
        <div className='h-fit w-full border-b-2 p-3 rounded-xl hover:bg-zinc-900'>
            <p className='text-xl font-semibold pointer-events-none'>3. Watch Together</p>
        </div>
    </div>
  )
}

export default StepsToBeFollowed