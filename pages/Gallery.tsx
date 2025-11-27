import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

const images = [
  "https://static.wixstatic.com/media/da684c_1f8cbb774b324d089adf1731299897bf~mv2.jpg",
  "https://static.wixstatic.com/media/da684c_99d5e0d1b7a9478db03fa89bdb8c1cd6~mv2.jpg",
  "https://static.wixstatic.com/media/da684c_ffa983e57d7f4193806a8569c114185b~mv2.jpg",
  "https://static.wixstatic.com/media/da684c_641604706d6d42bb81a28531c5c560ae~mv2.png",
  "https://static.wixstatic.com/media/da684c_1f8cbb774b324d089adf1731299897bf~mv2.jpg",
  "https://static.wixstatic.com/media/da684c_99d5e0d1b7a9478db03fa89bdb8c1cd6~mv2.jpg",
];

export const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">Life on the Field.</h1>
          <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
            {["All", "Action", "Social", "Sunsets", "Clubhouse"].map((cat, i) => (
              <button key={i} className={`px-6 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? 'bg-[#2F3E32] text-white border-[#2F3E32] dark:bg-[#3B5341] dark:border-[#3B5341]' : 'border-foreground/20 text-muted hover:text-foreground'}`}>
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="break-inside-avoid">
              <div className="rounded-2xl overflow-hidden group relative">
                <img src={src} alt="Gallery Item" className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};