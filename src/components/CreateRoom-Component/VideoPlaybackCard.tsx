import React from 'react'

export interface VideoPlaybackUrlAttributes {
    videoUrl: string
}

const VideoPlaybackCard = ({videoUrl}: VideoPlaybackUrlAttributes) => {
    const videoId = new URL(videoUrl);
    const getVideoId = videoId.searchParams.get('v');
    if(!getVideoId){
        return <p className='text-red-600 text-center font-semibold py-5'>Invalid video link</p>
    }
    return (
        <div className='h-fit w-full py-5'>
            <iframe className='w-full' height="315" src={`https://www.youtube.com/embed/${getVideoId}?si=9hUebuS5ux3slBeW`} title="YouTube video player" frameBorder={'0'} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default VideoPlaybackCard