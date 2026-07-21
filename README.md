# CSARCH2 - 3rd Term 2025-2026
# From Pixels to Polygons: A Silicon Quest Through Gaming

---
title: "The Evolution of Video Game Console Architecture (1970s - 2020s)"
date: "2026-07-07"
---

# Incremental Readme — Development Journal

## 🚀 Things Done & Milestones (Development Progress)
* **6 Decades of Content Integration:** Expanded the documentation by integrating 6 decades of history (1970s to 2020s). Successfully separated this massive research text into modular `.mdx` files and dynamically injected them into the main page using React state hooks.
* **Architected the UI:** Replaced the static grid with a fully interactive, horizontally scrolling React carousel (`Timeline.jsx`) featuring an animated progress bar and keyboard navigation.
* **Unified References:** Consolidated reference lists across a comprehensive 60-year technological timeline.
* **Website Deployment:** Configured GitHub continuous deployment (CD) and successfully deployed the live exhibit using Vercel.

## 🎨 Creative Development & Interactivity
* **Immersive Retro UI:** To capture the nostalgia of these classic eras, the group implemented a retro game theme layout. Audited and cleaned the CSS to visually "stitch" the React components and Astro MDX components together into a seamless arcade terminal interface complete with CRT scanlines and custom crosshair cursors.
* **Interactive Educational Widgets:** Built custom React widgets directly into the Markdown to allow users to explore hardware limitations:
    * An 8-bit `SpriteEditor` to demonstrate VRAM memory consumption in the 1980s.
    * A `StorageRace` drag-race simulation comparing 2010s mechanical HDD speeds vs. 2020s NVMe SSD I/O pipelines.

## 💡 "Aha!" Moments & Challenges
* **The Ultimate Zero-Code Flex:** Analyzing the 1970s architecture was highly revealing. The realization that engineers built *Pong* entirely out of hardwired Transistor-Transistor Logic (TTL) gates without a single line of written software or a central processor was recognized as an incredible feat of digital engineering. 
* **Lineage of the Modern GPU:** Tracking how the CPU/GPU split used in modern computer engineering was born out of sheer survival during the 8-bit era. Observing how the NES offloaded rendering tasks to a custom Picture Processing Unit (PPU) to manage with just 2 KB of RAM highlighted the historic roots of hardware optimization.
* **The Architecture Bottleneck Illusion:** The jump from CDs (700 MB) to DVDs (4.7 GB) was not merely a data storage upgrade; it actively unlocked open-world streaming physics engines and realistic audio processing by removing the need for aggressive file compression hacks.
* **Storage as the New RAM:** A major takeaway regarding the 2020s era was that custom NVMe SSD architectures do more than reduce loading screens. By establishing direct-to-GPU memory pathways, modern solid-state storage essentially acts as an ultra-fast virtual RAM extension.
* **Software Architecture Realization:** We realized why it is industry standard to keep data separated. Initially, it felt redundant to have an `eraData` object in React *and* separate `.mdx` files. We learned that React handles the "Fast UI" (quick state changes) while Astro/MDX handles the "Heavy Content," keeping the site lightning fast.
* **Challenge (Deployment):** Our automated Vercel build failed initially with an Exit Code 1. We learned this was due to strict dependency resolution in the cloud environment, which we fixed by updating our build command to use `--legacy-peer-deps`.

## 🧠 Things Learned (Decade by Decade)
* **1970s:** Games relied on fixed physical circuit layouts; altering a game required redesigning or replacing the actual printed circuit boards.
* **1980s:** Severe memory constraints forced the implementation of reusable tile maps and independent sprites to bypass full-screen framebuffer costs.
* **1990s:** The migration to 3D shifted the hardware strain to coordinate mathematics, requiring specialized geometry and coprocessor rendering hardware.
* **2000s:** System architecture matured from CPU-dominated calculation pipelines toward dedicated graphics processors, broadband networking, and DVD-scale storage.
* **2010s:** Mobile system-on-chips scaled to handle full-scale game engines, while graphics programming transitioned toward physically based rendering (PBR).
* **2020s:** Modern performance bottlenecks moved from pure compute power to I/O delivery speeds, addressed by ultra-fast NVMe storage, dedicated hardware ray tracing, and AI-driven asset generation.

## 📝 To-Be-Done for Final Submission
- [ ] Final proofreading of all MDX essays.
- [ ] Add more and improve interactive widgets.
- [ ] Fix layout and readability of the information.
- [ ] Apply any future comments from the submission review.
- [ ] Add more possible information on the decades if required.

---

## Project Proposal & Exhibit Design

### Group 5
* **Doctora, Justin S.**
* **Iringan, Jamie Reign A.**
* **Jarilla, Roman Jedrich E.**
* **Ramos, Margaret Patrice M.**
* **Tiongco, Kyan Thomas T.**

**Section:** S02  
**Category Alignment:** Historical Computing. This topic traces the chronological history of video game hardware and architectural evolution, perfectly aligning with the historical computing focus assigned to Section S02.
**GitHub Repository:** [https://github.com/margz05/CSARCH2-S02-Group5](https://github.com/margz05/CSARCH2-S02-Group5)

### Group Topic Theme
**Evolution of Video Games**

---

## Theme Overview
The theme explores video games as an essential chapter of computing history. While many historical discussions focus primarily on popular titles or iconic game franchises, the underlying technology often receives less attention. Video games changed fundamentally because computer systems changed. 

The exhibit will examine major shifts from arcade systems to modern platforms, connecting them directly to advances in computer architecture. It will also highlight how technical limitations shaped design decisions made by developers. Looking at games through the lens of hardware and system design provides a clearer, more technical view of how computing evolved over several decades.

---

## Concept Overview
The theme explores video games as part of computing history. While many historical discussions focus primarily on popular titles or iconic game franchises, the underlying technology often receives less attention. Video games changed because computer systems changed. 

The exhibit will examine major shifts from early arcade systems to modern platforms and connect them to advances in computer architecture. It will also highlight how technical limitations shaped decisions made by developers. Looking at games through hardware and system design provides a clearer view of how computing evolved over several decades.


---

## Project Specifications & Tech Stack

### Proposed Interactive Element
The exhibit will feature a highly detailed interactive element to maximize engagement and educational value.

**Core Feature: Interactive Historical Timeline**
An interactive timeline will display and explore the major eras in video game history.

**Chronological Eras & Technological Milestones:**
* **1970s** — *Arcade Machines & Coin/Token-Based Games:* Highlights include *Pong*, early logic circuits, and discrete component hardware.
* **1980s** — *Home-Based Consoles:* The rise of Nintendo and the NES, focusing on 8-bit game graphics, tile maps, and sprite limitations.
* **1990s** — *16-Bit & Early 3D Consoles:* The emergence of Sega Genesis, PlayStation, and Nintendo 64, pushing early-stage 3D polygon rendering and CD-ROM storage.
* **2000s** — *Online Gaming & Sixth Generation:* The era of the PlayStation 2, GameCube, and Xbox, introducing widespread internet connectivity, DVD media, and robust 3D physics engines.
* **2010s** — *Mobile, Indie, & Streaming:* The explosion of smartphone gaming, independent studios, cloud streaming, and esports platforms.
* **2020s** — *Next-Gen & Modern Frontiers:* Virtual Reality (VR), AI-assisted game development, ray tracing, and ultra-high-speed SSD architectures.

**Dynamic Node Content:**
When a visitor clicks on a specific era, the layout dynamically updates to display:
* **Era Description:** A concise technical and historical overview of the period.
* **Popular Games:** Key titles that defined or pushed the limits of the hardware during the period.
* **Popular Gaming Devices:** Iconic hardware, consoles, or arcade cabinets.
* **Key Improvements:** Major architectural advancements (e.g., transition from bits to polygons, dedicated sound chips, memory management).

> *Example Case Study:* Selecting **1990s** will explain and display how the architectural shift in the PlayStation and Nintendo 64 pushed a revolutionary transition from 2D sprites to 3D polygons, a paradigm shift that extended well into the 2000s.

### UI & Layout Responsiveness
* **Mobile-Responsive Design:**
* The layout, specifically the interactive timeline and dynamic content sections, will be designed to scale gracefully to mobile devices. It will likely switch from a horizontal timeline on desktop to a vertical scrolling timeline on mobile screens to ensure a seamless user experience.*

---

## Tentative Style Guide Snapshot
*Proposed Virtual Exhibit Design Layout*

* **Aesthetic Theme:** Retro arcade style. This aesthetic is universally recognized and instantly evokes gaming history, drawing inspiration from classics like *Galaga* and *Pac-Man*.
* **Color Palette:** A dark, immersive background contrasted with vibrant, popping neon accent colors to cleanly replicate the atmosphere of a classic neon arcade.
* **Typography & UI Elements:** * Pixel-style fonts for major headings and decorative text elements.
    * Card-based layouts to compartmentalize information into manageable technical summaries.
* **Narrative Framework:** Framed as a "quest" or "journey," guiding users through an adventure where they acquire knowledge about the evolution of video games from their primitive roots to modern technological marvels.