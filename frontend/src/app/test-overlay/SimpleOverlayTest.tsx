// --- Windsurf Metadata ---
// Assistant: FE_NextJS_Core
// Created: 2025-04-28 
// Modified: 2025-04-28
// --- End Windsurf Metadata ---

// Copied from test-video directory for isolated testing

'use client';

import React from 'react';

interface SimpleOverlayTestProps {
  onClose: () => void;
}

const SimpleOverlayTest = ({ onClose }: SimpleOverlayTestProps) => {
  const handleNext = () => {
    console.log('SimpleOverlay: Next clicked');
  };

  const handleSkip = () => {
    console.log('SimpleOverlay: Skip clicked');
    onClose(); // For simplicity, skip also closes
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      data-testid="simple-overlay"
    >
      <div className="bg-white p-6 rounded-lg shadow-xl text-black w-1/2 relative">
        <h2 className="text-xl font-bold mb-4">Basic Floating Window Test</h2>

        {/* Close Button (Top Right) */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 bg-gray-200 rounded-full p-1"
          aria-label="Close Test Overlay"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <p className="mb-4">This is a test overlay. Does it float correctly?</p>

        <div className="flex justify-end space-x-3 mt-4">
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
          >
            Next
          </button>
          <button
            onClick={handleSkip}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md transition-colors"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleOverlayTest;
