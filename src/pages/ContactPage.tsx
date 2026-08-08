import React from "react";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import FeaturesSection from './ContactPage/sections/Features';
import ContactSection from './ContactPage/sections/Contact';

export default function ContactPage(): React.JSX.Element {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <section className="px-4 w-content-width mx-auto">
        <div className="text-center max-w-content-width mx-auto">
          <Tag text="Operations & Support" className="mb-4 mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Our Operations Team</h1>
          <p className="text-lg text-muted-foreground">
            Available 24/7 for Flight Support, Permits, Ground Handling and Operational Assistance across Africa.
          </p>
        </div>

        {/* Clean 2-option contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-content-width mx-auto">
          {/* Option 1: Email */}
          <div className="bg-card border border-border/50 rounded-xl p-8 flex flex-col justify-between items-start hover:border-primary-cta/50 transition-colors">
            <div className="space-y-4 w-full">
              <div className="w-12 h-12 rounded-lg bg-primary-cta/10 flex items-center justify-center text-primary-cta">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Email Desk</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Send flight requests, permit applications, or handling inquiries directly to our 24/7 operational team.
                </p>
                <a
                  href="mailto:ops@terangajets.com"
                  className="text-xl font-semibold text-primary-cta hover:underline inline-flex items-center gap-2 break-all"
                >
                  ops@terangajets.com
                </a>
              </div>
            </div>
            <div className="mt-6 w-full">
              <Button
                text="Send Direct Email"
                href="mailto:ops@terangajets.com"
                variant="primary"
                className="w-full justify-center"
              />
            </div>
          </div>

          {/* Option 2: WhatsApp / Phone */}
          <div className="bg-card border border-border/50 rounded-xl p-8 flex flex-col justify-between items-start hover:border-primary-cta/50 transition-colors">
            <div className="space-y-4 w-full">
              <div className="w-12 h-12 rounded-lg bg-primary-cta/10 flex items-center justify-center text-primary-cta">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">WhatsApp Support</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect instantly with our dispatchers for urgent operational requests and live flight watch assistance.
                </p>
                <a
                  href="https://wa.me/12817074824"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl font-semibold text-primary-cta hover:underline inline-flex items-center gap-2"
                >
                  +1 (281) 707-4824
                </a>
              </div>
            </div>
            <div className="mt-6 w-full">
              <Button
                text="Chat on WhatsApp"
                href="https://wa.me/12817074824"
                variant="secondary"
                className="w-full justify-center"
              />
            </div>
          </div>
        </div>

        {/* Operations Hub Detail & Map */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-content-width mx-auto">
          <div className="md:col-span-5 bg-card border border-border/50 rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold">Operations Center</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-cta shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Primary Hub</p>
                  <p className="text-muted-foreground">Dakar, Senegal (DKR / GOBD)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary-cta shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Availability</p>
                  <p className="text-muted-foreground">24/7 Continuous Flight Watch</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 border border-border/50 rounded-xl overflow-hidden h-48 bg-card">
            <iframe
              title="Dakar Operations Center Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345!2d-17.46768!3d14.73972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f3d242ef9d%3A0xb30cfd3d63bd1851!2sDakar%2C%20Senegal!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
              className="w-full h-full border-0 opacity-80"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <FeaturesSection />
      <ContactSection />
    </div>
  );
}