// Created by add_section_from_catalog (HeroBillboardTiltedCarousel).

import React from 'react';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBillboardTiltedCarousel
        primaryButton={{"href":"#contact","text":"Request Support Now"}}
        items={[{"imageSrc":"https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop"},{"imageSrc":"https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=1000&auto=format&fit=crop"},{"imageSrc":"https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop"},{"imageSrc":"https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop"},{"imageSrc":"https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=1000&auto=format&fit=crop"},{"imageSrc":"https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop"}]}
        title="Reliable Flight Support Across Africa"
        secondaryButton={{"href":"#contact","text":"Contact 24/7 Operations"}}
        tag="African Hospitality. Global Aviation Excellence."
        description="24/7 Flight Support, Permit Coordination, Ground Handling, Fuel Arrangements and Operational Solutions for Business Aviation."
        textAnimation="slide-up"
      />
    </div>
  );
}
