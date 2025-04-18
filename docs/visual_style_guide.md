# 🎨 Visual Style, Colors & Palettes Guide
## For Chronicles of Viberlyn

## 🎮 Game Aesthetic Overview
Chronicles of Viberlyn is a retro-modern fantasy RPG blending pixel-art simplicity with painterly atmospheric effects. The world is built from blocky 3D shapes (cubes, rectangles) projected as 2D, adorned with AI-generated textures. Inspirations include:
- *Hillsfar*, *Ultima VI*: Retro exploration, bold simplicity.
- *Octopath Traveler*, *Hyper Light Drifter*: Modern lighting depth, atmospheric effects.
- *Zelda: Link's Awakening Remake*: Simple shapes, high detail.

**Style Guidelines**:
- **Retro Elements**: Bold 1-2px outlines, limited palettes, pixelated textures.
- **Modern Elements**: Subtle gradients, ambient lighting (glows, flickers, mists), painterly depth.
- **Rendering**: 3D shapes (cubes, rectangles) projected as 2D using Three.js, with 256x256 PNG textures.

## 🧭 World Factions & Color Palettes

### 🟥 Evil Empire – Tyranny, Dark Magic, Control
- **Crimson – #8B0000**: Flags, flames, capes.
- **Charcoal – #333333**: Armor, stonework, towers.
- **Gold – #FFD700**: Sigils, officer trim, flags.
- **Texture Style**: Harsh geometry, cracked stone, arcane metal with sharp edges.
- **FX**: Red/orange flames flicker (24fps, 50% opacity swing, 1s cycle), pulsating charcoal shadows (1s cycle, 20% opacity).

### 🌿 Freedom Fighters – Nature, Rebellion, Earth
- **Forest Green – #228B22**: Cloaks, tree canopies, rooftops.
- **Sandstone – #F4A460**: Roads, walls, leather.
- **Silver – #C0C0C0**: Tools, weapon edges, UI text (on darker sandstone #D2691E for contrast).
- **Texture Style**: Woodgrain, mossy surfaces, natural fabrics with organic patterns.
- **FX**: Warm lantern glow (24fps, 30% brightness pulse, 1.5s cycle), firefly particles (random drift, 2s cycle, green #228B22).

### 🌀 Ancient Society – Mysticism, Lost Knowledge
- **Indigo – #4B0082**: Stones, glyphs, robes.
- **Ivory – #FFFFF0**: Marble, ancient scrolls, floors.
- **Teal – #00CED1**: Relics, mist, arcane energy.
- **Texture Style**: Elegant ruins, smooth carved surfaces with glowing runes.
- **FX**: Teal mist drifts (linear, 2s cycle, 20% opacity), pulsing glyphs (1.5s cycle, 30% brightness), magical shimmer (24fps, teal #00CED1).

## 📐 Textures & Terrain Assets
- **Base Style**: 3D cubes/rectangles, rendered in top-down or angled 2D.
- **Resolution**: 256x256 PNGs, tileable for seamless grids.
- **Outlines**: 1-2px bold dark borders (#1A1A1A) for retro clarity.
- **Shading**: Light inner gradient (center 100% brightness, edges 70%) for modern depth.
- **Overlays**: Add glows (30% opacity, faction-colored) or motion blur for relics, torches, and magical items.

## 🧱 Environmental Structure
- **Walls**:
  - Empire: Dark cracked stone (#333333) with crimson streaks (#8B0000).
  - Freedom: Warm earthy stone (#F4A460) with green moss patches (#228B22).
  - Society: Rune-inscribed marble (#FFFFF0) with indigo etchings (#4B0082).
- **Floors**: Gridded terrain with textured tiles:
  - Grass: Green (#228B22).
  - Road: Sandstone (#F4A460).
  - Water: Blue (#4682B4).
  - Brick: Darker sandstone (#D2691E).
- **Mist/Fog**: Faction-colored mist (Empire: charcoal #333333, Freedom: green #228B22, Society: teal #00CED1), 20% opacity, drifting (linear, 2s cycle).
- **Lighting**: 
  - Torches: Faction-specific glow (24fps, 50% opacity swing).
  - Relics: Teal bloom (#00CED1, 1.5s pulse).
  - Portals: Pulsating glow (faction-colored, 1s cycle).
  - Shadows: Subtle drop shadows (10% opacity, #1A1A1A).

## 🗺️ Map Styles (Multi-Level Hierarchy)

### Global Map (Viberlyn Continent)
- **Purpose**: Static parchment map showing all regions (Elderglow, Tharovant, etc.) as markers.
- **Style**: Retro hand-drawn, parchment background (#DEB887), bold 2px outlines (#1A1A1A).
- **Regions**:
  - Elderglow (Vale): Green marker (#228B22).
  - Tharovant: Sandstone marker (#F4A460).
  - Noxvale (volcano): Crimson marker (#8B0000) with fiery orange glow.
  - Harrowspire (mountains): Charcoal marker (#333333).
  - Viremoor (ruins): Indigo marker (#4B0082) with teal glow (#00CED1).
- **FX**: Glowing cyan markers (teal #00CED1) for magical sites, fiery orange spots for danger zones.
- **Details**: Add gold-accented compass rose (#FFD700, bottom-right), blue oceans (#4682B4).

### Regional Map (Elderglow Vale, 50x50 Tiles)
- **Purpose**: Main explorable map for the mini-adventure, covering Elderglow Vale.
- **Style**: Top-down retro map, 1px grid lines (#1A1A1A), bold faction borders (crimson #8B0000, green #228B22, indigo #4B0082).
- **Elements**:
  - Elderglow Village: Green roofs (#228B22), sandstone paths (#F4A460).
  - Ancient Society Ruins: Indigo stone (#4B0082), teal glow (#00CED1).
  - Evil Empire Outpost: Crimson walls (#8B0000), charcoal towers (#333333).
  - Forests: Green (#228B22).
  - Roads: Sandstone (#F4A460).
  - Rivers: Blue (#4682B4).
- **FX**: Teal mist over ruins (#00CED1, 20% opacity, 2s drift), gray fog of war (50% opacity) for unexplored tiles.

### Local Maps (20x20 Tiles: Village, Ruins, Outpost)
- **Purpose**: Detailed maps for specific locations within Elderglow Vale.
- **Style**: Top-down retro map, 1px grid lines (#1A1A1A), bold 2px outlines (#1A1A1A).
- **Elements**:
  - **Village**: Green-roofed houses (#228B22), sandstone paths (#F4A460), silver-decorated shop (#C0C0C0), grass terrain (#228B22).
  - **Ruins**: Indigo pillars (#4B0082), ivory floors (#FFFFF0), teal-glowing relic (#00CED1), cracked stone terrain (#D2691E).
  - **Outpost**: Crimson walls (#8B0000), charcoal towers (#333333), gold flags (#FFD700), dark stone terrain (#333333).
- **FX**:
  - Village: Green-flamed torches (#228B22, 24fps flicker), firefly particles (2s drift).
  - Ruins: Teal mist (#00CED1, 20% opacity, 2s drift), relic glow (1.5s pulse).
  - Outpost: Red-flamed torches (#8B0000, 24fps flicker), pulsating shadows (1s cycle).

## 🖥️ UI + HUD Design
- **Mini-Map**: Crimson frame (#8B0000), charcoal fill (#333333), gold indicator (#FFD700, 1s pulse animation).
- **Stats Bar**: Sandstone panel (#F4A460), silver labels (#C0C0C0 on darker sandstone #D2691E for contrast), subtle fade-in (1s).
- **Inventory Slots**: Teal glow border (#00CED1, 1.5s pulse), ivory fill (#FFFFF0), slight hover glow (30% brightness increase).
- **Dialogue Box**: Indigo frame (#4B0082), ivory background (#FFFFF0, parchment texture), text fade-in (0.5s).
- **Story Journal**: Sandstone background (#F4A460), indigo tabs (#4B0082), ivory text area (#FFFFF0).

### 🔤 Typography & Fonts
- **Font Families**:
  - **Primary Fantasy Font**: "Enchanted Land" for headings, quest titles, and important UI elements
    - Styling: Bold, slightly elongated, runic serifs
    - Sizes: 24pt (main titles), 18pt (section headers), 16pt (important UI elements)
    - Colors: Gold (#FFD700) for Empire elements, Silver (#C0C0C0) for Freedom elements, Teal (#00CED1) for Ancient Society elements
  
  - **Secondary Fantasy Font**: "Arcane Script" for magical text, ancient writings, and runes
    - Styling: Thin, flowing letterforms with subtle glow effects
    - Sizes: 16pt (readable magical script), 12pt (background runes/glyphs)
    - Colors: Faction-specific with 20% opacity glow (indigo #4B0082 with teal #00CED1 glow for ancient texts)
  
  - **Body Text Font**: Pixel-based "Viberlyn Common" for dialogue, descriptions, and general UI
    - Styling: Clear, readable pixel font with subtle fantasy elements
    - Sizes: 14pt (main UI), 12pt (descriptions), 10pt (small details)
    - Colors: Charcoal (#333333) on ivory (#FFFFF0) for maximum readability

- **Text Effects**:
  - **Gradient Text**: Gold-to-crimson gradient (#FFD700 to #8B0000) for Empire-related headers
  - **Letterpress Effect**: 1px inner shadow on Freedom Fighter headers for an earthy, handcrafted feel
  - **Glowing Text**: Subtle teal glow (20% opacity) on Ancient Society text elements

- **Accessibility**:
  - Ensure contrast ratios meet WCAG 4.5:1 (e.g., silver on darker sandstone, charcoal on ivory)
  - Provide option to increase text size by 20% for all UI elements
  - Include dyslexia-friendly font alternative that maintains fantasy aesthetic

## 👾 Creatures
- **Evil Empire Scout**: 64x64 sprite, crimson cape (#8B0000), charcoal armor (#333333), gold helm (#FFD700), sharp angular design, subtle shadow pulse (1s cycle).
- **Freedom Fighter Rebel**: 64x64 sprite, green cloak (#228B22), sandstone tunic (#F4A460), silver dagger (#C0C0C0), rugged organic design, faint firefly particles (2s drift).
- **Ancient Society Guardian**: 64x64 sprite, indigo robe (#4B0082), ivory staff (#FFFFF0), teal aura (#00CED1, 1s glow pulse), elegant flowing design.

## 🔮 Lighting & FX Rules
- **Torches**:
  - Left: Red flame (#8B0000, 24fps, 50% opacity swing, 1s cycle) for Empire.
  - Right: Green flame (#228B22, 24fps, 50% opacity swing, 1s cycle) for Freedom.
- **Glow FX**:
  - Relics: Teal (#00CED1, 1.5s pulse, 30% brightness).
  - UI Slots: Teal (#00CED1, 1.5s pulse, 20% brightness).
  - Portals: Faction-colored (1s pulse, 30% brightness).
- **Particles**:
  - Embers: Empire (#FFD700, 2s random drift).
  - Mist: Society (#00CED1, 2s linear drift, 20% opacity).
  - Motes: Freedom (#228B22, 3s random drift).
- **Zoom Loops (Animated Scenes)**: Gentle 1% zoom every 5s (15s seamless loop) for menu, intro videos, and map transitions.

### ✨ Text Animations & Interactive Elements
- **Quest Text Reveal**: Characters fade in sequentially (50ms per character) with slight vertical motion for important quest text
  - Empire Style: Crimson text (#8B0000) with gold glow (#FFD700, 30% opacity) that intensifies on completion
  - Freedom Style: Green text (#228B22) with silver shimmer effect that moves through text (left-to-right, 2s)
  - Ancient Style: Indigo text (#4B0082) with teal runes (#00CED1) that materialize behind text (0.5s fade-in)

- **Button Interactions**:
  - Hover: Scale increase (105%, 0.2s), brightness boost (15%), subtle faction-colored glow
  - Click: Quick pulse effect (scale to 95% then 105%, 0.3s total), brightness flash (30% increase, 0.1s)
  - Focus: Pulsing border (faction color, 1.5s cycle, 2px to 3px width)

- **Dialogue Animations**:
  - Character Name: Slide in from left (0.3s) with faction-colored underline that extends from left to right (0.5s)
  - Text Body: Fade in (0.5s) with slight blur-to-sharp transition
  - Options: Sequential fade-in with 0.1s delay between options, subtle scale increase on hover (105%, 0.2s)

- **Achievement/Discovery FX**:
  - Text Reveal: Gold text (#FFD700) rises from bottom, letter-by-letter with trailing particles
  - Emphasis: Important words scale up briefly (120%, 0.5s) with faction-colored glow
  - Reward Text: Pulsing brightness (20% variation, 1s cycle) with radiating ring effect (faction color)

- **Loading Text & Progress Indicators**:
  - Loading Text: "Loading..." with letters that fade in/out sequentially (0.2s per letter, continuous cycle)
  - Progress Bar: Faction-colored gradient fill with subtle particle effects along leading edge
  - Completion Flourish: Text bursts outward briefly (scale to 120%, 0.3s) then settles with glow effect (faction color)

## 📈 Scalability Notes
- **Future Worlds**: Larger maps (e.g., 100x100 for Tharovant in Sprint 6) can add new FX like rain (#4682B4, 24fps) or dynamic weather (e.g., fog density changes).
- **New Factions**: Introduce additional palettes (e.g., volcanic Noxvale: orange #FF4500, black #1C2526) while maintaining retro-modern cohesion.
- **Asset Expansion**: Generate additional textures (e.g., 100 more for 100x100 maps) using WINDSURF, ensuring tileable 256x256 PNGs.
- **Typography Extensions**: Create additional font variants for new factions while maintaining the established fantasy aesthetic.
- **Animation Patterns**: Build a library of reusable animation patterns for text effects that can be applied to new content.

## 🛠️ Implementation Notes
- **Asset Storage**:
    - Shared Assets: `C:\Synaptix-Labs\projects\Chronicles-of-Viberlyn\assets\common\{type}\` (e.g., `assets\common\textures\grass.png`).
    - Story-Specific Assets: `C:\Synaptix-Labs\projects\Chronicles-of-Viberlyn\assets\stories\{story_id}\{type}\` (e.g., `assets\stories\the_relic_of_elderglow\scene1.png`).
    - Videos: Story-specific locations, e.g., `assets\stories\{story_id}\intro.mp4`. Create directories as needed.
    - Fonts: Store in `assets\common\fonts\` with subfamilies for each faction style.
- **AI Tools**:
  - Use OpenAI (DALL·E) for static textures and creature sprites.
  - Use Sora for animated videos (intro, menu) with 24fps, 1280x720 MP4/WEBM output.
- **Performance**: 
  - Optimize textures for <5s generation, videos for <10s, ensuring <3s load time in-game.
  - Keep text animation JavaScript lightweight (<50kb) with CSS transitions where possible.
  - Use web font loading optimization (WOFF2 format, font-display: swap, preload for critical fonts).

### 📱 Responsive Considerations
- **Font Scaling**: Maintain readability across device sizes with minimum readable sizes (12pt for mobile)
- **Touch Interactions**: Increase clickable areas by 20% on touch devices (minimum 44×44px)
- **Animation Efficiency**: Simplify animations on low-power devices (reduce particle count by 50%, simplify text animations)