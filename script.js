const eraData = 
{
  "1970s": 
  {
    title: "1970s · Arcade Machines & Coin-Op Games",
    description:
      "Classic, mostly coin operated cabinets. Often called the golden era, these machines used early logic circuits and had limited memory to create simple games. ",
    games: 
    ["Pong", "Space Invaders", "Asteroids"],
    devices: 
    ["Atari arcade cabinets", "Coin/token arcade machines", "Discrete component systems"],
    improvements: 
    ["Early logic circuits", "Dedicated game hardware", "Simple real-time input/output"],
    
  },
  "1980s": 
  {
    title: "1980s · Home Consoles & 8-Bit Graphics",
    description:
      "Consoles like the NES used 8-bit processors, tile maps, sprites, and strict memory limits to produce recognizable game worlds. It shaped an entire generation of players and developers, and spawned iconic titles that still are recognized today.",
    games: 
    ["Super Mario Bros.", "The Legend of Zelda", "Pac-Man ports"],
    devices: 
    ["Nintendo Entertainment System", "Sega Master System", "Atari 2600"],
    improvements: 
    ["8-bit CPUs", "Sprite-based rendering", "Cartridge storage", "Dedicated sound chips"],
    
  },
  "1990s": 
  {
    title: "1990s · 16-Bit Systems & Early 3D Polygons",
    description:
      "This era ushered the world of 2D sprites toward 3D worlds. PlayStation and Nintendo 64 hardware helped make polygon rendering and CD-ROM storage central to game design.",
    games: 
    ["Super Mario 64", "Final Fantasy VII", "Sonic the Hedgehog", "Tekken"],
    devices:
    ["Sega Genesis", "Sony PlayStation", "Nintendo 64", "Super Nintendo"],
    improvements: 
    ["16-bit graphics", "Early 3D acceleration", "CD-ROM storage", "Texture mapping"],
    
  },
  "2000s": 
  {
    title: "2000s · Online Gaming & Sixth Generation Consoles",
    description:
      "An overall upgrade in hardware capabilities made more powerful CPUs and GPUs available. These improvements enabled lareger 3D spaces, advanced physics systems, DVD media, and online multiplayer experiences.",
    games: 
    ["Halo 2", "Grand Theft Auto III", "The Sims", "World of Warcraft"],
    devices: 
    ["PlayStation 2", "Nintendo GameCube", "Original Xbox", "Gaming PCs"],
    improvements: 
    ["DVD media", "Broadband multiplayer", "3D physics engines", "Larger memory budgets"],
    
  },
  "2010s": 
  {
    title: "2010s · Mobile, Indie, Streaming & Esports",
    description:
      "Smartphones, digital stores, engines, and streaming platforms widened game creation and game access. Indie teams could ship globally without traditional console publishing gates.",
    games: 
    ["Minecraft", "Fortnite", "Among Us", "Stardew Valley"],
    devices: 
    ["Smartphones", "Nintendo Switch", "PlayStation 4", "Xbox One", "Cloud platforms"],
    improvements: 
    ["Mobile SoCs", "Digital distribution", "Game engines", "Streaming and esports infrastructure"],
    
  },
  "2020s": 
  {
    title: "2020s · Next-Gen Frontiers",
    description:
      "Modern systems emphasize fast loading, realistic lighting, high refresh rates, VR, and AI-assisted workflows. Architecture now shapes not only game performance but also production itself.",
    games: 
    ["Cyberpunk 2077", "Half-Life: Alyx", "Baldur's Gate 3", "Alan Wake 2"],
    devices: 
    ["PlayStation 5", "Xbox Series X/S", "VR headsets", "Ray-tracing GPUs"],
    improvements: 
    ["Ray tracing", "Ultra-fast SSDs", "VR systems", "AI-assisted development", "Advanced GPU pipelines"],
    
  }
};

const nodes = document.querySelectorAll(".era");
const eraTitle = document.querySelector("#title");
const eraDescription = document.querySelector("#era-description");
const eraGames = document.querySelector("#games");
const eraDevices = document.querySelector("#devices");
const eraImprovements = document.querySelector("#improvements");


function renderList(target, items) 
{
  target.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function selectEra(era)
 {
  const data = eraData[era];

  eraTitle.textContent = data.title;
  eraDescription.textContent = data.description;
  renderList(eraGames, data.games);
  renderList(eraDevices, data.devices);
  renderList(eraImprovements, data.improvements);

  nodes.forEach((node) => {
    const isActive = node.dataset.era === era;
    node.classList.toggle("active", isActive);
    node.setAttribute("aria-selected", String(isActive));
  });
}

nodes.forEach((node) => {
  node.addEventListener("click", () => selectEra(node.dataset.era));
});

selectEra("1970s");
