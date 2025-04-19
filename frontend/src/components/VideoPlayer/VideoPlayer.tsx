// --- Windsurf Metadata ---
// Assistant: FE_NextJS_VideoPlayer
// Created: 2025-04-18
// Modified: 2025-04-29
// --- End Windsurf Metadata ---

'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image'; // Use Next.js Image
import { VideoFrame, VideoPlayerProps } from './types';

const VideoPlayer = ({ frames, onClose, onSkip, initialFrameIndex = 0 }: VideoPlayerProps) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(initialFrameIndex);
  const [isPlaying, setIsPlaying] = useState(true); // Start playing automatically
  const [imageLoaded, setImageLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentFrame = useMemo(() => frames[currentFrameIndex], [currentFrameIndex, frames]);

  // Function to advance to the next frame or close if it's the last frame
  const handleNextFrame = useCallback(() => {
    // Removed explicit pause here for natural audio end transition
    // if (audioRef.current) {
    //   audioRef.current.pause();
    //   audioRef.current.currentTime = 0;
    // }
    if (currentFrameIndex < frames.length - 1) {
      setCurrentFrameIndex(prev => prev + 1);
      setImageLoaded(false); // Reset image loaded state for next frame
    } else {
      setIsPlaying(false);
      onClose(); // Close after the last frame
    }
  }, [currentFrameIndex, frames.length, onClose]);

  // Combined close/skip handler
  const handleCloseOrSkip = useCallback(() => {
    // Pause is needed here because the user is interrupting the flow
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    // If onSkip is provided, call it, otherwise call onClose
    if (onSkip) {
      onSkip();
    } else {
      onClose();
    }
  }, [onClose, onSkip]);

  // Effect to manage audio playback based on the current frame
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
        playPromise.catch(error => {
          console.error("Audio playback failed:", error);
          // If autoplay fails, we might need user interaction, handled by the test page button for now
        });
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

  // Apply **Simplified** Modal Styling
  return (
    <div
      // Simplified outer styling
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      data-testid="video-player-overlay"
    >
      {/* Simplified Inner Container */}
      <div
        // Simplified inner styling - just basic bg and sizing
        className="bg-gray-800 relative max-w-4xl w-full p-4 rounded-lg"
      >
        {/* Close Button - Kept for functionality */}
        <button
          onClick={handleCloseOrSkip}
          className="absolute top-3 right-3 text-gray-400 hover:text-white z-30 bg-gray-900 rounded-full p-1.5 border border-gray-700 shadow-md transition-all hover:bg-gray-700"
          aria-label="Close Video Player"
          data-testid="close-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Display Area - simplified container */}
        <div
          className="relative w-full aspect-[16/9] overflow-hidden bg-black mb-4"
        >
          {/* Removed intermediate div wrapper */}
          {currentFrame.imageUrl ? (
            <Image
              key={currentFrameIndex} // Re-render on frame change for transitions
              src={currentFrame.imageUrl}
              alt={currentFrame.title || `Scene ${currentFrameIndex}`} // Corrected: Use title or fallback
              fill // Use fill to cover the container
              style={{ objectFit: 'contain' }} // contain to prevent cropping, cover to fill
              priority={currentFrameIndex === 0} // Prioritize first image
              onLoad={() => setImageLoaded(true)}
              className={`transition-opacity duration-500 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          ) : (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
        </div>

        {/* Corrected Narration Text */}
        {currentFrame.text && ( // Corrected: Check for 'text'
          <p
            key={`${currentFrameIndex}-text`}
            className="text-lg text-amber-50 p-4 bg-black bg-opacity-60 rounded mb-4 font-sans leading-relaxed animate-fade-in"
            data-testid="narration-text"
          >
            {currentFrame.text} {/* Corrected: Display 'text' */}
          </p>
        )}

        {/* Buttons Container - kept styling */}
        <div className="flex justify-end space-x-3 p-4 bg-gray-900 bg-opacity-80 rounded-b-lg">
          <button
            onClick={handleNextFrame}
            className="px-5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-md shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75"
            data-testid="next-button"
          >
            Next
          </button>
          <button
            onClick={handleCloseOrSkip} // Use combined handler
            className="px-5 py-2 bg-rose-800 hover:bg-rose-700 text-white font-semibold rounded-md shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-opacity-75"
            data-testid="skip-button"
          >
            Skip
          </button>
        </div>
        <audio ref={audioRef} preload="auto" />
      </div>
    </div>
  );
};

export default VideoPlayer;
