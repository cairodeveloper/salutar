'use client';

import { motion, type PanInfo } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';

type CarouselProps = {
  items: ReactNode[];
  label: string;
  variant?: 'light' | 'dark';
  className?: string;
};

export default function Carousel({ items, label, variant = 'light', className = '' }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [x, setX] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const dragged = useRef(false);
  const last = items.length - 1;

  const go = useCallback((next: number) => setIndex(Math.max(0, Math.min(last, next))), [last]);

  const measure = useCallback(() => {
    const v = viewport.current;
    const t = track.current;
    const first = t?.firstElementChild as HTMLElement | null;
    if (!v || !t || !first) return;
    const gap = parseFloat(getComputedStyle(t).columnGap) || 0;
    const width = first.offsetWidth;
    setX(v.clientWidth / 2 - width / 2 - index * (width + gap));
  }, [index]);

  useLayoutEffect(measure, [measure]);
  useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const power = info.offset.x + info.velocity.x * 0.25;
    if (power < -60) go(index + 1);
    else if (power > 60) go(index - 1);
    else measure();
    setTimeout(() => { dragged.current = false; }, 50);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
  };

  return (
    <div className={`carousel carousel-${variant} ${className}`} role="region" aria-roledescription="carrossel" aria-label={label}>
      <div className="carousel-viewport" ref={viewport} tabIndex={0} onKeyDown={onKeyDown}>
        <motion.div
          className="carousel-track"
          ref={track}
          animate={{ x }}
          transition={{ type: 'spring', stiffness: 220, damping: 30, mass: 0.9 }}
          drag="x"
          dragConstraints={{ left: x, right: x }}
          dragElastic={0.18}
          onDragStart={() => { dragged.current = true; }}
          onDragEnd={onDragEnd}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`carousel-slide${i === index ? ' is-active' : ''}`}
              aria-hidden={i !== index}
              onClickCapture={(e) => {
                if (dragged.current || i !== index) {
                  e.preventDefault();
                  e.stopPropagation();
                  if (!dragged.current) go(i);
                }
              }}
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="carousel-controls">
        <button type="button" className="carousel-arrow" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Anterior"><ArrowLeft size={18} /></button>
        <div className="carousel-dots">
          {items.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`carousel-dot${i === index ? ' is-active' : ''}`}
              data-distance={Math.min(2, Math.abs(i - index))}
              onClick={() => go(i)}
              aria-label={`Ir para o item ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
        <button type="button" className="carousel-arrow" onClick={() => go(index + 1)} disabled={index === last} aria-label="Próximo"><ArrowRight size={18} /></button>
      </div>
    </div>
  );
}
