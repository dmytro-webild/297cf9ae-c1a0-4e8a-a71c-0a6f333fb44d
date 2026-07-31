import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import HeroSplitVerticalMarqueeTall from '@/components/sections/hero/HeroSplitVerticalMarqueeTall';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarqueeTall
      tag="African Hospitality. Global Aviation Excellence."
      title="Reliable Flight Support Across Africa"
      description="24/7 Flight Support, Permit Coordination, Ground Handling, Fuel Arrangements and Operational Solutions for Business Aviation."
      primaryButton={{
        text: "Request Flight Support",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Contact Operations",
        href: "#contact",
      }}
      leftItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/airplane-flying-mountain-range-high-speed-generative-ai_188544-9182.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-caucasian-brunette-red-jacket-looks-thoughtfully-into-camera-pointing-her-finger-empty-pink-space-advertising-concept_197531-31382.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/japanese-subway-system-passenger-information-display-screen_23-2148954783.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pilot-air-hostess-walking-with-their-trolley-bags_107420-85061.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-metallic-airplane_23-2151113188.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/senior-company-manager-visiting-employees-factory-plant-talking-one-workers_637285-4156.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-logistic-center_23-2148902562.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-vintage-single-engine-aircraft-with-propeller-flying-farm-landscape_181624-50132.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-engineer-working-field-engineers-day-celebration_23-2151615083.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/control-table-spacecraft-from-inside_23-2151828183.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-bride-shoulders-military-men_1304-3555.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/business-man-holding-cup-champagne_23-2148245039.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesMediaCarousel
      tag="Our Expertise"
      title="Global Aviation Services"
      description="Comprehensive operational support tailored to the highest international standards."
      items={[
        {
          title: "Flight Support",
          description: "Seamless mission planning and execution.",
          buttonIcon: "Plane",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-copilot-flying-airplane-cockpit-with-captain-using-lever-power-buttons-takeoff-aircrew-member-pushing-dashboard-control-command-switch-fly-close-up_482257-51158.jpg",
        },
        {
          title: "Flight Planning",
          description: "Expert routing and performance analysis.",
          buttonIcon: "Map",
          imageSrc: "http://img.b2bpic.net/free-photo/control-table-spacecraft-from-inside_23-2151828164.jpg",
        },
        {
          title: "VIP Assistance",
          description: "Luxury handling and personalized service.",
          buttonIcon: "Star",
          imageSrc: "http://img.b2bpic.net/free-photo/airplane-seats-cabin-filtered-image-processed-vintage_1232-4304.jpg",
        },
        {
          title: "Fuel Coordination",
          description: "Reliable refueling anywhere in Africa.",
          buttonIcon: "Droplets",
          imageSrc: "http://img.b2bpic.net/free-photo/engineer-working-with-airplane_1098-12552.jpg",
        },
        {
          title: "Crew Services",
          description: "Support for your pilots and passengers.",
          buttonIcon: "Users",
          imageSrc: "http://img.b2bpic.net/free-photo/female-customer-talking-mobile_1170-1571.jpg",
        },
        {
          title: "Cargo Support",
          description: "Efficient logistics for heavy operations.",
          buttonIcon: "Package",
          imageSrc: "http://img.b2bpic.net/free-photo/airplane-track-front-view-generative-ai_188544-7895.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="coverage" data-section="coverage">
    <SectionErrorBoundary name="coverage">
          <FeaturesImageBento
      tag="Our Operational Footprint"
      title="Serving Africa & International Operations"
      description="Strategic presence across major West African aviation hubs."
      items={[
        {
          title: "Senegal",
          description: "Dakar HQ",
          imageSrc: "http://img.b2bpic.net/free-photo/sky-april-18-2024_58702-17153.jpg",
        },
        {
          title: "Mauritania",
          description: "Operations",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-copilot-holding-lever-takeoff-with-airplane-flying-aircraft-with-dashboard-power-buttons-control-panel-command-radar-navigation-windscreen-compass-close-up_482257-50406.jpg",
        },
        {
          title: "Cape Verde",
          description: "Transit Support",
          imageSrc: "http://img.b2bpic.net/free-photo/asian-girl-walking-street-reading-tablet-drinking-coffee-outdoors_1258-193184.jpg",
        },
        {
          title: "Morocco",
          description: "Regional Hub",
          imageSrc: "http://img.b2bpic.net/free-photo/comic-style-airplane-illustration_23-2151813606.jpg",
        },
        {
          title: "Guinea",
          description: "Ground Handling",
          imageSrc: "http://img.b2bpic.net/free-photo/sports-plane-air-racing-render-3d-illustration_654080-72.jpg",
        },
        {
          title: "Ivory Coast",
          description: "Landing Support",
          imageSrc: "http://img.b2bpic.net/free-photo/black-white-portrait-working-woman-celebration-labour-day_23-2151296010.jpg",
        },
        {
          title: "Nigeria",
          description: "Key Market",
          imageSrc: "http://img.b2bpic.net/free-photo/supply-chain-representation-with-transportation-vehicles_52683-99738.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="African Hospitality. Global Aviation Excellence."
      descriptions={[
        "Teranga Jets is the premier flight support provider based in Dakar, Senegal. We combine traditional African hospitality with rigorous international standards to ensure seamless operations across the continent.",
        "Our team consists of industry veterans committed to operational excellence. We serve private jet operators, cargo providers, and MEDEVAC specialists with personalized, 24/7 service that sets a new benchmark for trip support.",
        "Trust Teranga Jets as your strategic partner in African aviation. We handle the complexities so you can focus on your mission.",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Performance Highlights"
      title="Operational Excellence"
      description="Proven capability and dedication to mission success."
      metrics={[
        {
          value: "24/7",
          title: "Dedicated Support",
          features: [
            "Real-time updates",
            "Instant communication",
          ],
        },
        {
          value: "15+",
          title: "Countries Served",
          features: [
            "Deep local knowledge",
            "Permit efficiency",
          ],
        },
        {
          value: "99.9%",
          title: "Uptime Reliability",
          features: [
            "Operational stability",
            "Proven consistency",
          ],
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
      tag="Client Success"
      title="Trusted by Aviation Leaders"
      description="Hear what our global partners say about Teranga Jets."
      testimonials={[
        {
          name: "Marcello V.",
          role: "Operations Manager",
          company: "Global Charters",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/joyful-young-bald-call-center-man-wearing-headset-sitting-desk-with-work-tools-looking-laptop-showing-thumb-up-isolated-purple_141793-84110.jpg",
        },
        {
          name: "Sarah L.",
          role: "Dispatch Director",
          company: "Jet Solutions",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/senior-business-woman-smiling_1187-1564.jpg",
        },
        {
          name: "David K.",
          role: "CEO",
          company: "Africa Aero",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/brainstorming-with-colleague-middle-deck_1098-14320.jpg",
        },
        {
          name: "Elena R.",
          role: "Flight Coordinator",
          company: "MEDEVAC Int",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/soldier-camouflage-uniform-wearing-protective-gloves-mask-showing-stop-sign-hospital-entrance_342744-922.jpg",
        },
        {
          name: "James B.",
          role: "Logistics Lead",
          company: "Cargo Wings",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-flight-attendant-studio_23-2150312725.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Our Network"
      title="Serving Leading Aviation Brands"
      description="We partner with top-tier operators worldwide."
      names={[
        "Global Jet",
        "Aero Africa",
        "SkyLogistics",
        "MedAir",
        "CharterFly",
        "Business Jets Int",
        "Dakar Aero Services",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Common Queries"
      title="Operational Support FAQ"
      description="Clear answers to your aviation support questions."
      categories={[
        {
          name: "Permits",
          items: [
            {
              question: "How fast can you secure permits?",
              answer: "Our dedicated dispatch team works in real-time with local authorities to expedite permits.",
            },
          ],
        },
        {
          name: "Support",
          items: [
            {
              question: "Are you available 24/7?",
              answer: "Yes, our Operations Center is fully staffed at all times to handle urgent requests.",
            },
          ],
        },
        {
          name: "Hospitality",
          items: [
            {
              question: "Do you offer crew support?",
              answer: "We provide premium crew assistance including transport and VIP concierge services.",
            },
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to fly?"
      text="Get 24/7 Flight Support, Permits and Ground Handling with Teranga Jets. Experience the Teranga difference today."
      primaryButton={{
        text: "Contact Operations",
        href: "mailto:ops@terangajets.com",
      }}
      secondaryButton={{
        text: "WhatsApp Support",
        href: "https://wa.me/221000000000",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
