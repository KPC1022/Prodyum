import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Film, Cpu, Layers } from 'lucide-react';

export default function Navbar({ activeVertical, setActiveVertical, onVerticalChange, onOpenProjectModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = (vertical) => {
    if (onVerticalChange) {
      onVerticalChange(vertical);
    } else {
      setActiveVertical(vertical);
    }
  };

  const desktopNavLinks = [
    { label: 'Casting', href: '#casting' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ];

  const mobileNavLinks = [
    { label: 'Ecosystem Overview', href: '#ecosystem' },
    { label: 'IT & Creative Services', href: '#services' },
    { label: 'Film Slate & Trailers', href: '#film-slate' },
    { label: 'Talent & Casting Portal', href: '#casting' },
    { label: 'Careers (Open Roles)', href: '#careers' },
    { label: 'Studio & Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06080D]/85 backdrop-blur-2xl border-b border-white/[0.08] py-2.5 sm:py-3 shadow-[0_10px_35px_rgba(0,0,0,0.7)]'
          : 'bg-[#06080D]/50 backdrop-blur-xl border-b border-white/[0.04] py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 h-11">
          {/* Brand Identity / Geometric SVG Logo */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-accent shrink-0"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/0 border border-white/15 overflow-hidden group-hover:border-cyan-accent/50 transition-colors shrink-0">
              <svg
                viewBox="0 0 100 100"
                className="w-5 h-5 sm:w-7 sm:h-7 transform group-hover:scale-110 transition-transform duration-300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Geometric IT Diamond (Cyan) */}
                <path
                  d="M50 12L85 48L50 84L15 48Z"
                  stroke="#00F0FF"
                  strokeWidth="6"
                  strokeLinejoin="round"
                  className="opacity-90"
                />
                {/* Kinetic Entertainment Triangle (Amber) */}
                <polygon
                  points="50,30 76,75 24,75"
                  fill="#FFB800"
                  fillOpacity="0.75"
                />
                <circle cx="50" cy="48" r="4" fill="#FFFFFF" />
              </svg>
              <div className="absolute inset-0 bg-cyan-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <span className="font-syne font-extrabold text-sm sm:text-xl tracking-tight text-white flex items-center gap-1 leading-none">
                PRODYUM
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse" />
              </span>
              <span className="font-mono text-[7px] sm:text-[9px] uppercase tracking-[0.2em] text-slate-400 mt-0.5 sm:mt-1 leading-none">
                Hyd • Tech & Film
              </span>
            </div>
          </a>

          {/* Dual-Vertical Toggle Pill (Desktop & Tablet) */}
          <div className="hidden md:flex items-center bg-white/[0.04] p-1 rounded-full border border-white/[0.12] backdrop-blur-md shrink-0">
            <button
              type="button"
              onClick={() => handleToggle('all')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeVertical === 'all'
                  ? 'bg-gradient-to-r from-cyan-accent/20 to-amber-accent/20 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Ecosystem</span>
            </button>

            <button
              type="button"
              onClick={() => handleToggle('it')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeVertical === 'it'
                  ? 'bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/40 shadow-[0_0_18px_rgba(0,240,255,0.3)]'
                  : 'text-slate-400 hover:text-cyan-accent hover:bg-white/[0.04]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Creative & IT</span>
            </button>

            <button
              type="button"
              onClick={() => handleToggle('entertainments')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeVertical === 'entertainments'
                  ? 'bg-amber-accent/20 text-amber-accent border border-amber-accent/40 shadow-[0_0_18px_rgba(255,184,0,0.3)]'
                  : 'text-slate-400 hover:text-amber-accent hover:bg-white/[0.04]'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Entertainments</span>
            </button>
          </div>

          {/* Desktop Secondary Navigation Links & Action */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6 shrink-0">
            <nav className="flex items-center gap-4 xl:gap-5 text-sm font-jakarta text-slate-300">
              {desktopNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-white transition-colors duration-200 relative group py-1 text-[13px] tracking-wide whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-cyan-accent to-amber-accent group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Glowing CTA Button */}
            <button
              type="button"
              onClick={onOpenProjectModal}
              className="relative group overflow-hidden px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-cyan-accent/40 hover:border-cyan-accent text-white text-xs uppercase tracking-wider font-semibold font-jakarta flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 shrink-0 whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-accent animate-pulse" />
              <span>Initiate Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Mobile Action & Menu Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
            <button
              type="button"
              onClick={onOpenProjectModal}
              className="px-2 sm:px-2.5 py-1.5 rounded-lg bg-cyan-accent/15 border border-cyan-accent/40 text-cyan-accent text-[11px] sm:text-xs font-semibold tracking-wider font-jakarta flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span>Initiate</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl bg-white/[0.06] border border-white/15 text-slate-300 hover:text-white focus:outline-none shrink-0 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-white/10 flex flex-col gap-3 max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Mobile Vertical Toggle */}
            <div className="flex flex-col gap-1 bg-white/[0.03] p-1.5 rounded-xl border border-white/10">
              <span className="text-[10px] font-mono uppercase text-slate-400 px-2 pt-0.5">
                Switch Ecosystem View
              </span>
              <div className="grid grid-cols-3 gap-1">
                <button
                  type="button"
                  onClick={() => {
                    handleToggle('all');
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 text-xs rounded-lg font-medium transition-all cursor-pointer ${
                    activeVertical === 'all'
                      ? 'bg-white/20 text-white font-semibold shadow-inner'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleToggle('it');
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 text-xs rounded-lg font-medium transition-all cursor-pointer ${
                    activeVertical === 'it'
                      ? 'bg-cyan-accent/25 text-cyan-accent font-semibold'
                      : 'text-slate-400 hover:text-cyan-accent'
                  }`}
                >
                  Creative & IT
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleToggle('entertainments');
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 text-xs rounded-lg font-medium transition-all cursor-pointer ${
                    activeVertical === 'entertainments'
                      ? 'bg-amber-accent/25 text-amber-accent font-semibold'
                      : 'text-slate-400 hover:text-amber-accent'
                  }`}
                >
                  Cinema
                </button>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-0.5">
              {mobileNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 text-sm font-jakarta text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              ))}
            </nav>

            {/* Mobile Drawer CTA */}
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProjectModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-accent to-cyan-400 text-black font-jakarta font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Initiate Project with Prodyum</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
