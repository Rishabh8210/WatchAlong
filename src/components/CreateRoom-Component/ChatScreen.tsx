import React, { useEffect, useState } from 'react'
import ReceiverMessage from './ReceiverMessage';
import SenderMessage from './SenderMessage';
import { useChatScroll } from '@/hooks/useChatScroll';

interface ISocket {
    socket: WebSocket | null
    userId: string
    roomId: string | string[] | undefined
}

export interface IMessage {
    userId: string
    message: string
    roomId: string | string[]
}

const ChatScreen = ({ socket, userId, roomId }: ISocket) => {
    const [message, setMessage] = useState('');
    const [allMessages, setAllMessage] = useState<IMessage[]>([])

    const ref = useChatScroll(allMessages)

    useEffect(() => {
        if (socket) {
            if (socket.readyState === WebSocket.OPEN) {
                socket.onmessage = (message) => {
                    const data = JSON.parse(message.data);
                    console.log("Hii",data);

                    if (data?.type === 'new-message') {
                        setAllMessage((prev) => [...prev, {userId:data?.userId, roomId: data?.roomId, message:data?.message}])
                    }
                }
            }
        }
    }, [socket])

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
            <div className='h-fit w-full py-2 px-5'>
                <p className='text-2xl font-semibold text-center'>Chats</p>
            </div>
            <div ref={ref} className='h-[84%] w-full py-2 flex flex-col gap-4 overflow-y-auto'>
                {
                    allMessages && allMessages.map((message, ind) => {
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