'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import NextImage from 'next/image'; // Renamed import
import { VideoPlayerProps, VideoFrame } from './types';
// Note: Add this font import to your global CSS or _app.js
// import '@fontsource/press-start-2p';

export const VideoPlayer = ({ videoData, isOpen, onClose }: VideoPlayerProps) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Auto-play on open
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentFrame = useMemo(() => {
    return videoData.frames[currentFrameIndex];
  }, [currentFrameIndex, videoData.frames]);

  const advanceFrame = useCallback(() => {
    if (currentFrameIndex < videoData.frames.length - 1) {
      setCurrentFrameIndex((prevIndex) => prevIndex + 1);
    } else {
      // Video finished
      setIsPlaying(false);
      onClose(); // Close when finished?
    }
  }, [currentFrameIndex, videoData.frames.length, onClose]);

  const handleClose = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentFrameIndex(0); // Reset to beginning on close
    onClose();
  }, [onClose]);

  // Function to go to the next frame or close if it's the last frame
  const handleNextFrame = useCallback(() => {
    // Ensure audio stops before changing frame or closing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (currentFrameIndex < videoData.frames.length - 1) {
      setCurrentFrameIndex(prevIndex => prevIndex + 1);
    } else {
      handleClose(); // Close when the last frame finishes
    }
  }, [currentFrameIndex, videoData.frames.length, handleClose]);

  // Effect to play audio for the current frame and advance based on audio ending
  useEffect(() => {
    if (currentFrame && currentFrame.audioPath && audioRef.current) {
      const audioElement = audioRef.current;
      
      // --- Synchronization Logic ---
      // Function to handle audio ending
      const handleAudioEnd = () => {
          handleNextFrame();
      };

      // Remove previous listener to prevent duplicates
      audioElement.removeEventListener('ended', handleAudioEnd);

      // Add new listener
      audioElement.addEventListener('ended', handleAudioEnd);

      // Set the source if it's different
      if (audioElement.src !== currentFrame.audioPath) {
        audioElement.src = currentFrame.audioPath;
        audioElement.load(); // Load the new source
      }

      // Autoplay logic
      const playPromise = audioElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Audio autoplay prevented:", error);
          // Consider adding a manual play button if autoplay fails
        });
      }

      // Cleanup function for this effect
      return () => {
        // Don't pause here if just changing source, only on component unmount/close
        // Pause and remove listener specifically when cleaning up *this effect instance*
        audioElement.removeEventListener('ended', handleAudioEnd);
      };
    }
  }, [currentFrame, handleNextFrame]); // Depend on currentFrame and handleNextFrame

  // Effect for pausing/resuming audio on component unmount or close
  useEffect(() => {
    const audioElement = audioRef.current;
    // Return cleanup func that runs when component unmounts or deps change
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    };
  }, []); // Empty dependency array means this cleanup runs once on unmount

  // Preload next image
  useEffect(() => {
    if (currentFrameIndex < videoData.frames.length - 1) {
      const nextFrame = videoData.frames[currentFrameIndex + 1];
      if (nextFrame) {
        const img = new Image();
        img.src = nextFrame.imagePath;
      }
    }
  }, [currentFrameIndex, videoData.frames]);

  if (!isOpen || !currentFrame) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      style={{ backgroundImage: 'radial-gradient(circle at center, rgba(30,30,60,0.6) 0%, rgba(0,0,0,0.8) 100%)' }}>
      <div className="bg-gray-900 rounded-lg overflow-hidden relative border-4 border-amber-900 shadow-2xl max-w-lg w-full"
        style={{ 
          boxShadow: '0 0 20px rgba(255,215,0,0.2), 0 0 60px rgba(0,0,0,0.6)', 
          background: 'linear-gradient(to bottom, #2d2d3d, #1a1a2a)' 
        }}> 
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white z-10 bg-gray-800 rounded-full p-1.5 border border-gray-700 shadow-md transition-all hover:bg-gray-700"
          aria-label="Close Video Player"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Display with Enhanced RPG Shadow Effects */}
        <div
          className="w-full relative"
          style={{ aspectRatio: '1 / 1' }}
        >
          {/* Frame border decoration */}
          <div className="absolute inset-0 border-8 border-gray-900 z-20 pointer-events-none m-4 rounded-sm"></div>
          
          {/* Inner shadow */}
          <div className="absolute inset-0 shadow-inner z-10 pointer-events-none border-b-2 border-amber-900/50"></div>
          
          {/* Image with vignette effect container */}
          <div className="absolute inset-0 overflow-hidden rounded-sm m-6">
            <NextImage
              src={currentFrame.imagePath}
              alt={videoData.title || 'RPG Scene'}
              fill
              priority={currentFrameIndex === 0}
              className="object-contain shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          {/* Overlay vignette effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] pointer-events-none"></div>
          
          {/* Corner decorations for RPG aesthetic */}
          <div className="absolute top-1 left-1 w-8 h-8 border-t-4 border-l-4 border-amber-800/60 pointer-events-none"></div>
          <div className="absolute top-1 right-1 w-8 h-8 border-t-4 border-r-4 border-amber-800/60 pointer-events-none"></div>
          <div className="absolute bottom-1 left-1 w-8 h-8 border-b-4 border-l-4 border-amber-800/60 pointer-events-none"></div>
          <div className="absolute bottom-1 right-1 w-8 h-8 border-b-4 border-r-4 border-amber-800/60 pointer-events-none"></div>
        </div>

        {/* Text Display with RPG font */}
        <div className="p-6 bg-gray-800 min-h-[120px] flex flex-col items-center justify-center text-center border-t-2 border-amber-900/70" 
          style={{ backgroundImage: 'linear-gradient(to bottom, #2a2a3a, #1a1a2a)' }}>
          <div className="bg-black bg-opacity-40 p-4 rounded-lg border border-amber-900/30 w-full">
            <p className="text-base font-medium mb-2 text-white tracking-wider" 
              style={{ 
                fontFamily: "'Press Start 2P', fantasy", 
                textShadow: '0 0 2px #fff', /* Minimal glow */
                lineHeight: '2', /* More vertical space */
                letterSpacing: '0.2em', /* Much wider letter spacing */
                fontSize: '0.95rem', /* Smaller font size */
                fontWeight: 'normal' /* Thinner font */
              }}>
              {currentFrame?.text}
            </p>
          </div>
        </div>

        {/* Controls with enhanced RPG styling */}
        <div className="px-4 py-5 bg-gray-900 flex justify-center space-x-6 border-t border-amber-900/30"
          style={{ backgroundImage: 'linear-gradient(to top, #1a1a2a, #2a2a3a)' }}> 
          
          {/* Custom button container with wood-like texture */}
          <div className="flex justify-center space-x-6 py-2">
            <button
              onClick={handleNextFrame}
              disabled={currentFrameIndex >= videoData.frames.length - 1}
              className="px-6 py-3 my-2 mx-3 bg-gradient-to-b from-amber-700 to-amber-900 text-white rounded-md text-sm font-medium uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl border-2 border-amber-600"
              style={{ 
                textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                boxShadow: '0 4px 0 #5d3408, 0 8px 10px rgba(0,0,0,0.4)',
                transform: 'translateY(-2px)',
                fontFamily: "'Press Start 2P', fantasy",
                fontSize: '0.7rem',
                letterSpacing: '0.15em'
              }}
            >
              Next Frame
            </button>
            <button
              onClick={handleClose}
              className="px-6 py-3 my-2 mx-3 bg-gradient-to-b from-gray-600 to-gray-800 text-white rounded-md text-sm font-medium uppercase tracking-wide transition-all shadow-lg hover:shadow-xl border-2 border-gray-500"
              style={{ 
                textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                boxShadow: '0 4px 0 #333, 0 8px 10px rgba(0,0,0,0.4)',
                transform: 'translateY(-2px)',
                fontFamily: "'Press Start 2P', fantasy",
                fontSize: '0.7rem',
                letterSpacing: '0.15em'
              }}
            >
              Skip Intro
            </button>
          </div>
        </div>

        {/* Hidden Audio Elements */}
        <audio ref={audioRef} />
      </div>
    </div>
  );
};