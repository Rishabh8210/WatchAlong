'use client'
import React, { useEffect, useState } from 'react'
import VideoPlaybackCard from './VideoPlaybackCard'
import { useParams } from 'next/navigation'
import ChatScreen, { IMessage } from './ChatScreen'
const PasteUrlCard = () => {
    const { roomId } = useParams();
    const [url, setUrl] = useState('')
    const [userId, setUserId] = useState('');
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [connectedUsersCount, setConnectedUsersCount] = useState(0);

    const [allMessage, setAllMessage ] = useState<IMessage[]>([]);

    const NEXT_PUBLIC_WEBSOCKET_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL as string;

    useEffect(() => {
        const newSocket = new WebSocket(NEXT_PUBLIC_WEBSOCKET_URL);
        newSocket.onopen = () => {
            setSocket(newSocket);
            console.log("Connection established");
            const data = {
                roomId: roomId,
                type: 'room-joining'
            }
            newSocket.send(JSON.stringify(data));
            newSocket.send(JSON.stringify({ type: 'connected-users-count', roomId: roomId}));
        }

        newSocket.onmessage = (message) => {
            const data = JSON.parse(message.data);
            console.log("Get", data?.type);
            
            if (data?.type === 'connection-established') {
                setUserId(data?.userId);
            }
            
            if (data?.type === 'connected-users-count') {
                console.log("Hiii");
                setConnectedUsersCount(data?.count);
            }

            if (data?.type === 'sending-message-to-room') {
                setUrl(data?.message?.data || '');
            }

            if (data?.type === 'new-message') {
                console.log(data);
                setAllMessage((prev) => [...prev, { userId: data?.userId, roomId: data?.roomId, message: data?.message }])
            }
        }

        newSocket.onerror = () => {
            setSocket(null);
        }

        return () => newSocket.close();
    }, [roomId])

    // useEffect(() => {
    //     if (socket && socket.readyState === WebSocket.OPEN) {
    //         socket.onmessage = (message) => {
    //             const data = JSON.parse(message.data);
    //             console.log("data", data);
    //             if (data?.type === 'connected-users-count') {
    //                 setConnectedUsersCount(data?.count);
    //             }
    //             if (data?.type === 'sending-message-to-room') {
    //                 setUrl(data?.message?.data);
    //             }
    //             if (data?.type === 'new-message') {
    //                 console.log(data);
    //                 setAllMessage((prev) => [...prev, { userId: data?.userId, roomId: data?.roomId, message: data?.message }])
    //             }
    //         }
    //     }
    // }, [socket])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (socket && socket.readyState === WebSocket.OPEN) {
            const data = {
                roomId: roomId,
                type: 'sending-message-to-room',
                message: {
                    data: e.target.value
                }
            }
            socket.send(JSON.stringify(data));
        } else {
            setSocket(null)
        }
    }

    function handleClick() {
        if (socket && socket.readyState === WebSocket.OPEN) {
            const data = {
                roomId: roomId,
                type: 'sending-message-to-room',
                message: {
                    data: 'Play karo ji'
                }
            }
            socket.send(JSON.stringify(data));
        } else {
            setSocket(null)
        }
    }
    console.log("All",allMessage);
    if (!socket) {
        return <p className='text-center text-red-500 text-2xl font-semibold font-sans'>Sorry Connetion is not established</p>
    }
    return (
        <div className='h-fit w-full p-5 flex flex-col gap-3 bg-black shadow-zinc-800 shadow-2xl text-white border-2 border-zinc-800 rounded-xl'>
            <div className='h-fit w-full flex items-center justify-between'>
                <h3 className='text-lg font-semibold'>Paste url</h3>
                <button className='h-9 w-fit px-5 font-semibold bg-red-600 text-white rounded-md' onClick={() => { handleClick() }}>Play</button>
            </div>

            <input
                type='text'
                className='w-full h-9 px-2 outline-none focus:border-white bg-transparent border-2 border-zinc-800 rounded-lg'
                name='pasteurl'
                value={url}
                onChange={handleChange}
                placeholder='https://yourwebite.com/video'
            />
            <div className='w-full h-fit flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-center'>
                <VideoPlaybackCard videoUrl={url} />
                <ChatScreen socket={socket} userId={userId} roomId={roomId} count={connectedUsersCount} allMessage = {allMessage}/>
            </div>
        </div>
    )
}

export default PasteUrlCard