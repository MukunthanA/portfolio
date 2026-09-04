import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsCarousel from './components/ProjectsCarousel';
import SkillsProcess from './components/SkillsProcess';
import ContactSection from './components/ContactSection';
import ConnectivityCanvas from './components/ConnectivityCanvas';
import CustomCursor from './components/CustomCursor';
import ProjectModal from './components/ProjectModal';
import InquiryModal from './components/InquiryModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [introActive, setIntroActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handlePreloaderFinish = () => {
    setLoading(false);
    // Trigger staggered entrance sequence
    requestAnimationFrame(() => {
      setIntroActive(true);
    });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    showToast(`Copied ${email} to clipboard!`);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2000);
  };

  return (
    <div className={`app-container ${introActive ? 'intro-active' : 'intro-pending'}`}>
      {/* Preloader Video Overlay */}
      {loading && <Preloader onFinish={handlePreloaderFinish} />}

      {/* Interactive Background Particle & Connectivity Canvas */}
      <ConnectivityCanvas />

      {/* Glowing Interactive Cursor */}
      <CustomCursor />

      {/* Top Header / Bar - Step 1 in sequence */}
      <Header onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* Monumental Hero Section - Portrait is Step 2, Content is Step 3 */}
      <Hero onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* Projects Carousel directly below Hero */}
      <ProjectsCarousel onSelectProject={(p) => setSelectedProject(p)} />

      {/* 3-Column Skills, Process & Philosophy Section */}
      <SkillsProcess onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* Contact & 3D Laptop Mockup Section */}
      <ContactSection 
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onCopyEmail={handleCopyEmail}
        copied={copiedEmail}
      />

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-left">
          <span>© {new Date().getFullYear()} Mukunthan A. All rights reserved.</span>
        </div>
        <div className="footer-right">
          <a href="#hero" className="footer-link">Back to Top ↑</a>
          <a href="https://github.com/MukunthanA" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://linkedin.com/in/mukunthan" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Inquiry Modal */}
      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)}
        onSubmitted={(msg) => showToast(msg)}
      />

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="toast-notification">
          <span>✨ {toastMessage}</span>
        </div>
      )}
    </div>
  );
}
