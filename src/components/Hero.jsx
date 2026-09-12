import React from 'react';
import { ArrowRight, Film, Cpu, ShieldCheck, MapPin, Sparkles, Play } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Hero({ activeVertical = 'all', onResetVertical, onExploreIT, onExploreFilms }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-3 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-accent/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-amber-accent/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center w-full">
        {/* Active Filter Mode Indicator (if filtered) */}
        {activeVertical !== 'all' ? (
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 rounded-full bg-white/[0.08] border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.5)] backdrop-blur-xl mb-4 sm:mb-6 animate-in fade-in zoom-in-95">
            <span className={`w-2 h-2 rounded-full ${activeVertical === 'it' ? 'bg-cyan-accent animate-ping' : 'bg-amber-accent animate-ping'}`} />
            <span className="font-mono text-[10px] sm:text-xs text-slate-200">
              Active Vertical: <strong className={activeVertical === 'it' ? 'text-cyan-accent' : 'text-amber-accent'}>
                {activeVertical === 'it' ? 'ProDyum IT & Creative Services' : 'ProDyum Entertainments'}
              </strong>
            </span>
            <button
              type="button"
              onClick={onResetVertical}
              className="ml-2 text-[10px] sm:text-xs font-mono text-slate-400 hover:text-white underline cursor-pointer"
            >
              Reset to All
            </button>
          </div>
        ) : (
          /* High-Contrast Location & Enterprise Badge */
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 glass-pill mb-6 sm:mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)] max-w-full px-3 sm:px-4 py-1.5 sm:py-1">
            <div className="flex items-center shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-2" />
            </div>
            <MapPin className="w-3.5 h-3.5 text-cyan-accent shrink-0 hidden xs:inline" />
            <span className="font-mono text-[9px] sm:text-[11px] font-medium tracking-[0.14em] sm:tracking-[0.18em] text-slate-200 text-center truncate xs:whitespace-normal">
              {COMPANY_INFO.badgeSubtitle}
            </span>
          </div>
        )}

        {/* Monumental Kinetic Display Headline */}
        <h1 className="font-syne font-extrabold text-[32px] sm:text-5xl md:text-7xl lg:text-[76px] tracking-[-0.03em] leading-[1.08] text-white max-w-4xl mx-auto uppercase">
          Architecting <br className="hidden sm:inline" />
          <span className="text-gradient-cyan block sm:inline">Digital Commerce</span>
          <span className="text-white/60 mx-2 text-2xl sm:text-5xl font-light">&</span>
          <br className="hidden sm:inline" />
          <span className="text-gradient-amber block sm:inline">Cinematic Narratives.</span>
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="mt-4 sm:mt-6 max-w-2xl font-jakarta text-xs sm:text-base md:text-lg text-slate-400 leading-relaxed font-normal px-2 sm:px-0">
          Prodyum Pvt. Ltd. synthesizes world-class enterprise web engineering, 
          algorithmic performance marketing, and award-winning motion picture production under a unified creative flagship.
        </p>

        {/* Dual High-Impact Glass CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-sm sm:max-w-none px-2 sm:px-0">
          {/* IT Services CTA (Cyan glow) */}
          <button
            onClick={onExploreIT}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] hover:bg-cyan-accent/20 border border-cyan-accent/50 text-white font-jakarta font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] backdrop-blur-xl transition-all duration-300 group"
          >
            <Cpu className="w-4 h-4 text-cyan-accent group-hover:scale-110 transition-transform" />
            <span>Explore IT Services</span>
            <ArrowRight className="w-4 h-4 text-cyan-accent group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Film Slate CTA (Amber glow) */}
          <button
            onClick={onExploreFilms}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] hover:bg-amber-accent/20 border border-amber-accent/50 text-white font-jakarta font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(255,184,0,0.3)] hover:shadow-[0_0_40px_rgba(255,184,0,0.6)] backdrop-blur-xl transition-all duration-300 group"
          >
            <Film className="w-4 h-4 text-amber-accent group-hover:scale-110 transition-transform" />
            <span>View Film Slate</span>
            <Play className="w-3.5 h-3.5 text-amber-accent fill-amber-accent group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Micro-Telemetry Badge Counters */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl text-left px-2 sm:px-0">
          <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/[0.06] sm:border-0 flex flex-col">
            <span className="font-mono text-xl sm:text-3xl font-bold text-cyan-accent tracking-tight">
              +340%
            </span>
            <span className="font-jakarta text-[10px] sm:text-xs uppercase text-slate-400 font-medium tracking-wider mt-0.5 sm:mt-1">
              Average Ad ROAS
            </span>
          </div>

          <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/[0.06] sm:border-0 flex flex-col">
            <span className="font-mono text-xl sm:text-3xl font-bold text-white tracking-tight">
              99.98%
            </span>
            <span className="font-jakarta text-[10px] sm:text-xs uppercase text-slate-400 font-medium tracking-wider mt-0.5 sm:mt-1">
              Web Uptime SLA
            </span>
          </div>

          <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/[0.06] sm:border-0 flex flex-col">
            <span className="font-mono text-xl sm:text-3xl font-bold text-amber-accent tracking-tight">
              4K / 2.39:1
            </span>
            <span className="font-jakarta text-[10px] sm:text-xs uppercase text-slate-400 font-medium tracking-wider mt-0.5 sm:mt-1">
              Cinematic Master
            </span>
          </div>

          <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/[0.06] sm:border-0 flex flex-col">
            <span className="font-mono text-xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-1.5">
              Kukatpally
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="font-jakarta text-[10px] sm:text-xs uppercase text-slate-400 font-medium tracking-wider mt-0.5 sm:mt-1">
              Studio & HQ Active
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative mt-12 flex flex-col items-center gap-2 text-slate-500 font-mono text-[10px] uppercase tracking-[0.25em]">
        <span>Scroll to Explore Architecture</span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-cyan-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
}
