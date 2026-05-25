'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import '../menu.css';

const acaiCups = [
  {
    id: 'para-classic',
    title: 'PARA CLASSIC',
    image: '/menu/para-classic.png',
    description: 'Pure organic açaí with organic tapioca pearls and raw sugar cane syrup, served in its most authentic northern form.'
  },
  {
    id: 'amazon',
    title: 'AMAZON',
    image: '/menu/amazon.png',
    description: 'Organic açaí blended with wild guarana, cupuaçu cream, crunchy brazil nuts, and fresh banana slices.'
  },
  {
    id: 'brasilia',
    title: 'BRASILIA',
    image: '/menu/brasilia.png',
    description: 'Organic açaí topped with nutrient-dense hemp seeds, sliced kiwi, fresh strawberries, and almond butter.'
  },
  {
    id: 'buzios',
    title: 'BUZIOS',
    image: '/menu/buzios.png',
    description: 'Organic açaí paired with fresh mango slices, toasted coconut flakes, artisan granola, and a passion fruit drizzle.'
  },
  {
    id: 'tancoso',
    title: 'TANCOSO',
    image: '/menu/tancoso.png',
    description: 'Organic açaí with ripe raspberries, fresh dragonfruit slices, raw honeycomb, and organic chia seeds.'
  },
  {
    id: 'recife',
    title: 'RECIFE',
    image: '/menu/recife.png',
    description: 'Organic açaí layered with sweet condensed milk, fresh strawberries, crunchy granola, and crushed peanuts.'
  },
  {
    id: 'sao-paolo',
    title: 'SAO PAOLO',
    image: '/menu/sao-paolo.png',
    description: 'Organic açaí infused with premium whey protein, peanut butter, artisan granola, fresh banana, and cocoa nibs.'
  },
  {
    id: 'create',
    title: 'CREATE',
    image: '/menu/create.jpeg',
    description: 'Our signature organic açaí base ready to be customized with your choice of premium ingredients.'
  }
];

const smoothies = [
  {
    id: 'tiara',
    title: 'TIARA',
    image: '/menu/tiara.png',
    description: 'Organic açaí swirled with Greek yogurt, wild blueberries, fresh blackberries, and finished with edible gold flakes.'
  },
  {
    id: 'fortaleza',
    title: 'FORTALEZA',
    image: '/menu/fortaleza.jpg.jpeg',
    description: 'Organic açaí served with sweet golden pineapple, roasted cashew nuts, shredded coconut, and fresh mint.'
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
                <p className="item-description-minimal">{item.description}</p>
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
                <p className="item-description-minimal">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
