# Game Specification for Chronicles of Viberlyn

## Intro
In any ambitious game project, a clear and detailed specification is the bridge between a grand vision and a tangible product. This Step 2 in our journey focuses on crystallizing the ideas of Chronicles of Viberlyn into a comprehensive project specification. A good game design document (GDD) serves as the project’s blueprint – it outlines the game’s vision, core mechanics, features, and technical approach in one place​. The goal is to ensure every team member and contributor is literally on the same page about what we’re building and how we’ll build it. As one spec-writing guide emphasizes, a spec must be precise and leave no room for ambiguous interpretation. In practice, this means clearly defining gameplay rules, AI behaviors, content pipelines, and architectural decisions up front. By doing so, we create a single source of truth that guides development, prevents scope creep, and inspires confidence in potential collaborators or stakeholders. In the context of Vibe Coding (our practice of leveraging AI tools in development), a solid spec also helps us delegate creative tasks to generative AI systems in a controlled way. Now, let’s delve into the Chronicles of Viberlyn specification and see how we translate creative ideas into a structured development plan.

## Game Overview

Project Overview: Chronicles of Viberlyn is a collaborative open-world fantasy RPG that integrates classic tabletop role-playing elements with cutting-edge generative AI. The game blends a high-fantasy setting (think mystical kingdoms, ancient ruins, and enchanted forests) with Dungeons & Dragons-inspired mechanics and dynamic content generation. The vision is to create a “living game” world that reacts and evolves based on player actions, using AI to generate rich narratives, dialogues, and even visual media on the fly​. 
This specification breaks down the core concept, gameplay mechanics, AI systems, content generation pipeline, and technical architecture of the project.

## Core Concept and Setting
At its heart, Chronicles of Viberlyn is about emergent storytelling in a sandbox fantasy world. Players assume the roles of adventurers in the realm of Viberlyn – a land teeming with magical artifacts, hidden knowledge, and looming threats. Rather than a fixed linear plot, the game provides an overarching world lore and several factions/agendas, then empowers players (and an AI-driven Dungeon Master) to shape the narrative through their choices. The core experience is akin to a tabletop campaign: players explore tiles on a map, engage in quests or battles, and collaboratively create the story. Generative AI is leveraged to adapt the world and narrative in real-time, ensuring that no two playthroughs are the same​. For example, if players decide to side with a forest tribe instead of the mountain kingdom, the AI may weave new story threads about an ancient forest spirit awakening, complete with unique dialogue and imagery generated to suit that scenario.

## Gameplay and Mechanics
Gameplay is a mix of strategic exploration and role-playing. Tile-Based Exploration: The game world is divided into a grid of tiles (overland regions, dungeon rooms, etc.), reminiscent of classic 2D RPGs. Players move their characters on this map to discover new locations, much like exploring a D&D battle map or a world map in a tactics RPG. Turn-Based Encounters: When players encounter challenges (combat with monsters, social conflicts, puzzles), the game enters a turn-based mode governed by a simplified D&D 5E rule set. Characters have stats (strength, intelligence, etc.), skills, and perhaps a class or archetype, which determine their capabilities. Actions (attacks, spellcasting, skill checks) are resolved via virtual dice rolls following D20 mechanics for success/failure outcomes. For instance, attacking a goblin might involve rolling a 20-sided die, adding modifiers, and comparing against the goblin’s armor rating – success deals damage per weapon stats. Under the hood, a rule engine will enforce these mechanics so that outcomes remain consistent and fair. 

### Adaptive Difficulty and Progression: The game’s AI Director monitors player progression and can adjust encounters or suggest side-quests accordingly (for example, scaling monster difficulty or offering hints if players are stuck). Narrative Quests: Rather than pre-scripted quest chains, the game uses modular quest templates that the AI can fill in with details (characters, items, locations) to create new stories. Victory conditions might range from defeating a certain foe, accumulating wealth, uncovering all lore in a region, or simply surviving in a changing world. The gameplay loop encourages experimentation and creativity – players are free to solve problems in multiple ways (combat, negotiation, magic, etc.), and the world’s state updates to reflect their actions. By combining deterministic rule-based systems (for combat and physics) with AI-driven narrative and content, Chronicles of Viberlyn aims to deliver both systemic depth and imaginative breadth.

## AI Systems and Generative Content
A standout feature of Chronicles of Viberlyn is its use of AI both during gameplay and in the content creation pipeline. There are two primary AI subsystems:

- AI Dungeon Master (Dynamic Narrative Engine): This is a Generative AI model (likely powered by a large language model, with fine-tuning or prompt engineering for our lore) that acts as a virtual Dungeon Master. During gameplay, it narrates events, converses as NPCs, and even improvises side quests. For example, when a player enters an eerie crypt, the AI DM might generate a descriptive paragraph about the flickering torchlight and distant echoes, or have a ghost NPC speak with a unique, context-appropriate dialog. The AI DM ensures the world feels responsive and alive, crafting content in real-time – the embodiment of a “living game” ethos where content dynamically adapts to player interactions​. We will constrain the AI with the game’s lore and rule framework so it doesn’t break consistency (e.g., the AI won’t spawn a dragon in a beginner village unless it makes narrative sense).

- Procedural Content Generators: Alongside the narrative AI, we use other generative models for assets. This includes an image generation model for concept art, location backgrounds, or item illustrations (possibly using a Stable Diffusion-based tool), and maybe a music generation AI for ambient soundtracks tailored to the current mood. The media generation pipeline (see below) handles these. Additionally, traditional game AI algorithms govern enemy behavior (pathfinding on the tile grid, basic tactics in combat) and companion NPC behavior. These are more deterministic and rule-based, ensuring that gameplay remains challenging and not entirely random. In summary, Chronicles of Viberlyn employs AI in two ways: to create content (story, art, audio) and to drive gameplay (NPC decision-making), all in service of a more immersive experience.

## Media Generation Pipeline
To manage the flow of AI-generated content, we establish a media generation pipeline. This pipeline is a sequence of tools and steps through which dynamic content (text, images, audio) is requested, created, and vetted before being presented to players. It works roughly as follows:

- Prompting Stage: The game constructs prompts for generative models based on the current context. For text, the prompt might include the location description, relevant lore, and an instruction to continue the story or describe a scene. For images, if the player discovers a new area (say, Crystal Cove), the game might assemble a prompt like “fantasy concept art of an underground crystal cave, glowing blue crystals, dim torchlight, an adventurer silhouette”. We maintain a prompt library and style guidelines to keep generation consistent with our art direction.

- Generation Stage: The prompts are fed into the respective models. We might use an LLM (local or via an API) for narrative and dialogue. For images, we could use a local Stable Diffusion model or a service to generate on-the-fly illustrations of characters or locations. These models have been pre-trained or fine-tuned on our game’s style (we will likely fine-tune the image model on a small set of concept art so that outputs are cohesive). The output from this stage is raw generated media.
Evaluation and Filtering: Not all AI outputs are immediately accepted. The pipeline includes an automatic review step – for text, this might involve sanity-checking the content for lore consistency and appropriateness (using heuristic rules or even a secondary AI model to judge if the output stays in character). For images, we ensure they are not too distorted or out-of-style. In many cases, a human developer or designer might be in the loop during development: e.g. curating the best generated character portraits to include in the next build. Over time, as the models and prompts are refined, the need for human vetting in real-time decreases, but we always allow a fail-safe (if the AI produces something off, the game can fall back to a hand-crafted description or a pre-made asset).

- Integration Stage: The final approved content is integrated into the game state. The narrative text might be displayed to the player in a dialog UI or saved into a quest log. Generated images are placed into the scene or used as illustrations in a journal entry. This pipeline runs asynchronously to avoid stalling gameplay – e.g., the game might show a “Loading new story content...” spinner for a second while the AI comes up with a response, or pre-generate content during downtime (like predict what the player might do next and have some content ready).

The pipeline approach ensures we can leverage generative AI’s creativity while maintaining quality control and performance. It also means that content creation is an ongoing process: as the game runs, it’s essentially creating parts of itself, guided by the framework we’ve specified.

## Technical Architecture
The technical architecture of Chronicles of Viberlyn balances game engine needs with AI/ML infrastructure. We outline it in a modular way:

- Game Client (Front-End): The game is built as a cross-platform 2D application (potentially using a game library or engine that supports tile maps, such as a custom engine in Python/TypeScript or an existing one like Godot). The client is responsible for rendering the world (tile grid, characters, UI), handling player input, and playing audio. It communicates with the AI services for content generation requests. If using a web stack, this could be a browser-based client using WebGL/WebGPU for graphics; if using a desktop engine, it could be packaged accordingly. The choice of engine will be informed by community preferences and the need for integration with AI libraries (for example, Python might be chosen for ease of using ML libraries, whereas Godot or Unity could be used for superior rendering and then network to Python back-end for AI).

- Game Server / Logic Layer: This layer hosts the core game logic – world state, rule enforcement, and AI Director orchestration. In a single-player or local game, this “server” runs in the same process as the client (just a separation of concerns). In a potential future multiplayer scenario, this could become an actual server coordinating multiple clients. Key components here include:
-- Rules Engine: Implements D&D-like mechanics (attack rolls, damage calculation, turn order). It could leverage an existing rules framework or be custom-coded. The engine ensures that when the AI says “the ogre swings his club at you”, the outcome is decided by the rules and character stats, not by AI whim. This keeps gameplay balanced.

-- World State Manager: Keeps track of all entities in the world (players, NPCs, monsters, items) and their states (positions on the map, health, inventory, quest progress). It applies changes as players and AI events modify the world.

-- AI Director: The component that interfaces with the generative AI models. It sends the narrative or image generation requests (calls out to the AI services, whether via API or local inference), and receives and interprets results to update the game. For example, if the AI Director requests a description for a new location, once it gets the text back, it will populate that text into the game’s data structures and perhaps create a “quest entry” object if the text indicates a quest hook.

-- Content Database/Cache: A storage (in-memory or on-disk) for game content. This includes a library of pre-defined game assets (baseline tileset graphics, sprite sheets for characters, pre-written lore backstory, etc.), as well as caches of AI-generated content that has been created during the session. Caching ensures that if the same description or image is needed again (say two players both visit the same city on separate playthroughs), the game can reuse content instead of regenerating it, for consistency and performance.
AI Services (Back-End AI Models): These are the generative AI components which might run as separate processes or external services. For instance, a local microservice running an LLM for text, and another for image generation. This separation allows these heavy processes to be managed (they might run on a GPU server, or be swapped out for different implementations). The game communicates with these services via well-defined APIs or SDKs. For example, using the OpenAI API for text (if online), or running a local instance of GPT-J or similar if offline is needed; using Stable Diffusion through an API like Automatic1111 or through a Python library for images, etc. This modularity means we can upgrade the AI models independently of the game (e.g., if a new, better open-source model becomes available, we can integrate it with minimal changes to game code).
-- Developer/Creator Tools: Though not part of the runtime per se, our architecture includes tools for developers and content creators. This includes integration with the Cursor AI coding assistant to manage the codebase and prompt it with our spec (more on that soon), as well as possibly in-game editing tools or external level editors. For instance, we might integrate Tiled (the open-source tilemap editor) for designing the overworld map and dungeon layouts, exporting those as JSON or TMX files the game can read. We also maintain supporting documents (design inspirations, reference rules, lore bibles) in a knowledge base that both developers and the AI can reference when extending the game.

- Technical Stack Considerations: The exact programming language and engine are to be chosen in Sprint 1 (Ideation & Setup), but we anticipate using a high-level language like Python or JavaScript/TypeScript for rapid development and AI library compatibility, or a game engine like Godot for its strong 2D capabilities and open-source nature. We will keep the architecture loosely coupled. For example, if using Godot (written in C++/GDScript), we might have it communicate with Python-based AI servers via HTTP or WebSockets. If using a pure Python approach (pygame or a custom renderer), everything might run in one process with threads for AI. The architecture is designed to be flexible: one could even replace the front-end with a web client or a text-based interface without changing the back-end logic, since all game rules and world updates occur in the logic layer. 

Finally, we ensure the entire project is set up as an open-source repository, encouraging community contributions. Clear module boundaries (gameplay vs AI vs assets) will allow contributors to work on different aspects (e.g., a contributor could focus on improving the rule engine or adding new monster data, while another works on prompt engineering the AI). With the specification in hand, we’re ready to implement in stages.


## 🚀 Getting Started

### Prerequisites

- Python 3.9 or higher
- pip (Python package installer)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Chronicles-of-Viberlyn.git
cd Chronicles-of-Viberlyn
```

2. Install required packages:
```bash
pip install -r requirements.txt
```

3. Run the game:
```bash
python main.py
```

## 🎯 Development Roadmap – Multi-Phase Sprint Plan

To build Chronicles of Viberlyn iteratively, we’ll follow an agile-inspired multi-phase sprint plan. Each sprint is a time-boxed effort focusing on specific deliverables and showcasing incremental capabilities of the game. This approach ensures that after each phase, we have a working product (even if minimal), and we can progressively expand its features. Below is a breakdown of each phase:

### Sprint 1: Ideation & Project Setup
- Goal: Establish the foundation for development.

#### Deliverables:
- Project Specification Finalized: Complete the GDD (essentially what you’re reading now) and ensure consensus on scope and features. This spec will be placed in the repository (e.g., as README.md or a docs/ file) to guide all development.

- Environment Setup: Set up the development environment and tools. For example, choose the primary language/engine (initially leaning towards a Python-based prototype or a Godot project). Install required frameworks (game libraries, ML libraries) and ensure that generative AI tools (like local AI model installations or API keys) are available for use.

- Version Control and Repo Initialization: Create the GitHub repository for the project and integrate it with development tools (such as Cursor for AI-assisted coding). Push the initial commit containing the project structure and this specification.

- Hello World Build: As a simple starting point, create a basic program that opens a game window and maybe renders a single tile or placeholder sprite on screen. This is just to verify our toolchain and environment are working correctly.

Showcase: By end of Sprint 1, we can demonstrate the repository structure and a minimal running application (even if it’s just a window titled “Chronicles of Viberlyn”). We will also share the detailed spec to attract early contributors interested in the vision.

### Sprint 2: Core Gameplay Systems
- Goal: Build the fundamental gameplay loop and systems without yet integrating generative AI. This is about getting the basics of the game world operational.

#### Deliverables:
- Tile-Based World & Movement: Implement a basic tile map representing a small region of Viberlyn (could be a simple grid with different colored tiles or a rudimentary drawn map). Enable player character to move around on the grid using keyboard or mouse input, adhering to movement rules (e.g., one tile at a time, blocked by impassable tiles like mountains or walls). This establishes the exploration mechanic.

- Entity System: Create a system to manage game entities (player, NPCs, objects). For now, include at least one NPC or interactive object on the map. This likely involves defining data structures or classes for characters with properties like position, stats, etc.

- Basic Interaction & UI: Allow the player to trigger a simple interaction when adjacent to an NPC or a notable tile. For example, pressing an “Action” key when next to a townsperson could bring up a text dialog (which we will initially hard-code, like “NPC: Hello traveler!”). Similarly, stepping on a certain tile could trigger a pre-defined event (e.g., a trap that reduces health). Implement a rudimentary UI overlay to display text dialogues or status (like player health, or a message log).

- Combat Prototype: Introduce a simple turn-based combat scenario to test our mechanics. For instance, if the player steps into a specific tile (say a dungeon room), initiate a battle with a dummy monster. Use a basic turn order (player then monster) and allow a couple of actions (attack which reduces hit points, maybe a defend or flee). Use dice-roll logic for hits: we can integrate a minimal D20 roll function to simulate attack rolls and outcome. The results can be printed to the screen or console (e.g., “You hit the goblin for 5 damage!” or “You missed!”). This tests our rule engine stub – we might hard-code stats for this sprint.

- Data Loading: Establish a simple data file for game content. For example, load the tile map from a JSON or CSV, or load NPC definitions from a file. This will set the stage for more complex content in later sprints and demonstrate reading external data (possibly created by tools like Tiled or simply hand-edited).

Showcase: By end of Sprint 2, we can show a very simple game: a player can walk around a map, encounter an NPC with a static dialog, and enter a basic combat with one monster. It’s essentially a minimal viable product of the core game loop (exploration -> encounter -> resolution). There won’t be any AI-generated content yet; everything is scripted or placeholder, but it proves the architecture (map, input, turn system, etc.) works.

### Sprint 3: Integrating Generative AI Content
- Goal: Infuse the game with dynamic content generation – the world starts to come alive with AI-driven narrative and media.

#### Deliverables:
- Narrative Generation Integration: Connect the game to a language model to act as the AI Dungeon Master. Start with a small scope: when the player talks to that NPC from Sprint 2, instead of a hard-coded line, have the AI generate a greeting or a clue based on context. We will feed the model a prompt that includes the NPC’s role (e.g., village elder) and a simple instruction (“greet the player and mention the local rumor”). The game will then display the AI-generated dialog. Another example: when the player enters a new tile region, use the AI to narrate the scenery (“You see a dense forest ahead, the trees whispering in an unseen breeze...”). We will likely need to fine-tune prompts and possibly limit the length of outputs. This step will prove out our AI Director pipeline for text.

- AI Content Caching: Implement a caching mechanism for any text generated. If the player triggers the same event twice, use the cached version to avoid inconsistent outputs. This also helps us start building a log of AI content for testing.

- Procedural Quest Generation (prototype): Introduce a simple system that creates a fetch quest dynamically. For example, upon talking to the village elder, the AI could generate a request (“Please gather 3 medicinal herbs from the Whispering Woods.”). The game then spawns 3 herb items in the forest area of the map. This mixes AI generation (coming up with quest text and context) with actual game logic (spawning items, tracking quest completion). It’s an early test of the AI and game logic working together.

- Image Generation Pipeline (prototype): Integrate with an image generation model for one aspect of the game. For instance, when the quest above is generated, also generate a small piece of concept art for the item (herb) or a unique icon. Or generate a location image for the forest that we can show in the UI when the player enters the forest tile. This will involve calling an external image API or local model with a prompt and then displaying the resulting image in-game (perhaps as part of the dialogue box or a journal entry). Given performance considerations, we might do this generation offline during development and package a few AI-created images to show as examples (near-real-time generation might wait until a later optimization sprint).

- Refine Combat with AI: While the combat rules remain deterministic, we can use AI for flavor. For instance, after an attack, have the AI narrate a short combat description “The goblin snarls in pain as your arrow finds its mark.” This is cosmetic but adds to immersion. Ensure this is optional so that if the AI call fails or is too slow, the game still functions with the basic “You hit for 5 damage” message.

Showcase: Sprint 3’s demo will look much richer: the player can still roam and fight as before, but now conversations are open-ended and non-repetitive, and descriptions adapt dynamically. We could conduct a live demo where a player asks an in-game character a question, and the answer is generated in real-time by the AI. We’ll emphasize how the game can create new quests or describe new sights without those being explicitly coded by a developer. This sprint turns our tech demo into a unique experience each run. (We will also carefully record these runs to analyze the AI’s outputs and improve prompts for the next sprint.)

### Sprint 4: Expanding World Content and Systems
- Goal: Grow the game world and solidify the content generation, while introducing additional gameplay systems (inventory, character progression, etc.).

#### Deliverables:
- World Expansion: Increase the map size and diversify locations. We’ll add multiple regions (e.g., a town, a forest, a dungeon, a lake). We can use the Tiled editor to create a nicer-looking tile map and import it. Along with new regions, add more NPCs and unique objects. This will test how well our AI scales with a larger context (for instance, ensuring it keeps story continuity across multiple areas).

- Lore and Database Integration: Populate a small lore database (a simple JSON or YAML file) with key facts about the world – names of famous heroes, historical events, deities, etc. Feed this information to the AI (either through prompt preambles or via a retrieval system) so that its generated narratives are grounded in consistent lore. For example, if the player finds a tome in the dungeon, the AI might use the lore database to fill in that it’s “an ancient chronicle from the Era of Splendor, detailing the fall of King Aerodon”. This gives the AI more material to work with and makes content deeper.

- Inventory and Items: Implement an inventory system for the player to collect items (keys, herbs, gold, weapons). Items can be defined in a data file. This introduces new gameplay: picking up items, using items (e.g., a healing potion to restore health), and maybe simple crafting or trading. The quest generation from Sprint 3 can now be completed (the herbs can be gathered and turned in).

- Character Progression: Add experience points and leveling or some skill improvement mechanic. After defeating monsters or completing quests, the player gains XP. Upon reaching certain thresholds, increase the player’s stats or unlock new abilities. This keeps players motivated and gives a sense of growth. It also adds another thing for the AI to comment on (e.g., the AI DM might acknowledge “You feel stronger after defeating the ogre. You’ve gained a level!”).

- Enhanced Combat & Initiative: Make combat more fully featured by introducing multiple combatants and an initiative system (turn order determined by character stats or dice roll at start). Allow multiple actions (attack, cast a spell, use item, flee). Incorporate status effects (e.g., poisoned, stunned) as a stretch goal. Essentially, flesh out the rule engine so it can handle a small party of players vs multiple enemies with proper turn sequencing. We might utilize open-source rule data here – for example, use SRD data from an API like Open5e for monsters’ stats or an open initiative tracker. This is where having looked at existing D&D rule engines can save time (we may adapt algorithms from them rather than reinventing calculations).

- Saving/Loading Game State: Implement the ability to save the game state to a file and load it back. This is important as the world is now larger and players may not finish in one sitting. Save player stats, inventory, completed quests, and world changes (like which quests are done, which NPCs have been met, etc.).

Showcase: After Sprint 4, Chronicles of Viberlyn should feel much closer to a real game: a larger world to explore, more conventional RPG elements in place (inventory, leveling), and the AI-driven narrative weaving through all of it. A possible demonstration: start in town with some backstory from an NPC, venture into the forest to gather herbs while fighting off wolves, return to town to a procedurally narrated celebration, and show the level-up screen. This phase is about depth and breadth: more content and more polished mechanics.

### Sprint 5: Creator Tools and Community Content
- Goal: Empower content creation and modding, polish the project for open-source collaboration.

#### Deliverables:
- In-Game Content Editor (Basic): Provide a simple in-game or companion-tool interface for creating or editing game content. This could be as simple as a text-based menu for now, where a developer or power-user can input new character data or modify an item’s properties. Or a small debug console to spawn entities, for testing and tweaking without coding. The idea is to move towards creator tooling, which in later development could evolve into full editors or even AI-assisted content creation (imagine asking the AI to “create a new town with a blacksmith and a quest about a lost sword” and it populates it!). For now, we lay the groundwork by making the game data-driven and easily reloadable, so creators can change a JSON file or use the console to see new content live.

- Documentation & Guides: Since we want external contributors, create supporting documentation. This includes a Contributor Guide (how to set up the dev environment, understand the code structure, and make a contribution) and technical docs for the major systems (briefly explaining modules like the rule engine, AI integration points, etc.). We also document how the generative AI is configured (prompt examples, how to update the AI models). This might be in the repository wiki or in markdown files.

- Automated Testing Harness: Set up basic automated tests, especially for the deterministic parts of the game (e.g., combat calculations, saving/loading). This will help ensure as people contribute, they don’t accidentally break core mechanics. We might use a Python testing framework or similar. Additionally, some form of CI (Continuous Integration) can be set up with GitHub Actions to run tests on pull requests.

- Refinement of AI Models and Prompts: Spend time to refine the AI outputs based on feedback from Sprint 4. Adjust prompts or fine-tune the LLM on transcripts of game sessions to reduce any incoherence. Possibly integrate a fallback for the AI (for example, if after 3 seconds no response from the AI, use a generic pre-written response, to avoid stalls). This is more of a polish task, but important for perceived quality.

- Optional – Web Demo or Release Packaging: If feasible, deploy a version of the game that people can try. For instance, if it’s web-based (maybe using Phaser or an Electron app), host it so others can experience it and provide feedback. If desktop, prepare an executable or instructions to run from source. This isn’t the final game by any means, but sharing a playable snapshot can attract interest and feedback.

Showcase: Sprint 5 focuses on the project’s community and longevity. We might not demo new gameplay features, but rather demonstrate how easily one can extend the game. For example, using the new tools, add a quick new NPC with a single JSON entry and see it in-game immediately, or show how an aspiring writer could add a new lore scroll to the game and have the AI incorporate it into its storytelling. We’ll also present our documentation and perhaps have a first external contributor PR (if community members have joined by this point). The game should now be robust enough to survive creative experimentation. 

(Beyond Sprint 5, development would continue with additional sprints as needed – adding more AI model improvements, expanding story arcs, improving graphics, etc. But these five phases establish a strong foundation and a working open-source game that others can play and build upon.)

## 🤝 Contributing

We welcome contributions to Chronicles of Viberlyn! Please feel free to submit pull requests, report bugs, or suggest features.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- [Your Name] - Lead Developer
- [Team Member 2] - [Role]
- [Team Member 3] - [Role]

## 📞 Contact

For questions or feedback about Chronicles of Viberlyn, please reach out to:
- Email: [avidor@ioteratech.com]

---

Made with ❤️ by the Chronicles of Viberlyn Team 