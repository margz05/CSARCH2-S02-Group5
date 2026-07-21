import React, { useState, useEffect } from 'react';

const eraData = {
  "1970s": {
    title: "1970s · The Arcade Cabinet",
    theme: "8-bit",
    description: "Before microprocessors became standard, early games like Pong relied entirely on discrete logic circuits (TTL) hardwired on massive boards. No CPU, no RAM—just pure hardware logic manipulating CRT electron beams.",
    games: ["Pong", "Space Invaders", "Asteroids"],
    architecture: ["Discrete TTL Logic", "Vector Displays", "No Central CPU"],
    icon: "🕹️"
  },
  "1980s": {
    title: "1980s · The 8-Bit Revolution",
    theme: "neon",
    description: "The golden age of home computing. Systems like the NES utilized the legendary MOS Technology 6502 8-bit microprocessor paired with dedicated Picture Processing Units (PPUs) to handle sprite rendering.",
    games: ["Super Mario Bros.", "Pac-Man", "Tetris"],
    architecture: ["8-bit MOS 6502 / Z80 CPUs", "Dedicated PPUs", "Cartridge ROM"],
    icon: "👾"
  },
  "1990s": {
    title: "1990s · The Polygon Era",
    theme: "wireframe",
    description: "The massive leap to 3D. The PlayStation utilized a 32-bit RISC CPU featuring a revolutionary Geometry Transformation Engine (GTE) specifically designed to calculate 3D math and polygons at lightning speed.",
    games: ["Super Mario 64", "Final Fantasy VII", "Doom"],
    architecture: ["32-bit RISC Processors", "Hardware Geometry Engines", "CD-ROM Storage"],
    icon: "🧊"
  },
  "2000s": {
    title: "2000s · Multi-Core Power",
    theme: "glossy",
    description: "Clock speeds hit a thermal wall, forcing architectures to go wide. Consoles like the PS3 introduced the complex Cell Broadband Engine with a main core and specialized synergistic processing elements.",
    games: ["Halo 2", "Half-Life 2", "World of Warcraft"],
    architecture: ["Multi-core CPUs (Cell, Xenon)", "Programmable Pixel Shaders", "Unified Memory (X360)"],
    icon: "💿"
  },
  "2010s": {
    title: "2010s · The APU Era",
    theme: "flat",
    description: "Consoles abandoned custom exotic architectures and unified around x86-64 AMD APUs (Accelerated Processing Units), placing massive multi-core CPUs and powerful GPUs on the exact same silicon die.",
    games: ["Minecraft", "The Witcher 3", "Fortnite"],
    architecture: ["x86-64 AMD APUs", "8GB+ GDDR5 Shared RAM", "Digital Distribution"],
    icon: "📱"
  },
  "2020s": {
    title: "2020s · SSDs & Ray Tracing",
    theme: "cyber",
    description: "Modern architecture focuses on eliminating bottlenecks. Custom NVMe SSDs allow instant asset streaming, while dedicated hardware cores calculate real-time ray tracing for hyper-realistic lighting.",
    games: ["Cyberpunk 2077", "Elden Ring", "Alan Wake 2"],
    architecture: ["Custom NVMe PCIe 4.0 SSDs", "Hardware Ray Tracing Cores", "Machine Learning Upscaling"],
    icon: "🚀"
  }
};

const eras = Object.keys(eraData);

export default function Timeline() {
  const [activeEra, setActiveEra] = useState(eras[0]);
  const currentIndex = eras.indexOf(activeEra);
  const progress = (currentIndex / (eras.length - 1)) * 100;

  const goToPreviousEra = () => {
    setActiveEra((current) => {
      const index = eras.indexOf(current);
      return index > 0 ? eras[index - 1] : current;
    });
  };

  const goToNextEra = () => {
    setActiveEra((current) => {
      const index = eras.indexOf(current);
      return index < eras.length - 1 ? eras[index + 1] : current;
    });
  };

  useEffect(() => {
    const archives = document.querySelectorAll('.mdx-archive');
    archives.forEach(el => el.classList.remove('active-archive'));
    const activeArchive = document.getElementById(`archive-${activeEra}`);
    if (activeArchive) {
      activeArchive.classList.add('active-archive');
    }
  }, [activeEra]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goToNextEra();
      } else if (e.key === 'ArrowLeft') {
        goToPreviousEra();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentData = eraData[activeEra];

  return (
    <section className="timeline-interactive-wrapper" id="timeline">
      
      <div className="timeline-header">
        <p className="section-kicker">Interactive Architecture Exhibit</p>
        <div className="timeline-title-row">
          <div>
            <h2>Select A Generation</h2>
            <p className="timeline-intro">Move through each generation to reveal the hardware shift that defined the era.</p>
          </div>
          <div className="timeline-controls" aria-label="Timeline navigation controls">
            <button type="button" className="era-nav" onClick={goToPreviousEra} disabled={currentIndex === 0}>← Prev</button>
            <button type="button" className="era-nav" onClick={goToNextEra} disabled={currentIndex === eras.length - 1}>Next →</button>
          </div>
        </div>

        <div className="timeline-meta">
          <span className="era-badge"><strong>{currentData.icon}</strong> {activeEra}</span>
          <span className="era-badge">Theme: <strong>{currentData.theme}</strong></span>
          <span className="era-badge">Stage {currentIndex + 1} / {eras.length}</span>
          <span className="era-badge">Use ← / → keys</span>
        </div>
        
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="carousel-track">
        {eras.map((eraKey) => (
          <button
            key={eraKey}
            type="button"
            className={`carousel-node ${activeEra === eraKey ? "active-node" : ""}`}
            onClick={() => setActiveEra(eraKey)}
            aria-label={`Show ${eraKey}`}
          >
            <div className="node-icon">{eraData[eraKey].icon}</div>
            <span className="node-year">{eraKey}</span>
          </button>
        ))}
      </div>

      <div className={`era-display-panel theme-${currentData.theme}`}>
        <div className="panel-header">
          <h2>{currentData.title}</h2>
          <p className="panel-description">{currentData.description}</p>
        </div>

        <div className="panel-grid">
          <div className="architecture-box">
            <h3><span className="blink-cursor">_</span> System Architecture</h3>
            <ul>
              {currentData.architecture.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="games-box">
            <h3><span className="blink-cursor">_</span> Defining Games</h3>
            <ul>
              {currentData.games.map((game, i) => (
                <li key={i}>{game}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}