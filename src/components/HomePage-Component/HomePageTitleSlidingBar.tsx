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
        <div className='h-fit w-full text-center px-2'>
            <p className='text-5xl font-semibold leading-tight transition-all pointer-events-none'>{title}.</p>
        </div>
    )
}

export default HomePageTitleSlidingBar