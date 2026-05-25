'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../about.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray('.about-section');
    sections.forEach((sec: any) => {
      const content = sec.querySelector('.about-text-content');
      const visual = sec.querySelector('.about-visual-content');

      if (content) {
        gsap.fromTo(content,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1,
            scrollTrigger: {
              trigger: sec,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (visual) {
        gsap.fromTo(visual,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 1.2,
            scrollTrigger: {
              trigger: sec,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

  }, []);

  return (
    <div className="about-page" ref={containerRef}>
      
      <section className="about-hero">
        <span className="tag">Our Story</span>
        <h1 className="hero-title" style={{ fontSize: 'clamp(4rem, 15vw, 10rem)', lineHeight: 0.8, textTransform: 'none', transform: 'none' }}>
          Pulse <br /> of the <br /> Forest
        </h1>
      </section>

      <section className="container about-section">
        <div className="about-grid">
          <div className="about-text-content reveal-content">
            <span className="tag">The Source</span>
            <h2 className="hero-title" style={{ color: '#fff', fontSize: '3.5rem', marginBottom: '2rem', textTransform: 'none', transform: 'none' }}>Born in the <br /> Amazon</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              Centuries before Açaí reached the world's most vibrant cities, it was the lifeblood of the Amazon. 
              Harvested from the tops of palm trees by generations of ribeirinhos, it carries the primitive energy of the earth itself.
            </p>
          </div>
          <div className="about-visual-content reveal-visual">
             <div className="visual-image-box">🌴</div>
          </div>
        </div>
      </section>

      <section className="container about-section">
        <div className="about-grid">
          <div className="about-text-content reveal-content">
            <span className="tag">The Soul</span>
            <h2 className="hero-title" style={{ color: '#fff', fontSize: '3.5rem', marginBottom: '2rem', textTransform: 'none', transform: 'none' }}>The Rhythm <br /> of Rio</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              We brought that energy from the quiet of the forest to the frenetic pulse of the city. 
              Açaí is more than nutrition; it's a celebration. It's the sunset at Copacabana, 
              the energy of the samba, and the shared joy of a community.
            </p>
          </div>
          <div className="about-visual-content reveal-visual">
             <div className="visual-image-box">🇧🇷</div>
          </div>
        </div>
      </section>

      <section className="container about-section">
        <div className="about-grid">
          <div className="about-text-content reveal-content">
            <span className="tag">The Future</span>
            <h2 className="hero-title" style={{ color: '#fff', fontSize: '3.5rem', marginBottom: '2rem', textTransform: 'none', transform: 'none' }}>Pure. <br /> Persistent.</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              Our mission is to protect this rhythm. By working exclusively with certified organic harvesters, 
              we ensure that every bowl supports the preservation of the rainforest and the prosperity 
              of the communities that call it home.
            </p>
            <button className="btn" style={{ marginTop: '3rem', background: 'var(--color-linen)', color: 'var(--color-dolphin)' }}>
              Our Impact
            </button>
          </div>
          <div className="about-visual-content reveal-visual">
             <div className="visual-image-box">✨</div>
          </div>
        </div>
      </section>

    </div>
  );
}
