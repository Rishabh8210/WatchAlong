import React, { useEffect, useState } from 'react'
import ReceiverMessage from './ReceiverMessage';
import SenderMessage from './SenderMessage';
import { useChatScroll } from '@/hooks/useChatScroll';

interface ISocket {
    socket: WebSocket | null
    userId: string
    roomId: string | string[] | undefined
    count?: number
    allMessage: IMessage[]
}

export interface IMessage {
    userId: string
    message: string
    roomId: string | string[]
}

const ChatScreen = ({ socket, userId, roomId, count, allMessage }: ISocket) => {
    const [message, setMessage] = useState('');
    const ref = useChatScroll(allMessage)
    console.log(count);

    function handleClick() {
        console.log(userId);
        if (!message || !userId || !roomId) {
            return
        }

        if(socket && socket.readyState === WebSocket.OPEN){
            const data = {
                userId: userId,
                roomId: roomId,
                message: message,
                type:'new-message'
            }
            socket.send(JSON.stringify(data))
            setMessage('');
        } else {
            console.log("hii");
        }
    }

    return (
        <div className='w-full md:w-[30%] h-[50vh] md:h-[65vh] lg:h-[75vh] border-2 border-zinc-700 rounded-xl relative'>
            <div className='h-fit w-full py-2 px-5 flex justify-between items-center'>
                <p className='text-2xl font-semibold font-sans'>Chats</p>
                <p className='text-md font-sans font-semibold'>Users connected - <span className='text-red-500 text-lg font-semibold'>{count}</span></p>
            </div>
            <div ref={ref} className='h-[84%] w-full py-2 flex flex-col gap-4 overflow-y-auto transition-all'>
                {
                    allMessage && allMessage.map((message, ind) => {
                        if(message.userId === userId){
                            return <SenderMessage key={ind} {...message} />
                        } else {
                            return <ReceiverMessage key={ind} {...message} />
                        }
                    })
                }
            </div>
            <div className='h-fit w-full flex px-5 py-2 justify-between items-center absolute bottom-0 left-0'>
                <input
                    className='h-fit w-[80%] px-2 py-1 text-[16px] bg-transparent outline-0 border-2 border-zinc-500 rounded-lg'
                    placeholder='Enter text'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type='text'
                    name='text'
                />
                <button className='h-fit w-fit border-2 border-transparent font-semibold px-2 py-1 text-[16px] rounded-lg hover:bg-red-600 hover:text-white transition-all text-red-600 bg-white' onClick={handleClick}>Send</button>
            </div>
        </div>
    )
}

export default ChatScreen