'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import '../community.css';

const communitySlots = [
  {
    id: 1,
    title: 'AMAZONIAN RHYTHM',
    tag: '#purepulse',
    src: '/WhatsApp%20Image%202026-05-24%20at%2011.33.25.jpeg',
    type: 'image'
  },
  {
    id: 2,
    title: 'RIO SUNSET',
    tag: '#beachside',
    src: '/WhatsApp%20Video%202026-05-23%20at%2011.21.44.mp4',
    type: 'video'
  },
  {
    id: 3,
    title: 'PURE ENERGY',
    tag: '#organicpower',
    src: '/WhatsApp%20Image%202026-05-24%20at%2011.34.05.jpeg',
    type: 'image'
  },
  {
    id: 4,
    title: 'MODERNIST COMPOSITION',
    tag: '#cleancomposition',
    src: '/WhatsApp%20Image%202026-05-24%20at%2011.34.28.jpeg',
    type: 'image'
  }
];

export default function CommunityPage() {
  useEffect(() => {
    document.body.classList.add('community-page-body');

    // Premium motion design entrance
    gsap.fromTo('.community-header-section', 
      { 
        y: -50, 
        opacity: 0 
      }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.4, 
        ease: 'power3.out' 
      }
    );

    gsap.fromTo('.gallery-slot-card', 
      { 
        scale: 0.9, 
        opacity: 0,
        y: 30
      }, 
      { 
        scale: 1, 
        opacity: 1, 
        y: 0,
        duration: 1.2, 
        stagger: 0.1, 
        ease: 'power4.out',
        delay: 0.2
      }
    );

    return () => document.body.classList.remove('community-page-body');
  }, []);

  return (
    <div className="community-page" style={{ paddingTop: '16vh' }}>
      <div className="community-header-section" style={{ paddingBottom: '6vh', textAlign: 'center' }}>
        <h1 className="community-title" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginTop: 0, marginBottom: 0 }}>COMMUNITY GALLERY</h1>
      </div>

      <div className="community-gallery-container container">
        <div className="community-masonry-grid" style={{ alignItems: 'start' }}>
          {communitySlots.map(slot => (
            <div 
              key={slot.id} 
              className="gallery-slot-card"
              style={{ background: 'transparent', border: 'none', boxShadow: 'none', overflow: 'hidden' }}
            >
              {slot.type === 'video' ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '36px'
                  }}
                >
                  <source src={slot.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={slot.src}
                  alt={slot.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '36px',
                    transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
                  }}
                  className="slot-media-img"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
