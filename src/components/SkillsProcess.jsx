import React, { useState } from 'react';
import { 
  Compass, 
  Cpu, 
  Code2, 
  ShieldCheck, 
  Sliders, 
  Rocket,
  Plus
} from 'lucide-react';

export default function SkillsProcess({ onOpenInquiry }) {
  const [activeStep, setActiveStep] = useState(2);

  const skillsList = [
    'Python',
    'Django REST',
    'React.js',
    'PostgreSQL',
    'Docker',
    'JavaScript',
    'Tailwind CSS',
    'HTML & CSS',
    'Git & GitHub',
    'AWS',
    'Logo Design'
  ];

  const processSteps = [
    {
      num: '01',
      icon: Compass,
      title: 'Discover',
      desc: 'Requirements & System Analysis'
    },
    {
      num: '02',
      icon: Cpu,
      title: 'Architecture',
      desc: 'Database Schemas & API Contracts'
    },
    {
      num: '03',
      icon: Code2,
      title: 'Develop',
      desc: 'Clean, High-Throughput Code'
    },
    {
      num: '04',
      icon: ShieldCheck,
      title: 'Test & Validate',
      desc: 'Unit, Integration & Security Tests'
    },
    {
      num: '05',
      icon: Sliders,
      title: 'Refine & Cache',
      desc: 'Redis Caching & DB Indexing'
    },
    {
      num: '06',
      icon: Rocket,
      title: 'Deliver',
      desc: 'CI/CD & Cloud Deployment'
    }
  ];

  return (
    <section className="skills-process-section" id="skills-process">
      {/* Column 1: Education & Skills */}
      <div className="col-card">
        <h3 className="col-title">EDUCATION & SKILLS</h3>
        
        <span className="sub-heading">EDUCATION</span>
        <div className="education-list">
          <div className="edu-item">
            <div className="edu-details">
              <span className="edu-title">SSLC</span>
              <span className="edu-desc">Mangalam Metriculation School</span>
            </div>
            <span className="edu-year">2019</span>
          </div>
          <div className="edu-item">
            <div className="edu-details">
              <span className="edu-title">Diploma</span>
              <span className="edu-desc">Electronics & Communication Engineering</span>
            </div>
            <span className="edu-year">2019-22</span>
          </div>
          <div className="edu-item">
            <div className="edu-details">
              <span className="edu-title">Bachelor of Engineering</span>
              <span className="edu-desc">Electronics & Communication Engineering</span>
            </div>
            <span className="edu-year">2022-25</span>
          </div>

          <div className="edu-item">
            <div className="edu-details">
              <span className="edu-title">Python Full Stack Certification</span>
              <span className="edu-desc">Django, FastAPI, React & Cloud Architecture</span>
            </div>
            <span className="edu-year">2025</span>
          </div>
        </div>

        <span className="sub-heading">SKILLS</span>
        <div className="skills-pill-grid">
          {skillsList.map((skill, index) => (
            <span key={index} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Column 2: Work Process (Flow of Connectivity) */}
      <div className="col-card">
        <h3 className="col-title">WORK PROCESS</h3>

        <div className="process-timeline">
          {/* Glowing Connecting Laser Line */}
          <div className="timeline-laser-track">
            <div 
              className="timeline-laser-fill"
              style={{
                height: `${((activeStep + 1) / processSteps.length) * 100}%`
              }}
            ></div>
          </div>

          {processSteps.map((step, idx) => {
            const IconComponent = step.icon;
            const isHovered = activeStep === idx;

            return (
              <div 
                key={idx}
                className="process-step-item"
                onMouseEnter={() => setActiveStep(idx)}
                style={{
                  opacity: isHovered ? 1 : 0.82
                }}
              >
                <div 
                  className="step-node-icon"
                  style={{
                    backgroundColor: isHovered ? '#ff2238' : '#0d0d12',
                    color: isHovered ? '#ffffff' : '#ff2238',
                    boxShadow: isHovered ? '0 0 20px rgba(255, 34, 56, 0.6)' : 'none'
                  }}
                >
                  <IconComponent size={18} />
                </div>

                <div className="step-content">
                  <span className="step-title">{step.title}</span>
                  <span className="step-desc">{step.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Column 3: Philosophy & Quote */}
      <div className="col-card quote-card">
        <div>
          <div className="quote-mark">“</div>
          <p className="quote-text">
            Good software is not just how it runs, but how gracefully it scales and empowers users.
          </p>

          <div className="signature-container">
            <span className="signature-text">Mukunthan</span>
          </div>
        </div>

        <div>
          <div className="quote-divider"></div>
          <div 
            className="quote-cta-text"
            style={{ cursor: 'pointer' }}
            onClick={onOpenInquiry}
          >
            LET'S CREATE SOMETHING GREAT TOGETHER. <span className="cta-plus">+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
