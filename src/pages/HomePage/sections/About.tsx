import React from 'react';
import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function AboutSection(): React.JSX.Element {
  return (
    <div id="about" data-section="about" data-webild-section="about">
        <SectionErrorBoundary name="about">
              <AboutFeaturesSplit
        tag="Our Expertise"
        title="Flight Support Across Africa"
        description="Seamless mission planning and execution."
        items={[
          {
            icon: "Plane",
            title: "Flight Support",
            description: "Seamless mission planning and execution."
          },
          {
            icon: "Globe",
            title: "Overflight Permits",
            description: "Expedited clearance across all African airspaces."
          },
          {
            icon: "Fuel",
            title: "Fuel Coordination",
            description: "Reliable Jet A-1 supply at competitive rates."
          }
        ]}
        imageSrc="http://img.b2bpic.net/free-photo/african-american-copilot-holding-lever-takeoff-with-airplane-flying-aircraft-with-dashboard-power-buttons-control-panel-command-radar-navigation-windscreen-compass-close-up_482257-50406.jpg"
        textAnimation="slide-up"
      />
        </SectionErrorBoundary>
      </div>
  );
}
