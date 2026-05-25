'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import '../menu.css';

const acaiCups = [
  {
    id: 'create',
    title: 'MAKE YOUR OWN',
    image: '/menu/amazon.png',
    description: 'Base açaí + toppings (Extra toppings at additional price)',
    price: '500 L / 600 L'
  },
  {
    id: 'tancoso',
    title: 'TRANCOSO',
    image: '/menu/tancoso.png',
    description: 'Base açaí + powder milk + banana + panda',
    price: '790 L / 870 L'
  },
  {
    id: 'buzios',
    title: 'BÚZIOS',
    image: '/menu/buzios.png',
    description: 'Base açaí + granola + nutella + strawberry',
    price: '790 L / 870 L'
  },
  {
    id: 'ipanema',
    title: 'IPANEMA',
    image: '/menu/para-classic.png',
    description: 'Base açaí + Pistache + Mixed Fruits + Granola',
    price: '790 L / 870 L'
  },
  {
    id: 'recife',
    title: 'RECIFE',
    image: '/menu/recife.png',
    description: 'Base açaí + granola + mango',
    price: '790 L / 890 L'
  },
  {
    id: 'brasilia',
    title: 'BRASÍLIA',
    image: '/menu/brasilia.png',
    description: 'Base açaí + granola + peanut butter + banana',
    price: 'Medium  720 L\nLarge  790 L'
  }
];

const smoothies = [
  {
    id: 'tiara',
    title: 'TIARA',
    image: '/menu/tiara.png',
    description: 'Açaí + milk + banana',
    price: '500 L'
  },
  {
    id: 'fortaleza',
    title: 'FORTALEZA',
    image: '/menu/tiara.png',
    description: 'Açaí + strawberry + milk',
    price: '500 L'
  },
  {
    id: 'the-acai-club',
    title: 'THE AÇAÍ CLUB',
    image: '/menu/tiara.png',
    description: 'Açaí + banana + panda + strawberry + milk',
    price: '750 L'
  },
  {
    id: 'create-smoothie',
    title: 'CREATE YOUR OWN...',
    image: '/menu/tiara.png',
    description: 'Base + milk (+ toppings extra price)',
    price: '400 L'
  }
];

export default function MenuPage() {
  useEffect(() => {
    document.body.classList.add('menu-page-body');

    // Motion Design: Section Title Entrance
    gsap.fromTo('.section-title-minimal', 
      { 
        y: -60, 
        opacity: 0, 
        scale: 0.95 
      }, 
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 1.4, 
        ease: 'power3.out', 
        stagger: 0.3 
      }
    );

    // Motion Design: Staggered Stencil Entrance of the Cups
    gsap.fromTo('.menu-item-minimal', 
      { 
        x: 250, 
        opacity: 0, 
        rotate: 12 
      }, 
      { 
        x: 0, 
        opacity: 1, 
        rotate: 0, 
        duration: 1.6, 
        stagger: 0.15, 
        ease: 'power4.out',
        delay: 0.25
      }
    );

    return () => document.body.classList.remove('menu-page-body');
  }, []);

  return (
    <div className="menu-page">
      
      {/* Section 1: Açaí Cups */}
      <section className="menu-section-container">
        <h1 className="section-title-minimal">ACAÍ CUPS</h1>
        <div className="menu-grid-minimal">
          {acaiCups.map(item => (
            <div key={item.id} className="menu-item-minimal">
              <div className="image-wrapper-minimal">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={600}
                  className="image-minimal"
                  priority={item.id === 'para-classic'}
                />
              </div>
              <div className="info-minimal">
                <h2 className="item-title-minimal">{item.title}</h2>
                <p className="item-description-minimal" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                <p className="item-price-minimal" style={{ whiteSpace: 'pre-line' }}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Smoothies */}
      <section className="menu-section-container">
        <h1 className="section-title-minimal">SMOTHIES</h1>
        <div className="menu-grid-minimal">
          {smoothies.map(item => (
            <div key={item.id} className="menu-item-minimal">
              <div className="image-wrapper-minimal">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={600}
                  className="image-minimal"
                />
              </div>
              <div className="info-minimal">
                <h2 className="item-title-minimal">{item.title}</h2>
                <p className="item-description-minimal" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                {item.price && <p className="item-price-minimal" style={{ whiteSpace: 'pre-line' }}>{item.price}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
