# System Architecture – Chronicles of Viberlyn

```mermaid
graph LR
  Frontend[Frontend (Next.js 14, Three.js, Tailwind CSS)] -->|REST| Backend[FastAPI (Python 3.12)]
  Backend -->|SQLite| Database[(SQLite DB)]
  Backend -->|crew.ai| DM_Orchestrator[DM Orchestrator]
  DM_Orchestrator -->|Task Hub| Apprentice_Workers[Apprentice Workers]
  Backend -->|Asset APIs| Asset_Pipeline[Stable Diffusion, ElevenLabs, Magenta]
  Frontend -->|Assets| Asset_Pipeline
```

## Description
- **Frontend**: Next.js 14, TypeScript, Three.js, Tailwind CSS, shadcn/ui. PWA shell, UI components, map/game rendering, asset fetching.
- **Backend**: FastAPI, Python 3.12. REST API, orchestrates AI/DM logic, manages world state, connects to asset pipelines and database.
- **AI Layer**: crew.ai agents (DM Orchestrator, Apprentice Workers) for narrative, task management, and encounter generation.
- **Asset Pipeline**: Stable Diffusion (textures), ElevenLabs (audio), Magenta (music).
- **Database**: SQLite for game state, saves, and story data.
