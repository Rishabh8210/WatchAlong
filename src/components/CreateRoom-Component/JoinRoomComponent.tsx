import React, { useState } from 'react'
import { PropsTriggerAttributes } from './CreateAndJoinRoom'
const JoinRoomComponent = ({ setTrigger }: PropsTriggerAttributes) => {
    const [roomCode, setRoomCode] = useState('');
    return (
        <div className='h-screen w-full bg-zinc-800 bg-opacity-80 fixed top-0 left-0 p-5 flex justify-center items-center'>
            <div className='min-h-[60vh] relative w-full p-5 bg-black rounded-lg border-zinc-700 border-2 flex flex-col items-end justify-end gap-5 shadow-zinc-800 shadow-2xl text-white'>
                <div className='h-fit w-full flex justify-end items-center absolute right-5 top-4'>
                    <button className='text-3xl font-semibold' onClick={() => setTrigger()}>X</button>
                </div>
                <div className='h-fit w-full flex justify-center items-center flex-col gap-5'>
                    <div className='text-center h-fit w-fit flex flex-col gap-3'>
                        <p className='font-semibold text-4xl'>Have a Code? Join Here</p>
                        <p>One code, endless shared moments – input yours now to join the watch party.</p>
                    </div>
                    <div className='h-fit w-fit flex pt-5 text-white justify-center items-center flex-col gap-3'>
                        <input
                            type='text'
                            className='w-full h-9 px-2 outline-none focus:border-white bg-transparent border-2 border-zinc-800 rounded-lg'
                            name='pasteurl'
                            value={roomCode}
                            onChange={(e) => setRoomCode(e.target.value)}
                            placeholder='#1234-asdf-5678'
                        />
                    </div>
                    <div className='h-fit w-fit flex text-white justify-center items-center flex-col gap-3'>
                        <button className='h-fit w-fit px-4 py-2 text-lg font-semibold transition-all rounded-lg border-2 border-zinc-700 bg-zinc-900 hover:bg-zinc-950 dark:text-white hover:border-white'>Join Room</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinRoomComponent