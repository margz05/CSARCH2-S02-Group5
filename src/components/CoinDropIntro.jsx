import React, { useState, useEffect } from 'react';
import styles from './CoinDropIntro.module.css';

export default function CoinDropIntro({ onBootComplete }) {
  const [hasBooted, setHasBooted] = useState(true);
  const [isEntering, setIsEntering] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [bootState, setBootState] = useState('dropping'); // 'dropping' | 'typing' | 'loading' | 'fading'
  const [typedText, setTypedText] = useState('');
  const fullText = "⚡ STARTING GAME... INITIALIZING PIPELINE... ⚡";

  useEffect(() => {
    const visited = sessionStorage.getItem('arcade_token_inserted');
    if (!visited) {
      setHasBooted(false);
      const timer = setTimeout(() => setIsEntering(false), 1200);
      return () => clearTimeout(timer);
    } else {
      setHasBooted(true);
      if (onBootComplete) onBootComplete();
    }
  }, [onBootComplete]);

  useEffect(() => {
    if (bootState === 'typing') {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setBootState('loading'), 300);
        }
      }, 35);
      return () => clearInterval(interval);
    }
  }, [bootState]);

  useEffect(() => {
    if (bootState === 'loading') {
      const timer = setTimeout(() => {
        setBootState('fading');
        setTimeout(() => {
          sessionStorage.setItem('arcade_token_inserted', 'true');
          setHasBooted(true);
          if (onBootComplete) onBootComplete();
        }, 700);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [bootState]);

  const playSound = (type) => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'drop') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(520, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      } else if (type === 'boot') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(100, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.5);
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.5);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      }
    } catch (e) {}
  };

  const handleDragStart = (e) => {
    if (bootState !== 'dropping' || isEntering) return;
    setIsDragging(true);
  };

  const handleDrag = (e) => {
    if (!isDragging || bootState !== 'dropping') return;
    if (e.clientX !== 0 && e.clientY !== 0) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setDragPos({
        x: e.clientX - centerX,
        y: e.clientY - centerY,
      });
    }
  };

  const handleDragEnd = (e) => {
    if (!isDragging || bootState !== 'dropping') return;
    setIsDragging(false);

    const slotElement = document.getElementById('standalone-coin-slot');
    if (slotElement) {
      const rect = slotElement.getBoundingClientRect();
      const dropX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
      const dropY = e.clientY || (e.changedTouches && e.changedTouches[0].clientY);

      if (
        dropX >= rect.left - 60 &&
        dropX <= rect.right + 60 &&
        dropY >= rect.top - 60 &&
        dropY <= rect.bottom + 60
      ) {
        triggerBootSequence();
        return;
      }
    }
    setDragPos({ x: 0, y: 0 });
  };

  const triggerBootSequence = () => {
    setIsDragging(false);
    setBootState('typing');
    playSound('drop');

    setTimeout(() => {
      playSound('boot');
    }, 350);
  };

  if (hasBooted) return null;

  return (
    <div 
      className={`
        ${styles.blackoutOverlay} 
        ${isEntering ? styles.crtPowerOn : ''}
        ${bootState === 'typing' || bootState === 'loading' ? styles.screenShake : ''}
        ${bootState === 'fading' ? styles.fadeOutOverlay : ''}
      `}
      onMouseMove={handleDrag}
      onMouseUp={handleDragEnd}
      onTouchMove={(e) => handleDrag(e.touches[0])}
      onTouchEnd={handleDragEnd}
    >
      {bootState === 'dropping' && (
        <div className={`${styles.isolatedStage} ${isEntering ? styles.stageEntranceDrop : ''}`}>
          <div className={styles.promptHeader}>
            <p className={styles.promptMain}>DRAG TOKEN TO COIN SLOT</p>
          </div>

          <div
            className={styles.arcadeToken}
            draggable
            onDragStart={handleDragStart}
            onTouchStart={handleDragStart}
            style={{
              transform: `translate(${dragPos.x}px, ${dragPos.y}px)`,
            }}
          >
            <span className={styles.tokenSymbol}>TOKEN</span>
          </div>

          <div className={styles.coinSlotWrapper} id="standalone-coin-slot">
            <div className={styles.slotOpening}>
              <div className={styles.slotGlow} />
            </div>
            <span className={styles.slotText}>COIN SLOT</span>
          </div>
        </div>
      )}

      {(bootState === 'typing' || bootState === 'loading' || bootState === 'fading') && (
        <div className={styles.terminalBootScreen}>
          <h1 className={styles.terminalText}>
            {typedText}
            {bootState === 'typing' && <span className={styles.cursor}>_</span>}
          </h1>

          {(bootState === 'loading' || bootState === 'fading') && (
            <div className={styles.loadingBarContainer}>
              <div className={styles.loadingBarFill} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}