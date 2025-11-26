import React from 'react';
import { Hero } from '../components/Hero';
import { HomeBentoGrid } from '../components/BentoGrid';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { Testimonials } from '../components/Testimonials';

export const Home: React.FC = () => {
  return (
    <>
      <Hero
        showBadge={true}
        videoSrc="https://video.wixstatic.com/video/da684c_81b783e21904454ab8cb19175f69e146/1080p/mp4/file.mp4"
        secondaryCtaLink="/fixtures"
        tertiaryCta="On The Field"
        tertiaryCtaLink="/gallery"
      />
      <HomeBentoGrid />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};