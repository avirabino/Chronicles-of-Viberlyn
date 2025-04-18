** Chronicles of Viberlyn - Guide - V.1.0 **
The following guide presents the Chronicles of Viberly RPG games and it's rules. It is written
for an AI dangeon master to generate new and exciting adventures. The common instructions are
common for ALL stories and are not to be changed - they provide the lore of the world and 
the general instructions that each story needs to follow. Each section is a file in the game 
directory and its location vs. the root. The attached example is the example
On how to build the story the DM that builds new adventures need to follow this example to create new stories

# Table of contents 
1. Chronicles of Viberlyn - World Lore (MD file)
2. Common player classes (JSON FILE)
3. Common player skills (JSON FILE)
4. Common object types (JSON FILE)
5. Common loot table (JSON FILE)
6. Story example: The relic of elderglow
6.1 Assets
6.2 Chapters 
6.2.1 intro 
6.2.2 chapter-1 
6.2.3 epilog 
6.3 README (MD file) 
6.4 story_config (Json file) 
6.5 story_rules (Json file) 

# Content structure
Chronicles-of-Viberlyn
Chronicles-of-Viberlyn | common-assets | audio  // AI generated audio, music, and voice files 
Chronicles-of-Viberlyn | common-assets | images // AI generated images
Chronicles-of-Viberlyn | common-assets | videos // AI generated vids
Chronicles-of-Viberlyn | common-assets | textures // AI generated textures
Chronicles-of-Viberlyn | common-assets | common_player_classes.json // Player classes
Chronicles-of-Viberlyn | common-assets | common_skills.json // Player skills
Chronicles-of-Viberlyn | common-assets | common_object_types.json // Objects
Chronicles-of-Viberlyn | common-assets | common_loot_tables.json // Loot tables
Chronicles-of-Viberlyn | common-assets | lore.md // Game lore

## Example structure
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | assets | audio
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | assets | images
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | assets | videos
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | assets | textures
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | chapters // Story chapters
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | chapters | intro | intro_script.md // Story chapters
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | chapters | chapter-1 | chapter_1_quests.md
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | chapters | chapter-1 | characters.JSON
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | chapters | chapter-1 | creatures.JSON
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | chapters | chapter-1 | dialogue_fragments.JSON
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | chapters | chapter-1 | items.JSON
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | chapters | chapter-1 | map.JSON
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | chapters | chapter-1 | objects.JSON
...
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | chapters | epilog | epilogue_script.md // Story chapters
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | README.MD
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | story_config.JSON
Chronicles-of-Viberlyn | stories | the-relic-of-elderglow | story_rules.JSON

# Chronicles of Viberlyn - World Lore v0.1

This document provides a high-level overview of the world of Viberlyn, serving as a foundational guide for story creation and AI Dungeon Master context.

## The World: Viberlyn

Viberlyn is a continent steeped in ancient magic, recovering from past conflicts, and currently simmering with political tension between major powers and fledgling resistance movements. Technology is generally medieval, but pockets of advanced arcane knowledge exist, often closely guarded. Remnants of older, forgotten civilizations and powerful magical artifacts are scattered across the land, often becoming focal points for adventure and conflict.

## Major Factions

These are the dominant forces shaping the continent's current events:

1.  **The Crimson Empire (Evil Empire)**
    * **Ideology:** Tyranny, Order through Control, Dark Magic. Views power as absolute and seeks dominion over Viberlyn. Ruthless expansion and suppression of dissent are common tactics.
    * **Aesthetics (Ref: Visual Style Guide):** Crimson (#8B0000), Charcoal (#333333), Gold (#FFD700). Harsh geometry, cracked stone, arcane metals, sharp edges. Fire and shadow visual effects.
    * **Base of Power:** Likely controls major established cities and fortresses, possibly centered in a region like "Tharovant" (mentioned as a future map location).

2.  **The Verdant Concord (Freedom Fighters)**
    * **Ideology:** Nature, Rebellion, Freedom from Tyranny, Protection of the Wild. Operates often from hidden encampments or within sympathetic communities. Values individual liberty and harmony with nature.
    * **Aesthetics (Ref: Visual Style Guide):** Forest Green (#228B22), Earth Brown (#8B4513), Sky Blue (#87CEEB). Natural materials, rounded shapes, woven textures. Earth and nature-based visual effects (vines, motes).
    * **Base of Power:** Forests, remote villages, mountainous regions. Gains support from those oppressed by the Empire.

3.  **The Cerulean Society (Society of Arcane)**
    * **Ideology:** Knowledge is Power, Neutrality (often), Preservation of Arcane Arts. A secretive or reclusive group focused on studying and safeguarding magic. Their motives can be ambiguous – sometimes aiding others, sometimes pursuing their own arcane goals.
    * **Aesthetics (Ref: Visual Style Guide):** Deep Blue (#00008B), Silver (#C0C0C0), Cyan (#00CED1). Intricate patterns, smooth surfaces, crystalline structures. Water and energy-based visual effects (mist, sparks).
    * **Base of Power:** Hidden academies, ancient libraries, locations strong in magical energy.

4.  **Other Potential Factions/Regions (Hints for future):**
    * **Noxvale:** Mentioned briefly in style guide notes with a volcanic theme (Orange #FF4500, Black #1C2526). Could be a harsh, dangerous region or another distinct power.

## History & Current State (Brief Outline)

* **Ancient Past:** Age of powerful magic and legendary creatures. Ruins and artifacts remain.
* **The Great Wars:** Past conflicts that shaped the current political landscape (details TBD).
* **Rise of the Empire:** The Crimson Empire consolidated power over recent centuries, leading to the current tensions.
* **Present Day:** An uneasy peace exists, frequently broken by border skirmishes, Empire crackdowns, Concord raids, and the discovery of potent magical artifacts (like the "Relic of Elderglow") that threaten to destabilize regions. Travel can be dangerous, and local communities often fend for themselves or pledge loyalty to one of the major factions.

## Magic

* Magic is real but may require specific training, innate talent, or magical items to wield effectively.
* Different schools or types of magic likely exist (e.g., elemental, arcane, divine, nature-based), potentially aligning with different factions.
* The Society likely holds the deepest understanding, while the Empire weaponizes darker forms, and the Concord utilizes nature-based magic.

## Inhabitants

* Assume humans are common.
* Other fantasy races (elves, dwarves, orcs, etc.) may exist – TBD based on story needs. Their relationship with the major factions should be considered.

## Purpose for AI DM

This lore provides the AI DM with:
* Context for faction interactions and NPC allegiances.
* Flavor for descriptions and world events.
* Background for generating rumors or plot hooks.
* Understanding of the general "feel" and major conflicts of the world.

--- 
* JSON file of player classes : This file can be enhanced for each story adding more classes
{
  "warrior": {
    "class_id": "warrior",
    "name": "Warrior",
    "description": "A hardy combatant, skilled with martial weapons and armor.",
    "base_attributes": {
      "strength": 15, "dexterity": 12, "constitution": 14, "intelligence": 8, "wisdom": 10, "charisma": 11
    },
    "starting_skills": ["athletics", "intimidation"],
    "starting_equipment": [ 
      {"item_id": "rusty_sword", "quantity": 1},
      {"item_id": "wooden_shield", "quantity": 1},
      {"item_id": "chain_shirt", "quantity": 1},
      {"item_id": "minor_healing_potion", "quantity": 1}
    ],
    "sprite_id": "hero_default_idle" 
  },
  "ranger": {
    "class_id": "ranger",
    "name": "Ranger",
    "description": "A skilled tracker and archer, at home in the wilderness.",
    "base_attributes": {
      "strength": 12, "dexterity": 15, "constitution": 13, "intelligence": 10, "wisdom": 14, "charisma": 8
    },
    "starting_skills": ["stealth", "survival", "perception"],
    "starting_equipment": [
      {"item_id": "simple_shortbow", "quantity": 1},
      {"item_id": "arrows_bundle", "quantity": 2}, 
      {"item_id": "crude_dagger", "quantity": 1},
      {"item_id": "leather_armor", "quantity": 1},
      {"item_id": "minor_healing_potion", "quantity": 1}
    ],
    "sprite_id": "hero_default_idle"
  },
  "scholar": {
    "class_id": "scholar",
    "name": "Scholar",
    "description": "Knowledgeable in lore and arcane arts, relying on intellect more than brawn.",
    "base_attributes": {
      "strength": 8, "dexterity": 11, "constitution": 10, "intelligence": 15, "wisdom": 13, "charisma": 14
    },
    "starting_skills": ["investigation", "lore", "persuasion"],
    "starting_equipment": [
      {"item_id": "quarterstaff", "quantity": 1},
      {"item_id": "simple_robes", "quantity": 1},
      {"item_id": "scroll_light", "quantity": 2}, 
      {"item_id": "book_local_history", "quantity": 1} 
    ],
    "sprite_id": "hero_default_idle"
  }
}

---
JSON file of player skills : This file can be enhanced for each story adding more classes
{
  "athletics": {
    "skill_id": "athletics",
    "name": "Athletics",
    "description": "Represents physical prowess for climbing, jumping, swimming, and brute force.",
    "attribute": "strength"
  },
  "stealth": {
    "skill_id": "stealth",
    "name": "Stealth",
    "description": "Represents the ability to move unseen and unheard.",
    "attribute": "dexterity"
  },
  "lockpicking": {
    "skill_id": "lockpicking",
    "name": "Lockpicking",
    "description": "Represents manual dexterity for opening locks (requires Thieves' Tools).",
    "attribute": "dexterity"
  },
  "persuasion": {
    "skill_id": "persuasion",
    "name": "Persuasion",
    "description": "Represents the ability to influence others through reasoned argument, charm, or negotiation.",
    "attribute": "charisma"
  },
  "intimidation": {
    "skill_id": "intimidation",
    "name": "Intimidation",
    "description": "Represents the ability to influence others through threats or forceful presence.",
    "attribute": "charisma"
  },
  "investigation": {
    "skill_id": "investigation",
    "name": "Investigation",
    "description": "Represents the ability to deduce information from clues, search areas thoroughly, and analyze details.",
    "attribute": "intelligence"
  },
  "lore": {
    "skill_id": "lore",
    "name": "Lore",
    "description": "Represents knowledge about history, legends, arcane matters, and the world.",
    "attribute": "intelligence"
  },
  "perception": {
    "skill_id": "perception",
    "name": "Perception",
    "description": "Represents awareness of surroundings, noticing hidden details or dangers.",
    "attribute": "wisdom"
  },
  "survival": {
    "skill_id": "survival",
    "name": "Survival",
    "description": "Represents the ability to follow tracks, navigate wilderness, and endure natural hazards.",
    "attribute": "wisdom"
  },
  "mining": {
    "skill_id": "mining",
    "name": "Mining",
    "description": "Represents skill in extracting ores or clearing rock (requires Pickaxe).",
    "attribute": "strength" // Or Constitution? Depends on system.
  }
}
---
JSON file of common object types : This file can be enhanced for each story adding more classes
{
  "tree_pine_01": {
    "name": "Pine Tree",
    "description": "A common pine tree found in temperate forests.",
    "sprite_ids": {
        "base": "object_tree_pine_base_01",
        "canopy": "object_tree_pine_canopy_01"
    },
    "blocks_movement": true,
    "blocks_vision": false,
    "interactable": false,
    "tags": ["wood", "tree", "obstacle"]
  },
  "rock_medium_01": {
    "name": "Medium Rock",
    "description": "A sizeable rock, difficult to move.",
    "sprite_ids": {"default": "object_rock_medium_01"},
    "blocks_movement": true,
    "blocks_vision": true,
    "interactable": false,
    "tags": ["stone", "rock", "obstacle"]
  },
  "door_wood_simple_01": {
    "name": "Simple Wooden Door",
    "description": "A standard wooden door.",
    "sprite_ids": {
        "closed": "object_door_wood_simple_closed_01",
        "open": "object_door_wood_simple_open_01" 
    },
    "blocks_movement": true,
    "blocks_vision": true, 
    "interactable": true,
    "default_state": "closed",
    "allowed_interactions": ["open", "close", "examine", "lockpick"],
    "tags": ["wood", "door", "interactable"]
  },
  "chest_wood_basic_01": {
    "name": "Basic Wooden Chest",
    "description": "A simple wooden chest, potentially holding items.",
    "sprite_ids": {
        "closed": "object_chest_wood_basic_closed_01",
        "open": "object_chest_wood_basic_open_01" 
    },
    "blocks_movement": false, 
    "blocks_vision": false,
    "interactable": true,
    "default_state": "closed",
    "allowed_interactions": ["open", "close", "examine", "lockpick"], 
    "tags": ["wood", "chest", "container", "interactable", "lootable"]
  },
  "sign_post_01": {
    "name": "Signpost",
    "description": "A wooden signpost.",
    "sprite_ids": {"default": "object_sign_post_01"},
    "blocks_movement": false,
    "blocks_vision": false,
    "interactable": true,
    "allowed_interactions": ["read", "examine"],
    "tags": ["wood", "sign", "interactable"]
  },
  "well_stone_standard": {
    "name": "Stone Well",
    "description": "A circular well made of stone.",
    "sprite_ids": {"default": "object_well_01"}, 
    "blocks_movement": true, 
    "blocks_vision": false,
    "interactable": true,
    "allowed_interactions": ["examine", "use"], 
    "tags": ["stone", "well", "interactable", "water_source?"]
  }
}
---
* JSON file of loot table : This file can be enhanced for each story
{
  "vermin_loot_none": {
    "description": "Typically drops nothing.",
    "rolls": 0,
    "currency_min": 0,
    "currency_max": 0,
    "items": []
  },
  "vermin_loot_basic": {
    "description": "Minor scraps occasionally dropped by vermin.",
    "rolls": 1,
    "currency_min": 0,
    "currency_max": 2,
    "currency_type": "copper",
    "items": [
      { "item_id": "rat_pelt_scrap", "quantity_min": 1, "quantity_max": 1, "chance": 15 },
      { "item_id": null, "quantity_min": 0, "quantity_max": 0, "chance": 85 }
    ]
  },
  "goblinoid_loot_poor": {
    "description": "Poor quality items and small change carried by goblin scouts.",
    "rolls": 1,
    "currency_min": 1,
    "currency_max": 5,
    "currency_type": "copper",
    "items": [
      { "item_id": "crude_dagger", "quantity_min": 1, "quantity_max": 1, "chance": 20 },
      { "item_id": "goblin_ear_trophy", "quantity_min": 1, "quantity_max": 1, "chance": 10 },
      { "item_id": "moldy_bread", "quantity_min": 1, "quantity_max": 1, "chance": 30 },
      { "item_id": null, "quantity_min": 0, "quantity_max": 0, "chance": 40 }
    ]
  },
  "goblinoid_loot_standard": {
    "description": "Slightly better gear and coins carried by tougher goblins.",
    "rolls": "1-2",
    "currency_min": 5,
    "currency_max": 15,
    "currency_type": "copper",
    "items": [
      { "item_id": "rusty_sword", "quantity_min": 1, "quantity_max": 1, "chance": 15 },
      { "item_id": "wooden_shield", "quantity_min": 1, "quantity_max": 1, "chance": 10 },
      { "item_id": "crude_dagger", "quantity_min": 1, "quantity_max": 1, "chance": 10 },
      { "item_id": "minor_healing_potion", "quantity_min": 1, "quantity_max": 1, "chance": 5 },
      { "item_id": "goblin_leader_badge", "quantity_min": 1, "quantity_max": 1, "chance": 5 },
      { "item_id": null, "quantity_min": 0, "quantity_max": 0, "chance": 55 }
    ]
  },
  "monster_loot_spider": {
    "description": "Spider silk and venom sacs.",
    "rolls": 1,
    "currency_min": 0,
    "currency_max": 0,
    "items": [
      { "item_id": "spider_silk_strand", "quantity_min": 1, "quantity_max": 3, "chance": 40 },
      { "item_id": "spider_venom_sac_small", "quantity_min": 1, "quantity_max": 1, "chance": 25 },
      { "item_id": null, "quantity_min": 0, "quantity_max": 0, "chance": 35 }
    ]
  },
  "mine_chest_loot_01": {
    "description": "Contents of a basic chest found in the mine area.",
    "rolls": "2-3",
    "currency_min": 10,
    "currency_max": 30,
    "currency_type": "copper",
    "items": [
        { "item_id": "minor_healing_potion", "quantity_min": 1, "quantity_max": 1, "chance": 50 },
        { "item_id": "arrows_bundle", "quantity_min": 1, "quantity_max": 1, "chance": 30 },
        { "item_id": "scroll_light", "quantity_min": 1, "quantity_max": 1, "chance": 20 },
        { "item_id": "miner_pickaxe", "quantity_min": 1, "quantity_max": 1, "chance": 10 },
        { "item_id": "torch", "quantity_min": 2, "quantity_max": 5, "chance": 40 }
    ]
  },
  "wood_scraps_loot": {
      "description": "Basic wood scraps from destroying a wooden object.",
      "rolls": 1,
      "currency_min": 0,
      "currency_max": 0,
      "items": [
          { "item_id": "wood_scraps", "quantity_min": 2, "quantity_max": 6, "chance": 100 }
      ]
  },
  "boss_relic_miner_loot": {
    "description": "Loot dropped by the Possessed Miner boss.",
    "rolls": "2-3",
    "currency_min": 50,
    "currency_max": 100,
    "currency_type": "copper",
    "guaranteed_items": [ 
        { "item_id": "relic_fragment", "quantity": 1 } 
    ],
    "items": [
      { "item_id": "pickaxe_plus1", "quantity_min": 1, "quantity_max": 1, "chance": 25 }, 
      { "item_id": "miner_pickaxe", "quantity_min": 1, "quantity_max": 1, "chance": 75 }, 
      { "item_id": "minor_healing_potion", "quantity_min": 1, "quantity_max": 2, "chance": 40 },
      { "item_id": "amulet_minor_protection", "quantity_min": 1, "quantity_max": 1, "chance": 15 },
      { "item_id": "glowing_dust", "quantity_min": 1, "quantity_max": 3, "chance": 30 } 
    ]
  }
}

---
* Story README file
# Story Guide: The Relic of Elderglow

## Introduction

This document guides the integration and usage of the "The Relic of Elderglow" story assets and data files with the AI Dungeon Master (AI DM) for Chronicles of Viberlyn. It outlines the key files, their purpose, and the expected interaction flow for this specific story POC.

## Story Overview

"The Relic of Elderglow" is a low-level (L1-3) mini-adventure set in and around the village of Oakhaven. A mysterious artifact, the Elderglow Relic fragment, has been unearthed in the nearby mine, causing unease and strange occurrences. The player is tasked by the concerned Mayor Baldrin to investigate the mine, uncover the nature of the relic, and deal with the source of the disturbance (a miner possessed by the relic's influence).

## Key Data Files & AI DM Usage

The AI DM should utilize the following files within the `stories/the_relic_of_elderglow/` directory structure (passed as context by the Game Engine when relevant):

* **`story_config.json` (Optional):** Contains story-specific metadata like title, starting conditions (location, quests). The AI DM can use this for initial context.
* **`story_rules.json` (Optional):** Defines any rules unique to this story (e.g., specific effects of the relic's proximity, unique environmental conditions). The AI DM must prioritize these over global rules when applicable.
* **`chapters/intro/intro_script.json`:** Defines the sequence, text, and assets for the introductory "video". The AI DM doesn't usually interact directly with this during gameplay, but it sets the initial scene.
* **`chapters/chapter_1/map.json`:** Contains the 20x20 tile layout, collision data, and crucially, the `objects`, `item_locations`, `npc_start_positions`, and `creature_spawns` arrays.
    * **AI Usage:** Use object definitions (referenced from `common_data/common_object_types.json` or `story_object_types.json`) for descriptions, interactions, and pathfinding awareness. Use entity placements for initial world state.
* **`chapters/chapter_1/characters.json`:** Defines NPCs like Mayor Baldrin and Miner Greg, including their descriptions, base stats, roles, and initial dialogue triggers.
    * **AI Usage:** Use this data for roleplaying NPCs consistently, referencing their mood, role, and stats when generating dialogue or determining reactions.
* **`chapters/chapter_1/creatures.json`:** Defines creatures found in this chapter (Giant Rat, Possessed Miner, etc.), including stats, behavior notes, and attacks.
    * **AI Usage:** Use this data to run combat encounters, describe creature actions, and determine creature behavior based on the `behavior` notes.
* **`chapters/chapter_1/items.json`:** Defines items specific to or found within this chapter, including weapons, armor, quest items, and consumables, along with their effects.
    * **AI Usage:** Use this data to describe items, understand their function (e.g., healing potion effect, weapon damage), and potentially describe their use in narrative. Reference the `sprite_id` if describing appearance.
* **`chapters/chapter_1/quests.md` (or JSON equivalent):** Outlines the main and side quest objectives, steps, dependencies, and rewards.
    * **AI Usage:** This is critical. The AI DM must track the player's progress against the `objective` text of the *active* step(s). Use the `depends_on` field to understand prerequisites. Use `completion_criteria` and player actions to determine when a step's `status` should be updated (communicated back to the Game Engine). Use `log_update` text as a basis for updating the player's journal.
* **`chapters/chapter_1/dialogue_fragments.json`:** Provides base text snippets linked by IDs (e.g., `dialogue_mayor_intro`, `desc_well_oakhaven`).
    * **AI Usage:** Use these fragments as direct quotes *or* as inspiration/keywords when generating dynamic dialogue or descriptions, ensuring consistency with character voice and key information.
* **`chapters/chapter_1/story_object_types.json`:** Defines object types unique to this story (e.g., `mine_barrier_crude`, `oakhaven_well_story`).
    * **AI Usage:** Use these definitions (along with common types) when describing interactions with unique map objects.
* **`chapters/epilogue/epilogue_script.json`:** Defines the concluding scene. The AI DM doesn't usually interact with this directly but should understand the narrative leads towards this conclusion.

## Interaction Flow

1.  **Engine Provides Context:** The Game Engine passes the AI DM the current, relevant context (player action/query, dynamic game state, nearby entity data, active quest steps, relevant dialogue fragments/rules/lore snippets).
2.  **AI DM Processes:** The AI DM uses its System Prompt, the provided context, and its understanding of the rules/lore to:
    * Generate narrative descriptions.
    * Roleplay NPC dialogue (using fragments as a base).
    * Interpret player actions against quest objectives.
    * Make decisions (e.g., outcome of a social interaction, creature tactics).
    * Determine skill check DCs based on context and rules.
3.  **AI DM Responds:** The AI provides the requested output (dialogue, description, action outcome) back to the Game Engine.
4.  **State Updates:** If the AI DM determines a quest step is completed or an NPC's state changes significantly, it should communicate this structured update back to the Game Engine.

## Key Considerations for "The Relic of Elderglow" AI DM

* **Atmosphere:** Emphasize the growing unease in Oakhaven and the unsettling nature of the mine/relic.
* **Character Moods:** Pay attention to Mayor Baldrin's worry and Miner Greg's agitation/fear in dialogue generation.
* **Relic Influence:** The Possessed Miner boss should act unnaturally, driven by the relic. Descriptions related to the relic or its effects should feel slightly alien or disturbing.
* **Quest Guidance:** Gently guide the player through the main quest steps if they seem stuck, perhaps using NPC dialogue hints or environmental descriptions.
* **Side Quest Integration:** Recognize when the player interacts with Miner Greg appropriately to potentially trigger and advance the "Lost Pickaxe" side quest.

By using these data files within the described flow, the AI DM should be able to effectively manage and narrate the "The Relic of Elderglow" story for the player.

---
* Story configuration file
{
  "story_name": "The Relic of Elderglow",
  "story_uuid": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "version": "1.0.0-poc",
  "description": "A mini-adventure for Levels 1-3. Investigate strange happenings in the village of Oakhaven and uncover the mystery surrounding a recently unearthed artifact in the nearby mine.",
  "starting_location_id": "Oakhaven_Village_Square", 
  "starting_quests": [], 
  "initial_player_state": { 
    "starting_inventory": [        
    ]
  },
  "chapter_order": [
    "intro",
    "chapter_1",
    "epilogue"
  ]
}

---
* Story rules file
{
  "relic_effects": [
    {
      "effect_id": "eerie_hum_proximity",
      "name": "Eerie Hum",
      "trigger": {
        "type": "proximity",
        "location_tag": "mine_entrance_area",
        "distance": 5 
      },
      "effect_description": "A low, unsettling hum seems to vibrate in the air near the mine entrance, making it hard to focus.",
      "mechanics": {
        "skill_penalty": [ 
          { "skill_id": "perception", "penalty": -1 },
          { "skill_id": "investigation", "penalty": -1 }
        ]
      },
      "notes": "AI DM should incorporate this into environmental descriptions."
    },
    {
      "effect_id": "relic_fragment_unease",
      "name": "Relic Fragment Unease",
      "trigger": {
        "type": "inventory",
        "item_id": "relic_fragment" 
      },
      "effect_description": "Carrying the Elderglow Fragment weighs on your mind, projecting unsettling thoughts.",
      "mechanics": {
           "save_penalty": [ 
                { "save_type": "wisdom", "penalty": -1 },
                { "save_type": "charisma", "penalty": -1 }
           ],
           "ai_roleplay_note": "Player may seem slightly more agitated or distracted in dialogue while carrying."
      },
      "notes": "A subtle effect, mostly for narrative flavor and minor mechanical impact."
    }
  ],
  "faction_adjustments": [
      {
          "adjustment_id": "oakhaven_main_quest_rep",
          "trigger": {
              "type": "quest_completion",
              "quest_id": "mq1_elderglow_mystery"
          },
          "reputation_change": {
              "Oakhaven_Village": "+5"
          },
          "notes": "Extra reputation boost specifically tied to this story rule."
      }
  ]
}

---
* Chapters intro ("video") script

{
  "script_id": "intro_the_relic_of_elderglow",
  "scenes": [
    {
      "scene_id": "intro_scene_1",
      "image_id": "intro_scene_01",
      "narration_text": "Nestled beside the quiet Whisperwood, the village of Oakhaven had known generations of relative peace. Days turned gently, marked only by the rhythm of the seasons and the chime of the smith's hammer.",
      "narration_audio_filename": "audio_narration_intro_part_1.mp3",
      "duration_seconds": 10,
      "transition": "fade"
    },
    {
      "scene_id": "intro_scene_2",
      "image_id": "intro_scene_02",
      "narration_text": "Life revolved around the forest's edge and the old mine dug into the low hills nearby – a source of modest wealth, but lately, a source of growing unease.",
      "narration_audio_filename": "audio_narration_intro_part_2.mp3",
      "duration_seconds": 9,
      "transition": "fade"
    },
    {
      "scene_id": "intro_scene_3",
      "image_id": "intro_scene_03",
      "narration_text": "Then came the whispers. Miners returning from the deeper veins spoke not of iron or copper, but of a strange, dark shard unearthed from the living rock.",
      "narration_audio_filename": "audio_narration_intro_part_3.mp3",
      "duration_seconds": 10,
      "transition": "fade"
    },
    {
      "scene_id": "intro_scene_4",
      "image_id": "intro_scene_04",
      "narration_text": "It pulsed with a cold, green light, they said. It felt warm to the touch, yet chilled the soul. They called it the Elderglow Relic, though none knew its true name or purpose.",
      "narration_audio_filename": "audio_narration_intro_part_4.mp3",
      "duration_seconds": 12,
      "transition": "fade"
    },
    {
      "scene_id": "intro_scene_5",
      "image_id": "intro_scene_05",
      "narration_text": "Now, an unnatural quiet hangs over Oakhaven. Shadows seem deeper, and the mayor looks towards the road, hoping for aid... hoping for answers.",
      "narration_audio_filename": "audio_narration_intro_part_5.mp3",
      "duration_seconds": 11,
      "transition": "end_fade_to_black"
    }
  ]
}

---
* Chapters epilog ("video") script

{
  "script_id": "epilogue_the_relic_of_elderglow",
  "scenes": [
    {
      "scene_id": "epilogue_scene_1",
      "image_id": "image_epilogue_scene_01",
      "narration_text": "With the immediate danger averted and the unsettling Elderglow Fragment secured, a semblance of peace returned to Oakhaven. The miners spoke of strange whispers fading from the deep veins, and children's laughter once again echoed between the simple homes. Yet, the relic itself remained an enigma, a silent testament to powers best left undisturbed...",
      "narration_audio_filename": "audio_narration_epilogue_part_1.mp3",
      "duration_seconds": 15,
      "transition": "final_fade_out"
    }
  ]
}

---
* Chapters chapter-1 map
{
  "map_id": "Oakhaven_And_Surrounds_POC",
  "name": "Oakhaven Outskirts & Mine Entrance",
  "size": [
    20,
    20
  ],
  "background_music_default": "music_oakhaven_day_ambient",
  "tiles": [
    ["grass_plains_01", "grass_plains_01", "grass_plains_01", "tree_pine_canopy_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "tree_pine_canopy_01", "tree_pine_canopy_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "grass_plains_01", "tree_pine_canopy_01", "tree_pine_canopy_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "grass_plains_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "tree_pine_canopy_01", "tree_pine_canopy_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "tree_pine_canopy_01", "tree_pine_canopy_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "tree_pine_canopy_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "oakhaven_stone_foundation_01", "oakhaven_stone_foundation_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "grass_plains_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "path_dirt_01", "path_dirt_01", "grass_plains_01", "oakhaven_wood_wall_01", "oakhaven_wood_wall_01", "oakhaven_wood_wall_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "grass_plains_01", "grass_plains_01", "mine_entrance_rocky_01", "mine_entrance_rocky_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "oakhaven_wood_wall_01", "grass_plains_01", "oakhaven_wood_wall_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01"],
    ["grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "path_dirt_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "oakhaven_wood_wall_01", "oakhaven_wood_wall_01", "grass_plains_01", "oakhaven_wood_wall_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "grass_plains_01", "grass_plains_01", "path_dirt_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "oakhaven_stone_foundation_01", "oakhaven_stone_foundation_01", "oakhaven_stone_foundation_01", "oakhaven_stone_foundation_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "grass_plains_01", "path_dirt_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "tree_pine_canopy_01", "tree_pine_canopy_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "grass_plains_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "oakhaven_stone_foundation_01", "oakhaven_stone_foundation_01", "oakhaven_stone_foundation_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "tree_pine_canopy_01", "tree_pine_canopy_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "path_dirt_01", "path_dirt_01", "grass_plains_01", "oakhaven_wood_wall_01", "oakhaven_wood_wall_01", "oakhaven_wood_wall_01", "oakhaven_wood_wall_01", "oakhaven_wood_wall_01", "grass_plains_01", "grass_plains_01", "well_stone_mossy_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "tree_pine_canopy_01", "tree_pine_canopy_01", "grass_plains_01"],
    ["grass_plains_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "oakhaven_wood_wall_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "oakhaven_wood_wall_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "tree_pine_canopy_01", "tree_pine_canopy_01", "grass_plains_01"],
    ["grass_plains_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "oakhaven_stone_foundation_01", "oakhaven_stone_foundation_01", "oakhaven_stone_foundation_01", "oakhaven_stone_foundation_01", "oakhaven_stone_foundation_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01"],
    ["grass_plains_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "path_dirt_01", "grass_plains_01", "tree_pine_canopy_01", "tree_pine_canopy_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "path_dirt_01", "grass_plains_01", "tree_pine_canopy_01", "tree_pine_canopy_01", "grass_plains_01", "grass_plains_01", "path_dirt_01", "grass_plains_01", "tree_pine_canopy_01", "tree_pine_canopy_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "path_dirt_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "grass_plains_01", "tree_pine_canopy_01", "tree_pine_canopy_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "grass_plains_01", "tree_pine_canopy_01", "tree_pine_canopy_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"],
    ["grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01", "grass_plains_01"]
  ],
  "collision": [
    [true, true, true, false, false, false, false, true, true, true, true, true, true, true, false, false, true, true, true, true],
    [true, true, false, false, false, false, false, true, true, true, true, true, true, true, false, false, true, true, true, true],
    [true, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, false, false, false, false, false, false, false, true, true, true, false, false, true, true, true, true, true, true, true],
    [true, true, false, false, false, false, false, true, true, true, false, false, false, true, true, true, true, true, true, true],
    [true, true, true, false, false, true, true, true, true, true, false, true, false, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, false, false, true, false, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, false, false, false, false, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, true, true, true, true],
    [true, true, true, true, true, false, false, false, true, true, true, true, true, true, false, false, true, true, true, true],
    [true, true, true, true, false, false, false, false, false, true, true, false, true, true, true, true, true, false, false, true],
    [true, true, true, true, false, true, true, true, false, true, true, true, true, true, true, true, true, false, false, true],
    [true, true, true, true, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, true, true, true, true],
    [true, true, true, true, true, true, true, true, false, false, true, true, true, true, false, false, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
  ],
  "objects": [
    {
      "instance_id": "Oakhaven_Town_Well_Instance",
      "object_type_id": "well_stone_standard",
      "location": [11, 10],
      "name_override": "Oakhaven Town Well",
      "description_id": "desc_well_oakhaven",
      "initial_state": null
    },
    {
      "instance_id": "Mine_Sign_Instance",
      "object_type_id": "sign_post_01",
      "location": [4, 14],
      "description_id": "desc_mine_sign_text"
    },
    {
      "instance_id": "Mayor_House_Door",
      "object_type_id": "door_wood_simple_01",
      "location": [11, 9],
      "initial_state": "closed_locked",
      "lock_dc": 15
    },
    {
      "instance_id": "Miner_House_Door",
      "object_type_id": "door_wood_simple_01",
      "location": [4, 9],
      "initial_state": "closed_unlocked"
    },
    {
      "instance_id": "Abandoned_Mine_Chest",
      "object_type_id": "chest_wood_basic_01",
      "location": [2, 17],
      "initial_state": "closed_unlocked",
      "loot_table_id": "mine_chest_loot_01"
    },
    { "instance_id": "Forest_Tree_Instance_01", "object_type_id": "tree_pine_01", "location": [18, 5]},
    { "instance_id": "Forest_Tree_Instance_02", "object_type_id": "tree_pine_01", "location": [19, 6]},
    { "instance_id": "Forest_Tree_Instance_03", "object_type_id": "tree_pine_01", "location": [14, 8]},
    { "instance_id": "Forest_Tree_Instance_04", "object_type_id": "tree_pine_01", "location": [15, 8]},
    { "instance_id": "Forest_Tree_Instance_05", "object_type_id": "tree_pine_01", "location": [14, 14]},
    { "instance_id": "Forest_Tree_Instance_06", "object_type_id": "tree_pine_01", "location": [15, 14]},
    { "instance_id": "Forest_Tree_Instance_07", "object_type_id": "tree_pine_01", "location": [17, 10]},
    { "instance_id": "Forest_Tree_Instance_08", "object_type_id": "tree_pine_01", "location": [18, 11]},
    { "instance_id": "Forest_Tree_Instance_09", "object_type_id": "tree_pine_01", "location": [8, 15]},
    { "instance_id": "Forest_Tree_Instance_10", "object_type_id": "tree_pine_01", "location": [9, 15]},
    { "instance_id": "Forest_Tree_Instance_11", "object_type_id": "tree_pine_01", "location": [2, 18]},
    { "instance_id": "Forest_Tree_Instance_12", "object_type_id": "tree_pine_01", "location": [3, 18]},
    { "instance_id": "Mine_Entrance_Rock_01", "object_type_id": "rock_medium_01", "location": [3, 2]},
    { "instance_id": "Mine_Entrance_Rock_02", "object_type_id": "rock_medium_01", "location": [7, 2]},
    { "instance_id": "Mine_Entrance_Rock_03", "object_type_id": "rock_medium_01", "location": [4, 3]},
    {
      "instance_id": "Mine_Entrance_Barrier",
      "object_type_id": null,
      "name": "Crude Mine Barrier",
      "location": [4, 5],
      "sprite_id": "object_mine_barrier_wood_01",
      "description_id": "desc_mine_barrier",
      "blocks_movement": true,
      "blocks_vision": true,
      "interactable": true,
      "allowed_interactions": ["examine", "destroy"],
      "hit_points": 20,
      "tags": ["wood", "obstacle", "barrier", "story_specific"]
    }
  ],
  "entry_points": [
    {
      "id": "Oakhaven_Village_Square",
      "location": [12, 12]
    },
    {
      "id": "Mine_Entrance_Point",
      "location": [4, 6]
    },
     {
      "id": "Road_South",
      "location": [19, 12]
    }
  ],
  "item_locations": [
      { "item_id": "rusty_spade", "location": [4, 15] }
  ],
  "npc_start_positions": [
      {"character_id": "mayor_baldrin", "location": [12, 11]},
      {"character_id": "miner_greg", "location": [5, 15]}
  ],
  "creature_spawns": [
      {"creature_id": "giant_rat_01", "location": [3, 16], "quantity": 2},
      {"creature_id": "cave_bat_01", "location": [2, 18], "quantity": 3}
  ]
}

---
* Chapters chapter-1 quests (can have as many chapter as needed)

# Quest Data: The Relic of Elderglow - Chapter 1

This document outlines the quests available in Chapter 1.

---

## Quest: The Elderglow Mystery

* **Quest ID:** `mq1_elderglow_mystery`
* **Title:** The Elderglow Mystery
* **Initial Status:** Not Started
* **Initial Log Entry:** The village of Oakhaven seems uneasy after something strange was found in the nearby mine.
* **Trigger:** Dialogue with `mayor_baldrin` (ref: `dialogue_mayor_intro`).

### Steps

* **Step ID:** `mq1_1_talk_mayor`
    * `depends_on`: []
    * - [ ] (MUST) Objective: Speak with Mayor Baldrin in Oakhaven about the recent troubles.
    * *Log Update:* Mayor Baldrin is worried about a strange relic found in the mine and has asked me to investigate.

* **Step ID:** `mq1_2_talk_miner`
    * `depends_on`: [`mq1_1_talk_mayor`]
    * - [ ] (MUST) Objective: Find Miner Greg, who witnessed the relic's discovery, and learn what he knows.
    * *Log Update:* Miner Greg seemed terrified. He confirmed the relic was found deep in the mine and warned me away.

* **Step ID:** `mq1_3_investigate_mine`
    * `depends_on`: [`mq1_2_talk_miner`]
    * - [ ] (MUST) Objective: Investigate the entrance area of the old mine.
    * *Log Update:* The area around the mine entrance feels unnerving. I found a crude barrier blocking the path deeper.

* **Step ID:** `mq1_4_enter_mine`
    * `depends_on`: [`mq1_3_investigate_mine`]
    * - [ ] (MUST) Objective: Find a way past the barrier and venture deeper into the mine.
    * *Log Update:* I've cleared the barrier. The air inside the mine is cold and heavy. I hear faint sounds deeper within.

* **Step ID:** `mq1_5_confront_source`
    * `depends_on`: [`mq1_4_enter_mine`]
    * - [ ] (MUST) Objective: Confront the source of the disturbance within the mine.
    * *Log Update:* I faced a miner driven mad by the relic's power! The Elderglow Fragment must be secured.

* **Step ID:** `mq1_6_secure_relic`
    * `depends_on`: [`mq1_5_confront_source`]
    * - [ ] (MUST) Objective: Secure the Elderglow Relic fragment.
    * *Log Update:* I've secured the fragment. It pulses with a strange energy.

* **Step ID:** `mq1_7_report_mayor`
    * `depends_on`: [`mq1_6_secure_relic`]
    * - [ ] (MUST) Objective: Report your findings and the secured relic fragment to Mayor Baldrin.
    * *Log Update:* I reported back to Mayor Baldrin. He seemed relieved but also concerned about the relic's nature. Oakhaven is safer for now.

### Completion & Reward

* **Completion Criteria:** AI DM determines completion when step 'mq1_7_report_mayor' status is 'Completed'.
* **Reward:**
    * XP: 250
    * Reputation: Oakhaven Village +15
    * Currency: 20 silver
    * Items (Potential Choice):
        * 50% chance `shortsword_plus1` (x1)
        * 50% chance `pickaxe_plus1` (x1)

---

## Quest: Miner Greg's Lost Pickaxe (Side Quest)

* **Quest ID:** `sq1_lost_tools`
* **Title:** Miner Greg's Lost Pickaxe
* **Initial Status:** Not Started
* **Initial Log Entry:** Miner Greg seems to have lost something important near the mine.
* **Trigger:** Dialogue with `miner_greg` (ref: `dialogue_miner_lost_tool`).

### Steps

* **Step ID:** `sq1_1_accept_task`
    * `depends_on`: []
    * - [ ] Objective: Agree to help Miner Greg find his lost pickaxe.
    * *Log Update:* Miner Greg lost his favorite pickaxe near the mine entrance when he fled. He asked me to retrieve it.

* **Step ID:** `sq1_2_find_pickaxe`
    * `depends_on`: [`sq1_1_accept_task`]
    * - [ ] Objective: Search the area near the mine entrance for Greg's pickaxe.
    * *Log Update:* I found a sturdy-looking pickaxe near the mine entrance. This must be Greg's.

* **Step ID:** `sq1_3_return_pickaxe`
    * `depends_on`: [`sq1_2_find_pickaxe`]
    * - [ ] Objective: Return the pickaxe to Miner Greg.
    * *Log Update:* Greg was overjoyed to get his pickaxe back!

### Completion & Reward

* **Completion Criteria:** AI DM determines completion when step 'sq1_3_return_pickaxe' status is 'Completed'.
* **Reward:**
    * XP: 50
    * Reputation: Oakhaven Village +5
    * Currency: 15 copper

---

---
* Chapters chapter-1 characters

{
  "mayor_baldrin": {
    "name": "Mayor Baldrin",
    "description": "The weary-looking mayor of Oakhaven. He seems burdened by recent events.",
    "role": "Quest Giver",
    "sprite_id": "npc_mayor_baldrin_neutral",
    "stats": {
      "level": 3,
      "hp": 15,
      "attributes": {"strength": 8, "dexterity": 10, "constitution": 9, "intelligence": 12, "wisdom": 14, "charisma": 13}
    },
    "initial_state": { "mood": "Worried" },
    "dialogue_entry_id": "dialogue_mayor_intro"
  },
  "miner_greg": {
    "name": "Miner Greg",
    "description": "A stout miner, usually cheerful, but now jumpy and agitated.",
    "role": "Witness",
    "sprite_id": "npc_miner_greg_agitated",
    "stats": {
      "level": 2,
      "hp": 12,
      "attributes": {"strength": 13, "dexterity": 11, "constitution": 12, "intelligence": 9, "wisdom": 8, "charisma": 10}
    },
    "initial_state": { "mood": "Agitated" },
    "dialogue_entry_id": "dialogue_miner_intro"
  }
}

---
* Chapters chapter-1 creatures

{
  "giant_rat_01": {
    "name": "Giant Rat",
    "level": 1,
    "description": "An unusually large and aggressive rat, often found lurking in dark places like mines or cellars.",
    "sprite_id": "creature_giant_rat_idle",
    "stats": {
      "hp": 7,
      "attributes": {"strength": 7, "dexterity": 15, "constitution": 11, "intelligence": 2, "wisdom": 10, "charisma": 4},
      "armor_class": 12,
      "attack": {"name": "Bite", "damage": "1d4+2", "to_hit_bonus": "+4"}
    },
    "behavior": {
      "type": "Hostile",
      "aggro_radius": 4,
      "movement": "Skittish",
      "notes": "Attacks quickly. Might flee if heavily wounded."
    },
    "loot_table_id": "vermin_loot_basic"
  },
  "cave_bat_01": {
    "name": "Cave Bat",
    "level": 1,
    "description": "A common cave bat, easily startled and annoying in swarms.",
    "sprite_id": "creature_cave_bat_idle",
    "stats": {
      "hp": 4,
      "attributes": {"strength": 2, "dexterity": 16, "constitution": 8, "intelligence": 2, "wisdom": 12, "charisma": 4},
      "armor_class": 13,
      "attack": {"name": "Bite", "damage": "1d2+3", "to_hit_bonus": "+5"}
    },
    "behavior": {
      "type": "Hostile",
      "aggro_radius": 3,
      "movement": "Flying, Erratic",
      "notes": "High dexterity makes it hard to hit. Weak."
    },
    "loot_table_id": "vermin_loot_none"
  },
  "goblin_scout_01": {
    "name": "Goblin Scout",
    "level": 1,
    "description": "A small, sneaky goblin armed with a crude dagger. Looks for easy prey.",
    "sprite_id": "creature_goblin_scout_idle",
    "stats": {
      "hp": 9,
      "attributes": {"strength": 8, "dexterity": 14, "constitution": 10, "intelligence": 10, "wisdom": 8, "charisma": 8},
      "armor_class": 12,
      "attack": {"name": "Crude Dagger", "damage": "1d4+2", "to_hit_bonus": "+4"}
    },
    "behavior": {
      "type": "Hostile",
      "aggro_radius": 5,
      "movement": "Stealthy, Opportunistic",
      "notes": "Prefers to attack with advantage or target weaker foes. Might flee if outnumbered."
    },
    "loot_table_id": "goblinoid_loot_poor"
  },
  "giant_spider_01": {
    "name": "Giant Spider",
    "level": 2,
    "description": "A large, hairy spider that lurks in dark corners or forests, waiting to ambush prey.",
    "sprite_id": "creature_giant_spider_idle",
    "stats": {
      "hp": 18,
      "attributes": {"strength": 12, "dexterity": 16, "constitution": 12, "intelligence": 3, "wisdom": 11, "charisma": 4},
      "armor_class": 13,
      "attack": {"name": "Bite", "damage": "1d6+3", "to_hit_bonus": "+5", "effect": "Possible Poison (DC 11 Con save or take 1d6 poison damage)"}
    },
    "behavior": {
      "type": "Hostile",
      "aggro_radius": 4,
      "movement": "Web Walker, Ambush",
      "notes": "Can potentially restrain targets with webs (AI DM / Engine mechanic). Poisonous bite."
    },
    "loot_table_id": "monster_loot_spider"
  },
  "goblin_leader_01": {
    "name": "Goblin Leader",
    "level": 2,
    "description": "A tougher, meaner goblin barking orders at its underlings.",
    "sprite_id": "creature_goblin_leader_idle",
    "stats": {
      "hp": 25,
      "attributes": {"strength": 13, "dexterity": 12, "constitution": 13, "intelligence": 10, "wisdom": 10, "charisma": 9},
      "armor_class": 14,
      "attack": {"name": "Rusty Sword", "damage": "1d6+1", "to_hit_bonus": "+3"}
    },
    "behavior": {
      "type": "Hostile",
      "aggro_radius": 6,
      "movement": "Direct, Commands Allies",
      "notes": "Focuses attacks, may try to rally other goblins. Less likely to flee than scouts."
    },
    "loot_table_id": "goblinoid_loot_standard"
  },
  "possessed_miner_boss": {
    "name": "Possessed Miner",
    "level": 3,
    "description": "Once a simple miner, this figure now moves with unnatural purpose, eyes burning with an eerie green light emanating from the relic's influence.",
    "sprite_id": "creature_possessed_miner_idle",
    "stats": {
      "hp": 45,
      "attributes": {"strength": 15, "dexterity": 10, "constitution": 14, "intelligence": 6, "wisdom": 8, "charisma": 5},
      "armor_class": 12,
      "attack": {"name": "Possessed Pickaxe", "damage": "1d8+2", "to_hit_bonus": "+4", "effect": "Target glows faintly green on hit?"},
      "special_abilities": [
        {"name": "Eldritch Slam", "description": "Slams the ground, DC 12 Dex save or take 1d6 force damage and be knocked prone.", "recharge": "5-6"},
        {"name": "Relic's Resilience", "description": "Has resistance to non-magical bludgeoning damage."}
      ]
    },
    "behavior": {
      "type": "Hostile",
      "aggro_radius": 7,
      "movement": "Relentless, Unnatural",
      "notes": "Driven by the relic's power. Immune to fear or charm effects? Fights until destroyed."
    },
    "loot_table_id": "boss_relic_miner_loot"
  }
}

---
* Chapters chapter-1 dialogue fragments
{
  "dialogue_mayor_intro": [
    "Welcome, traveler. Oakhaven is usually peaceful, but these are troubled times.",
    "Thank the stars you've come. We have a serious problem down at the old mine.",
    "That relic... it glows with an unnatural light. The miners are spooked, rightly so. Can you look into this? Find out what that thing is?",
    "I need someone level-headed to investigate the mine. The whispers are driving people to panic."
  ],
  "dialogue_miner_intro": [
    "Keep away from the mine, stranger! It ain't safe!",
    "Don't go near there! That... that *thing*... it ain't right!",
    "It pulses... like it's alive! Made my hair stand on end! Found it deep in the new vein.",
    "Felt wrong just bein' near it. Dropped my pickaxe and ran! Haven't been back since."
  ],
  "dialogue_miner_lost_tool": [
    "Blast it all! In my panic, I dropped my good pickaxe near the mine entrance.",
    "Say, you look capable. If you're heading towards the mine anyway, could you keep an eye out for my pickaxe? It's got a worn handle, but it's sturdy.",
    "I'd be mighty grateful if you found my pickaxe. Can't afford a new one right now."
  ],
  "dialogue_miner_tool_returned": [
    "My pickaxe! You found it! Thank you, thank you!",
    "Ah, brilliant! I thought it was lost for good. Here, take this for your trouble.",
    "You're a lifesaver! Or at least, a livelihood-saver. Much appreciated!"
  ],
  "dialogue_mayor_report_success": [
    "You've returned! And you have the fragment? What did you discover?",
    "The danger is passed? Excellent news! Oakhaven owes you a debt.",
    "A possessed miner, you say? Disturbing... but better than whatever else that relic might have caused. Thank you for your bravery."
  ],
  "desc_well_oakhaven": [
    "The old town well. Its stone lip is worn smooth from years of use.",
    "A deep stone well, the main source of fresh water for Oakhaven village.",
    "Looking down, the water seems clear, but is that a faint, unusual vibration you feel through the stone?",
    "The well water looks fine, but you could swear you hear a low hum nearby when the wind dies down."
  ],
  "desc_mine_sign_text": [
    "The sign reads: 'Oakhaven Mine - Careful footing'. The paint is faded.",
    "A simple wooden sign marking the path to the local mine.",
    "'Oakhaven Mine', it says. Looks like it's seen better days."
  ],
  "desc_mine_barrier": [
    "A crude barrier made of hastily nailed planks blocks the mine entrance further in.",
    "Someone has erected a makeshift wooden barricade here. It looks sturdy enough to require effort to break down.",
    "The barrier seems intended to keep something *in* as much as keep people *out*."
  ],
  "generic_greeting": [
    "Hello there, traveler.",
    "Greetings.",
    "What brings you here?",
    "Need something?"
  ],
  "generic_farewell": [
    "Safe travels.",
    "Be careful out there.",
    "Good luck.",
    "Farewell."
  ],
  "generic_agreement": [
    "Yes.",
    "Alright.",
    "I understand.",
    "Okay."
  ],
  "generic_disagreement": [
    "No.",
    "I can't.",
    "That won't work.",
    "I don't think so."
  ],
  "generic_confusion": [
    "Hmm?",
    "What was that?",
    "I don't understand.",
    "Eh?"
  ]
}

---
* Chapters chapter-1 items

{
  "relic_fragment": {
    "name": "Elderglow Fragment",
    "description": "A small, warm shard pulsating with a soft, green light. It feels slightly unnerving to hold.",
    "type": "Quest Item", "rarity": "Unique", "sprite_id": "item_relic_fragment_glowing",
    "effect": "Emits faint light. May have other story-related effects."
  },
    "rat_pelt_scrap": {
    "name": "Rat Pelt Scrap",
    "description": "A small, rough piece of giant rat fur. Not very useful.",
    "type": "Junk/Material",
    "rarity": "Common",
    "sprite_id": "item_rat_pelt_scrap_01",
    "value": 1, 
    "stackable": true
  },
  "goblin_ear_trophy": {
    "name": "Goblin Ear",
    "description": "A pointed ear, crudely severed. Some might collect these as proof of a kill.",
    "type": "Junk/Trophy",
    "rarity": "Common",
    "sprite_id": "item_goblin_ear_01",
    "value": 2,
    "stackable": true
  },
  "moldy_bread": {
    "name": "Moldy Bread",
    "description": "A hard, stale chunk of bread covered in unpleasant green fuzz.",
    "type": "Junk", 
    "rarity": "Common",
    "sprite_id": "item_bread_moldy_01",
    "value": 0,
    "stackable": true
  },
  "spider_silk_strand": {
    "name": "Spider Silk Strand",
    "description": "A strand of surprisingly strong and sticky silk from a giant spider.",
    "type": "Material",
    "rarity": "Common",
    "sprite_id": "item_spider_silk_01",
    "value": 5,
    "stackable": true
  },
  "spider_venom_sac_small": {
    "name": "Small Venom Sac",
    "description": "A small sac containing potent venom from a giant spider. Handle with care.",
    "type": "Material",
    "rarity": "Uncommon",
    "sprite_id": "item_venom_sac_small_01",
    "value": 15,
    "stackable": true,
    "notes": "Could potentially be used in crafting or applied to weapons."
  },
  "glowing_dust": {
    "name": "Glowing Dust",
    "description": "A pinch of dust that seems to faintly glow with an eerie green light. Likely residue from the relic's influence.",
    "type": "Material/Quest?",
    "rarity": "Uncommon",
    "sprite_id": "item_glowing_dust_01",
    "value": 10,
    "stackable": true,
    "notes": "Might be useful for specific story interactions or crafting."
  },
  "wood_scraps": {
    "name": "Wood Scraps",
    "description": "A handful of splintered wood.",
    "type": "Material/Junk",
    "rarity": "Common",
    "sprite_id": "item_wood_scraps_01",
    "value": 1,
    "stackable": true
  },
  "torch": {
    "name": "Torch",
    "description": "A wooden stick wrapped with cloth, soaked in pitch or oil. Provides light when lit.",
    "type": "Tool/Consumable",
    "rarity": "Common",
    "sprite_id": "item_torch_unlit_01", 
    "value": 2,
    "stackable": true,
    "effect": "Can be lit (requires flint & steel or fire source) to provide light in a radius for a limited time (e.g., 1 hour). Consumed on use.",
    "usage": "Action to light/extinguish?"
  },
  "book_local_history": {
    "name": "Book of Oakhaven History",
    "description": "A simple book detailing the founding and notable events of Oakhaven village.",
    "type": "Gear/Readable",
    "rarity": "Common",
    "sprite_id": "item_book_simple_01", 
    "value": 10,
    "effect": "Readable item. May provide lore context or clues relevant to certain skill checks (Lore).",
    "usage": "Action to read"
  },
  "rusty_spade": {
    "name": "Rusty Spade", "description": "An old spade, left near the mine entrance. Still functional, if a bit worn.",
    "type": "Tool", "rarity": "Common", "sprite_id": "item_spade_01",
    "effect": "Can be used for digging in appropriate locations. Can be used as an improvised weapon (1d4 damage)."
  },
  "thieves_tools": {
    "name": "Thieves' Tools", "description": "A small kit containing lock picks and other tools used for disarming traps and opening locks.",
    "type": "Tool", "rarity": "Uncommon", "sprite_id": "item_thieves_tools_01", 
    "effect": "Allows attempts to pick locks or disarm traps (requires skill check)."
  },

  "minor_healing_potion": {
    "name": "Minor Healing Potion", "description": "A common potion that restores a small amount of health. Swirls with faint red energy.",
    "type": "Potion", "rarity": "Common", "sprite_id": "item_potion_healing_minor_01",
    "effect": "Restores 2d4+2 hit points when consumed.", "usage": "Action"
  },
  "scroll_light": {
    "name": "Scroll of Light", "description": "A rolled piece of parchment inscribed with magical runes. Reading it aloud creates light.",
    "type": "Scroll", "rarity": "Common", "sprite_id": "item_scroll_rolled_01",
    "effect": "Casts the 'Light' cantrip on an object when read aloud. One use.", "usage": "Action"
  },
  "arrows_bundle": { 
      "name": "Arrows (Bundle of 10)", "description": "A bundle of simple wooden arrows for use with a bow.",
      "type": "Ammunition", "rarity": "Common", "sprite_id": "item_arrows_bundle_01",
      "effect": "Used as ammunition for bows. Quantity: 10.", "stackable": true
  },

  "crude_dagger": {
    "name": "Crude Dagger", "description": "A poorly made dagger, likely of goblin origin. Sharp enough to be dangerous.",
    "type": "Weapon", "rarity": "Common", "sprite_id": "item_dagger_crude_01",
    "weapon_stats": { "damage": "1d4", "type": "Piercing", "properties": ["Finesse", "Light", "Thrown (range 20/60)"]}
  },
  "rusty_sword": {
    "name": "Rusty Sword", "description": "A shortsword showing signs of rust and neglect, common among goblinoid warriors.",
    "type": "Weapon", "rarity": "Common", "sprite_id": "item_sword_rusty_01",
    "weapon_stats": { "damage": "1d6", "type": "Piercing", "properties": ["Finesse", "Light"]}
  },
  "miner_pickaxe": {
    "name": "Miner's Pickaxe", "description": "A heavy tool designed for breaking rock. Can serve as a weapon.",
    "type": "Tool/Weapon", "rarity": "Common", "sprite_id": "item_pickaxe_miner_01",
    "effect": "Used for mining checks.",
    "weapon_stats": { "damage": "1d6", "type": "Piercing", "properties": ["Heavy?", "Two-Handed?"] }
  },
   "simple_shortbow": {
    "name": "Simple Shortbow", "description": "A basic shortbow crafted from wood, suitable for hunting or combat.",
    "type": "Weapon", "rarity": "Common", "sprite_id": "item_shortbow_simple_01",
    "weapon_stats": { "damage": "1d6", "type": "Piercing", "properties": ["Ammunition (range 80/320)", "Two-Handed"]}
  },
   "mace": { 
    "name": "Mace", "description": "A simple mace with a flanged head, useful for crushing armor.",
    "type": "Weapon", "rarity": "Common", "sprite_id": "item_mace_simple_01",
    "weapon_stats": { "damage": "1d6", "type": "Bludgeoning", "properties": []}
  },
  "quarterstaff": { 
    "name": "Quarterstaff", "description": "A sturdy staff of wood, often used by travelers or monks.",
    "type": "Weapon", "rarity": "Common", "sprite_id": "item_quarterstaff_01",
    "weapon_stats": { "damage": "1d6", "type": "Bludgeoning", "properties": ["Versatile (1d8)"] } // Can be used 1 or 2 handed
  },

  "simple_robes": { 
      "name": "Simple Robes", "description": "Basic cloth robes offering minimal protection.",
      "type": "Armor", "rarity": "Common", "sprite_id": "item_robes_simple_01",
      "armor_stats": { "base_ac": 10, "add_dex_bonus": true, "max_dex_bonus": null, "stealth_disadvantage": false }
  },
  "leather_armor": { 
      "name": "Leather Armor", "description": "Armor made from stiffened leather.",
      "type": "Armor", "rarity": "Common", "sprite_id": "item_armor_leather_basic_01",
      "armor_stats": { "base_ac": 11, "add_dex_bonus": true, "max_dex_bonus": null, "stealth_disadvantage": false } // Light armor
  },
  "chain_shirt": { 
      "name": "Chain Shirt", "description": "A shirt made of interlocking metal rings.",
      "type": "Armor", "rarity": "Uncommon", "sprite_id": "item_armor_chain_shirt_01",
      "armor_stats": { "base_ac": 13, "add_dex_bonus": true, "max_dex_bonus": 2, "stealth_disadvantage": false } // Medium armor
  },
  "wooden_shield": { 
      "name": "Wooden Shield", "description": "A simple round shield made of wood.",
      "type": "Armor", "rarity": "Common", "sprite_id": "item_shield_wood_round_01",
      "armor_stats": { "ac_bonus": "+2", "type": "Shield" }
  },
   "basic_helmet": { 
      "name": "Basic Helmet", "description": "A simple metal cap offering basic head protection.",
      "type": "Armor", "rarity": "Common", "sprite_id": "item_helmet_basic_open_01",
      "armor_stats": { "ac_bonus": "+0", "type": "Helmet", "notes": "May protect vs critical hits depending on rules." } // Often doesn't add AC directly
  },

  "amulet_minor_protection": {
    "name": "Amulet of Minor Protection", "description": "A simple amulet that radiates a faint protective aura.",
    "type": "Wondrous Item", "rarity": "Uncommon", "sprite_id": "item_amulet_protection_minor_01",
    "effect": "Grants a +1 bonus to Armor Class while worn.", "usage": "Requires Attunement?"
  },
  "holy_symbol_wood": {
    "name": "Wooden Holy Symbol", "description": "A simple symbol carved from wood, used as a focus for divine magic.",
    "type": "Holy Symbol", "rarity": "Common", "sprite_id": "item_holy_symbol_wood_01",
    "effect": "Can be used as a spellcasting focus for Clerics/Paladins.", "usage": "Held or worn"
  },

  "pickaxe_plus1": {
      "name": "Miner's Pickaxe +1", "description": "A well-balanced Miner's Pickaxe that hums faintly with magic, striking harder than it should.",
      "type": "Weapon", "rarity": "Uncommon", "sprite_id": "item_pickaxe_miner_plus1", 
      "effect": "+1 bonus to attack and damage rolls made with this magic weapon.",
      "weapon_stats": { "damage": "1d6+1", "type": "Piercing", "properties": ["Magic"], "attack_bonus": "+1" }
  },
  "shortsword_plus1": {
      "name": "Shortsword +1", "description": "This shortsword has a faint magical sheen. It feels light and strikes true.",
      "type": "Weapon", "rarity": "Uncommon", "sprite_id": "item_sword_short_plus1",
      "effect": "+1 bonus to attack and damage rolls made with this magic weapon.",
      "weapon_stats": { "damage": "1d6+1", "type": "Piercing", "properties": ["Finesse", "Light", "Magic"], "attack_bonus": "+1"}
  }
}

---
* Chapters chapter-1 Objects
{
  "mine_barrier_crude": {
    "name": "Crude Mine Barrier",
    "description_id": "desc_mine_barrier",
    "sprite_id": "object_mine_barrier_wood_01",
    "blocks_movement": true,
    "blocks_vision": true,
    "interactable": true,
    "allowed_interactions": [
      "examine",
      "destroy"
    ],
    "hit_points": 20,
    "destroy_result": {
        "loot_table_id": "wood_scraps_loot",
        "remove_object": true
    },
    "tags": [
      "wood",
      "obstacle",
      "barrier",
      "story_specific",
      "breakable"
    ]
  },
  "oakhaven_well_story": {
    "name": "Oakhaven Town Well",
    "description_id": "desc_well_oakhaven",
    "sprite_id": "object_well_01",
    "blocks_movement": true,
    "blocks_vision": false,
    "interactable": true,
    "allowed_interactions": [
      "examine",
      "use",
      "investigate_relic_influence"
    ],
    "tags": [
      "stone",
      "well",
      "interactable",
      "water_source?",
      "story_specific"
    ],
    "story_notes": "The well seems deeper than usual, and a faint humming might be heard nearby when the relic is active." // Notes for AI DM
  }
}