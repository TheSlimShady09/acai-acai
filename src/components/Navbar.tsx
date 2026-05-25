'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background change on scroll
      setScrolled(currentScrollY > 50);

      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!visible ? 'hidden' : ''}`}>
      <div className="container navbar-container">
        <div className="nav-logo">
          <Link href="/">AÇAÍ CLUB</Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button 
          className={`mobile-menu-btn ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Global Links */}
        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <Link href="/menu" className="nav-link" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link href="/community" className="nav-link" onClick={() => setIsOpen(false)}>Community</Link>
          <Link href="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/locations" className="nav-link" onClick={() => setIsOpen(false)}>Locations</Link>
          <Link href="/contact" className="nav-link nav-link-contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(0);
        }

        .navbar.hidden {
          transform: translateY(-100%);
        }

        .navbar.scrolled {
          background: var(--color-dolphin) !important;
          backdrop-filter: blur(10px);
          padding: 1rem 0 !important;
          border-bottom: 1px solid rgba(253, 241, 226, 0.1);
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 2000;
          padding: 10px;
        }

        .mobile-menu-btn span {
          display: block;
          width: 28px;
          height: 3px;
          background: var(--color-amethyst);
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        @media (max-width: 900px) {
          .mobile-menu-btn {
            display: flex;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: rgba(13, 6, 22, 0.98);
            backdrop-filter: blur(15px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2.5rem;
            transition: all 0.6s cubic-bezier(0.85, 0, 0.15, 1);
            z-index: 1500;
          }

          .nav-links.show {
            right: 0;
          }

          :global(.nav-link) {
            font-size: 1.5rem !important;
            letter-spacing: 0.3em !important;
          }

          :global(.nav-link-contact) {
            margin-left: 0 !important;
            margin-top: 1rem;
            width: 80%;
            text-align: center;
          }

          .mobile-menu-btn.active span:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
          }
          .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
          }
          .mobile-menu-btn.active span:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
          }
        }
      `}</style>
    </nav>
  );
}
