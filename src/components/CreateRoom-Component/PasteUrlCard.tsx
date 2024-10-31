import React, { useState } from 'react'
const PasteUrlCard = () => {
    const [url, setUrl] = useState('')
    return (
        <div className='h-40 w-full p-5 flex flex-col gap-3 border-2 border-zinc-800 rounded-xl'>
            <h3 className='text-lg font-semibold'>Paste url</h3>
            <input
                type='text'
                className='w-full h-9 px-2 outline-none focus:border-white bg-transparent border-2 border-zinc-800 rounded-lg'
                name='pasteurl'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder='https://yourwebite.com/video'
            />
        </div>
    )
}

export default PasteUrlCard