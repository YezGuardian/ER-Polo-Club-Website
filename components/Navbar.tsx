import React from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { // if scroll down and past 100px
          setIsVisible(false);
        } else { // if scroll up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const isActive = (path: string) => location.pathname === path;
  const linkClasses = (path: string) => `px-5 py-2 text-sm rounded-full transition-colors duration-300 ${isActive(path) ? 'text-foreground bg-foreground/10' : 'text-muted hover:text-foreground hover:bg-foreground/10'}`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <img
            src="https://static.wixstatic.com/media/da684c_3f561b216d464f31b80962d58688d431~mv2.png"
            alt="East Rand Polo Club Logo"
            className="h-16 w-auto object-contain"
          />
          <span className="text-lg font-semibold tracking-wide text-foreground transition-colors duration-300">EAST RAND POLO</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1 bg-foreground/5 rounded-full px-1 py-1 border border-foreground/10 transition-colors duration-300">
          <Link to="/" className={linkClasses('/')}>Home</Link>
          <Link to="/academy" className={linkClasses('/academy')}>Academy</Link>
          <Link to="/fixtures" className={linkClasses('/fixtures')}>Fixtures</Link>
          <Link to="/venue" className={linkClasses('/venue')}>Venue</Link>
          <Link to="/gallery" className={linkClasses('/gallery')}>Gallery</Link>
          <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Enhanced Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full hover:bg-foreground/10 text-foreground transition-all duration-300 ease-in-out group"
            aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={isDarkMode ? "Current: Dark Mode" : "Current: Light Mode"}
          >
            <div className="relative w-5 h-5">
              {/* Sun Icon: Visible in Light Mode */}
              <Sun
                size={20}
                className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${!isDarkMode
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 rotate-90 scale-50'
                  }`}
              />

              {/* Moon Icon: Visible in Dark Mode */}
              <Moon
                size={20}
                className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isDarkMode
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 -rotate-90 scale-50'
                  }`}
              />
            </div>
          </button>


          <Link to="/contact" className="hidden lg:block bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-80 transition-all duration-300">
            Book a Lesson
          </Link>
          <button
            className="lg:hidden text-foreground transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-6 text-xl font-medium">
          <Link to="/" className="hover:text-muted transition-colors" onClick={closeMobileMenu}>Home</Link>
          <Link to="/academy" className="hover:text-muted transition-colors" onClick={closeMobileMenu}>Academy</Link>
          <Link to="/fixtures" className="hover:text-muted transition-colors" onClick={closeMobileMenu}>Fixtures</Link>
          <Link to="/venue" className="hover:text-muted transition-colors" onClick={closeMobileMenu}>Venue</Link>
          <Link to="/gallery" className="hover:text-muted transition-colors" onClick={closeMobileMenu}>Gallery</Link>
          <Link to="/contact" className="hover:text-muted transition-colors" onClick={closeMobileMenu}>Contact</Link>
          <Link to="/contact" className="bg-foreground text-background px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all mt-4" onClick={closeMobileMenu}>
            Book a Lesson
          </Link>
        </div>
      </div>
    </>
  );
};