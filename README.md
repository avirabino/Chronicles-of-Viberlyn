# Chronicles of Viberlyn

[![CI](https://github.com/your-username/chronicles-of-viberlyn/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/chronicles-of-viberlyn/actions/workflows/ci.yml)
[![Lighthouse PWA](https://img.shields.io/badge/Lighthouse-PWA-brightgreen)](https://developers.google.com/web/tools/lighthouse)

Welcome to *Chronicles of Viberlyn*, an open-source **Progressive Web App (PWA)** fantasy RPG inspired by the classic *Hillsfar*. Crafted using `VIBE` coding with `WINDSURF`, this game delivers a compelling turn-based, tile-based experience enriched by interactive AI-driven storytelling. Players explore a 20x20 world grid, making impactful decisions that shape *Elderglow’s* destiny, navigating conflicts between the *Evil Empire* and the heroic *Freedom Fighters* of the *Ancient Society*.

This repository contains the core game files, the *DM AI Studio*—an environment enabling developers to create, test, and refine interactive AI-driven narratives—and the *DM AI Game Orchestrator*, responsible for dynamically managing gameplay, quests, and interactive elements. Included is the initial proof-of-concept (PoC) story *"The Relic of Elderglow"*, Version 1.0 (released June 22, 2025). Community contributions are highly encouraged!

## Overview

### Game Concept

*Chronicles of Viberlyn* is a single-player RPG set in the rich fantasy world of *Viberlyn*. Players explore a 20x20 tile-based world, engaging in turn-based actions such as moving, fighting, and interacting with characters and objects. An **AI Dungeon Master (DM)** dynamically generates quests, events, and dialogues, creating unique storytelling experiences. A narrated intro video introduces the adventure, with additional narrative scenes for deeper immersion.

### Core Features

-   **Turn-Based Exploration**: Navigate a 20x20 tile map, with strategic gameplay (movement, rotation, and random events).
-   **Interactive Narrative**: Engage in the main storyline (*"The Relic of Elderglow"*) and two optional side quests, each influenced by your choices.
-   **Enterprise-Level AI Content**: Narrated videos, textures, music, and speech generated using state-of-the-art enterprise LLMs and GenAI models.
-   **Dynamic Encounters**: Combat, puzzles, dialogues, and shop interactions based on a classic `D20` system.
-   **Progressive Web App**: Responsive, offline-capable, and installable, providing seamless play on any platform.

## Technology Stack

-   **Frontend**: `Next.js`, `TypeScript`, `Three.js` (3D), `Tailwind CSS`.
-   **Backend**: `Python`, `FastAPI`, `N8N`, `SQLite`.
-   **AI Components**: Enterprise-level LLM and GenAI models (text, visuals, audio).
-   **PWA Setup**: Enabled via `next-pwa`.
-   **Development**: Primarily AI-assisted through `VIBE` coding with `WINDSURF`.

## Current Status

-   **Version 1.0**: Released June 22, 2025.
-   **Gameplay**: Approximately 1-hour of content, featuring a mini-adventure across a 20x20 map with three distinct quests.
-   **Future Plans**: Expanded worlds, additional quests, and a story editor.

## Installation Guide

### Requirements

Ensure the following are installed:

-   `Node.js`: v18.x+
-   `Python`: v3.10+
-   `Git`
-   **Hardware**: Minimum 8GB RAM, recommended 16GB with GPU for optimal performance.

### Setup Steps

1.  **Clone the Repo**:
    ```bash
    git clone [https://github.com/](https://github.com/)[your-username]/chronicles-of-viberlyn.git
    cd chronicles-of-viberlyn
    ```
2.  **Frontend Setup**:
    ```bash
    cd frontend
    npm install
    ```
3.  **Backend Setup**:
    ```bash
    cd ../backend
    python -m venv venv
    source venv/bin/activate  # Windows: venv\Scripts\activate
    pip install -r requirements.txt
    ```
4.  **Configure Environment Variables**:
    -   Frontend (`frontend/.env.local`):
        ```
        NEXT_PUBLIC_API_URL=http://localhost:8000
        ```
    -   Backend (`backend/.env`):
        ```
        API_KEYS=your-enterprise-api-keys
        ```

### Running Locally

1.  **Backend**:
    ```bash
    cd backend
    source venv/bin/activate
    uvicorn main:app --host 0.0.0.0 --port 8000 --reload
    ```
2.  **Frontend**:
    ```bash
    cd frontend
    npm run dev
    ```
3.  Open `http://localhost:3000`.

### Game Verification:

-   Launch intro video.
-   Explore the tile grid and engage in quests.
-   Test PWA functionality (offline, installability).

### Production Deployment

-   **Frontend (Vercel)**:
    ```bash
    cd frontend
    npm run build
    vercel
    ```
-   **Backend (AWS/EC2)**:
    -   Install `Gunicorn`, deploy backend, configure `Nginx` reverse proxy.

## Contribution Guidelines

Contributions are welcome!

-   Fork, clone, and follow the setup.
-   Submit PRs via new branches.

### Contribution Opportunities:

-   Expand quests and world maps.
-   Improve or add AI-generated content.
-   Refine gameplay and UX.
-   Refer to `TODO.md` for additional tasks.

## License

MIT License (see `LICENSE`).

## Contact

Report issues or discuss features via GitHub Issues or email: `[your-email@example.com]`.