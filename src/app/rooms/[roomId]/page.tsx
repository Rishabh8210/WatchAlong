"use client"
import FooterComponent from '@/components/Common-Component/FooterComponent'
import HeaderComponent from '@/components/Common-Component/HeaderComponent'
import CreateRoom from '@/components/CreateRoom-Component/CreateRoom'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const { roomId } = useParams()

  return (
    <div className='min-h-screen w-full p-5'>
        <HeaderComponent />
        <CreateRoom roomId = {roomId}/>
        <FooterComponent />
    </div>
  )
}

export default page