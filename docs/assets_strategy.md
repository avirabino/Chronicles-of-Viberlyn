# --- Windsurf Metadata ---
# Assistant: Core
# Created: 2025-04-18
# Modified: 2025-04-18
# --- End Windsurf Metadata ---

# Asset Strategy: Chronicles of Viberlyn

## Overview
This document outlines the asset management strategy for the project, including local caching, S3 migration, and best practices for handling large files and generated assets.

## Local Cache
- During development, assets (textures, audio, images, etc.) are stored in the `assets/` directory under `common/` and `stories/`.
- The `.gitignore` file should exclude all assets and large binary files to prevent repository bloat.

## S3 Migration Plan
- For production and scalable deployments, assets will be migrated to an S3-compatible cloud storage.
- The backend and/or asset pipeline scripts will handle uploading and retrieving assets from S3.
- Asset URLs in the game config or database should point to S3 locations in production.

## Best Practices
- Never commit generated or binary assets to the repository.
- Use fetch scripts to pull required assets from WINDSURF cache or S3 as needed.
- Document new asset types and update this strategy as the project evolves.
