import React from 'react';
import { Award, Wine, Users, Shield, ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import { ServiceCardProps } from '../types';

export const BentoCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, tags, cta, className, children, backgroundImage }) => {
  // Common Classes for both layouts
  const baseClasses = `group relative bg-card border border-cardBorder rounded-3xl p-8 flex flex-col h-full overflow-hidden hover:border-foreground/20 transition-all duration-300 ${className}`;

  // Text Colors based on background presence
  const textColor = backgroundImage ? 'text-white' : 'text-card-foreground';
  const descColor = backgroundImage ? 'text-gray-200' : 'text-muted';
  const iconBg = backgroundImage ? 'bg-white/20 backdrop-blur-md border-white/30 text-white' : 'bg-foreground/5 border-foreground/10 group-hover:bg-foreground/10 text-foreground';
  const iconColor = backgroundImage ? 'text-white' : 'text-foreground';
  const tagBg = backgroundImage ? 'bg-white/10 border-white/20 text-gray-200 backdrop-blur-sm' : 'bg-foreground/5 border-foreground/5 text-muted-foreground';

  return (
    <div className={baseClasses}>

      {/* Background Layer */}
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
          />
          {/* Premium Vignette: 90% opacity at bottom for text pop, fading to clear at top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 via-40% to-transparent z-0 pointer-events-none"></div>
        </>
      )}

      {/* Content Container - Forces Full Height & Spacing */}
      <div className="relative z-10 flex flex-col justify-between h-full">

        {/* Top Section: Icon (Always at top) + Text (Only if Standard Card) */}
        <div>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 border transition-colors ${iconBg}`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>

          {/* Standard Layout: Text sits at the top under the icon */}
          {!backgroundImage && (
            <>
              <h3 className={`text-2xl font-semibold mb-3 ${textColor}`}>
                {title}
              </h3>
              <p className={`leading-relaxed text-sm md:text-base ${descColor}`}>
                {description}
              </p>
              {tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.map((tag, i) => (
                    <span key={i} className={`text-xs px-3 py-1 rounded-full border ${tagBg}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Bottom Section: CTA/Children + Text (Only if Image Card) */}
        <div className="mt-auto">

          {/* Image Layout: Text sits at the bottom for readability against vignette */}
          {backgroundImage && (
            <div className="mb-4">
              <h3 className={`text-2xl font-semibold mb-2 ${textColor} drop-shadow-md`}>
                {title}
              </h3>
              <p className={`leading-relaxed text-sm md:text-base ${descColor} drop-shadow-sm font-medium`}>
                {description}
              </p>
              {tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.map((tag, i) => (
                    <span key={i} className={`text-xs px-3 py-1 rounded-full border ${tagBg}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Actions / Children Components */}
          <div className="pt-2">
            {cta && (
              cta === "Get Directions" ? (
                <a
                  href="https://www.google.com/maps/search/?api=1&query=East+Rand+Polo+Club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-sm font-medium group-hover:underline underline-offset-4 ${textColor} decoration-current/30`}
                >
                  {cta} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <button className={`flex items-center text-sm font-medium group-hover:underline underline-offset-4 ${textColor} decoration-current/30`}>
                  {cta} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              )
            )}
            {children}
          </div>
        </div>
      </div>

      {/* Ambient Glow for Standard Cards */}
      {!backgroundImage && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-foreground/10 transition-all duration-500 pointer-events-none"></div>
      )}
    </div>
  );
};

export const HomeBentoGrid: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-foreground/50"></span>
            <span className="text-sm font-medium text-muted uppercase tracking-widest">A RIDERS JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">The path unfolds.</h2>
          <p className="text-muted text-lg max-w-2xl">Every adventure begins with a single step forward. Discover what makes East Rand Polo Club unique.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {/* Card 1: Academy - Top Left */}
          <BentoCard
            title="Learn from Springboks."
            description='Partnered with Rocking Four Academy, we take you from spectator to player. Under the guidance of the Evans brothers, learn on safe "schoolmaster" ponies.'
            icon={Award}
            className="md:row-span-2 min-h-[400px]"
            backgroundImage="https://static.wixstatic.com/media/da684c_99d5e0d1b7a9478db03fa89bdb8c1cd6~mv2.jpg"
          >
            <div className="flex justify-between text-xs mb-2 text-gray-200 mt-2">
              <span className="font-medium">Beginner</span>
              <span className="font-medium">Pro</span>
            </div>
            <div className="h-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
              <div className="h-full w-2/3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
            </div>
            <p className="text-xs text-gray-200 mt-2 font-medium">Rider Proficiency Track</p>
          </BentoCard>

          {/* Card 2: Venue - Top Right */}
          <BentoCard
            title="Sunset & Champagne."
            description="A countryside escape just 20 mins from OR Tambo Airport. The perfect canvas for sunset weddings, art showcases, and executive corporate days."
            icon={Wine}
            tags={["Capacity: 500+ Guests"]}
            backgroundImage="https://static.wixstatic.com/media/da684c_ffa983e57d7f4193806a8569c114185b~mv2.jpg"
          />

          {/* Card 3: Membership - Bottom Left (visually in grid flow) */}
          <BentoCard
            title="Join the Legacy."
            description='A community described by members as "calm, beautiful, and welcoming." From the prestigious Diamond Ladies Open to Sunday family picnics.'
            icon={Shield}
            backgroundImage="https://static.wixstatic.com/media/da684c_641604706d6d42bb81a28531c5c560ae~mv2.png"
            tags={["Social & Playing Members"]}
          />

          {/* Card 4: Community - Custom Layout with Image Carousel */}
          <div className="md:col-span-2 min-h-[300px] group relative bg-card border border-cardBorder rounded-3xl overflow-hidden hover:border-foreground/20 transition-all duration-300">
            {/* Content Grid: Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

              {/* Left Side: Text Content */}
              <div className="relative z-10 flex flex-col justify-between p-8">
                {/* Top Section: Icon + Text */}
                <div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 border transition-colors bg-foreground/5 border-foreground/10 group-hover:bg-foreground/10 text-foreground">
                    <Users className="w-6 h-6 text-foreground" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                    The Sunday Ritual.
                  </h3>
                  <p className="leading-relaxed text-sm md:text-base text-muted">
                    Experience the thunder of hooves every Sunday from 11:00 AM. Cash bar, food vendors, and a dedicated kids' play area.
                  </p>
                </div>

                {/* Bottom Section: CTA */}
                <div className="pt-2 mt-4">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=East+Rand+Polo+Club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium group-hover:underline underline-offset-4 text-card-foreground decoration-current/30"
                  >
                    Get Directions <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Side: Image Carousel */}
              <div className="relative overflow-hidden p-4">
                <div
                  id="sunday-carousel"
                  className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
                  style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                  {[
                    '/Boy-on-horse.jpg',
                    '/Braai-masters.jpg',
                    '/Kids-brushing-a-horse.jpg',
                    '/Polo-match-chase.jpg',
                    '/Pro-polo-player.jpg',
                    '/polo-kids.jpg'
                  ].map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-[200px] h-[250px] snap-start">
                      <img
                        src={image}
                        alt={`Sunday Ritual ${index + 1}`}
                        className="w-full h-full object-cover rounded-2xl border border-foreground/10"
                        onError={(e) => {
                          console.log('Image failed to load:', image);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => {
                    const carousel = document.getElementById('sunday-carousel');
                    if (carousel) {
                      carousel.scrollBy({ left: -220, behavior: 'smooth' });
                    }
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-foreground/10 hover:bg-foreground/20 backdrop-blur-sm rounded-full p-2 border border-foreground/20 transition-all"
                  aria-label="Previous images"
                >
                  <ChevronRight className="w-4 h-4 text-foreground rotate-180" />
                </button>

                <button
                  onClick={() => {
                    const carousel = document.getElementById('sunday-carousel');
                    if (carousel) {
                      carousel.scrollBy({ left: 220, behavior: 'smooth' });
                    }
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-foreground/10 hover:bg-foreground/20 backdrop-blur-sm rounded-full p-2 border border-foreground/20 transition-all animate-pulse"
                  aria-label="Next images"
                >
                  <ChevronRight className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-foreground/10 transition-all duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};