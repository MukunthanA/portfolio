import React from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ marginBottom: '1.5rem', borderRadius: '12px', overflow: 'hidden' }}>
          <img 
            src={project.image} 
            alt={project.title} 
            style={{ width: '100%', height: 'auto', maxHeight: '340px', objectFit: 'cover' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase' }}>
            {project.title}
          </h2>
          <span style={{ color: '#ff2238', fontWeight: 800, fontSize: '1.1rem' }}>
            {project.id}
          </span>
        </div>

        <p style={{ color: '#ff2238', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {project.category} • {project.role}
        </p>

        <p style={{ color: '#bbb', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
          {project.description}
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
            Key Engineering Highlights:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ddd', fontSize: '0.85rem' }}>
                <CheckCircle2 size={16} color="#ff2238" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
            Technology Stack:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tech.map((t, idx) => (
              <span key={idx} className="skill-pill" style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-hire"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            <GithubIcon size={18} />
            <span>View Source Code</span>
          </a>

          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-hire"
            style={{ flex: 1, justifyContent: 'center', background: '#ff2238', borderColor: '#ff2238' }}
          >
            <ExternalLink size={18} />
            <span>Launch Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
