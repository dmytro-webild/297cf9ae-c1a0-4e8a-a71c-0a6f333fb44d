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
        secondaryButton={{"text":"Contact Us via WhatsApp","href":"https://wa.me/12817074824"}}
        imageSrc="https://storage.googleapis.com/webild/users/user_3HFlmSIspXi2PPGG9NQeYj5TjjC/uploaded-1785560602855-khql2znq.png"
        primaryButton={{"text":"Request Flight Support Now","href":"/contact"}}
      />
    </div>
  );
}
