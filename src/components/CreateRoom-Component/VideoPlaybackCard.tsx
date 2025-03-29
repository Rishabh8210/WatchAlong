import React, { useState, useEffect } from 'react';

export interface VideoPlaybackUrlAttributes {
    videoUrl: string;
}

const VideoPlaybackCard = ({ videoUrl }: VideoPlaybackUrlAttributes) => {
    const [error, setError] = useState(false);
    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        const extractVideoId = () => {
            try {
                const isUrl = new URL(videoUrl);
                const getVideoId = isUrl.searchParams.get('v');
                console.log(getVideoId);
                if (!getVideoId) {
                    setError(true);
                } else {
                    setVideoId(getVideoId);
                    setError(false);
                }
            } catch (error) {
                console.log(error);
                setError(true);
            }
        };

        extractVideoId();
    }, [videoUrl]); // Only run when videoUrl changes

    if (error) {
        return (
            <div className='py-5 flex flex-col gap-5'>
                <p className="text-red-600 text-center font-semibold">Invalid video link</p>
                <p className='tex-white text-center font-semibold'>Use 'https://' in-front of your url if it is not there</p>
            </div>
        )
    }

    return (
        <div className="h-[60vh] md:h-[70vh] lg:h-[85vh] w-full flex justify-center items-center">
            {videoId && (
                <iframe
                    className="w-full h-full"
                    // height={10}
                    src={`https://www.youtube.com/embed/${videoId}?si=9hUebuS5ux3slBeW`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            )}
        </div>
    );
};

export default VideoPlaybackCard;
