import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

export default function InquiryModal({ isOpen, onClose, onSubmitted }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitted("Thank you! Your message has been sent. I'll get back to you shortly.");
      onClose();
    }, 600);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          START A PROJECT <span style={{ color: '#ff2238' }}>+</span>
        </h2>
        
        <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
          Have an exciting project, architectural challenge, or full-time opportunity? Drop a message below and I&#39;ll reply within 24 hours.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input 
              type="text" 
              required 
              placeholder="e.g. Alex Henderson" 
              className="form-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              required 
              placeholder="e.g. alex@company.com" 
              className="form-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Project Details / Message</label>
            <textarea 
              required 
              placeholder="Describe your goals, tech stack, timeline, or scope..." 
              className="form-textarea"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button 
            type="submit" 
            className="form-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Transmission...' : 'Send Message ->'}
          </button>
        </form>
      </div>
    </div>
  );
}
