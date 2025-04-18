# Elaborate TODO List: Chronicles of Viberlyn  
---
+ ## Project Information
+ - **Current Folder Structure**
+   - `frontend/`
+   - `backend/`
+   - `docs/`
+     - PRD, TODO, Specs
+   - `assets/`
+     - `common/` (textures, audio, images)
+     - `stories/` (story-specific assets)
+   - `temp/`
+     - Scratch code snippets, experiments, ad-hoc scripts
+     - **Purpose:** playground for VIBE sessions; clear regularly to avoid bloat
+   - `tests/`
+     - `unit/`, `system/`, `e2e/`
+
+ - **Architecture Overview**
+   - **Frontend (Next.js 14 + React + TypeScript):** PWA shell, UI components, Three.js canvas
+   - **Backend (FastAPI + Python 3.12):** REST endpoints, AI orchestration hooks, SQLite persistence
+   - **AI Layer:** Enterprise models for text, Stable Diffusion for textures, ElevenLabs/Magenta for audio
+   - **Orchestration:** crew.ai agents (DM Orchestrator, Apprentice Workers)
+   - **Data Flow:** Frontend ↔FastAPI ↔ SQLite & crew.ai ↔ Asset pipelines
+
+ - **temp Directory Purpose**
+   - Host throwaway prototypes, code snippets, and test harnesses
+   - Do **NOT** commit temp content; clear after validation or merge into proper modules

## Sprint1 – Project Infrastructure  

**Overview:**  
Lay the foundation for a consistent, reproducible codebase and CI/CD pipeline. Scaffold directory structure, enforce code quality, stub out main modules, configure secrets handling, and publish an initial release to validate the environment.

### Major Task 1: Repository & Environment Setup  
Prepare all developers to “clone & run” the project without friction.  
**ToDos:**  
- [x] **Directory structure**  
  - [x] Create top‑level folders:  
    - [x] `frontend/`  
    - [x] `backend/`  
    - [x] `docs/`  
    - [x] `tests/unit/`  
    - [x] `tests/system/`  
- [x] **README & DevContainer**  
  - [x] Add `README.md` with instructions for VSCode DevContainer or Docker Compose  
  - [x] Include “Getting Started” section outlining prerequisites and start commands  
- [x] **Environment variables**  
  - [x] Commit `.env.example` at project root with placeholders:  
    ```env
    FASTAPI_HOST=localhost
    FASTAPI_PORT=8000
    LLM_API_KEY=<your‑key>
    SD_ENDPOINT_URL=http://localhost:7860
    ```  
  - [x] Document additional keys in `docs/env.md`  

### Major Task 2: Code Quality & Consistency  
Ensure uniform style and automated enforcement throughout the stack.  
**ToDos:**  
- [x] **Frontend**  
  - [x] Install ESLint + Prettier  
  - [x] Add config files: `.eslintrc.js`, `.prettierrc`  
- [x] **Backend**  
  - [x] Install Flake8 + Black  
  - [x] Configure in `pyproject.toml` and `.flake8`  
- [x] **Pre‑commit hooks**  
  - [x] Setup Husky in root:  
    ```bash
    npx husky-init && npm install
    husky set .husky/pre-commit "npm run lint && black ."
    ```  

### Major Task 3: CI/QA Pipeline  
Automate checks on every push and PR.  
**ToDos:**  
- [x] **GitHub Actions**  
  - [x] Create `.github/workflows/ci.yml` with steps to:  
    1. [x] Checkout code  
    2. [x] Install Node & Python  
    3. [x] Run `npm ci` and `pip install -r requirements.txt`  
    4. [x] Run linters (`npm run lint`, `flake8`)  
    5. [x] Execute smoke tests (`npm run build`, `pytest --maxfail=1`)  
    6. [x] Run Lighthouse PWA audit  
- [x] **Regression tests**  
  - [x] In `tests/unit/`, add `test_health.py` asserting `/health` → 200 OK  
  - [x] In `tests/system/`, add `test_health_system.py` performing HTTP GET to `/health`  
- [x] **Badges**  
  - [x] Insert CI status and Lighthouse badges into `README.md`  

### Major Task 4: Architecture & Documentation  
Make the system’s design explicit and navigable.  
**ToDos:**  
- [x] **Mermaid diagram**  
  - [x] Create `docs/architecture.md` containing:  
    ```mermaid
    graph LR
      Frontend -->|REST| FastAPI
      FastAPI -->|SQLite| Database
      FastAPI -->|crew.ai| DM_Orchestrator
    ```  
- [x] **Module stubs**  
  - [x] Add skeleton files with `// TODO` comments in:  
    - [x] `frontend/src/components/Menu/Menu.tsx`  
    - [x] `frontend/src/components/VideoPlayer/VideoPlayer.tsx`  
    - [x] `backend/app/main.py`  
    - [x] `backend/app/routers/world_state.py`  
    - [x] `backend/app/routers/health.py`  
    - [x] `backend/app/dm_prompts.md`  
- [x] **Asset strategy doc**  
  - [x] Draft `docs/assets_strategy.md` describing local cache → S3 migration plan  

### Major Task 5: Secrets & Asset Handling  
Prevent sensitive or large files from polluting the repo.  
**ToDos:**  
- [x] **.gitignore** updates:  
  - [x] Add `/assets/`  
  - [x] Add `*.ckpt`, `*.pt`  
- [x] **Fetch script stub**  
  - [x] Add `scripts/fetch_assets.sh` with placeholder commands to pull from WINDSURF cache  

### Acceptance Criteria  
- [x] Developer clones repo, follows `README.md`, and both front‑ & back‑end spin up showing stub Menu and blank canvas without errors  
- [x] `GET /health` returns HTTP200; unit & system tests pass  
- [x] CI badges (build, lint, test, PWA audit) visible in `README.md`  
- [x] GitHub release tag `v0.1-infra` created  

---

## Sprint2 – Video Player and Main Menu  

**Overview:**  
Implement the interactive entry points: a fully functional `VideoPlayer` driven by backend data and a Main Menu that orchestrates story playback, saves management, and settings.

### Literature Review (Required Reading)
- [x] Review `docs/visual_style_guide.md` (visual style and accessibility)
- [x] Review `temp/code-snippe-viberlyn-complete-UI-demo.js` (UI code snippet)
- [x] Review `temp/code-snippe-video-player.js` (player demo code snippet)
- [x] Review `assets/stories/chronicles-of-viberlyn/intro-video.json` (example video script)

### Major Task 0: Assistant Roles & Scoping
- [x] Add new FE and BE assistants for VideoPlayer and Menu modules to `.windsurf_config.yaml` (define roles and file scope)
    - [x] Assign file paths and responsibilities clearly for each assistant
    - [x] Ensure new assistants follow project and visual style guidelines

### Major Task 1: VideoPlayer Component
Use your POC implementation as a blueprint.
**ToDos:**
- [ ] **Component scaffolding**
  - [ ] Create `frontend/src/components/VideoPlayer/VideoPlayer.tsx` based on `code-snippe-video-player.js`
  - [ ] Define `VideoPlayerProps` and `VideoFrame` in `frontend/src/components/VideoPlayer/types.ts`
  - [ ] Ensure the following features:
    - [ ] Scene/image/narration display per `intro-video.json`
    - [ ] Audio sync (scene advances only after narration finishes)
    - [ ] 1:1 square images for all visuals
    - [ ] Skip and End buttons, styled per visual guide
    - [ ] Transitions (fade, fade-to-black) per scene data
    - [ ] Visual style and animation per `visual_style_guide.md` and UI demo snippet
    - [ ] Accessibility (A11y) and responsive design
- [ ] **Backend endpoint**
  - [ ] Add `GET /api/video/intro/{storyId}` in `backend/app/routers/video.py` returning JSON matching `intro-video.json`
- [ ] **Unit tests**
  - [ ] Create `tests/unit/test_video_endpoint.py`: validate HTTP200 and JSON schema for each frame
- [ ] **Cypress e2e**
  - [ ] Add `tests/e2e/video_player.cy.js`:
    1. [ ] Navigate to menu → Play Intro
    2. [ ] Assert `VideoPlayer` opens, first frame image/text loads
    3. [ ] Click “Next Frame,” verify frame index increments
    4. [ ] Click “Skip Intro,” verify `onClose` is called
- [ ] **System tests**
  - [ ] Add system-level tests to validate narration sync, skip/end functionality, and transitions
- [ ] **Style and Reference**
  - [ ] Reference and adhere to `visual_style_guide.md` and code snippets in implementation

### Major Task 2: Main Menu UI
Wire up story selection, saves, and settings.
**ToDos:**
- [ ] **Component skeleton**
  - [ ] Create `frontend/src/components/Menu/Menu.tsx` with buttons: Continue, Start, Stories, Play Chapter, Settings, Quit
  - [ ] Ensure Menu styling and animation follow `visual_style_guide.md` and UI demo snippet
- [ ] **Config integration**
  - [ ] Load `game-config.json` from `frontend/config/game-config.json`
- [ ] **Story manager utility**
  - [ ] Implement `frontend/src/utils/storyManager.ts` with functions to:
    - [ ] List available stories via `GET /api/stories`
    - [ ] Activate a story (copy files to `stories/active/`)
- [ ] **Unit tests**
  - [ ] Create `tests/unit/test_menu_logic.py`: verify enable/disable states for each button based on mocks
- [ ] **Cypress e2e**
  - [ ] Add `tests/e2e/menu_navigation.cy.js`:
    1. [ ] Assert “Continue” disabled when no save exists
    2. [ ] Select “Stories,” choose a story, ensure “Play Intro” is enabled
    3. [ ] Select “Play Intro” and verify VideoPlayer behavior
- [ ] **Style and Reference**
  - [ ] Reference and adhere to `visual_style_guide.md` and code snippets in implementation

### Major Task 3: Endpoint Testing for Menu
Support UI data with robust APIs.
**ToDos:**
- [ ] **Stories endpoint**
  - [ ] Create `GET /api/stories` in `backend/app/routers/stories.py` listing directory names under `stories/`
- [ ] **Unit test**
  - [ ] Create `tests/unit/test_stories_endpoint.py`: mock filesystem, assert JSON array of story IDs
- [ ] **System test**
  - [ ] Add `tests/system/test_stories.py`: HTTP GET against running backend, validate response
- [ ] **Style and Reference**
  - [ ] Reference and adhere to `visual_style_guide.md` and code snippets in implementation

### Major Task 4: General
- [ ] Reference and adhere to `visual_style_guide.md` and code snippets in implementation
- [ ] Review and update documentation/README as needed
- [ ] Ensure all new features and endpoints are covered by both unit and system tests

### Acceptance Criteria  
- [ ] Menu loads with correct enable/disable states for Continue, Start, Stories, Play Chapter, Settings, Quit  
- [ ] Selecting a story activates it and enables “Play Intro”  
- [ ] VideoPlayer opens and functions (frame advance & skip) without errors  
- [ ] All new unit and e2e tests pass in CI  

---

## Sprint3 – Basic Game Engine (Exploration)  
**TBD**

---

## Sprint4 – DM Studios Setup  
**TBD**

---

## Sprint5 – Agentic AI‑Based Dungeon Master Engine  
**TBD**
