import React from 'react'
import AboutHeader from './AboutHeader'
import AboutMain from './AboutMain'

const AboutUs = () => {
  return (
    <div className='min-h-[60vh] w-full flex flex-col justify-around items-center'>
      <div className='h-full w-full sm:w-10/12 md:w-9/12 lg:max-w-3xl py-5 flex flex-col items-center'>
          <AboutHeader />
          <AboutMain />
      </div>
    </div>
  )
}

export default AboutUs