import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Contact } from '../components/Contact';

export const ContactPage: React.FC = () => {
  return (
    <>
      <Hero
        title={<><span className="font-serif text-white italic drop-shadow-lg">Visit</span> Us.</>}
        subtitle="Experience the thrill firsthand. Join us at the heart of the Highveld's equestrian corridor."
        backgroundImage="https://static.wixstatic.com/media/da684c_1f8cbb774b324d089adf1731299897bf~mv2.jpg"
        primaryCta="Start Your Journey"
        secondaryCta="Get Directions"
      />

      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">

          {/* Left: Map */}
          <div className="h-[500px] lg:h-auto rounded-3xl overflow-hidden bg-secondary border border-border relative">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=East+Rand+Polo+Club&hl=en&z=14&output=embed"
              className="filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center space-y-12 p-4 lg:p-12">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-foreground">Get in Touch.</h1>
              <p className="text-xl text-muted">75 Polo Dr, Elandsfontein AH, Kempton Park.</p>
              <p className="text-sm text-muted mt-2 font-mono">GPS: -25.98629, 28.37305</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1">Phone</p>
                  <p className="text-lg font-medium text-foreground">+27 82 731 9600</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1">Email</p>
                  <p className="text-lg font-medium text-foreground">dmellis@mweb.co.za</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-foreground" />
                <h3 className="font-bold text-foreground">Opening Hours</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-foreground/10 pb-2">
                  <span className="text-muted">Mon - Tue</span>
                  <span className="text-foreground font-medium">Closed</span>
                </div>
                <div className="flex justify-between border-b border-foreground/10 pb-2">
                  <span className="text-muted">Wed</span>
                  <span className="text-foreground font-medium">Open (Variable)</span>
                </div>
                <div className="flex justify-between border-b border-foreground/10 pb-2">
                  <span className="text-muted">Thu</span>
                  <span className="text-foreground font-medium">2:00 PM – 5:30 PM</span>
                </div>
                <div className="flex justify-between border-b border-foreground/10 pb-2">
                  <span className="text-muted">Fri</span>
                  <span className="text-foreground font-medium">Closed</span>
                </div>
                <div className="flex justify-between border-b border-foreground/10 pb-2">
                  <span className="text-muted">Sat</span>
                  <span className="text-foreground font-medium">2:00 PM – 5:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Sun</span>
                  <span className="text-foreground font-medium">11:00 AM – 5:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact title="Let's Talk!" />
    </>
  );
};