// Created by add_section_from_catalog (HeroBillboardScroll).

import React from 'react';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBillboardScroll
        title="Reliable Flight Support Across Africa"
        tag="African Hospitality. Global Aviation Excellence."
        textAnimation="slide-up"
        description="24/7 Flight Support, Landing & Overflight Permits, Ground Handling and Fuel Coordination Across Africa."
        secondaryButton={{"text":"Contact 24/7 Operations","href":"#contact"}}
        imageSrc="https://picsum.photos/seed/1857990520/1200/800"
        primaryButton={{"text":"Request Support Now","href":"#contact"}}
      />
    </div>
  );
}
