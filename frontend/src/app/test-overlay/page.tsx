// --- Windsurf Metadata ---
// Assistant: FE_NextJS_Core
// Created: 2025-04-29
// Modified: 2025-04-29
// --- End Windsurf Metadata ---

'use client'; // Mark as client component due to useState

import React, { useState } from 'react';
import SimpleOverlayTest from './SimpleOverlayTest'; // Import the test component

export default function TestOverlayPage() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClose = () => {
    console.log("Simple Overlay Test closed callback triggered (test overlay page)");
    setShowOverlay(false); // Hide overlay on close
  };

  const handleStartClick = () => {
    setShowOverlay(true);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Testing Basic Overlay</h1>
        <p className="mb-4">This page tests the SimpleOverlayTest component directly.</p>
        {!showOverlay && (
          <button
            onClick={handleStartClick}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-xl font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            Show Simple Overlay
          </button>
        )}
      </div>

      {/* Render SimpleOverlayTest conditionally outside the main container */}
      {showOverlay && <SimpleOverlayTest onClose={handleClose} />}
    </>
  );
}
