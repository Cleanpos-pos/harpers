
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 0), 100));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize select-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image */}
      <img
        src="https://picsum.photos/seed/after-clean/800/600"
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (clipped) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src="https://picsum.photos/seed/before-clean/800/600"
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current?.offsetWidth }}
        />
        <div className="absolute inset-0 bg-slate-900/10 backdrop-grayscale-[0.5]" />
      </div>

      {/* Slider Bar */}
      <div
        className="absolute inset-y-0 w-1 bg-white shadow-lg z-20 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-slate-300 rounded-full" />
            <div className="w-1 h-3 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-slate-900/60 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm pointer-events-none">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-emerald-600/60 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm pointer-events-none">
        After
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
