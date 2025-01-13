import React, { useState } from 'react'
import Link from 'next/link'
import JoinRoomComponent from './JoinRoomComponent';
export interface PropsTriggerAttributes {
    setTrigger: () => void
}

const CreateAndJoinRoom = ({ setTrigger }: PropsTriggerAttributes) => {
    const [isJoinRoomPopup, setJoinRoomPopup] = useState(false);
    function handleClick(){
        setJoinRoomPopup(!isJoinRoomPopup);
    }
    return (
        <div className='h-screen w-full  bg-zinc-800 bg-opacity-80 fixed top-0 left-0 p-5 flex justify-center items-center z-50'>
            <div className='min-h-[50vh] relative w-full sm:w-10/12 md:w-9/12 lg:max-w-3xl p-5 bg-black rounded-lg border-white border-2 flex flex-col items-end justify-end gap-5 shadow-zinc-800 shadow-2xl text-white'>
                <div className='h-fit w-full flex justify-end items-center absolute right-5 top-4'>
                    <button className='text-3xl font-semibold' onClick={() => setTrigger()}>X</button>
                </div>
                <div className='h-fit w-full flex justify-center items-center flex-col gap-5'>
                    <div className='text-center h-fit w-fit flex flex-col gap-3'>
                        <p className='font-semibold text-3xl'>Ready to Watch?</p>
                        <p>Create a Room or Join Your Friends to Enjoy Together</p>
                    </div>
                    <div className='h-fit w-fit flex pt-5 text-white justify-center items-center flex-col gap-3'>
                        <Link href={'/rooms'} className='h-fit w-fit px-4 py-2 text-lg font-semibold transition-all rounded-lg border-2 border-zinc-700 bg-zinc-900 hover:bg-zinc-950 dark:text-white hover:border-white' >Create Room</Link>
                    </div>
                    <div className='h-fit w-fit flex text-white justify-center items-center flex-col gap-3'>
                        <button className='h-fit w-fit px-4 py-2 text-lg font-semibold transition-all rounded-lg border-2 border-zinc-700 bg-zinc-900 hover:bg-zinc-950 dark:text-white hover:border-white' onClick={() => handleClick()}  >Join Room</button>
                    </div>
                </div>
            </div>
            {isJoinRoomPopup && <JoinRoomComponent setTrigger = {handleClick} />}
        </div>
    )
}

export default CreateAndJoinRoom