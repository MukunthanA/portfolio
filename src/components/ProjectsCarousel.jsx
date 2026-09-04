import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import imgSafegate from '../assets/project_safegate.jpg';
import imgTicketR from '../assets/project_event_ticket.jpg';
import imgLoopin from '../assets/project_loopin.jpg';
import imgLanding from '../assets/project_landing_page.jpg';

export const projectData = [
  {
    id: '01',
    title: 'SAFEGATE',
    category: 'Society & Security Platform',
    role: 'Full-Stack Architecture',
    image: imgSafegate,
    tech: ['Python', 'Django REST', 'React', 'PostgreSQL', 'Redis'],
    description: 'A multi-tenant smart society management platform with real-time visitor QR pass generation, automated staff attendance, guard dispatch, and payment gateway integration.',
    highlights: ['Microservice auth layer', 'Sub-50ms visitor check-in QR sync', 'Dockerized PostgreSQL clustering'],
    demoUrl: 'https://github.com/mukunthan/safegate-core',
    githubUrl: 'https://github.com/mukunthan/safegate-core'
  },
  {
    id: '02',
    title: 'TicketR App',
    category: 'High-Concurrency Event Booking',
    role: 'Backend & Distributed Cache',
    image: imgTicketR,
    tech: ['FastAPI', 'Redis', 'Celery', 'React', 'Stripe'],
    description: 'A distributed event booking engine engineered to handle high flash-sale concurrency. Implements Redis distributed locks to prevent ticket overselling and Celery task queues for instant email ticketing.',
    highlights: ['Zero-inventory race conditions with Redis locks', 'Handles 10k+ concurrent checkout requests', 'Stripe Webhook idempotency'],
    demoUrl: 'https://github.com/mukunthan/ticketr-fastapi',
    githubUrl: 'https://github.com/mukunthan/ticketr-fastapi'
  },
  {
    id: '03',
    title: 'LOOPIN',
    category: 'Real-Time Audio & Music Streaming',
    role: 'Python Audio DSP & WebSockets',
    image: imgLoopin,
    tech: ['Python DSP', 'FastAPI', 'WebSockets', 'React', 'Tailwind'],
    description: 'High-fidelity cloud music streaming service featuring real-time audio waveform spectrum analysis, dynamic queue streaming over WebSockets, and personalized playlist curation algorithms.',
    highlights: ['Dynamic chunk streaming buffer', 'Sub-second real-time audio sync', 'Custom dark glassmorphic player'],
    demoUrl: 'https://github.com/mukunthan/loopin-audio-stream',
    githubUrl: 'https://github.com/mukunthan/loopin-audio-stream'
  },
  {
    id: '04',
    title: 'PulseAI Diagnostics',
    category: 'Healthcare Diagnostics SaaS',
    role: 'Full-Stack & ML Inference API',
    image: imgLanding,
    tech: ['Python', 'FastAPI', 'Next.js', 'PyTorch', 'Tailwind'],
    description: 'AI-assisted medical imaging analytics platform enabling clinicians to detect lung and chest abnormalities with confidence-scored heatmaps and integrated EHR reporting dashboards.',
    highlights: ['HIPAA-compliant encrypted data pipeline', 'Asynchronous PyTorch inference worker', 'Interactive diagnostic viewer'],
    demoUrl: 'https://github.com/mukunthan/pulseai-diagnostics',
    githubUrl: 'https://github.com/mukunthan/pulseai-diagnostics'
  }
];

export default function ProjectsCarousel({ onSelectProject }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < projectData.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-header-row">
        <h2 className="section-title">SELECTED PROJECTS</h2>
        
        <div className="carousel-nav-controls">
          <div className="carousel-indicator">
            <span className="active-num">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span> / {String(projectData.length).padStart(2, '0')}</span>
          </div>

          <button 
            className="carousel-btn"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous project"
          >
            <ChevronLeft size={22} />
          </button>

          <button 
            className="carousel-btn"
            onClick={handleNext}
            disabled={currentIndex === projectData.length - 1}
            aria-label="Next project"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <div className="carousel-viewport">
        <div 
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`
          }}
        >
          {projectData.map((proj) => (
            <div 
              key={proj.id} 
              className="project-card"
              onClick={() => onSelectProject(proj)}
            >
              <div className="project-thumbnail-wrapper">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="project-thumbnail"
                  loading="lazy"
                />
              </div>

              <div className="project-info">
                <div className="project-title-row">
                  <h3 className="project-title">{proj.title}</h3>
                  <span className="project-num-link">
                    {proj.id} <ArrowRight size={16} />
                  </span>
                </div>

                <p className="project-category">{proj.category}</p>

                <div className="project-tech-pills">
                  {proj.tech.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="tech-pill-mini">{t}</span>
                  ))}
                  {proj.tech.length > 3 && (
                    <span className="tech-pill-mini">+{proj.tech.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
