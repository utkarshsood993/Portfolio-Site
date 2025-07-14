// src/components/ResumeSection.tsx
import React, { useState } from 'react';
import './Resume.css';

const ResumePreview: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section className="resume-section" id="resume">
      <h2 className="resume-heading">Resume</h2>

      <div className="resume-buttons">
        <button onClick={() => setShowPreview(true)} className="resume-btn">
          View Resume
        </button>

        <a
          href="/UtkarshResume.pdf"
          download
          className="resume-btn outline"
        >
          Download Resume
        </a>
      </div>

      {/* Modal-like popup for preview */}
      {showPreview && (
        <div className="resume-modal">
          <div className="resume-modal-content">
            <button onClick={() => setShowPreview(false)} className="close-btn">×</button>

            <img
              src="/UtkarshResumePreview.jpg"
              alt="Resume Preview"
              className="resume-image"
            />

            <a
              href="/UtkarshResume.pdf"
              download
              className="resume-btn"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResumePreview;
