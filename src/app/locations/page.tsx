'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../locations.css';

const LOCATIONS = [
  { id: 1, name: 'Miami Beach', address: '123 Ocean Drive, Miami, FL', phone: '(555) 123-4567', x: '70%', y: '80%' },
  { id: 2, name: 'Downtown LA', address: '456 Figueroa St, Los Angeles, CA', phone: '(555) 987-6543', x: '10%', y: '60%' },
  { id: 3, name: 'Soho NYC', address: '789 Broadway, New York, NY', phone: '(555) 246-8135', x: '80%', y: '30%' },
  { id: 4, name: 'Rio de Janeiro', address: 'Av. Atlântica 1000, Copacabana', phone: '+55 21 9876-5432', x: '85%', y: '90%' },
  { id: 5, name: 'Austin', address: '500 Congress Ave, Austin, TX', phone: '(555) 321-4321', x: '45%', y: '75%' }
];

export default function LocationsPage() {
  const [activeSite, setActiveSite] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // No longer needed as we use a single iframe map
  }, []);

  return (
    <div className="container locations-page" ref={containerRef}>
      <div className="locations-header" style={{ marginBottom: '4rem' }}>
        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', textTransform: 'none', transform: 'none' }}>Visit Us</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '500px' }}>
          Experience the authentic taste of Brazil right in the heart of Tirana.
        </p>
      </div>

      <div className="locations-layout">
        <div className="locations-list">
          <div className="location-card active" style={{ padding: '3rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '48px' }}>
            <span className="tag">Flagship Store</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', marginTop: '1rem' }}>Tirana</h2>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Address</p>
              <p style={{ fontSize: '1.3rem' }}>Rruga Ibrahim Rugova, Blloku<br />Tirana, Albania</p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Hours</p>
              <p style={{ fontSize: '1.2rem' }}>Mon — Sun: 08:00 - 22:00</p>
            </div>
            <div>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Phone</p>
              <p style={{ fontSize: '1.2rem' }}>+355 69 000 0000</p>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Ibrahim+Rugova+Tirana+Albania" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn" 
              style={{ width: '100%', marginTop: '3rem', background: 'var(--color-linen)', color: 'var(--color-dolphin)' }}
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="locations-map" style={{ borderRadius: '48px', overflow: 'hidden', minHeight: '500px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d2995.918942261!2d19.8166666!3d41.3216666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310000000000%3A0x0000000000000000!2sBlloku%2C+Tirana!5e0!3m2!1sen!2sal!4v1683471000000!5m2!1sen!2sal" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
