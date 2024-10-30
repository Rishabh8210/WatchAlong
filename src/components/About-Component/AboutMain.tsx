import React from 'react'

const AboutMain = () => {
    return (
        <div className='h-fit w-full flex flex-col items-center justify-center'>
            <div className='h-fit w-full p-2'>
                <p className='text-center leading-loose'>With <span className='text-lg px-3 py-1.5 text-red-600 bg-zinc-800 rounded-xl'>WatchAlong</span> you can watch YouTube together. Services like Vimeo, Netflix, Amazon, Disney & Co are also supported. Create a room and invite friends to your WatchParty.</p>
            </div>
            <div className='h-fit w-full py-5 flex flex-col gap-3 px-4'>
                <div className='h-fit w-full flex gap-3'>
                    <p>✔️</p>
                    <p className='break-words'>Synchronized player for video and audio</p>
                </div>
                <div className='h-fit w-full flex gap-3'>
                    <p>✔️</p>
                    <p className='break-words'>Talk to your friends in the integrated chat room</p>
                </div>
                <div className='h-fit w-full flex gap-3'>
                    <p>✔️</p>
                    <p className='break-words'>Enjoy content from YouTube, Vimeo, Dailymotion and SoundCloud</p>
                </div>
                <div className='h-fit w-full flex gap-3'>
                    <p>✔️</p>
                    <p className='break-words'>Organize content into playlists</p>
                </div>
                <div className='h-fit w-full flex gap-3'>
                    <p>✔️</p>
                    <p className='break-words'>Webcam support</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMain