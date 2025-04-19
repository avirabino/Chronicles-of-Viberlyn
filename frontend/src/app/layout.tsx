// --- Windsurf Metadata ---
// Assistant: FE_NextJS_Core
// Created: 2025-04-19
// Modified: 2025-04-29 // Added globals.css import
// --- End Windsurf Metadata ---
import React from 'react';
import './globals.css'; // Import Tailwind styles

// Define metadata for SEO (optional but recommended)
export const metadata = {
  title: 'Chronicles of Viberlyn - Test',
  description: 'An interactive adventure test environment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Minimal layout, can be expanded later */}
        <main>{children}</main>
      </body>
    </html>
  );
}
