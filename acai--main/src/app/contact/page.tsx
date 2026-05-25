'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import '../contact.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Output animation for form
    gsap.to(formRef.current, {
      opacity: 0, x: -50, duration: 0.5, onComplete: () => {
        setSubmitted(true);
        // Input animation for success message
        setTimeout(() => {
            if (successRef.current) {
                gsap.fromTo(successRef.current,
                    { scale: 0.8, opacity: 0, rotation: -10 },
                    { scale: 1, opacity: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' }
                );
            }
        }, 50);
      }
    });
  };

  return (
    <div className="container contact-page">
      <div className="contact-layout">
        
        <div className="contact-info" ref={containerRef}>
          <span className="tag">Connect</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginTop: '0.5rem', textTransform: 'none', transform: 'none' }}>Say Hello</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '450px' }}>
            Whether you're looking to partner with us, inquire about our organic sourcing, 
            or just want to share your açaí story, we'd love to hear from you.
          </p>
          
          <div style={{ marginBottom: '2rem' }}>
            <p className="tag">Direct</p>
            <p style={{ fontSize: '1.2rem' }}>hello@acaiclub.com</p>
          </div>
          <div>
            <p className="tag">Phone</p>
            <p style={{ fontSize: '1.2rem' }}>+355 69 000 0000</p>
          </div>
        </div>

        <div className="contact-form-container">
          {!submitted ? (
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" id="name" className="input-field" placeholder=" " required />
                <label htmlFor="name" className="input-label">Name</label>
                <div className="input-focus-line"></div>
              </div>
              
              <div className="input-group">
                <input type="email" id="email" className="input-field" placeholder=" " required />
                <label htmlFor="email" className="input-label">Email Address</label>
                <div className="input-focus-line"></div>
              </div>
              
              <div className="input-group">
                <select id="subject" className="input-field" required defaultValue="">
                  <option value="" disabled></option>
                  <option value="general">General Inquiry</option>
                  <option value="franchise">Franchise</option>
                  <option value="feedback">Feedback</option>
                </select>
                <label htmlFor="subject" className="input-label">Subject</label>
                <div className="input-focus-line"></div>
              </div>
              
              <div className="input-group">
                <textarea id="message" className="input-field" placeholder=" " required></textarea>
                <label htmlFor="message" className="input-label">How can we help?</label>
                <div className="input-focus-line"></div>
              </div>
              
              <button type="submit" className="btn" style={{ 
                width: '100%', 
                marginTop: '1.5rem', 
                padding: '1.2rem',
                background: 'var(--color-amethyst)', 
                color: 'var(--color-linen)',
                fontSize: '1rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: 'none'
              }}>
                Send Message
              </button>
            </form>
          ) : (
            <div ref={successRef} className="success-message">
              <div className="success-icon">✓</div>
              <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Sent.</h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '280px' }}>
                We've received your message and will respond within 24 hours.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
