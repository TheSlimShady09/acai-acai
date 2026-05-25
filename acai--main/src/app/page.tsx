'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal words one by one
      gsap.from('.reveal-word', {
        y: '100%',
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.5
      });

      // Subtle Rio shimmer (color cycle)
      gsap.to('.reveal-word', {
        color: '#ffffff',
        duration: 2,
        stagger: {
          each: 0.2,
          repeat: -1,
          yoyo: true
        },
        ease: 'sine.inOut',
        delay: 2
      });

      // Subtitle reveal
      gsap.from('.hero-subtitle', {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.2
      });

      // Psychological Story Scroll Animations
      // Stable Vertical Fade-In for Story Sections
      gsap.utils.toArray('.story-paragraph').forEach((section: unknown) => {
        const secEl = section as HTMLElement;
        gsap.from(secEl, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: secEl,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });
      // Psychological Heading Animations
      const headers = gsap.utils.toArray('.story-header');
      headers.forEach((h: unknown) => {
        const headerEl = h as HTMLElement;
        gsap.from(headerEl, {
          scrollTrigger: {
            trigger: headerEl,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          scale: 0.8,
          filter: 'blur(10px)',
          opacity: 0,
          duration: 1.8,
          ease: 'power2.out'
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="scroll-container" style={{ position: 'relative' }}>
      
      {/* Premium Full-Screen Background Video */}
      <div className="homepage-video-background">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="homepage-bg-video"
          onTimeUpdate={(e) => {
            if (e.currentTarget.currentTime >= 16) {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => {});
            }
          }}
        >
          <source src="/menu/the%20acai%20club_prob3.mp4#t=0,16" type="video/mp4" />
        </video>
        <div className="homepage-video-overlay" />
      </div>

      <div className="section flex-center" style={{ position: 'relative', zIndex: 5 }}>
        <div className="section-content">
          <h1 className="hero-title">
            <span className="reveal-line">
              <span className="reveal-word">Taste</span> <span className="reveal-word">The</span> <span className="reveal-word">Soul</span>
            </span>
            <span className="reveal-line">
              <span className="reveal-word">of</span> <span className="reveal-word">Brazil</span>
            </span>
          </h1>
          <p className="hero-subtitle">Experience the pure, authentic rhythm of the Amazon. Premium organic Açaí, crafted with Rio’s vibrant energy.</p>
        </div>
      </div>

      {/* Psychological Our Story Section */}
      <div className="section flex-center" style={{
        height: 'auto',
        padding: '20vh 0',
        position: 'relative',
        background: 'var(--color-linen)',
        color: 'var(--color-text-dark)',
        overflow: 'hidden'
      }}>
        <div className="section-content" style={{ textAlign: 'center', maxWidth: '900px', position: 'relative', zIndex: 10 }}>

          <div className="story-paragraph" style={{ marginBottom: '15vh' }}>
            <h2 className="story-header hero-title" style={{
              color: 'var(--color-amethyst)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontStyle: 'normal',
              fontFamily: 'var(--font-heading)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>The Silence <br /> of the Forest</h2>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: '1.6', fontWeight: '400', color: 'var(--color-dolphin)' }}>
              Deep within the Amazon, where time ceases to exist, a pulse begins. It’s a rhythmic vibration from the soil, a primitive energy that has fueled the soul of humanity for millennia. We didn&apos;t find Açaí; it found us in the quiet moments between the shadows of the palms.
            </p>
          </div>

          <div className="story-paragraph" style={{ marginBottom: '15vh' }}>
            <h2 className="story-header hero-title" style={{
              color: 'var(--color-amethyst)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontStyle: 'normal',
              fontFamily: 'var(--font-heading)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>A Transformation <br /> of Soul</h2>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: '1.6', fontWeight: '400', color: 'var(--color-dolphin)' }}>
              To taste this fruit is to invite the wild back into your subconscious. It is a psychological awakening—a reminder that we are not separate from nature, but woven into its very fiber. Every dark, velvety bite is a bridge between the ancient wisdom of the rainforest and the frenetic magic of the modern world.
            </p>
          </div>

          <div className="story-paragraph">
            <h2 className="story-header hero-title" style={{
              color: 'var(--color-amethyst)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontStyle: 'normal',
              fontFamily: 'var(--font-heading)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>The Heart <br /> of Brazil</h2>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: '1.6', fontWeight: '400', color: 'var(--color-dolphin)' }}>
              We don&apos;t just provide a bowl. We offer a homecoming. A moment to pause, to breathe, and to reconnect with the raw energy that defines the Brazilian spirit. This is your journey. This is your rhythm. This is the Açaí Club.
            </p>
          </div>

        </div>
      </div>

      {/* Store Locator Section */}
      <div className="section flex-center" style={{
        height: 'auto',
        padding: '25vh 0',
        position: 'relative',
        background: 'var(--color-amethyst)',
        color: 'var(--color-dolphin)',
        overflow: 'hidden'
      }}>
        <div className="section-content" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h2 className="hero-title" style={{
            fontSize: 'clamp(3rem, 10vw, 5rem)',
            marginBottom: '1.5rem',
            color: 'var(--color-linen)',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.02em',
            lineHeight: '1.1'
          }}>Find an <br /> Açaí Club</h2>
          <p style={{ color: 'var(--color-linen)', marginBottom: '0', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
            We are bringing the taste of Rio to cities across Albania and the globe. <br />
            Find your nearest location and join the club.
          </p>
        </div>
      </div>

    </main>

  );
}
