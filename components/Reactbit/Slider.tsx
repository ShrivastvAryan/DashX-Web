'use client';

import { useState, useRef, useEffect } from 'react';

interface USDCSliderProps {
  initialValue?: number;
  minValue?: number;
  maxValue?: number;
  onChange?: (value: number) => void;
}

export default function USDCSlider({
  initialValue = 100,
  minValue = 0,
  maxValue = 1000,
  onChange
}: USDCSliderProps) {
  const [value, setValue] = useState<number>(initialValue);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);

  /** 🔥 FIRE onChange ONLY after user moves slider */
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return; // skip first render
    }
    onChange?.(value);
  }, [value]);

  /** Compute new slider value from cursor */
  const calculateValue = (clientX: number) => {
    if (!sliderRef.current) return value;

    const rect = sliderRef.current.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return Math.round(percent * (maxValue - minValue) + minValue);
  };

  /** Handle drag move */
  const updateFromClientX = (clientX: number) => {
    const newValue = calculateValue(clientX);
    setValue(newValue);
  };

  /** Buttons */
  const handleIncrement = () => setValue(v => Math.min(v + 1, maxValue));
  const handleDecrement = () => setValue(v => Math.max(v - 1, minValue));

  /** Mouse */
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateFromClientX(e.clientX);
  };
  const handleMouseMove = (e:React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) updateFromClientX(e.clientX);
  };
  const stopDragging = () => setIsDragging(false);

  /** Touch */
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateFromClientX(e.touches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging) updateFromClientX(e.touches[0].clientX);
  };

  const fillPercentage = ((value - minValue) / (maxValue - minValue)) * 100;

  return (
    <div className="flex w-full">
  <div className="w-full">
    <div className="flex items-center w-full">

      {/* ───────────────────────── MINUS BUTTON ───────────────────────── */}
      <button
        onClick={handleDecrement}
        className="h-12 w-10 md:w-14 md:h-14 
        bg-white text-slate-900 
        rounded-l-2xl active:scale-105
        transition-all flex items-center justify-center 
        text-xl md:text-2xl font-light hover:bg-white/80"
      >
        −
      </button>

      {/* ───────────────────────────── SLIDER ───────────────────────────── */}
      <div
        ref={sliderRef}
        className="h-12 md:h-14 w-full bg-[#D2D9F3] cursor-pointer relative select-none rounded-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={stopDragging}
      >
        {/* Fill */}
        <div
          className="absolute inset-y-0 left-0 bg-white transition-all duration-150"
          style={{ width: `${fillPercentage}%` }}
        />

        {/* Value */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-14 md:text-24 font-semibold text-slate-900 pointer-events-none">
            {value} USDC
          </div>
        </div>
      </div>

      {/* ───────────────────────── PLUS BUTTON ───────────────────────── */}
      <button
        onClick={handleIncrement}
        className="h-12 w-10 md:w-14 md:h-14 
       bg-white text-black 
        rounded-r-2xl active:scale-105
        transition-all flex items-center justify-center 
        text-xl md:text-2xl font-light hover:bg-white/80"
      >
        +
      </button>

    </div>
  </div>
</div>

  );
}
