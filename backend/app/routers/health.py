# --- Windsurf Metadata ---
# Assistant: Core
# Created: 2025-04-18
# Modified: 2025-04-18
# --- End Windsurf Metadata ---

from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
def health():
    return {"status": "ok"}
