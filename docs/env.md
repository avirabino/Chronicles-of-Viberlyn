# Chronicles of Viberlyn – Environment Variables Reference

This document describes the required and optional environment variables for both frontend and backend.

## Backend (FastAPI)
- `FASTAPI_HOST`: Host for the FastAPI server (default: `localhost`)
- `FASTAPI_PORT`: Port for the FastAPI server (default: `8000`)
- `LLM_API_KEY`: API key for the Large Language Model (required for AI DM)
- `SD_ENDPOINT_URL`: URL for Stable Diffusion image generation
- `ELEVENLABS_API_KEY`: (Optional) API key for ElevenLabs audio
- `MAGENTA_API_KEY`: (Optional) API key for Magenta music generation

## Frontend (Next.js)
- `NEXT_PUBLIC_API_URL`: URL for the backend API (default: `http://localhost:8000`)

## Notes
- Never commit actual secrets to the repository. Use `.env.example` as a template.
- Add new variables here as new features or integrations are added.
