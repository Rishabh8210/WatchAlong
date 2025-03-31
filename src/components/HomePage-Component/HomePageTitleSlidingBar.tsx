import React, { useEffect, useState } from 'react'
import { titleData } from '@/constant/titleData'
const HomePageTitleSlidingBar = () => {
    const [title, setTitle] = useState(titleData[0]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setTimeout(() => {
            if (count === titleData.length) {
                setTitle(titleData[0])
                setCount(1);
            } else {
                setCount((prev) => prev + 1);
                setTitle(titleData[count])
            }
        }, 3000)

        return () => clearTimeout(id);
    }, [count])

    return (
        <div className='h-fit w-full text-center px-2 text-white'>
            <p className='text-5xl font-semibold leading-tight transition-all pointer-events-none dark:text-white animate-bounce' >{title} <span className='text-purple-600 pr-2'>Together</span><span className='w-2 inline-block h-2 rotate-45 bg-white'></span></p>
        </div>
    )
}

export default HomePageTitleSlidingBar