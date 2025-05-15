"use client"
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

declare global {
    interface Window {
        YT: typeof YT;
        onYouTubeIframeAPIReady: () => void;
    }
}

export interface VideoPlaybackUrlAttributes {
    videoUrl: string;
}

const VideoPlaybackCard = forwardRef(({ videoUrl }: VideoPlaybackUrlAttributes, ref) => {
    const [error, setError] = useState('');
    const [videoId, setVideoId] = useState('');

    const playerRef = useRef<YT.Player | null>(null)
    useEffect(() => {
        try {
            if (!videoUrl) {
                setVideoId('');
                setError('Enter video link to WatchAlong')
            } else {
                const url = new URL(videoUrl);
                const v = url.searchParams.get('v');
                console.log(v);
                if (!v) {
                    setVideoId('');
                    setError('Video not found');
                } else {
                    setVideoId(v);
                    setError('');
                }
            }
        } catch (error) {
            console.log(error);
            setError('Invalid link provided');
        }
    }, [videoUrl]);

    useImperativeHandle(ref, () => ({
        handlePlay: () => {
            if (playerRef.current?.playVideo) {
                playerRef.current.playVideo();
                // setIsPlaying(true);
            }
        },
        handlePause: () => {
            if (playerRef.current?.pauseVideo) {
                playerRef.current.pauseVideo();
                // setIsPlaying(false);
            }
        },
        handleSeek: (seek: string) => {
            if (playerRef.current?.seekTo) {
                const time = playerRef.current.getCurrentTime();
                playerRef.current.seekTo(
                    seek === "seek-l" ? time - 10 : time + 10,
                    true
                );
            }
        },
        handleSync: (time: number) => {
            if (playerRef.current?.seekTo) {
                playerRef.current.seekTo(
                    time,
                    true
                );
                const t = setTimeout(() => {
                    playerRef.current?.playVideo();
                    clearTimeout(t);
                }, 200)
            }
        },
        handleGetCurrentTime: () => {
            if(playerRef.current?.getCurrentTime){
                return playerRef.current?.getCurrentTime();
            }
            return null;
        }
    }));
    useEffect(() => {
        if (!videoId) {
            console.log("Video gayii");
            if (playerRef.current && playerRef.current.destroy) {
                playerRef.current.destroy();
                playerRef.current = null;
            }
            return;
        }

        const onYouTubeIframeAPIReady = () => {
            if (!playerRef.current) {

                playerRef.current = new window.YT.Player('yt-player', {
                    videoId,
                    playerVars: {
                        autoplay: 0,
                        controls: 0,
                        rel: 0,
                        modestbranding: 1,
                        disablekb: 1
                    },
                    events: {
                        onReady: () => console.log('Player ready !'),
                        
                    }
                })
            } else {
                if (playerRef.current.loadVideoById) {
                    playerRef.current.loadVideoById(videoId);
                    playerRef.current.pauseVideo();
                }
            }
        }

        if (window.YT && window.YT.Player) {
            onYouTubeIframeAPIReady();
        } else {
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api'
            document.body.appendChild(tag);
        }

    }, [videoId])


    if (error) {
        return (
            <div className='w-full h-[55vh] md:h-[65vh] lg:h-[75vh] py-5 flex justify-center items-center flex-col gap-5'>
                <p className="text-red-600 text-center font-semibold">{error}</p>
            </div>
        )
    }

    return (
        <div id='yt-player' className="h-[55vh] md:h-[65vh] lg:h-[75vh] w-full flex justify-center items-center">

        </div>
    );
});

VideoPlaybackCard.displayName = 'VideoPlaybackCard';
export default VideoPlaybackCard;
