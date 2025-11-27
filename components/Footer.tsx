import React, { useEffect, useRef, useState } from 'react';
import { Facebook, Instagram, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollTop(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="relative bg-background border-t border-border overflow-hidden">
      {/* Background Image - Dim */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: 'url("/black-white-portrait-athlete-competing-paralympics-championship-games (1).jpg")'
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 pt-20 pb-10 px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://static.wixstatic.com/media/da684c_3f561b216d464f31b80962d58688d431~mv2.png"
                alt="East Rand Polo Club Logo"
                className="h-24 w-auto object-contain"
              />
              <span className="text-md font-bold tracking-wide text-foreground">EAST RAND POLO</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Adaptive polo training and events that learns your rhythm. Go anywhere, effortlessly, with journeys crafted just for you.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/eastrandpoloclub/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/eastrandpoloclubza/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">Discover</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link to="/academy" className="hover:text-foreground transition-colors">Academy</Link></li>
              <li><Link to="/fixtures" className="hover:text-foreground transition-colors">Fixtures</Link></li>
              <li><Link to="/gallery" className="hover:text-foreground transition-colors">Gallery</Link></li>
              <li><Link to="/venue" className="hover:text-foreground transition-colors">Venue</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Links Column 3 - Contact Info */}
          <div>
            <h4 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li className="leading-relaxed">
                75 Polo Dr,<br />
                Elandsfontein AH,<br />
                Kempton Park
              </li>
              <li>
                <a href="tel:+27827319600" className="hover:text-foreground transition-colors">+27 82 731 9600</a>
              </li>
              <li>
                <a href="mailto:admin@eastrandpoloclub.co.za" className="hover:text-foreground transition-colors">admin@eastrandpoloclub.co.za</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4 relative">
          <p className="text-xs text-muted">© 2025 East Rand Polo Club. All rights reserved.</p>

          {/* Scroll to Top Arrow - Centered */}
          <button
            onClick={scrollToTop}
            className={`absolute left-1/2 -translate-x-1/2 -top-4 p-3 rounded-full bg-[#2F3E32] text-white dark:bg-[#3B5341] dark:text-white shadow-lg hover:scale-110 transition-all duration-500 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>

          <div className="text-xs text-muted">
            Site Curated by{' '}
            <a
              href="https://www.whitepaperconcepts.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline decoration-muted hover:decoration-foreground"
            >
              White Paper Concepts.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};