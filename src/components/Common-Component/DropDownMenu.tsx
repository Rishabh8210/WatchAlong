import Link from 'next/link'
import React from 'react'

const DropDownMenu = () => {
  return (
    <div className='h-fit w-48 border-2 border-zinc-700 bg-zinc-800 absolute overflow-hidden right-5 top-20 rounded-lg flex flex-col'>
        <Link className='px-5 py-2 text-lg font-semibold hover:bg-zinc-950 border-b-2 border-zinc-600' href={'/signin'}>Sign In</Link>
        <Link className='px-5 py-2 text-lg font-semibold hover:bg-zinc-950 border-b-2 border-zinc-600' href={'/signup'}>Sign Up</Link>
        <Link className='px-5 py-2 text-lg font-semibold hover:bg-zinc-950' href={'/room'}>Create Room</Link>
    </div>
  )
}

export default DropDownMenu