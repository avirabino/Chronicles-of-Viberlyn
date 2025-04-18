# Chronicles of Viberlyn – Product Requirements Document

## 1. Overview

### 1.1 Purpose  
- Define requirements for a living, AI-driven retro-RPG experience delivered as a VIBE-coded PWA.  
- Leverage an agentic AI-based Dungeon Master engine to orchestrate narrative in a turn-based, timeline-driven flow, strictly adhering to defined story rules and guidelines.  
- Showcase Dungeon Master Studios: an agentic orchestration framework (DM Orchestrator + Apprentice Workers) that procedurally crafts world, encounters, and narrative.  
- Support automatic generation and management of detailed documentation for each story segment by the DM team.

### 1.2 Scope  
- Proof-of-Concept (POC) focus: small, modular story segment illustrating lore presentation (video), AI narrative loops, basic exploration, and encounter mechanics.  
- Map size, quest count, and lore elements driven by narrative needs (`lore.md`), not fixed grid dimensions.

## 2. Concept & Experience  
- **VIBE Coding**: AI-assisted development via WINDSURF delegates code/assets generation.  
- **Retro RPG Feel**: 3D shapes + painterly pixel textures, classic turn-based flow.  
- **AI-Driven DM**: Orchestrator agent governs high-level rules; worker agents handle scene creation, dialogue, encounters, and asset requests.

## 3. Core Components  
- **Agentic Framework**: DM Orchestrator, Apprentice Workers, task list hub (`TODO.md`).  
- **Game Engine**: Timeline manager executing discrete turns (move, rotate, act), integrating DM outputs.  
- **Asset Pipeline**: Stable Diffusion / ElevenLabs / Magenta for textures, narration, music; pre- and on-demand generation.  
- **PWA Shell**: Next.js + Three.js + Tailwind CSS + shadcn/ui with offline caching.

## 4. Goals & Success Criteria  
- **POC Delivery**: Complete a small narrative slice with lore video, exploration, and one encounter cycle within 4–6weeks.  
- **AI DM Integration**: Demonstrate orchestrator issuing prompts → world state updates → narrative feedback within <2s per turn.  
- **Asset Response**: Texture/audio generation pipelines deliver within build or async pipelines.  
- **Community Openness**: Docs & code published early; encourage contributions via GitHub.

## 5. Non-Goals  
- No multiplayer or real-time networking.  
- No rigid world size or quest count; dynamic based on lore.  
- No monetization or premium features at POC phase.

## 6. Requirements

### 6.1 Functional  
- **Exploration**: Grid-based or free-form movement; fog of war and map view as toggles.  
- **Encounters**: D20-style resolution (combat, puzzles, persuasion) defined in `game-rules.md`.  
- **Narrative**: DM-generated descriptions, branching dialogue, event hooks tied to choices.  
- **Lore Presentation**: Intro video segment rendered via `VideoPlayer` component; skippable.

### 6.2 Technical  
- **Frontend**: Next.js 14, TypeScript, Three.js, Tailwind CSS, shadcn/ui components.  
- **Backend**: Python3.12, FastAPI microservices, crew.ai orchestration, SQLite for state.  
- **AI Models**: Local LLaMA3 for text (quantized), Stable Diffusion for textures, ElevenLabs/Magenta for audio.  
- **Performance**: <2s turn response, <3s initial load, offline support.

## 7. World Lore Reference  
All narrative seeds and world context drawn from `lore.md` (Chronicles of Viberlyn – World Lore).

## 8. User Stories (Examples)  
- **Player**: I see a lore video that sets the stage and can skip it.  
- **Player**: I move a turn, then receive flavor text and prompt choices.  
- **Developer**: I can add new encounter types by writing to `game-rules.md` without altering core engine.

## 9. Sprint Planning

### Sprint1 – Project Infrastructure  
- Set up project directories and repository structure  
- Commit a sample `.env.example` with all required keys (FastAPI, LLM, SD endpoints)  
- Define main modules: Menu, VideoPlayer, core UI shell  
- **Code Quality & Consistency**  
  - Configure ESLint + Prettier for TS and Flake8 + Black for Python  
  - Install Husky + pre-commit hooks  
- **CI/QA Pipeline**  
  - GitHub Actions: install deps, run linters/formatters, smoke tests (`npm run build`, `pytest`), Lighthouse PWA audit  
  - Regression testing infra + dummy tests  
- **Architecture & Docs**  
  - Mermaid diagram in `docs/architecture.md`  
  - Stubs with TODOs in own dirs:  
    - `frontend/src/components/Menu/Menu.tsx`  
    - `frontend/src/components/VideoPlayer/VideoPlayer.tsx`  
    - `backend/app/main.py`  
    - `backend/app/routers/world_state.py`  
    - `backend/app/routers/health.py`  
    - `backend/app/dm_prompts.md`  
  - Test stubs: `tests/unit/test_health.py`, `tests/system/test_health.py`  
- **Secrets & Assets**  
  - `.gitignore` for `assets/` and model checkpoints  
  - Document asset storage (WINDSURF/cache or S3)  
- **Acceptance Criteria**  
  - Dev clone + README → frontend & backend spin up, stub UIs (Menu button + blank canvas)  
  - `/health` returns 200; unit & system tests pass  
  - CI badges visible in README  
- Create initial release tag `v0.1-infra`

### Sprint2 – Video Player and Main Menu  
- **VideoPlayer**  
  - Plays static videos from `stories/<story>/intro-video.json`  
  - Fetches assets/JSON via BE endpoints; POC from local dir, migrate to S3 later  
  - Reference POC code (`code-snippe-video-player.js`)  
  - Unit tests for video-data endpoint (JSON schema & links)  
  - Cypress tests: player rendering, frame advance, skip  
- **Main Menu**  
  - **Continue Game**: enabled if save exists  
  - **Start Game**: enabled if `stories/<story>/instruction.json` present  
  - **Stories**: list all stories; selecting one activates its assets, plays intro, applies theme  
  - **Play <chapter> Video**: plays chapter intro if exists; button disabled otherwise  
  - **Settings**: driven by `game-config.json`  
  - **Quit**: exits PWA  
  - Unit tests for menu logic (enable/disable)  
  - Cypress e2e tests for menu navigation & VideoPlayer invocation  
- **Acceptance Criteria**  
  1. Menu loads with correct option states  
  2. Selecting a story opens VideoPlayer  
  3. VideoPlayer plays/skips frames without errors  
- **Extras**  
  - Accessibility audit (ARIA labels, keyboard nav)  
  - Performance budgets for media loading via Lighthouse

### Sprint3 – Basic Game Engine (Exploration)  
- Develop map rendering and movement mechanics (no rules)  
- Toggleable fog of war and map overview  
- Basic turn-based loop stub (move/rotate actions)

### Sprint4 – DM Studios Setup  
- Scaffold DM Orchestrator & Apprentice Worker workflows  
- Integrate task hub updates (`TODO.md`) by agents  
- Create initial DM system prompts & orchestration API endpoints

### Sprint5 – Agentic AI-Based Dungeon Master Engine  
- Integrate crew.ai workflows for narrative generation  
- Implement AI turn resolution: prompt → world state → narrative  
- Validate performance and automated story doc generation pipeline  
