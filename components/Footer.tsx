import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
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
            <div className="flex items-center gap-3">
              <img
                src="https://static.wixstatic.com/media/da684c_3f561b216d464f31b80962d58688d431~mv2.png"
                alt="East Rand Polo Club Logo"
                className="h-24 w-auto object-contain"
              />
              <span className="text-md font-bold tracking-wide text-foreground">EAST RAND POLO</span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Adaptive polo training and events that learns your rhythm. Go anywhere, effortlessly, with journeys crafted just for you.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">Discover</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#" className="hover:text-foreground transition-colors">Academy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Smart Booking</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Budget Options</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Real-time Calendar</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">Toolkit</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#" className="hover:text-foreground transition-colors">Venue Hire</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Travel Journal</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Offline Maps</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Group Planning</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Resources</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">© 2025 East Rand Polo Club. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-muted hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};