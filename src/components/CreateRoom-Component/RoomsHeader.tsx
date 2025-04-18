import { useParams } from 'next/navigation'
import React from 'react'

const RoomsHeader = () => {
  const { roomId } = useParams()
  return (
    <div className='h-fit w-full flex flex-col py-5 justify-center items-center pointer-events-none'>
        <h1 className='text-3xl font-semibold'>Room</h1>
        <p className=''>(Id - {roomId})</p>
    </div>
  )
}

export default RoomsHeader