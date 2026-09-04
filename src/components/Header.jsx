import React from 'react';
import { Plus } from 'lucide-react';

export default function Header({ onOpenInquiry }) {
  return (
    <header className="site-header">
      <div className="header-left">
        <span className="role-title">PYTHON FULL STACK DEVELOPER</span>
        <span className="role-subtitle">SOFTWARE ENGINEER</span>
      </div>
      
      <div className="header-right">
        <button 
          className="available-badge"
          onClick={onOpenInquiry}
          title="Click to inquire or start a project"
        >
          AVAILABLE FOR PROJECTS <span className="badge-plus">+</span>
        </button>
      </div>
    </header>
  );
}
