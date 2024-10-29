import AlreadyRegistered from '@/components/Signup-Component/AlreadyRegistered'
import SignupHeader from '@/components/Signup-Component/SignupHeader'
import SignupMain from '@/components/Signup-Component/SignupMain'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-5 px-5'>
        <SignupHeader />
        <SignupMain />
        <AlreadyRegistered />
    </div>
  )
}

export default page