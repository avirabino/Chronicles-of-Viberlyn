// --- Windsurf Metadata ---
// Assistant: FE_NextJS_VideoPlayer
// Created: 2025-04-18
// Modified: 2025-04-19
// --- End Windsurf Metadata ---

'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { VideoPlayerProps, VideoFrame } from './types';

export const VideoPlayer = ({ frames, onClose, onSkip, initialFrameIndex = 0 }: VideoPlayerProps) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(initialFrameIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentFrame = useMemo<VideoFrame | undefined>(() => frames[currentFrameIndex], [frames, currentFrameIndex]);

  const advanceFrame = useCallback(() => {
    if (currentFrameIndex < frames.length - 1) {
      setCurrentFrameIndex((prev) => prev + 1);
    } else {
      setIsPlaying(false);
      onClose();
    }
  }, [currentFrameIndex, frames.length, onClose]);

  const handleClose = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentFrameIndex(0);
    onClose();
  }, [onClose]);

  const handleSkip = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    if (onSkip) onSkip();
    onClose();
  }, [onSkip, onClose]);

  const handleNextFrame = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (currentFrameIndex < frames.length - 1) {
      setCurrentFrameIndex((prev) => prev + 1);
    } else {
      handleClose();
    }
  }, [currentFrameIndex, frames.length, handleClose]);

  // Audio sync effect
  useEffect(() => {
    if (currentFrame && audioRef.current) {
      const audioElement = audioRef.current;
      const handleAudioEnd = () => handleNextFrame();
      audioElement.removeEventListener('ended', handleAudioEnd);
      audioElement.addEventListener('ended', handleAudioEnd);
      if (audioElement.src !== currentFrame.audioUrl && currentFrame.audioUrl) {
        audioElement.src = currentFrame.audioUrl;
        audioElement.load();
      }
      const playPromise = audioElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {/* Autoplay might be blocked */});
      }
      return () => {
        audioElement.removeEventListener('ended', handleAudioEnd);
      };
    }
  }, [currentFrame, handleNextFrame]);

  // Cleanup audio on unmount
  useEffect(() => {
    const audioElement = audioRef.current;
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    };
  }, []);

  // Preload next image
  useEffect(() => {
    if (currentFrameIndex < frames.length - 1) {
      const nextIndex = currentFrameIndex + 1;
      const nextImage = new window.Image();
      nextImage.src = frames[nextIndex].imageUrl;
    }
  }, [currentFrameIndex, frames]);

  if (!isPlaying || !currentFrame) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      aria-modal="true" role="dialog"
      style={{ backgroundImage: 'radial-gradient(circle at center, rgba(30,30,60,0.6) 0%, rgba(0,0,0,0.8) 100%)' }}
      data-testid="video-player-container"
    >
      <div className="bg-gray-900 rounded-lg overflow-hidden relative border-4 border-amber-900 shadow-2xl max-w-lg w-full"
        style={{ boxShadow: '0 0 20px rgba(255,215,0,0.2), 0 0 60px rgba(0,0,0,0.6)', background: 'linear-gradient(to bottom, #2d2d3d, #1a1a2a)' }}
      >
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
        {/* Image Display */}
        <div className="w-full relative" style={{ aspectRatio: '1 / 1' }}>
          <div className="absolute inset-0 border-8 border-gray-900 z-20 pointer-events-none m-4 rounded-sm"></div>
          <div className="absolute inset-0 shadow-inner z-10 pointer-events-none border-b-2 border-amber-900/50"></div>
          <div className="absolute inset-0 overflow-hidden rounded-sm m-6">
            {currentFrame && currentFrame.imageUrl ? (
              <Image
                key={currentFrameIndex} // Add key for transitions/updates
                src={currentFrame.imageUrl}
                alt={currentFrame.title || `Scene ${currentFrame.sceneIndex}`}
                fill
                className="object-cover" // Ensure image covers the area
                priority={currentFrameIndex === 0} // Prioritize loading the first image
                data-testid="video-frame-image"
              />
            ) : (
              // Optional: Render a placeholder while the image source is loading/invalid
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400" data-testid="video-frame-placeholder">
                Loading Frame...
              </div>
            )}
          </div>
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] pointer-events-none"></div>
          <div className="absolute top-1 left-1 w-8 h-8 border-t-4 border-l-4 border-amber-800/60 pointer-events-none"></div>
          <div className="absolute top-1 right-1 w-8 h-8 border-t-4 border-r-4 border-amber-800/60 pointer-events-none"></div>
          <div className="absolute bottom-1 left-1 w-8 h-8 border-b-4 border-l-4 border-amber-800/60 pointer-events-none"></div>
          <div className="absolute bottom-1 right-1 w-8 h-8 border-b-4 border-r-4 border-amber-800/60 pointer-events-none"></div>
        </div>
        {/* Text Display */}
        <div className="p-6 bg-gray-800 min-h-[120px] flex flex-col items-center justify-center text-center border-t-2 border-amber-900/70"
          style={{ backgroundImage: 'linear-gradient(to bottom, #2a2a3a, #1a1a2a)' }}
        >
          <div className="bg-black bg-opacity-40 p-4 rounded-lg border border-amber-900/30 w-full">
            <p
              className="text-base font-medium mb-2 text-white tracking-wider"
              style={{
                fontFamily: "'Press Start 2P', fantasy",
                textShadow: '0 0 2px #fff',
                lineHeight: '2',
                letterSpacing: '0.2em',
                fontSize: '0.95rem',
                fontWeight: 'normal'
              }}
              data-testid="video-frame-text"
            >
              {currentFrame.text}
            </p>
          </div>
        </div>
        {/* Audio */}
        <audio ref={audioRef} preload="auto" />
        {/* Controls */}
        <div className="px-4 py-5 bg-gray-900 flex justify-center space-x-6 border-t border-amber-900/30"
          style={{ backgroundImage: 'linear-gradient(to top, #1a1a2a, #2a2a3a)' }}
        >
          <div className="flex justify-center space-x-6 py-2">
            <button
              onClick={handleNextFrame}
              disabled={currentFrameIndex >= frames.length - 1}
              className="px-6 py-3 my-2 mx-3 bg-gradient-to-b from-amber-700 to-amber-900 text-white rounded-md text-sm font-medium uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl border-2 border-amber-600"
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                boxShadow: '0 4px 0 #5d3408, 0 8px 10px rgba(0,0,0,0.4)',
                transform: 'translateY(-2px)',
                fontFamily: "'Press Start 2P', fantasy",
                fontSize: '0.7rem',
                letterSpacing: '0.15em'
              }}
              data-testid="next-frame-button"
            >
              Next Frame
            </button>
            <button
              onClick={handleSkip}
              className="px-6 py-3 my-2 mx-3 bg-gradient-to-b from-gray-600 to-gray-800 text-white rounded-md text-sm font-medium uppercase tracking-wide transition-all shadow-lg hover:shadow-xl border-2 border-gray-500"
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                boxShadow: '0 4px 0 #333, 0 8px 10px rgba(0,0,0,0.4)',
                transform: 'translateY(-2px)',
                fontFamily: "'Press Start 2P', fantasy",
                fontSize: '0.7rem',
                letterSpacing: '0.15em'
              }}
              data-testid="skip-intro-button"
            >
              Skip Intro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
