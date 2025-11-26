import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "Do I need to own a horse to learn?",
    answer: "No. We specialize in \"hirelings\" (rental horses). We provide the pony and the tack; you just bring the boots."
  },
  {
    question: "Is the club open to the public?",
    answer: "Yes. Spectators are welcome! Prime viewing is Sundays (11:00 AM – 5:30 PM) and Saturdays (2:00 PM – 5:30 PM)."
  },
  {
    question: "What is the dress code?",
    answer: "\"Polo Chic.\" Smart casual is perfect. Ladies, flat shoes or wedges are recommended for the halftime \"divot stomping\" tradition."
  },
  {
    question: "Where is the club located?",
    answer: "We are on Polo Drive, Elandsfontein AH (Bapsfontein), centrally located for riders across Gauteng."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Header */}
        <div className="lg:col-span-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">Questions.</h2>
          <p className="text-muted text-lg">
            Find answers to common questions about East Rand Polo Club, our adaptive training, and how we craft your perfect equestrian journey.
          </p>
          <button className="mt-8 px-6 py-3 rounded-full border border-foreground/20 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors">
            Get in touch
          </button>
        </div>

        {/* Right Side: Accordion */}
        <div className="lg:col-span-8 space-y-3">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === index ? 'border-foreground/20' : 'border-cardBorder'}`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-card-foreground">{item.question}</span>
                {openIndex === index ? (
                  <Minus className="text-foreground w-5 h-5 flex-shrink-0" />
                ) : (
                  <Plus className="text-muted w-5 h-5 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-muted leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};