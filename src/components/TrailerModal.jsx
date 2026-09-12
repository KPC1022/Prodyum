import React, { useState, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Film,
  Sparkles,
  Share2,
  Check,
} from 'lucide-react';
import { ENTERTAINMENTS_SLATE } from '../data/content';

export default function TrailerModal({ projectId, onClose, onShowToast }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(15);
  const [copied, setCopied] = useState(false);

  const project =
    ENTERTAINMENTS_SLATE.find((p) => p.id === projectId) || ENTERTAINMENTS_SLATE[0];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.8));
    }, 200);
    return () => clearInterval(timer);
  }, [isPlaying]);

  if (!projectId) return null;

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    onShowToast(`Cinematic preview link for "${project.title}" copied to clipboard!`, 'info');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl my-auto rounded-3xl glass-modal border border-amber-accent/30 overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all"
          aria-label="Close player"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cinematic Responsive Aspect Ratio Player Container */}
        <div className="relative aspect-[16/10] sm:aspect-[2.39/1] w-full bg-black overflow-hidden flex items-center justify-center">
          {/* Simulated Video Canvas with Dynamic Celluloid Glow & Particles */}
          <div
            className={`absolute inset-0 bg-gradient-to-tr ${project.posterGradient} flex flex-col justify-between p-3.5 sm:p-6`}
          >
            {/* Ambient Noise / Grain */}
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] opacity-20 pointer-events-none" />

            {/* Top Telemetry Overlay */}
            <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs font-mono text-white/70 pr-10 sm:pr-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
                <span className="text-amber-accent font-bold truncate">MASTER PLAYBACK</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span className="px-1.5 sm:px-2 py-0.5 rounded bg-white/10 text-[9px] sm:text-[10px] text-white">
                  {project.resolution.split(' ')[0]}
                </span>
                <span className="px-1.5 sm:px-2 py-0.5 rounded bg-white/10 text-[9px] sm:text-[10px] text-amber-accent font-semibold">
                  {project.aspectRatio.split(' ')[0]}
                </span>
              </div>
            </div>

            {/* Simulated Dynamic Waveform Visualizer in Center */}
            <div className="relative z-10 my-auto text-center flex flex-col items-center px-2">
              <div className="flex items-center gap-1 sm:gap-1.5 h-8 sm:h-12 mb-2 sm:mb-3">
                {[40, 75, 55, 95, 30, 85, 60, 100, 45, 90, 70, 35, 80].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      height: isPlaying ? `${Math.max(15, (h * progress) % 100)}%` : '15%',
                    }}
                    className="w-1 sm:w-1.5 bg-gradient-to-t from-amber-500 to-amber-200 rounded-full transition-all duration-150"
                  />
                ))}
              </div>

              <span className="font-syne font-extrabold text-lg sm:text-3xl md:text-4xl text-white tracking-wider drop-shadow-md">
                {project.title}
              </span>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-amber-300 mt-0.5 sm:mt-1">
                {project.genre} • Dir. {project.director}
              </span>
            </div>

            {/* Bottom Scrubber & Controls Inside Video */}
            <div className="relative z-10">
              {/* Progress Line */}
              <div
                className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer mb-2.5 sm:mb-3 transition-all relative overflow-hidden"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickPos = (e.clientX - rect.left) / rect.width;
                  setProgress(clickPos * 100);
                }}
              >
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-white"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-white"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  </button>
                  <span className="text-amber-accent font-timecode text-[10px] sm:text-xs">
                    00:0{Math.floor((progress / 100) * 2)}:{Math.floor(((progress / 100) * 45) % 60)
                      .toString()
                      .padStart(2, '0')}:14
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="hidden sm:inline">{project.audio}</span>
                  <button
                    onClick={handleCopyLink}
                    className="p-1 px-2 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center gap-1 text-[10px] sm:text-[11px]"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Share2 className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Share'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Metadata Details Below Screen */}
        <div className="p-6 sm:p-8 bg-[#080B12]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
            <div>
              <h4 className="font-syne font-bold text-xl sm:text-2xl text-white">
                {project.title}
              </h4>
              <p className="font-jakarta text-xs text-slate-400 mt-0.5">
                {project.type} • Produced by Prodyum Entertainments (Kukatpally, Hyderabad)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
                {project.status}
              </span>
              <span className="font-mono text-xs text-amber-300">
                {project.releaseDate}
              </span>
            </div>
          </div>

          <p className="font-jakarta text-sm text-slate-300 leading-relaxed mb-4">
            {project.synopsis}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-slate-500 block text-[10px]">DIRECTOR</span>
              <span className="text-white font-medium">{project.director}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-slate-500 block text-[10px]">ASPECT RATIO</span>
              <span className="text-amber-accent font-medium">{project.aspectRatio}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-slate-500 block text-[10px]">SOUND MIX</span>
              <span className="text-white font-medium">{project.audio}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-slate-500 block text-[10px]">PRODUCTION BASE</span>
              <span className="text-emerald-400 font-medium">Hyderabad Studio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
