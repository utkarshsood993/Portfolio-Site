import React, { useEffect, useRef, useState } from 'react';
import './Resume.css';

const ResumePreview: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setShowPreview(false);
    }
  };

  useEffect(() => {
    if (showPreview) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showPreview]);

  return (
    <section className="resume-section" id="resume">
      <h2 className="resume-heading">Resume</h2>

      <div className="resume-buttons">
        <button onClick={() => setShowPreview(true)} className="resume-btn">
          View Resume
        </button>

        <a href="/UtkarshResume.pdf" download className="resume-btn outline">
          Download Resume
        </a>
      </div>

      {showPreview && (
        <div className="resume-modal">
          <div className="resume-modal-content" ref={modalRef}>
            <button onClick={() => setShowPreview(false)} className="close-btn">
              ×
            </button>

            <img
              src="/UtkarshResumePreview.jpg"
              alt="Resume Preview"
              className="resume-image"
            />

            <a href="/UtkarshResume.pdf" download className="resume-btn">
              Download Resume
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResumePreview;
