import { MapPin, Clock, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Coverage", href: "#coverage" },
    { name: "Why Choose Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <StyleProvider buttonVariant="bubble" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="TERANGA JETS"
      logoImageSrc="https://storage.googleapis.com/webild/users/user_3HFlmSIspXi2PPGG9NQeYj5TjjC/uploaded-1785521020960-pbcidjb1.png"
      ctaButton={{
        text: "Request Flight Support",
        href: "/contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <a
        href="https://wa.me/19714476728"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-105 transition-all duration-300 group"
      >
        <MessageCircle className="w-7 h-7 fill-current stroke-none" />
      </a>
      <SectionErrorBoundary name="footer">
        <footer data-section="footer" aria-label="Site footer" className="w-full bg-[#0B1F3A] text-white pt-20 pb-12 border-t border-white/10 relative z-10">
          <div className="w-content-width mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
              {/* Brand & Description Column */}
              <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://storage.googleapis.com/webild/users/user_3HFlmSIspXi2PPGG9NQeYj5TjjC/uploaded-1785521020960-pbcidjb1.png"
                    alt="Teranga Jets"
                    className="h-16 w-auto object-contain shrink-0"
                  />
                  <div>
                    <span className="text-2xl font-bold tracking-wider text-white uppercase block leading-none">TERANGA JETS</span>
                    <span className="text-[10px] font-semibold tracking-widest text-[#C9A227] uppercase mt-1 block">
                      African Hospitality. Global Aviation Excellence.
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed max-w-sm my-4">
                  Premium Flight Support, Trip Support, Ground Handling and Permit Coordination across Africa.
                </p>

                <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 mt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>24/7 Operations Center Active</span>
                </div>
              </div>

              {/* 4 Nav Columns */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
                {/* Column 1: Company */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-semibold text-[#C9A227] uppercase tracking-wider border-b border-white/10 pb-2.5">
                    Company
                  </h3>
                  <ul className="flex flex-col gap-2.5 text-sm">
                    <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a></li>
                    <li><a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a></li>
                    <li><a href="#coverage" className="text-slate-300 hover:text-white transition-colors">Coverage</a></li>
                    <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>

                {/* Column 2: Services */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-semibold text-[#C9A227] uppercase tracking-wider border-b border-white/10 pb-2.5">
                    Services
                  </h3>
                  <ul className="flex flex-col gap-2.5 text-sm">
                    <li><a href="#services" className="text-slate-300 hover:text-white transition-colors">Flight Support</a></li>
                    <li><a href="#services" className="text-slate-300 hover:text-white transition-colors">Permits</a></li>
                    <li><a href="#services" className="text-slate-300 hover:text-white transition-colors">Ground Handling</a></li>
                    <li><a href="#services" className="text-slate-300 hover:text-white transition-colors">Fuel Coordination</a></li>
                    <li><a href="#services" className="text-slate-300 hover:text-white transition-colors">Flight Planning</a></li>
                  </ul>
                </div>

                {/* Column 3: Contact */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-semibold text-[#C9A227] uppercase tracking-wider border-b border-white/10 pb-2.5">
                    Contact
                  </h3>
                  <ul className="flex flex-col gap-3 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <span>Dakar, Senegal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C9A227] shrink-0" />
                      <span>24/7 Operations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                      <a href="mailto:ops@terangajets.com" className="hover:text-white transition-colors">Email</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-[#C9A227] shrink-0" />
                      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
                    </li>
                  </ul>
                </div>

                {/* Column 4: Follow Us */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-semibold text-[#C9A227] uppercase tracking-wider border-b border-white/10 pb-2.5">
                    Follow Us
                  </h3>
                  <ul className="flex flex-col gap-2.5 text-sm">
                    <li>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5">
                        <span>LinkedIn</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A227]" />
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5">
                        <span>Instagram</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A227]" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <p>© 2026 Teranga Jets. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span className="text-white/20">•</span>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
      </SectionErrorBoundary>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </StyleProvider>
  );
}