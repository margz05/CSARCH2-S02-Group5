import React, { useState } from 'react';

export default function StorageRace() {
  const [hddWidth, setHddWidth] = useState(0);
  const [ssdWidth, setSsdWidth] = useState(0);
  const [isRacing, setIsRacing] = useState(false);

  const startRace = () => {
    if (isRacing) return;
    setIsRacing(true);
    setHddWidth(0);
    setSsdWidth(0);

    setTimeout(() => setSsdWidth(100), 100);

    let hddProgress = 0;
    const interval = setInterval(() => {
      hddProgress += Math.random() * 10;
      if (hddProgress >= 100) {
        hddProgress = 100;
        clearInterval(interval);
        setIsRacing(false);
      }
      setHddWidth(hddProgress);
    }, 200);
  };

  return (
    <div className="storage-race-shell">
      <div className="storage-race-panel">
        <p className="mini-label">Streaming benchmark</p>
        <h3>Architecture Bottleneck: Storage I/O Race</h3>
        <p style={{ color: '#c6cadd', marginBottom: '1.5rem', fontSize: '1.15rem' }}>Launch a 4K texture request and compare the crawl of a mechanical drive against a direct-to-VRAM SSD pipeline.</p>

        <div className="race-track">
          <div className="race-row">
            <div className="race-row-head">
              <span>2010s: 5400 RPM Mechanical HDD</span>
              <span>{Math.floor(hddWidth)}%</span>
            </div>
            <div className="race-bar">
              <div className="race-bar-fill hdd" style={{ width: `${hddWidth}%` }} />
            </div>
          </div>

          <div className="race-row">
            <div className="race-row-head">
              <span>2020s: Gen 4 NVMe SSD</span>
              <span>{Math.floor(ssdWidth)}%</span>
            </div>
            <div className="race-bar">
              <div className="race-bar-fill ssd" style={{ width: `${ssdWidth}%` }} />
            </div>
          </div>
        </div>

        <div className="race-status">
          <div className="race-status-text">
            {ssdWidth === 100 ? 'NVMe wins immediately. The bottleneck moved out of the storage layer.' : 'Ready to start the asset stream.'}
          </div>
          <div className="race-controls">
            <button 
              type="button"
              onClick={startRace} 
              disabled={isRacing}
              className="action-button primary"
            >
              {isRacing ? '[ FETCHING ASSETS... ]' : '[ INITIALIZE I/O REQUEST ]'}
            </button>
          </div>
        </div>
      </div>

      <div className="storage-race-panel">
        <p className="mini-label">Why it matters</p>
        <h3>Modern storage removes waiting from the experience.</h3>
        <p style={{ color: '#9ba3bf', fontSize: '1.1rem' }}>What used to feel like loading screens now becomes streaming, decompression, and instant world building. The interface mirrors that shift with direct feedback and a visible winner.</p>
      </div>
    </div>
  );
}