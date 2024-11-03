import React from 'react'
import { PropsTriggerAttributes } from './CreateAndJoinRoom'
const JoinRoomComponent = ({ setTrigger }: PropsTriggerAttributes) => {
    return (
        <div className='fixed top-0 left-0 h-screen w-full p-5'>
            <h1>Join Room</h1>
            <p>Enter Room ID</p>
            <button onClick={() => setTrigger()}>Join</button>
        </div>
    )
}

export default JoinRoomComponent