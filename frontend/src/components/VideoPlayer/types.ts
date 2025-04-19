// --- Windsurf Metadata ---
// Assistant: FE_NextJS_VideoPlayer
// Created: 2025-04-18
// Modified: 2025-04-20
// --- End Windsurf Metadata ---

/**
 * Types for VideoPlayer component (Chronicles of Viberlyn)
 */

export interface VideoFrame {
  sceneIndex: number;
  title: string;
  imageUrl: string;
  text: string;
  audioUrl: string;
}

export interface VideoPlayerProps {
  frames: VideoFrame[];
  onClose: () => void;
  onSkip?: () => void;
  /** Optionally, the index of the frame to start on */
  initialFrameIndex?: number;
}
