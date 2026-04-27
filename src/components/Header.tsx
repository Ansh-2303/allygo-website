import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO SECTION UPDATE */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.png" alt="AllyGo Logo" className="h-24 w-auto" />
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('problem')}
              className="text-gray-700 hover:text-[#48B2B7] transition-colors font-medium"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="text-gray-700 hover:text-[#48B2B7] transition-colors font-medium"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection('pilot')}
              className="text-gray-700 hover:text-[#48B2B7] transition-colors font-medium"
            >
              Pilot
            </button>
            <button
              onClick={() => scrollToSection('internships')}
              className="text-gray-700 hover:text-[#48B2B7] transition-colors font-medium"
            >
              Internships
            </button>
            
            {/* DESKTOP BUTTON UPDATE: Now an anchor tag linked to Google Forms */}
            <a
              href="https://forms.gle/X334gcNumnrbJ3MT8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6B00] text-white px-6 py-2 rounded-lg hover:bg-[#FF6B00]/90 transition-all font-semibold shadow-lg shadow-[#FF6B00]/30 hover:shadow-xl hover:shadow-[#FF6B00]/40 inline-block"
            >
              Join Pilot
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('problem')}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#48B2B7] font-medium"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#48B2B7] font-medium"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection('pilot')}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#48B2B7] font-medium"
            >
              Pilot
            </button>
            <button
              onClick={() => scrollToSection('internships')}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#48B2B7] font-medium"
            >
              Internships
            </button>
            
            {/* MOBILE BUTTON UPDATE: Now an anchor tag linked to Google Forms */}
            <a
              href="https://forms.gle/X334gcNumnrbJ3MT8"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#FF6B00] text-white px-6 py-3 rounded-lg hover:bg-[#FF6B00]/90 transition-all font-semibold mt-2"
            >
              Join Pilot
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;