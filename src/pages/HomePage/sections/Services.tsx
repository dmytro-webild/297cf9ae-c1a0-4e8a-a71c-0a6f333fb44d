// Created by add_section_from_catalog (FeaturesBorderGlow).

import React from 'react';
import FeaturesBorderGlow from '@/components/sections/features/FeaturesBorderGlow';

export default function ServicesSection(): React.JSX.Element {
  return (
    <div data-webild-section="services" data-section="services" id="services">
      <FeaturesBorderGlow
        description="Comprehensive operational support tailored to the highest international standards."
        title="Global Aviation Services"
        features={[{"description":"Seamless mission planning and execution.","title":"Flight Support","icon":"Plane"},{"title":"Overflight & Landing Permits","description":"Expedited overflight and landing clearances.","icon":"FileText"},{"title":"Ground Handling","icon":"Briefcase","description":"Comprehensive ground handling coordination."},{"description":"Reliable refueling anywhere in Africa.","icon":"Droplets","title":"Fuel Coordination"},{"description":"Expert routing and performance analysis.","title":"Flight Planning","icon":"Map"},{"icon":"Users","title":"Crew Services","description":"Support for your pilots and passengers."},{"icon":"Eye","title":"Airport Supervision","description":"On-site supervision for critical operations."},{"icon":"PlaneTakeoff","description":"Charter coordination and management.","title":"Charter"},{"title":"Cargo","icon":"Package","description":"Efficient logistics for heavy operations."},{"icon":"HeartPulse","description":"Specialized support for medical flights.","title":"Medevac Support"}]}
        textAnimation="fade-blur"
        tag="Our Expertise"
      />
    </div>
  );
}
