import React from 'react';
import { Clock, Send, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ContactProps {
  title?: string;
}

export const Contact: React.FC<ContactProps> = ({ title = "Get in touch." }) => {
  return (
    <section id="contact" className="py-24 px-4 bg-background transition-colors duration-300">
      {/* Outer Container: Secondary background (Dark gray in dark mode, light gray in light mode) */}
      <div className="max-w-7xl mx-auto rounded-[3rem] bg-secondary border border-border overflow-hidden relative transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Left Side: Form Card */}
          {/* In dark mode, this is White. In light mode, let's keep it White but ensure contrast against the secondary background. */}
          <div className="lg:col-span-5 bg-white p-8 md:p-12 lg:m-4 lg:rounded-[2.5rem] flex flex-col justify-center shadow-sm">
            <ScrollReveal>
              <div className="mb-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Member Support</p>
                <h3 className="text-3xl font-bold text-black mb-2">Let’s Saddle Up.</h3>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Your name *</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-black placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Email *</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-black placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Interest</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-black">
                    <option>Book a Lesson</option>
                    <option>Venue Hire</option>
                    <option>Membership Enquiry</option>
                    <option>General Info</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Message</label>
                  <textarea
                    rows={3}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-black placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                <button type="button" className="w-full bg-[#2F3E32] text-white dark:bg-[#3B5341] dark:text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-colors mt-2">
                  Send Enquiry <Send size={16} />
                </button>

                <p className="text-[10px] text-gray-400 text-center mt-4">By submitting, you agree to our Terms and Privacy Policy.</p>
              </form>
            </ScrollReveal>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center relative">
            {/* Background Texture - Using foreground opacity for subtle texture in both modes */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-foreground/5 via-transparent to-transparent pointer-events-none"></div>

            <ScrollReveal delay={0.2}>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground relative z-10">{title}</h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-md relative z-10">
                Whether for the Highveld Championships or a quiet drink at the clubhouse, we look forward to welcoming you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                <div className="bg-foreground/5 p-6 rounded-2xl border border-foreground/5">
                  <Clock className="w-6 h-6 text-foreground mb-4" />
                  <h4 className="text-foreground font-bold mb-1">Quick response</h4>
                  <p className="text-sm text-muted-foreground">Most messages receive a reply in under 24h.</p>
                </div>
                <div className="bg-foreground/5 p-6 rounded-2xl border border-foreground/5">
                  <CheckCircle2 className="w-6 h-6 text-foreground mb-4" />
                  <h4 className="text-foreground font-bold mb-1">Clear next steps</h4>
                  <p className="text-sm text-muted-foreground">We'll follow up with a concise plan and timeline.</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-foreground/10 relative z-10">
                <p className="text-sm text-muted-foreground mb-2 font-mono uppercase">Location</p>
                <p className="text-foreground text-lg">75 Polo Dr, Elandsfontein, Kempton Park</p>
                <p className="text-muted mt-1">admin@eastrandpoloclub.co.za</p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};