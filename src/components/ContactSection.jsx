import React from 'react';
import { ArrowRight, Mail, Globe, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import laptopMockup from '../assets/laptop_mockup.jpg';

export default function ContactSection({ onOpenInquiry, onCopyEmail, copied }) {
  const emailAddress = "mukunthanmukunthan161@gmail.com";

  return (
    <section className="contact-section" id="contact">
      {/* Left Column */}
      <div className="contact-left">
        <h2 className="contact-headline">
          LET'S WORK <br />
          TOGETHER <span className="headline-plus">+</span>
        </h2>
        
        <p className="contact-desc">
          I'm currently open for full-time engineering roles, high-impact freelance projects, and scalable software collaborations. Let's create something amazing that brings tangible results.
        </p>

        <button 
          className="btn-hire"
          onClick={onOpenInquiry}
        >
          <span>AVAILABLE FOR FREELANCE</span>
          <ArrowRight size={18} className="btn-arrow" />
        </button>
      </div>

      {/* Middle Column: Interactive Links */}
      <div className="contact-middle">
        <div className="contact-links-list">
          {/* Email with click-to-copy */}
          <button 
            className="contact-link-row"
            onClick={() => onCopyEmail(emailAddress)}
            title="Click to copy email address"
          >
            <div className="contact-icon-circle">
              {copied ? <Check size={20} color="#00ff88" /> : <Mail size={20} />}
            </div>
            <span>{emailAddress}</span>
            <Copy size={15} style={{ marginLeft: 'auto', opacity: 0.5 }} />
          </button>

          {/* GitHub */}
          <a 
            href="https://github.com/MukunthanA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link-row"
          >
            <div className="contact-icon-circle">
              <GithubIcon size={20} />
            </div>
            <span>https://github.com/MukunthanA</span>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/mukunthan-a-546977315/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link-row"
          >
            <div className="contact-icon-circle">
              <LinkedinIcon size={20} />
            </div>
            <span>www.linkedin.com/in/MukunthanA</span>
          </a>

          {/* Portfolio Web */}
          <a 
            href="#hero" 
            className="contact-link-row"
          >
            <div className="contact-icon-circle">
              <Globe size={20} />
            </div>
            <span>https://mukunthan.dev</span>
          </a>
        </div>
      </div>

      {/* Right Column: Realistic 3D Laptop Mockup */}
      <div className="contact-right">
        <div className="laptop-mockup-container">
          <img 
            src={laptopMockup} 
            alt="Mukunthan Portfolio MacBook Setup" 
            className="laptop-img"
          />
          <div className="laptop-terminal-badge">
            <span className="terminal-dot"></span>
            <span>mukunthan.deploy(&#39;production&#39;) // ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
