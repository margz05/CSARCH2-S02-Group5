import React, { useState } from 'react';

const createEmptyPixels = () => Array(64).fill(false);

const createRandomPixels = () => Array.from({ length: 64 }, () => Math.random() > 0.72);

export default function SpriteEditor() {
  const [pixels, setPixels] = useState(createEmptyPixels());

  const togglePixel = (index) => {
    const newPixels = [...pixels];
    newPixels[index] = !newPixels[index];
    setPixels(newPixels);
  };

  const clearPixels = () => setPixels(createEmptyPixels());
  const randomizePixels = () => setPixels(createRandomPixels());

  const activePixels = pixels.filter(Boolean).length;
  const bytesUsed = Math.ceil(activePixels / 8);

  return (
    <div className="sprite-editor-shell">
      <div className="sprite-editor-panel">
        <p className="mini-label">Pixel workshop</p>
        <h3>8x8 VRAM Sprite Editor</h3>
        <div className="sprite-grid" role="grid" aria-label="Sprite editor grid">
          {pixels.map((isOn, i) => (
            <button 
              key={i} 
              type="button"
              onClick={() => togglePixel(i)}
              className={`sprite-cell ${isOn ? 'on' : ''}`}
              aria-pressed={isOn}
              aria-label={`Toggle pixel ${i + 1}`}
            />
          ))}
        </div>
        <div className="sprite-toolbar">
          <button type="button" className="action-button primary" onClick={randomizePixels}>[ RANDOMIZE ]</button>
          <button type="button" className="action-button" onClick={clearPixels}>[ CLEAR VRAM ]</button>
        </div>
      </div>

      <div className="sprite-output">
        <p className="mini-label">Memory output</p>
        <h3>Binary dump</h3>
        <p style={{ fontSize: '1rem', color: '#9ba3bf', marginBottom: '1rem' }}>Every lit pixel becomes a memory bit. The console translates your drawing into the exact data the cartridge would store.</p>

        <div className="sprite-binary">
          {pixels.map(p => p ? '1' : '0').join('')}
        </div>

        <div className="sprite-stats">
          <span className="sprite-stat"><strong>{activePixels}</strong> pixels lit</span>
          <span className="sprite-stat"><strong>{bytesUsed}</strong> bytes used</span>
        </div>

        <div className="sprite-preview" aria-hidden="true">
          {pixels.map((isOn, i) => (
            <div key={i} className={`sprite-preview-pixel ${isOn ? 'on' : ''}`} />
          ))}
        </div>
      </div>
    </div>
  );
}