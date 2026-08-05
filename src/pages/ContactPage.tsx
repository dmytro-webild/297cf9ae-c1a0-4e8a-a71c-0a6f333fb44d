import React, { useState } from "react";
import FeaturesIconCards from "@/components/sections/features/FeaturesIconCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-svh bg-background text-foreground">
      <section className="px-4 max-w-content-width mx-auto">
        <div className="text-center max-w-content-width mx-auto">
          <Tag text="Operations & Support" className="mb-4 mx-auto" />
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Our Operations Team</h1>
          <p className="text-lg text-muted-foreground">
            Available 24/7 for Flight Support, Permits, Ground Handling and Operational Assistance across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-card border border-border rounded-theme p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-6">Submit Flight Request</h2>
            {submitted ? (
              <div className="p-6 bg-primary-cta/10 text-primary-cta rounded-xl text-center">
                <p className="font-semibold text-lg">Request Received</p>
                <p className="text-sm mt-2">Our operations desk is reviewing your parameters and will respond within minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">Full Name *</label>
                    <Input placeholder="Capt. Alex Mercer" required />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">Company / Operator *</label>
                    <Input placeholder="Global Aviation Services" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">Email Address *</label>
                    <Input type="email" placeholder="ops@operator.com" required />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">Phone / WhatsApp *</label>
                    <Input placeholder="+1 (281) 707-4824" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">Aircraft Registration</label>
                    <Input placeholder="e.g. N123TJ / 5X-AAA" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">Services Required</label>
                    <Input placeholder="Overflight permit, Fuel, Handling" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground block mb-1">Message / Flight Details *</label>
                  <Textarea placeholder="Route, ETD, ETA, passenger count, special handling requirements..." rows={4} required />
                </div>
                <Button text="Request Flight Support" className="w-full justify-center" />
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-border rounded-theme p-6 space-y-4">
              <h2 className="text-xl font-semibold">Operations Center</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium">Primary Hub</p>
                  <p className="text-muted-foreground">Dakar, Senegal (DKR / GOBD)</p>
                </div>
                <div>
                  <p className="font-medium">Availability</p>
                  <p className="text-muted-foreground">24/7 Continuous Flight Watch</p>
                </div>
                <div>
                  <p className="font-medium">Direct Email</p>
                  <a href="mailto:ops@terangajets.com" className="text-primary-cta hover:underline">ops@terangajets.com</a>
                </div>
                <div>
                  <p className="font-medium">WhatsApp Support</p>
                  <a href="https://wa.me/12817074824" target="_blank" rel="noreferrer" className="text-primary-cta hover:underline">+1 281 707 4824 (Click to Chat)</a>
                </div>
                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-muted-foreground">Typically within minutes</p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-theme overflow-hidden h-48 bg-card">
              <iframe
                title="Dakar Operations Center Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345!2d-17.46768!3d14.73972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f3d242ef9d%3A0xb30cfd3d63bd1851!2sDakar%2C%20Senegal!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                className="w-full h-full border-0 opacity-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <FeaturesIconCards
        tag="Why Teranga Jets"
        title="Why Contact Teranga Jets?"description="Experience swift, reliable operational coordination tailored for mission-critical flights across Africa."
        features={[
          { icon: "⚡", title: "Fast Response", description: "Permit processing and dispatch initiated instantly upon request." },
          { icon: "👤", title: "Dedicated Point of Contact", description: "Direct access to senior flight dispatchers managing your trip." },
          { icon: "🌍", title: "Local Expertise", description: "Deep relationships with African civil aviation authorities and ground crews." },
          { icon: "🛡️", title: "International Standards", description: "Strict safety adherence conforming to global aviation requirements." }
        ]}
        textAnimation="slide-up"
      />

      <ContactCta
        tag="Ready to Fly"
        text="Ready for Your Next Mission? Our Operations Team is available 24/7 to support your flights across Africa."
        primaryButton={{ text: "Request Flight Support", href: "/contact" }}
        secondaryButton={{ text: "WhatsApp Ops Desk", href: "https://wa.me/12817074824" }}
        textAnimation="slide-up"
      />
    </div>
  );
}