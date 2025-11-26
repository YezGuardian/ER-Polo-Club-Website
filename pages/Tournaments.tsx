import React from 'react';
import { Hero } from '../components/Hero';

const events = [
  { month: 'March', name: 'The Campbell & Bes Macnab Memorial', desc: 'Historic Tribute' },
  { month: 'May', name: 'Kego South African Polo Championships', desc: 'National High Goal' },
  { month: 'August', name: 'The Highveld League', desc: 'Regional Derby' },
  { month: 'September', name: 'The Diamond Ladies Polo Open', desc: 'Female Showcase' },
  { month: 'October', name: 'Gunsmoke Low Goal', desc: 'Development Tournament' },
];

export const Tournaments: React.FC = () => {
  return (
    <>
      <Hero 
        title="2025 Fixtures."
        subtitle="From high-goal adrenaline to the elegance of the Diamond Ladies Open."
        backgroundImage="https://static.wixstatic.com/media/da684c_641604706d6d42bb81a28531c5c560ae~mv2.png"
      />

      <section className="py-24 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {events.map((event, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all">
                <div className="md:w-32 flex-shrink-0">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-foreground/5 text-foreground font-semibold text-sm">
                    {event.month}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{event.name}</h3>
                  <p className="text-muted">{event.desc}</p>
                </div>
                <div>
                  <button className="text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-secondary rounded-2xl border border-border text-center">
             <p className="text-foreground font-medium">
               "Entry is free for most league matches. Tailgating and picnic baskets are welcome on Sundays."
             </p>
          </div>
        </div>
      </section>
    </>
  );
};