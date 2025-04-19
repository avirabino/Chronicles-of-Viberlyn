// --- Windsurf Metadata ---
// Assistant: FE_NextJS_Core
// Created: 2025-04-18
// Modified: 2025-04-29
// --- End Windsurf Metadata ---
'use client'; // Mark as client component due to useState/useEffect

// Adjust import paths if necessary based on your final structure/aliases
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import { VideoFrame } from '@/components/VideoPlayer/types';
import { useState, useEffect } from 'react';

// Fetch data directly from the local static JSON file in the public directory
async function getVideoData(): Promise<VideoFrame[]> {
  try {
    // Path relative to the public directory root
    const res = await fetch('/stories/chronicles-of-viberlyn/intro-video.json', { cache: 'no-store' });
    if (!res.ok) {
      console.error(`Failed to fetch local video data: ${res.status} ${res.statusText}`);
      // Log response text for easier debugging if it's not JSON
      const text = await res.text();
      console.error("Response text:", text);
      return []; // Return empty array on fetch failure
    }
    const data = await res.json();
    // Basic validation
    if (!Array.isArray(data)) {
        console.error("Invalid data format received from local JSON. Expected an array.");
        return [];
    }
    return data as VideoFrame[];
  } catch (error) {
    console.error("Error fetching or parsing local video data:", error);
    return []; // Return empty array on network/parsing errors
  }
}

export default function TestVideoPage() {
  const [frames, setFrames] = useState<VideoFrame[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPlayer, setShowPlayer] = useState(false); // State to control player visibility

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getVideoData() // Fetch from the hardcoded local path
      .then(data => {
        if (data && data.length > 0) {
          setFrames(data);
        } else {
          // Update error message for local file context
          setError("No video frames found or failed to load data from local '/stories/chronicles-of-viberlyn/intro-video.json'.");
        }
      })
      .catch(err => {
         console.error("Error in getVideoData promise:", err);
         setError("An unexpected error occurred while fetching local video data.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // Empty dependency array: fetch only once on component mount

  const handleClose = () => {
    console.log("VideoPlayer closed callback triggered (test page)");
    setShowPlayer(false); // Hide player on close
    // alert("Video player closed!"); // Optional feedback
  };

  const handleStartClick = () => {
    setShowPlayer(true);
  };

  if (isLoading) {
    return <div className="p-4">Loading video player data...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">Error: {error}</div>;
  }

  if (frames.length === 0) {
      return <div className="p-4">No video frames were loaded. Check console for errors.</div>;
  }

  // Use React Fragment to render main content and player as siblings
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Testing Video Player (Local Data)</h1>
        {!showPlayer && (
          <button
            onClick={handleStartClick}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-xl font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Start Test Video
          </button>
        )}
      </div>

      {/* Render VideoPlayer again, conditionally */}
      {showPlayer && <VideoPlayer frames={frames} onClose={handleClose} />}
    </>
  );
}
