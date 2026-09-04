import React, { useState } from 'react';
import { MapPin, Plus, Sparkles } from 'lucide-react';
import cutoutTheme from '../assets/mukunthan_cutout.png';
import cutoutClear from '../assets/mukunthan_cutout_clear.png';

export default function Hero({ onOpenInquiry }) {
  // Toggle between themed sunglasses portrait and clean eyes portrait
  const [useSunglasses, setUseSunglasses] = useState(true);

  return (
    <section className="hero-section" id="hero">
      {/* Massive Typographic Backdrop - Back Layer (Solid Crimson) */}
      <div className="hero-backdrop-container" aria-hidden="true">
        <h1 className="hero-backdrop-text">PORTFOLIO</h1>
      </div>

      {/* Center Stylized Cutout Portrait (Seamlessly Blended) */}
      <div className="hero-center-portrait">
        <div className="portrait-wrapper">
          <div className="portrait-glow"></div>
          <img 
            src={useSunglasses ? cutoutTheme : cutoutClear} 
            alt="Mukunthan A - Python Full Stack Developer" 
            className="portrait-img"
          />

          {/* Interactive Portrait Style Switcher */}
          <button 
            className="portrait-switcher"
            onClick={() => setUseSunglasses(!useSunglasses)}
            title="Toggle between themed portrait and studio clear portrait"
          >
            <Sparkles size={14} color="#ff2238" />
            <span>{useSunglasses ? 'Style: Themed Dark' : 'Style: Studio Clean'}</span>
          </button>
        </div>
      </div>

      {/* Layer 2: Typographic Backdrop - Front Outline Layer (Ensures PORTFOLIO is NEVER hidden) */}
      {/* <div className="hero-backdrop-container hero-backdrop-front" aria-hidden="true">
        <span className="hero-backdrop-stroke">PORTFOLIO</span>
      </div> */}

      {/* Hero Content Overlay (Left & Right) */}
      <div className="hero-content-grid">
        {/* Bottom Left Info */}
        <div className="hero-left">
          <span className="hero-greeting">Hello, I'm</span>
          <h2 className="hero-name">MUKUNTHAN</h2>
          <h3 className="hero-designation">PYTHON FULL STACK DEVELOPER</h3>
          
          <p className="hero-bio">
            I build scalable backend architectures, high-throughput APIs, and pixel-perfect reactive interfaces. From database design to microservices, I craft full-stack solutions that convert and perform.
          </p>

          <div className="hero-location-badge">
            <MapPin className="loc-icon" />
            <span>BASED IN INDIA</span>
          </div>
        </div>

        {/* Bottom Right Highlights */}
        <div className="hero-right">
          <div className="hero-right-header">
            <div className="hero-right-icon-circle">
              <Plus size={22} />
            </div>
            <p className="hero-right-motto">
              Turning complex system logic into powerful digital experiences.
            </p>
          </div>

          <div className="hero-feature-list">
            <div className="hero-feature-item">
              <span className="feat-plus">+</span>
              <span>Scalable Cloud Architecture</span>
            </div>
            <div className="hero-feature-item">
              <span className="feat-plus">+</span>
              <span>High-Performance Python APIs</span>
            </div>
            <div className="hero-feature-item">
              <span className="feat-plus">+</span>
              <span>Pixel-Perfect Modern Interfaces</span>
            </div>
            <div className="hero-feature-item">
              <span className="feat-plus">+</span>
              <span>Database & DevOps Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
