import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false); // auto-close on link click

  return (
    <nav className="navbar">
      <div className="logo">U S</div>

      <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`} ref={menuRef}>
  {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((id) => (
    <li key={id}>
      <a
        href={`#${id === 'Home' ? 'hero' : id.toLowerCase()}`}
        onClick={handleLinkClick}
      >
        {id}
      </a>
    </li>
  ))}
</ul>

    </nav>
  );
};

export default Navbar;
