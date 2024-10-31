import React, { useState } from 'react'
const PasteUrlCard = () => {
    const [url, setUrl] = useState('')
    return (
        <div className='h-fit w-full p-5 flex flex-col gap-3 bg-black shadow-zinc-800 shadow-2xl text-white border-2 border-zinc-800 rounded-xl'>
            <h3 className='text-lg font-semibold'>Paste url</h3>
            <input
                type='text'
                className='w-full h-9 px-2 outline-none focus:border-white bg-transparent border-2 border-zinc-800 rounded-lg'
                name='pasteurl'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder='https://yourwebite.com/video'
            />
            <div className='h-fit w-full flex justify-center py-2'>
                <button className='h-11 font-semibold w-24 border-2 border-zinc-800 rounded-lg hover:bg-white hover:text-black transition-all'>Search</button>
            </div>
        </div>
    )
}

export default PasteUrlCard