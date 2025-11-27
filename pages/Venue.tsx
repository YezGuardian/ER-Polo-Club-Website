import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Check, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

const venueImages = [
  '/venue/485120748_9584405401667264_922031618634325246_n.jpg',
  '/venue/485140457_9584405355000602_6445337715942781899_n.jpg',
  '/venue/485145408_9584405325000605_6918808614340279427_n.jpg',
  '/venue/DLPO Info Page 2025.jpg',
  '/venue/DLPO Info Page21 2025.jpg',
  '/venue/DLPO Info Page23 2025.jpg',
  '/venue/DLPO Info Page3 2025.jpg',
  '/venue/DLPO Info Page3e 2025.jpg',
  '/venue/DLPO Info Page3r 2025.jpg',
  '/venue/DLPO Info ePage 2025.jpg',
  '/venue/diamondladiespoloopen_b13eb37842044a9bbc7e1d7a17412311.jpg',
  '/venue/eastrandpoloclubza_08d5ff5256094a52b44c23470cdaa018.jpg',
  '/venue/eastrandpoloclubza_11a0360d7f994afda2dc47ae4be295fa.jpg',
  '/venue/eastrandpoloclubza_23c7a316c5a54fb2b9ef0e9fd432cea7.jpg',
  '/venue/eastrandpoloclubza_27534ea191e948f6aca22db415e9fcca.jpg',
  '/venue/eastrandpoloclubza_57227ba9fab24441bc1a965ccb8d9b44.jpg',
  '/venue/eastrandpoloclubza_bef751f172284957b1137dd8f9234472.jpg',
];

export const Venue: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % venueImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + venueImages.length) % venueImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <Hero
        title={<><span className="font-serif text-white italic drop-shadow-lg">Celebrations</span> on the Field.</>}
        subtitle="Located in Bapsfontein, just 20 minutes from the airport but a world away from the city noise."
        backgroundImage="https://static.wixstatic.com/media/da684c_b1b34ccf87ae4bef842c815f174a5609~mv2.jpg"
        primaryCta="Enquire Now"
        primaryCtaLink="/contact"
        secondaryCta="2025 Fixtures"
        secondaryCtaLink="/fixtures"
      />

      <section className="py-12 px-4 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">
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

      {/* VIEWS FROM THE FIELD Gallery */}
      <section className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
              VIEWS FROM THE FIELD
            </h2>
          </ScrollReveal>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {venueImages.map((src, i) => (
              <ScrollReveal key={i} delay={i * 0.05} className="break-inside-avoid">
                <div
                  className="rounded-2xl overflow-hidden group relative cursor-pointer"
                  onClick={() => openModal(i)}
                >
                  <img
                    src={src}
                    alt={`Venue view ${i + 1}`}
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA Section */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 text-center">
              <p className="text-xl text-muted mb-6">Visit us soon, enquire about our next event</p>
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-[#2F3E32] text-white dark:bg-[#3B5341] dark:text-white rounded-full text-lg font-bold hover:opacity-90 transition-opacity"
              >
                Enquire Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={40} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 md:left-10 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={venueImages[currentImageIndex]}
                alt="Full screen view"
                className="max-w-full max-h-[85vh] object-contain"
              />
            </motion.div>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-10 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};