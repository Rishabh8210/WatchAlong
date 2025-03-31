import React from 'react'
import { IMessage } from './ChatScreen'

const SenderMessage = (chats: IMessage) => {
    // console.log(message);
    return (
        <div className='h-fit w-full flex justify-end gap-3 px-5'>
            <div className='h-fit w-fit max-w-[70%] bg-purple-800 p-1 px-3 rounded-xl'>
                <p className='text-[18px] w-full overflow-hidden break-words'>{chats.message}</p>
            </div>
        </div>
    )
}

export default SenderMessage