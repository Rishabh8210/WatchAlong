"use client"
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: () => void;
    }
}

export interface VideoPlaybackUrlAttributes {
    videoUrl: string;
}

const VideoPlaybackCard = forwardRef(({ videoUrl }: VideoPlaybackUrlAttributes, ref) => {
    const [error, setError] = useState('');
    const [videoId, setVideoId] = useState('');
    const playerRef = useRef<any>(null)
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        try {
            if (!videoUrl) {
                setError('Enter video link to WatchAlong')
            } else {
                const url = new URL(videoUrl);
                const v = url.searchParams.get('v');
                console.log(v);
                if (!v) {
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
                setIsPlaying(true);
            }
        },
        handlePause: () => {
            if (playerRef.current?.pauseVideo) {
                playerRef.current.pauseVideo();
                setIsPlaying(false);
            }
        },
        handleSeek: (seek: string) => {
            if(playerRef.current?.seekTo){
                if(seek === 'seek-l'){
                    const newTime = playerRef.current?.getCurrentTime() - 10;
                    playerRef.current?.seekTo(newTime, true);
                } else {
                    const newTime = playerRef.current?.getCurrentTime() + 10;
                    playerRef.current?.seekTo(newTime, true);
                }
            }
        }
    }));
    useEffect(() => {
        if (!videoId) {
            console.log("Video gayii");
            return;
        }

        const onYouTubeIframeAPIReady = () => {
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
                    onReady: () => console.log('Player ready !')
                }
            })
        }

        if (window.YT && window.YT.Player) {
            onYouTubeIframeAPIReady();
        } else {
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api'
            document.body.appendChild(tag);
        }

        // if (playerRef.current) {
        //     playerRef.current.loadVideoById(videoId);
        //     playerRef.current.pauseVideo();
        // } else {
        //     playerRef.current = new (window as any).YT.Player('yt-player', {
        //         videoId: videoId,
        //         playerVars: {
        //             autoplay: 0,
        //             controls: 0,
        //             rel: 0,
        //             modestbranding: 1,
        //             disablekb: 1,
        //         },
        //         events: {
        //             onReady: () => console.log('Player ready'),
        //             onStateChange: () => handleVideoChange()
        //         }
        //     })
        // }
    }, [videoId])

    // useEffect(() => {
    //     const tag = document.createElement('script');
    //     tag.src = 'https://www.youtube.com/iframe_api',
    //         document.body.appendChild(tag);

    //     (window as any).onYouTubeIframeAPIReady = () => {
    //         console.log("Youtube is reeady !");
    //     }
    // }, [])


    function handleVideoChange() {
        playerRef.current.playVideo();
    }

    if (error) {
        return (
            <div className='w-full h-full py-5 flex justify-center items-center flex-col gap-5'>
                <p className="text-red-600 text-center font-semibold">{error}</p>
            </div>
        )
    }

    return (
        <div id='yt-player' className="h-full w-full flex justify-center items-center">

        </div>
    );
});

export default VideoPlaybackCard;
