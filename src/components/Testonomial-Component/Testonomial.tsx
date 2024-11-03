import React from 'react'
import TestonomialCard from './TestonomialCard'
import TestonomialHeader from './TestonomialHeader'

const Testonomial = () => {
    return (
        <div className='min-h-[60vh]  flex flex-col gap-5'>
            <TestonomialHeader />
            <div className='h-full w-full flex px-5 border-2 border-zinc-800 rounded-xl overflow-x-auto gap-10 shadow-2xl shadow-zinc-800'>
                <TestonomialCard />
                <TestonomialCard />
                <TestonomialCard />
                <TestonomialCard />
                
            </div>
        </div>
    )
}

export default Testonomial