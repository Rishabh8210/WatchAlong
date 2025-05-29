'use client'
import React, { useEffect, useRef, useState } from 'react'
import VideoPlaybackCard from './VideoPlaybackCard'
import { useParams } from 'next/navigation'
import ChatScreen, { IMessage } from './ChatScreen'
import { Pause, Play, RefreshCw, StepBack, StepForward, User } from 'lucide-react'

export interface PlayerHandle {
  handlePlay: () => void;
  handlePause: () => void;
  handleSeek: (seek: 'seek-l' | 'seek-r') => void;
  handleSync: (time: number) => void;
  handleGetCurrentTime: () => number | null;
}

const PasteUrlCard = () => {
    const { roomId } = useParams();
    const [url, setUrl] = useState('')
    const [userId, setUserId] = useState('');
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [connectedUsersCount, setConnectedUsersCount] = useState(0);
    const [userMakesChanges, setUserMakesChanges] = useState('')
    const parentRef = useRef<PlayerHandle | null>(null);

    const [allMessage, setAllMessage] = useState<IMessage[]>([]);

    const NEXT_PUBLIC_WEBSOCKET_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL as string;

    useEffect(() => {
        const newSocket = new WebSocket(NEXT_PUBLIC_WEBSOCKET_URL);
        let timeout: ReturnType<typeof setTimeout> | null = null;

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
                if (data?.currentlyPlaying) {
                    setUrl(data?.currentlyPlaying)
                }
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
                setUserMakesChanges(data?.userId);

                if (timeout) {
                    clearTimeout(timeout);
                }

                timeout = setTimeout(() => {
                    setUserMakesChanges('');
                    timeout = null
                }, 2000)

                if (data?.message?.data === 'play') {
                    if (parentRef.current?.handlePlay) {
                        parentRef.current?.handlePlay();
                    }
                } else if (data?.message?.data === 'pause') {
                    if (parentRef.current?.handlePause) {
                        parentRef.current?.handlePause();
                    }
                } else if (data?.message?.data === 'sync') {
                    if (parentRef.current?.handlePlay && parentRef.current?.handleSync) {
                        parentRef.current?.handleSync(data?.time);
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
            if (parentRef.current?.handleGetCurrentTime) {
                let currentTime = parentRef.current?.handleGetCurrentTime();
            
                if(!currentTime){
                    currentTime = 0;
                }

                const delayInMs = currentTime > (300 / 1000) ? 300 : 0;

                const adjustedTime = currentTime - (delayInMs / 1000);
                const data = {
                    userId,
                    roomId: roomId,
                    time: adjustedTime,
                    type: 'player-controler',
                    message: {
                        data: option
                    }
                }
                socket.send(JSON.stringify(data));
            }
        } else {
            setSocket(null)
        }
    }
    console.log("All", allMessage);
    if (!socket) {
        return <p className='text-center text-red-500 text-2xl font-semibold font-sans'>Sorry Connetion is not established</p>
    }
    return (
        <div className='h-fit w-full p-5 flex flex-col gap-3 bg-black/30 backdrop-blur-2xl text-white border border-dashed border-zinc-300 rounded-xl'>
            <div className='h-fit w-full flex items-center justify-between'>
                <h3 className='text-lg font-semibold'>Paste url</h3>
            </div>

            <input
                type='text'
                className='w-full h-9 px-2 outline-none focus:border-white bg-transparent border border-zinc-700 rounded-lg'
                name='pasteurl'
                value={url}
                onChange={handleChange}
                placeholder='https://yourwebite.com/video'
            />
            <div className='w-full h-fit flex flex-col gap-10 md:gap-0 md:flex-row justify-between'>
                <div className='h-fit w-full md:w-[68%] flex flex-col gap-5'>
                    <VideoPlaybackCard ref={parentRef} videoUrl={url} />
                    {
                        url && (<div className='h-fit w-full flex flex-wrap items-center gap-7'>
                            <div className='h-fit w-full sm:w-fit sm:gap-10 sm:justify-end flex justify-between items-center'>
                                <button onClick={() => handleClick('play')}><Play className='hover:opacity-65 transition-all hover:scale-95' size={28} /></button>
                                <button onClick={() => handleClick('pause')}><Pause className='hover:opacity-65 transition-all hover:scale-95' size={28} /></button>
                                <button onClick={() => handleClick('seek-l')}><StepBack className='hover:opacity-65 transition-all hover:scale-95' size={28} /></button>
                                <button onClick={() => handleClick('seek-r')}><StepForward className='hover:opacity-65 transition-all hover:scale-95' size={28} /></button>
                                <button onClick={() => handleClick('sync')}><RefreshCw className='hover:opacity-65 transition-all hover:scale-95' size={28} /></button>
                            </div>

                            <span className='flex w-fit'>
                                {
                                    userMakesChanges && (
                                        <>
                                            <User fill='#FFFFFF' size={20} />
                                            <p className='text-lg pl-2'>{userMakesChanges}</p>
                                        </>
                                    )
                                }
                            </span>

                        </div>)
                    }
                </div>

                <ChatScreen socket={socket} userId={userId} roomId={roomId} count={connectedUsersCount} allMessage={allMessage} />
            </div>
        </div>
    )
}

export default PasteUrlCard