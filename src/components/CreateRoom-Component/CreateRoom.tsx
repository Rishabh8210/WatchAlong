'use client'
import React from 'react'
import RoomsHeader from './RoomsHeader'
import PasteUrlCard from './PasteUrlCard'


const CreateRoom = () => {
  return (
    <div className='h-full w-full flex flex-col gap-5'>
        <RoomsHeader />
        <PasteUrlCard />
    </div>
  )
}

export default CreateRoom