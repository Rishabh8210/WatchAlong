'use client'
import React, { useEffect, useRef, useState } from 'react'
import VideoPlaybackCard from './VideoPlaybackCard'
import { useParams } from 'next/navigation'
import ChatScreen, { IMessage } from './ChatScreen'
import { Pause, Play, StepBack, StepForward } from 'lucide-react'
const PasteUrlCard = () => {
    const { roomId } = useParams();
    const [url, setUrl] = useState('')
    const [userId, setUserId] = useState('');
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [connectedUsersCount, setConnectedUsersCount] = useState(0);
    const parentRef = useRef<any>(null);

    const [allMessage, setAllMessage] = useState<IMessage[]>([]);

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
            newSocket.send(JSON.stringify({ type: 'connected-users-count', roomId: roomId }));
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

            if (data?.type === 'player-controler') {
                if (data?.message?.data === 'play') {
                    if (parentRef.current?.handlePlay) {
                        parentRef.current?.handlePlay();
                    }
                } else if (data?.message?.data === 'pause') {
                    if (parentRef.current?.handlePause) {
                        parentRef.current?.handlePause();
                    }
                } else {
                    if (parentRef.current?.handleSeek) {
                        parentRef.current?.handleSeek(data?.message?.data);
                    }
                }
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

    function handleClick(option: string) {
        console.log(option);
        if (socket && socket.readyState === WebSocket.OPEN) {
            const data = {
                roomId: roomId,
                type: 'player-controler',
                message: {
                    data: option
                }
            }
            socket.send(JSON.stringify(data));
        } else {
            setSocket(null)
        }
    }
    console.log("All", allMessage);
    if (!socket) {
        return <p className='text-center text-red-500 text-2xl font-semibold font-sans'>Sorry Connetion is not established</p>
    }
    return (
        <div className='h-fit w-full p-5 flex flex-col gap-3 bg-black shadow-zinc-800 shadow-2xl text-white border-2 border-zinc-800 rounded-xl'>
            <div className='h-fit w-full flex items-center justify-between'>
                <h3 className='text-lg font-semibold'>Paste url</h3>
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
                <div className='h-[50vh] md:h-[65vh] lg:h-[75vh] w-[68%] py-5'>
                    <VideoPlaybackCard ref={parentRef} videoUrl={url} />
                    {   
                        url && (<div className='h-fit w-fit flex gap-10'>
                            <button onClick={() => handleClick('play')}><Play size={28} /></button>
                            <button onClick={() => handleClick('pause')}><Pause size={28} /></button>
                            <button onClick={() => handleClick('seek-l')}><StepBack size={28} /></button>
                            <button onClick={() => handleClick('seek-r')}><StepForward size={28} /></button>
                        </div>)
                    }
                </div>
                
                <ChatScreen socket={socket} userId={userId} roomId={roomId} count={connectedUsersCount} allMessage={allMessage} />
            </div>
        </div>
    )
}

export default PasteUrlCard