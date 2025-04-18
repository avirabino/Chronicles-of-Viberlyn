# --- Windsurf Metadata ---
# Assistant: Core
# Created: 2025-04-18
# Modified: 2025-04-18
# --- End Windsurf Metadata ---

from fastapi import FastAPI
from .routers import world_state, health

app = FastAPI()

# Include routers
app.include_router(health.router)
# TODO: app.include_router(world_state.router) when implemented

@app.get("/")
def root():
    return {"message": "Chronicles of Viberlyn API"}
