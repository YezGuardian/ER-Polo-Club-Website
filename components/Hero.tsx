import React, { useState } from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  backgroundImage?: string;
  videoSrc?: string;
  showBadge?: boolean;
  primaryCta?: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
  tertiaryCta?: string;
  tertiaryCtaLink?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage = "https://static.wixstatic.com/media/da684c_1f8cbb774b324d089adf1731299897bf~mv2.jpg",
  videoSrc,
  showBadge = false,
  primaryCta = "Start Your Journey",
  secondaryCta = "2025 Fixtures",
  secondaryCtaLink,
  tertiaryCta,
  tertiaryCtaLink
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center bg-background transition-colors duration-300">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder Image */}
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Video Background - Only renders if videoSrc provided */}
        {videoSrc && (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={() => setIsVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
          />
        )}

        {/* Layer 1: Radial Vignette (Contrast) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_15%,_rgba(0,0,0,0.6)_100%)] dark:bg-[radial-gradient(circle_at_top_right,_transparent_15%,_rgba(0,0,0,0.7)_100%)]"></div>

        {/* Layer 2: Linear Gradient (Theme Integration) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>

        {/* Layer 3: Bottom Deepener */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      {/* Content Container - Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-10 md:gap-4">

        {/* Left Column: Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-3xl md:w-2/3"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1] text-foreground">
            {title || (
              <>
                Heritage. <br className="hidden md:block" />
                <span className="font-serif text-[#2F3E32] dark:text-[#3B5341] italic drop-shadow-lg">Adrenaline.</span> Elegance.
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl leading-relaxed">
            {subtitle || "The East Rand’s premier equestrian sanctuary. Over 80 years of sporting excellence, situated in the heart of the Highveld’s equestrian corridor."}
          </p>
        </motion.div>

        {/* Right Column: Actions & Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto"
        >
          {/* Badge */}
          {showBadge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs uppercase tracking-widest text-foreground font-medium">Season 2025 Open</span>
            </div>
          )}

          {/* Floating Pill Menu */}
          <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center p-1.5 bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-3xl sm:rounded-full shadow-2xl shadow-black/10 dark:shadow-black/50 gap-2 sm:gap-0">
            {primaryCta === "Start Your Journey" ? (
              <a
                href="#contact"
                className="px-8 py-3 bg-[#2F3E32] text-white dark:bg-[#3B5341] dark:text-white rounded-full text-sm font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {primaryCta}
              </a>
            ) : (
              <button className="px-8 py-3 bg-[#2F3E32] text-white dark:bg-[#3B5341] dark:text-white rounded-full text-sm font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 whitespace-nowrap">
                {primaryCta}
              </button>
            )}
            <div className="flex items-center justify-center gap-1 sm:gap-2 sm:ml-2">
              {secondaryCtaLink ? (
                secondaryCtaLink.startsWith('http') ? (
                  <a
                    href={secondaryCtaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 sm:px-6 sm:py-3 text-foreground rounded-full text-sm font-medium hover:bg-foreground/5 transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    {secondaryCta} <ChevronRight size={16} />
                  </a>
                ) : (
                  <Link
                    to={secondaryCtaLink}
                    className="px-4 py-2 sm:px-6 sm:py-3 text-foreground rounded-full text-sm font-medium hover:bg-foreground/5 transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    {secondaryCta} <ChevronRight size={16} />
                  </Link>
                )
              ) : secondaryCta === "Get Directions" ? (
                <a
                  href="https://www.google.com/maps/search/?api=1&query=East+Rand+Polo+Club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 sm:px-6 sm:py-3 text-foreground rounded-full text-sm font-medium hover:bg-foreground/5 transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  {secondaryCta} <ChevronRight size={16} />
                </a>
              ) : (
                <button className="px-4 py-2 sm:px-6 sm:py-3 text-foreground rounded-full text-sm font-medium hover:bg-foreground/5 transition-colors flex items-center gap-2 whitespace-nowrap">
                  {secondaryCta} <ChevronRight size={16} />
                </button>
              )}
              {videoSrc && (
                <>
                  <div className="hidden sm:block w-px h-6 bg-foreground/10"></div>
                  {tertiaryCtaLink ? (
                    tertiaryCtaLink.startsWith('http') ? (
                      <a
                        href={tertiaryCtaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex px-6 py-3 text-foreground rounded-full text-sm font-medium hover:bg-foreground/5 transition-colors items-center gap-2 whitespace-nowrap"
                      >
                        {tertiaryCta || "Watch Film"}
                      </a>
                    ) : (
                      <Link
                        to={tertiaryCtaLink}
                        className="hidden sm:flex px-6 py-3 text-foreground rounded-full text-sm font-medium hover:bg-foreground/5 transition-colors items-center gap-2 whitespace-nowrap"
                      >
                        {tertiaryCta || "Watch Film"}
                      </Link>
                    )
                  ) : (
                    <button className="hidden sm:flex px-6 py-3 text-foreground rounded-full text-sm font-medium hover:bg-foreground/5 transition-colors items-center gap-2 whitespace-nowrap">
                      <Play size={16} fill="currentColor" /> {tertiaryCta || "Watch Film"}
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};