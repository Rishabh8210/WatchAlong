import React from 'react'

const TestonomialCard = () => {
  return (
    <div className='min-h-[40vh] w-full py-5 flex justify-between flex-col gap-10 flex-shrink-0'>
        <div className='h-fit w-full'>
            <p>I just wanted to say that WatchAlong is absolutely wonderful, me and my girlfriend are in a long-distance relationship and we use it all the time.</p>
        </div>
        <div className='h-fit w-full flex gap-3 pt-2 items-center border-t-2 border-zinc-500'>
            <img className='dark:invert h-5' src="./user.png" alt="#User" />
            <p className='text-base font-sem'>Test User 1</p>
        </div>
    </div>
  )
}

export default TestonomialCard