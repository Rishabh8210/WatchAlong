import React, { useState } from 'react'
import { titleData } from '@/constant/titleData'
const HomePageTitleSlidingBar = () => {
    const [title, setTitle] = useState('');
    const [count, setCount] = useState(0);
    function changeTitle(){
        if(count == titleData.length){
            setCount(0)
            setTitle(titleData[0])
            setCount(1);
        } else{
            setTitle(titleData[count])
            setCount(count+1);
        }
    }
    const id = setInterval(() => {
        changeTitle();
        clearInterval(id);
    }, 5000);
    return (
        <div className='h-fit w-full text-center px-2 text-white'>
            <p className='text-5xl font-semibold leading-tight transition-all pointer-events-none dark:text-white animate-bounce' >{title} <span className='text-purple-600 pr-2'>Together</span><span className='w-2 inline-block h-2 rotate-45 bg-white'></span></p>
        </div>
    )
}

export default HomePageTitleSlidingBar