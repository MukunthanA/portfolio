import React, { useState, useRef, useEffect } from 'react';
import preloaderVideo from '../assets/preloader.mp4';

export default function Preloader({ onFinish }) {
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  const handleComplete = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      onFinish();
    }, 650);
  };

  useEffect(() => {
    // Safety fallback: if video fails to play or event is blocked, complete after 5 seconds
    const fallbackTimer = setTimeout(() => {
      handleComplete();
    }, 5500);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <div className={`preloader-overlay ${isFading ? 'preloader-fade-out' : ''}`}>
      <div className="preloader-video-wrapper">
        <video
          ref={videoRef}
          src={preloaderVideo}
          autoPlay
          muted
          playsInline
          onEnded={handleComplete}
          onError={handleComplete}
          className="preloader-video"
        />
      </div>

      <button 
        className="preloader-skip-btn" 
        onClick={handleComplete}
        aria-label="Skip intro animation"
      >
        SKIP INTRO ➔
      </button>
    </div>
  );
}
