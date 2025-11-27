import React from 'react';
import { Hero } from '../components/Hero';
import { Check } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Venue: React.FC = () => {
  return (
    <>
      <Hero
        title="Celebrations on the Field."
        subtitle="Located in Bapsfontein, just 20 minutes from the airport but a world away from the city noise."
        backgroundImage="https://static.wixstatic.com/media/da684c_b1b34ccf87ae4bef842c815f174a5609~mv2.jpg"
        primaryCta="Enquire Now"
      />

      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">A Canvas for Excellence.</h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Our manicured lawns and rustic clubhouse offer a versatile canvas for your most important moments.
                Whether it's a high-stakes corporate launch or a dream countryside wedding, the backdrop of horses and highveld sunsets is unmatched.
              </p>

              <ul className="space-y-4">
                {[
                  "Marquee capacity for 500+ guests",
                  "Secure parking for 200 vehicles",
                  "Wheelchair accessible facilities",
                  "Stunning Highveld sunsets"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <div className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center text-foreground">
                      <Check size={14} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-10 px-8 py-4 bg-[#2F3E32] text-white dark:bg-[#3B5341] dark:text-white rounded-full font-bold hover:opacity-90 transition-opacity">
                Download Venue Brochure
              </button>
            </ScrollReveal>
          </div>

          <div className="lg:w-1/2 w-full h-[600px] rounded-3xl overflow-hidden relative">
            <ScrollReveal delay={0.2} className="h-full">
              <img
                src="https://static.wixstatic.com/media/da684c_ffa983e57d7f4193806a8569c114185b~mv2.jpg"
                alt="Venue Setup"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};