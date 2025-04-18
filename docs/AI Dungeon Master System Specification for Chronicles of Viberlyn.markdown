# AI Dungeon Master System for Chronicles of Viberlyn

The AI Dungeon Master (DM) system for **Chronicles of Viberlyn**, a retro-modern fantasy RPG, is a hierarchical, modular framework designed to automate the creation of dynamic, immersive stories. It leverages a crew of AI agents organized in a tree-like structure, with an **Orchestrator DM** overseeing the narrative and specialized **Apprentice DMs** handling specific story elements such as quests, maps, rules, and assets. The system balances creativity and consistency, integrating with a save system and a single story directory for scalability and ease of management.

---

## 1. System Architecture

- **Orchestrator DM**: The central coordinator that defines the story’s high-level structure, enforces global rules and lore, manages common assets, and assigns tasks to Apprentice DMs. It focuses solely on story building, distinct from the execution DM that governs the game engine during gameplay.
- **Apprentice DMs**: Specialized agents that create content for specific story components (e.g., chapters, quests, NPCs) within the Orchestrator’s guidelines.
- **Tool Agents**: Utility functions (e.g., image or audio generators) that support Apprentice DMs in creating or refining content.
- **Shared Directory**: A centralized, flat directory structure (`/stories/<story-name>/`) containing all story content with unique, descriptive filenames, ensuring organization and reusability. No subfolders are used beyond the story directory.

---

## 2. Directory Structure

- **Flat Directory**: All story content resides directly under `/stories/<story-name>/` with no subdirectories. Files are named uniquely and descriptively to avoid conflicts and indicate their purpose.
  - **Examples**:
    - `/stories/the-curse-of-noxvale/chapter-1-quests.md`
    - `/stories/the-curse-of-noxvale/map-volcanic-cave.json`
    - `/stories/the-curse-of-noxvale/npc-mayor-baldrin.json`
- **Common Assets**: Reusable assets (e.g., creatures, player classes) are stored in `/common-assets/` with clear filenames (e.g., `/common-assets/creature-goblin.json`).
- **Unique Naming**: Files have unique, descriptive names (e.g., `chapter-1-map.json`, `item-relic-fragment.json`).

---

## 3. Crew Roles and Responsibilities

### 3.1 Orchestrator DM (Story Builder)

- **Role**: Oversees the entire story creation process, distinct from the execution DM that manages gameplay.
- **Responsibilities**:
  - Define the story’s title, chapters, and main plot (e.g., "The Curse of Noxvale, party level 5-9").
  - Enforce global rules and lore (e.g., from `Chronicles-of-Viberlyn-guide.md`) unless overridden by the human "TOP DM."
  - Manage common assets in `/common-assets/` (e.g., player classes, creatures).
  - Assign small, contained tasks to Apprentice DMs (e.g., "Create Chapter 1: 1000 XP, party level 5-6").
  - Integrate outputs into a cohesive narrative and update `story_state.json` and `save_template.json`.
  - Handle updates and deletions of content as requested by humans or AI, ensuring consistency.
  - **Override Option**: If the TOP DM invokes "break all rules," the Orchestrator allows full creative deviation from lore and mechanics.

### 3.2 Apprentice DMs (Worker Agents)

- **Role**: Specialized agents that generate detailed content for specific story elements.
- **Specialized Apprentices**:
  - **Chapter Apprentice**: Designs a chapter’s narrative arc, quests, and events.
  - **Quest Apprentice**: Creates quests with objectives, steps, dependencies, and XP boundaries.
  - **Map Apprentice**: Generates maps (e.g., 20x20 grids) with tiles, objects, NPCs, and creatures.
  - **Rules Apprentice**: Defines story-specific rules (e.g., unique spells, conditions like "Volcanic Heat").
  - **NPC Apprentice**: Develops NPCs with stats, dialogue, and behavior.
  - **Creature Apprentice**: Designs creatures with stats and loot tables.
  - **Item Apprentice**: Defines items (e.g., weapons, potions) with effects.
  - **Player Character Apprentice**: Expands player classes and skills.
  - **Faction Apprentice**: Manages faction dynamics and reputation systems.
  - **Asset Apprentice**: Generates assets (e.g., sprites, audio) using tools like DALL·E or Suno AI.
  - **Dialogue Apprentice**: Writes narrative text and NPC dialogue.
- **Flexibility**: Apprentices adhere to guidelines but can deviate creatively when "break all rules" is active.

### 3.3 Tool Agents

- **Role**: Provide utility support to Apprentice DMs.
- **Examples**:
  - **Image Generator**: Creates pixel-art sprites (e.g., "64x64 Lava Beast").
  - **Audio Generator**: Produces music (e.g., "120s volcanic ambient").
  - **Text Refiner**: Enhances dialogue consistency.

---

## 4. Story Building Workflow

### 4.1 Task Delegation and Management

- **Small, Contained Tasks**: Story creation is broken into individual, manageable tasks (e.g., one chapter at a time).
- **Sequential Assignment**: Tasks are assigned one by one to ensure focus and quality (e.g., quests, then maps, then NPCs).
- **Detailed Instructions**: Worker agents receive specific "User" prompts outlining tasks (e.g., "Create Chapter 1 quests with 1000 XP, party level 5-6").

### 4.2 Orchestrator DM Workflow

- **Initiates the Story**: Defines the story’s structure (e.g., "The Curse of Noxvale, party level 5-9").
- **Assigns Tasks**: Delegates small tasks to Apprentice DMs (e.g., "Create Chapter 1: 1000 XP, party level 5-6").
- **Integrates Outputs**: Collects and integrates outputs into the story directory (e.g., `/stories/the-curse-of-noxvale/chapter-1-quests.md`).
- **Updates Save System**: Modifies `save_template.json` to track progress (e.g., `"story_uuid": "a1b2c3d4-e5f6-7890-1234-567890abcdef"`).

### 4.3 Apprentice DM Workflow

- **Receives Task**: Gets a specific "User" prompt from the Orchestrator (e.g., "Generate a 20x20 map for the volcanic cave").
- **Executes Task**: Creates content and saves it directly to the story directory with a unique filename (e.g., `/stories/the-curse-of-noxvale/map-volcanic-cave.json`).
- **Collaborates**: Works with other apprentices (e.g., Rules Apprentice defines "Volcanic Heat," Quest Apprentice applies it to quests).

---

## 5. Update and Delete Capabilities

- **Human and AI Requests**: Supports updates and deletions, initially human-governed, later AI-driven.
- **Orchestrator Handling**:
  - Processes requests to update or delete files (e.g., "Update NPC Mayor Baldrin’s dialogue").
  - Performs actions directly or delegates to worker agents (e.g., Dialogue Apprentice for dialogue updates).
- **Consistency Checks**: Ensures dependencies are managed (e.g., removing references to deleted NPCs from quests).

---

## 6. Asset Management

- **Common Assets**: Reusable assets are stored in `/common-assets/` (e.g., `/common-assets/creature-goblin.json`).
- **Story-Specific Assets**: New or modified assets are saved in the story directory with unique names (e.g., `/stories/the-curse-of-noxvale/item-relic-fragment.json`).
- **Variants and Derivatives**: Worker agents can create variants (e.g., "Goblin Archer" from "Goblin") with unique filenames.

---

## 7. Save System Integration

The system updates `save_template.json` to track progress, quest states, and world changes:
- **Quest States**: `"mq1_defeat_lava_beast": {"status": "Active", "steps_status": {"mq1_1_find_cave": "Completed"}}`
- **Player State**: `"xp": 350, "level": 2, "inventory": [{"item_id": "relic_fragment", "quantity": 1}]`
- **Map Objects**: `"Volcanic_Chest": {"current_state": "open_looted"}`
- **Active Effects**: `"active_effects": [{"effect_id": "eerie_hum", "duration_turns": -1}]`

---

## 8. Key Features

- **Global Rules and Lore**:
  - Enforced by the Orchestrator unless overridden.
  - Rules Apprentice adds story-specific mechanics (e.g., "Volcanic Heat").
- **Asset Reuse**:
  - Base assets (e.g., "Goblin") and derivatives (e.g., "Goblin Archer") stored in `/common-assets/`.
  - Story-specific assets saved in `/stories/<story-name>/` with links to common files.
- **Quest Dependencies**:
  - Quests include `depends_on` fields (e.g., `"mq1_2_talk_miner"` depends on `"mq1_1_talk_mayor"`).
  - Tracked in `save_template.json` under `"quest_states"`.
- **XP Management**:
  - Quests have defined XP boundaries (e.g., 500 XP for "Defeat the Lava Beast").
  - High-level players in low-level quests receive reduced XP or penalties.
- **Single Directory**:
  - All content in `/stories/<story-name>/` with meaningful filenames (e.g., `chapter-1-map.json`).
  - Assets reference common files (e.g., `"creature_id": "/common-assets/lava_beast.json"`).
- **Human Override**:
  - The TOP DM can invoke "break all rules" for full creative freedom.

---

## 9. Example Prompts for Agents

### Orchestrator DM Prompt
```
You are the Orchestrator DM for Chronicles of Viberlyn, a retro-modern fantasy RPG. Define the story structure (title, chapters, plot) and enforce global rules and lore (e.g., Crimson Empire, Verdant Concord) unless the human TOP DM says "break all rules." Manage common assets in /common-assets/ and assign small, contained tasks to Apprentice DMs. Save outputs directly in /stories/<story-name>/ with unique filenames. Update story_state.json and save_template.json for continuity. Handle update and delete requests for story content.
```

### Rules Apprentice Prompt
```
You are the Rules Apprentice DM for Chronicles of Viberlyn. Define story-specific rules (e.g., unique spells, conditions like "Eerie Hum") that align with the game’s mechanics unless "break all rules" is set. Save rules in /stories/<story-name>/story_rules.json and collaborate with other apprentices to integrate them into quests and maps.
```

---

## 10. Conclusion

This AI Dungeon Master system offers a robust, flexible framework for generating dynamic stories in **Chronicles of Viberlyn**. The Orchestrator ensures narrative coherence, while specialized apprentices add depth and variety through small, contained tasks. The flat directory structure and save system integration make it scalable and manageable, with the TOP DM’s override option enabling boundless creativity. This system is designed to create immersive, lore-consistent adventures while allowing for innovative storytelling when desired.