import React from 'react';
import { Hero } from '../components/Hero';
import { BentoCard } from '../components/BentoGrid';
import { Award, TrendingUp, Users } from 'lucide-react';

export const Academy: React.FC = () => {
  return (
    <>
      <Hero
        title="The School of Kings."
        subtitle="Powered by Rocking Four Polo Academy. The breeding ground for the next generation of South African players."
        backgroundImage="https://static.wixstatic.com/media/da684c_6068e1f50f844bcbbe84d0d9a42044f6~mv2.jpg"
        primaryCta="Book a Lesson"
        secondaryCta="View Fees"
      />

      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <BentoCard
              title="The Intro Clinic"
              description="For total beginners. We provide the horse, helmet, and mallet. Safe, fun, and addictive. R550 / Session."
              icon={Award}
              className="min-h-[350px]"
            />
            <BentoCard
              title="The Progression"
              description="Move from the wooden horse to the arena, and finally to the grass. Master the swing and the ride simultaneously."
              icon={TrendingUp}
              className="min-h-[350px]"
            />
            <BentoCard
              title="Corporate Days"
              description="Team building with a twist. Get your office out of the boardroom and into the saddle. No experience needed."
              icon={Users}
              className="min-h-[350px]"
            />
          </div>

          <div className="bg-secondary rounded-3xl p-12 text-center border border-border">
            <p className="text-2xl md:text-3xl font-serif italic text-foreground mb-6">
              "There is a polo school just across the road at Rocking Four, with Springbok players such as the Evans brothers who will take your level of polo higher."
            </p>
            <p className="text-muted font-medium uppercase tracking-wider">— Andres F. Perez (Local Guide)</p>
          </div>
        </div>
      </section>
    </>
  );
};