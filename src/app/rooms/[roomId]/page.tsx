"use client"
import FooterComponent from '@/components/Common-Component/FooterComponent'
import HeaderComponent from '@/components/Common-Component/HeaderComponent'
import CreateRoom from '@/components/CreateRoom-Component/CreateRoom'
import React from 'react'

const Rooms = () => {

  return (
    <div className='min-h-screen w-full p-5'>
        <HeaderComponent />
        <CreateRoom />
        <FooterComponent />
    </div>
  )
}

export default Rooms