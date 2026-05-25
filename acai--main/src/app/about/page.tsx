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
            <span className="tag">Our Origins</span>
            <h2 className="hero-title" style={{ color: '#fff', fontSize: '3.5rem', marginBottom: '2rem', textTransform: 'none', transform: 'none' }}>The Story of <br /> Açaí Aura</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              In the middle of a city filled with ordinary cafés and lifeless drinks, a different idea was born — a brand that wouldn’t just sell smoothies or bowls, but energy, lifestyle, and a tropical feeling. That’s how Açaí Aura began.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginTop: '1.5rem' }}>
              It all started when two friends traveled to Brazil and tasted authentic açaí for the very first time on the beaches of Rio de Janeiro. The deep purple color, the refreshing taste, and the natural energy felt unlike anything they had experienced before. They realized that açaí wasn’t just food — it was a culture.
            </p>
          </div>
          <div className="about-visual-content reveal-visual">
             <div className="visual-image-box" style={{ padding: 0 }}>
               <video src="/Acai 1.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
          </div>
        </div>
      </section>

      <section className="container about-section">
        <div className="about-grid">
          <div className="about-text-content reveal-content">
            <span className="tag">The Heritage</span>
            <h2 className="hero-title" style={{ color: '#fff', fontSize: '3.5rem', marginBottom: '2rem', textTransform: 'none', transform: 'none' }}>Amazonian <br /> Roots</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              The history of açaí begins deep in the rainforests of Brazil, where the açaí berry has been consumed for centuries by Indigenous communities living near the Amazon River. Harvested from tall açaí palm trees, the berry was known as a powerful source of energy and nutrition, often eaten daily as part of traditional meals.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginTop: '1.5rem' }}>
              For generations, açaí remained a local treasure of the Amazon region. People in northern Brazil would blend the dark purple berries into a thick pulp and serve it with fruits, grains, or fish depending on the region. Its rich taste and natural health benefits made it an essential part of everyday life.
            </p>
          </div>
          <div className="about-visual-content reveal-visual">
             <div className="visual-image-box" style={{ padding: 0 }}>
               <video src="/Acai 2.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
          </div>
        </div>
      </section>

      <section className="container about-section">
        <div className="about-grid">
          <div className="about-text-content reveal-content">
            <span className="tag">The Craft</span>
            <h2 className="hero-title" style={{ color: '#fff', fontSize: '3.5rem', marginBottom: '2rem', textTransform: 'none', transform: 'none' }}>Crafted to <br /> Perfection</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              Every Açaí bowl we create is made fresh with care, quality, and attention to every detail. From the moment the ingredients are prepared until the final toppings are added, the goal is always the same — to deliver the perfect experience for every customer.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginTop: '1.5rem' }}>
              Our açaí is blended fresh to achieve the smooth, rich texture that makes every bowl refreshing and full of flavor. We carefully select fresh fruits, premium toppings, and high-quality ingredients to create a combination that looks beautiful and tastes even better.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginTop: '1.5rem' }}>
              Each order is prepared individually, ensuring that every customer receives a fresh and perfectly crafted bowl made just for them. Whether it’s the vibrant fruits, crunchy granola, creamy peanut butter, or tropical flavors, every ingredient is chosen to bring energy and freshness into every bite.
            </p>
          </div>
          <div className="about-visual-content reveal-visual">
             <div className="visual-image-box" style={{ padding: 0 }}>
               <video src="/Acai 3.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
