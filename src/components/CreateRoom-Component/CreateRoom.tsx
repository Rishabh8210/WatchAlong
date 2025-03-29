'use client'
import React from 'react'
import RoomsHeader from './RoomsHeader'
import PasteUrlCard from './PasteUrlCard'


const CreateRoom = ({roomId}:any) => {
  return (
    <div className='h-full w-full flex flex-col gap-5'>
        <RoomsHeader roomId = {roomId}/>
        <PasteUrlCard />
    </div>
  )
}

export default CreateRoom