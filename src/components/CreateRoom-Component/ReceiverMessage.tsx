import React from 'react'
import { IMessage } from './ChatScreen'

const ReceiverMessage = (chats: IMessage) => {
    // console.log(message);
    return (
        <div className='h-fit w-full flex gap-3 px-5'>
            <div className='h-fit w-fit max-w-[70%] gap-3 flex rounded-lg'>
                <img className='h-7 rounded-full bg-white py-1 px-1' src='/user.png' alt='User' />
                <p className='text-[18px] px-2 py-1 bg-zinc-700 rounded-lg w-full overflow-hidden break-words'>{chats.message}</p>
            </div>
        </div>
    )
}

export default ReceiverMessage