import NewHere from '@/components/Signin-Component/NewHere'
import SigninHeader from '@/components/Signin-Component/SigninHeader'
import SigninMain from '@/components/Signin-Component/SigninMain'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-7 px-5'>
        <SigninHeader />
        <SigninMain />
        <NewHere />
    </div>
  )
}

export default page