"use client"
import React, { useState, useEffect } from 'react';

export interface VideoPlaybackUrlAttributes {
    videoUrl: string;
}

const VideoPlaybackCard = ({ videoUrl }: VideoPlaybackUrlAttributes) => {
    const [error, setError] = useState('');
    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        const extractVideoId = () => {
            try {
                if(!videoUrl){
                    setError('Enter video link to WatchAlong')
                } else {
                    const isUrl = new URL(videoUrl);
                    const getVideoId = isUrl.searchParams.get('v');
                    console.log(getVideoId);
                    if (!getVideoId) {
                        setError('Video not found');
                    } else {
                        setVideoId(getVideoId);
                        setError('');
                    }
                }
            } catch (error) {
                console.log(error);
                setError('Invalid link provided');
            }
        };

        extractVideoId();
    }, [videoUrl]); // Only run when videoUrl changes

    if (error) {
        return (
            <div className='h-[50vh] md:h-[65vh] lg:h-[75vh] w-[68%] py-5 flex justify-center items-center flex-col gap-5'>
                <p className="text-red-600 text-center font-semibold">{error}</p>
            </div>
        )
    }

    return (
        <div className="h-[50vh] md:h-[65vh] lg:h-[75vh] w-full md:w-[68%] flex justify-center items-center">
            <iframe
                className="w-full h-full"
                // height={10}
                src={`https://www.youtube.com/embed/${videoId}?rel=0&enablejsapi=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen

            />
        </div>
    );
};

export default VideoPlaybackCard;
