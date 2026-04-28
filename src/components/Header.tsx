import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'problem', label: 'Why AllyGo' },
    { id: 'how-it-works', label: 'How it works' },
    { id: 'pilot', label: 'Pilot' },
    { id: 'internships', label: 'Careers' },
  ];

  return (
    <>
      <header
        className={
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' +
          (scrolled
            ? 'bg-[#FBF5E9]/85 backdrop-blur-xl border-b border-[#EADFC8]/60 shadow-[0_2px_20px_-5px_rgba(30,24,18,0.08)]'
            : 'bg-transparent border-b border-transparent')
        }
      >
        {/* Top announcement strip — only when not scrolled */}
        <div
          className={
            'overflow-hidden transition-all duration-300 ' +
            (scrolled ? 'h-0 opacity-0' : 'h-9 opacity-100')
          }
        >
          <div className="h-full bg-gradient-to-r from-[#1E1812] via-[#2A2118] to-[#1E1812] flex items-center justify-center px-4">
            <div className="flex items-center gap-2 text-[12px] text-white/90 font-medium">
              <Sparkles className="w-3 h-3 text-[#FFA37F]" />
              <span className="hidden sm:inline">
                Now piloting at <b className="text-[#FFA37F]">Parul University</b>
              </span>
              <span className="sm:hidden">
                Live at <b className="text-[#FFA37F]">Parul</b>
              </span>
              <span className="text-white/40">·</span>
              <span>Join the waitlist for your campus</span>
              <ArrowRight className="w-3 h-3 text-[#FFA37F]" />
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-[68px]">

            {/* LOGO */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md shadow-[#E8552E]/15 overflow-hidden p-1 group-hover:shadow-lg group-hover:shadow-[#E8552E]/25 transition-all">
                <img
                  src="/logo.png"
                  alt="AllyGo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="leading-tight text-left">
                <div className="font-black text-[19px] tracking-tight text-[#1E1812]">
                  Ally<span className="text-[#E8552E]">Go</span>
                  <sup className="text-[10px] text-[#857A6C] ml-0.5 font-bold">™</sup>
                </div>
                <div className="text-[9.5px] text-[#857A6C] font-semibold tracking-[0.1em] uppercase -mt-0.5 hidden sm:block">
                  Student Talent · Real Capital
                </div>
              </div>
            </button>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-2 rounded-lg text-[13.5px] font-semibold text-[#4A4038] hover:text-[#1E1812] hover:bg-[#FDF8EC] transition-all"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => scrollToSection('waitlist')}
                className="px-4 py-2 rounded-lg text-[13.5px] font-semibold text-[#4A4038] hover:text-[#1E1812] hover:bg-[#FDF8EC] transition-all"
              >
                Sign in
              </button>
              <a
                href="#waitlist"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('waitlist');
                }}
                className="group inline-flex items-center gap-1.5 bg-[#E8552E] hover:bg-[#C5401D] text-white px-5 py-2.5 rounded-xl text-[13.5px] font-bold shadow-lg shadow-[#E8552E]/25 hover:shadow-xl hover:shadow-[#E8552E]/35 transition-all"
              >
                Join Waitlist
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[#FDF8EC] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#1E1812]" />
              ) : (
                <Menu className="w-5 h-5 text-[#1E1812]" />
              )}
            </button>
          </div>
        </nav>

        {/* MOBILE DROPDOWN */}
        <div
          className={
            'lg:hidden overflow-hidden transition-all duration-300 ' +
            (mobileMenuOpen
              ? 'max-h-[400px] opacity-100'
              : 'max-h-0 opacity-0')
          }
        >
          <div className="bg-[#FBF5E9] border-t border-[#EADFC8]/60 px-5 py-4">
            <div className="space-y-1 mb-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-[14px] font-semibold text-[#4A4038] hover:text-[#1E1812] hover:bg-white transition-all group"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#B3A895] group-hover:text-[#E8552E] group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-[#EADFC8]/60 space-y-2">
              <button
                onClick={() => scrollToSection('waitlist')}
                className="w-full px-4 py-3 rounded-xl text-[14px] font-semibold text-[#4A4038] hover:bg-white transition-all"
              >
                Sign in
              </button>
              <a
                href="#waitlist"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('waitlist');
                }}
                className="flex items-center justify-center gap-2 w-full bg-[#E8552E] hover:bg-[#C5401D] text-white px-4 py-3.5 rounded-xl text-[14px] font-bold shadow-lg shadow-[#E8552E]/25 transition-all"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] text-[#857A6C] text-center mt-4 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#E8552E]" />
              Live at Parul University
            </p>
          </div>
        </div>
      </header>

      {/* Spacer to offset fixed header on page */}
      <div className={scrolled ? 'h-[68px]' : 'h-[107px]'} />
    </>
  );
};

export default Header;
