import React from 'react'
import AboutHeader from './AboutHeader'
import AboutMain from './AboutMain'

const AboutUs = () => {
  return (
    <div className='min-h-[60vh] py-5 flex flex-col items-center w-full'>
        <AboutHeader />
        <AboutMain />
    </div>
  )
}

export default AboutUs