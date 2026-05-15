import { useState, useEffect, useCallback, useRef } from 'react';
import { GALLERY_ITEMS } from '../data.js';

/* ─── Scroll reveal hook ─────────────────────────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Lightbox ───────────────────────────────────────────────────── */
function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const item = items[activeIndex];

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ animation: 'lbFadeIn 0.3s ease both' }}
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-[#141210]/94 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* panel */}
      <div
        className="relative z-10 flex flex-col lg:flex-row max-w-5xl w-full mx-4 rounded-2xl overflow-hidden"
        style={{ animation: 'lbSlideUp 0.38s cubic-bezier(0.22,1,0.36,1) both', maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* image */}
        <div className="relative flex-1 bg-[#1e1c1a] min-h-[50vh] lg:min-h-0">
          <img
            key={activeIndex}
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            style={{ animation: 'lbImgReveal 0.45s ease both' }}
          />
          {/* index badge */}
          <div className="absolute top-4 left-4 font-mono text-xs text-white/40 tracking-widest">
            {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </div>
          {/* prev/next on image */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-[#e8390e]/80 hover:text-white transition-all duration-200"
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 14L6 9l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-[#e8390e]/80 hover:text-white transition-all duration-200"
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 14l5-5-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        {/* info panel */}
        <div className="w-full lg:w-72 bg-[#f5f4f0] flex flex-col p-7 gap-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              {item.category && (
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e8390e] mb-2">{item.category}</p>
              )}
              <h2 className="font-display text-2xl font-bold text-[#141210] leading-tight">{item.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 hover:border-[#e8390e] hover:text-[#e8390e] transition-all duration-200"
              aria-label="Close"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </button>
          </div>

          {item.description && (
            <p className="text-sm leading-7 text-stone-500">{item.description}</p>
          )}

          <div className="mt-auto pt-4 border-t border-stone-200 flex items-center justify-between">
            <span className="text-xs text-stone-400 font-medium">Use ← → to navigate</span>
            <div className="flex gap-2">
              <button onClick={onPrev} className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 hover:border-[#e8390e] hover:text-[#e8390e] transition-all duration-200">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button onClick={onNext} className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 hover:border-[#e8390e] hover:text-[#e8390e] transition-all duration-200">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 11l4-4-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Gallery card ───────────────────────────────────────────────── */
function GalleryCard({ item, index, onOpen, columnVisible }) {
  const delay = (index % 3) * 90 + Math.floor(index / 3) * 60;

  return (
    <article
      onClick={() => onOpen(index)}
      className="gallery-card group relative overflow-hidden cursor-pointer mb-5 break-inside-avoid"
      style={{
        opacity: columnVisible ? 1 : 0,
        transform: columnVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {/* image */}
      <div className="relative overflow-hidden bg-stone-200">
        <img
          src={item.image}
          alt={item.title}
          className="w-full block object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-[0.88]"
          loading="lazy"
        />

        {/* red index number — top right, reveals on hover */}
        <div
          className="absolute top-4 right-4 font-mono font-bold text-[#e8390e] leading-none pointer-events-none"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            opacity: 0,
            transform: 'translateX(12px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
          ref={(el) => {
            if (!el) return;
            const card = el.closest('.gallery-card');
            card.addEventListener('mouseenter', () => {
              el.style.opacity = '1';
              el.style.transform = 'translateX(0)';
            });
            card.addEventListener('mouseleave', () => {
              el.style.opacity = '0';
              el.style.transform = 'translateX(12px)';
            });
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* bottom title strip — slides up on hover */}
        <div
          className="absolute inset-x-0 bottom-0 px-5 py-4 bg-[#141210]/80 backdrop-blur-sm pointer-events-none"
          style={{
            transform: 'translateY(100%)',
            transition: 'transform 0.38s cubic-bezier(0.34,1,0.64,1)',
          }}
          ref={(el) => {
            if (!el) return;
            const card = el.closest('.gallery-card');
            card.addEventListener('mouseenter', () => { el.style.transform = 'translateY(0)'; });
            card.addEventListener('mouseleave', () => { el.style.transform = 'translateY(100%)'; });
          }}
        >
          {item.category && (
            <p className="text-[#e8390e] text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">{item.category}</p>
          )}
          <p className="font-display text-white font-semibold text-base leading-snug">{item.title}</p>
          <p className="text-white/40 text-xs mt-1 font-mono">Click to expand →</p>
        </div>
      </div>
    </article>
  );
}

/* ─── Main page ──────────────────────────────────────────────────── */
export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [heroRef, heroVisible] = useReveal(0.05);
  const [gridRef, gridVisible] = useReveal(0.05);

  const total = GALLERY_ITEMS.length;

  const openLightbox = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => setLightboxIndex((i) => (i - 1 + total) % total), [total]);
  const nextImage = useCallback(() => setLightboxIndex((i) => (i + 1) % total), [total]);

  /* Split items into 3 masonry columns */
  const columns = [[], [], []];
  GALLERY_ITEMS.forEach((item, i) => columns[i % 3].push({ item, originalIndex: i }));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Epilogue:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .font-display { font-family: 'Syne', sans-serif; }
        .font-body    { font-family: 'Epilogue', sans-serif; }

        @keyframes heroReveal {
          from { opacity: 0; clip-path: inset(0 0 100% 0); }
          to   { opacity: 1; clip-path: inset(0 0 0% 0); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lbSlideUp {
          from { opacity: 0; transform: translateY(32px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes lbImgReveal {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: tickerScroll 22s linear infinite;
        }
        .ticker-track:hover { animation-play-state: paused; }

        /* custom cursor on gallery images */
        .gallery-card { cursor: none; }
        .gallery-card * { cursor: none; }

        .custom-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 999;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #e8390e;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: white;
          text-transform: uppercase;
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s;
          mix-blend-mode: normal;
        }
        .custom-cursor.visible { transform: translate(-50%, -50%) scale(1); }
      `}</style>

      {/* ── custom cursor ─────────────────────────────────────────── */}
      <CustomCursor />

      <main className="font-body bg-[#f5f4f0] min-h-screen">

        {/* ── HERO ──────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative overflow-hidden pt-16 pb-0 border-b border-stone-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            {/* top row */}
            <div
              className="flex items-center justify-between mb-6"
              style={heroVisible ? { animation: 'countUp 0.6s 0.05s ease both' } : { opacity: 0 }}
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#e8390e] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-stone-500">Greenfield Gallery</span>
              </div>
              <span className="font-mono text-xs text-stone-400">{total} works</span>
            </div>

            {/* headline */}
            <div className="mb-10">
              <div className="overflow-hidden">
                <h1
                  className="font-display font-extrabold text-[#141210] leading-[0.92]"
                  style={{
                    fontSize: 'clamp(3.5rem, 9vw, 9.5rem)',
                    ...(heroVisible ? { animation: 'heroReveal 0.9s 0.12s cubic-bezier(0.22,1,0.36,1) both' } : { opacity: 0 }),
                  }}
                >
                  Campus
                </h1>
              </div>
              <div className="overflow-hidden flex items-end gap-4">
                <h1
                  className="font-display font-extrabold text-[#e8390e] leading-[0.92] italic"
                  style={{
                    fontSize: 'clamp(3.5rem, 9vw, 9.5rem)',
                    ...(heroVisible ? { animation: 'heroReveal 0.9s 0.24s cubic-bezier(0.22,1,0.36,1) both' } : { opacity: 0 }),
                  }}
                >
                  Life.
                </h1>
                <p
                  className="mb-4 max-w-xs text-sm leading-7 text-stone-500 hidden md:block"
                  style={heroVisible ? { animation: 'countUp 0.7s 0.5s ease both' } : { opacity: 0 }}
                >
                  Explore campus scenes, student stories, and the Greenfield experience through curated imagery.
                </p>
              </div>
            </div>

            {/* scrolling ticker */}
            <div
              className="overflow-hidden py-3.5 border-t border-stone-200 -mx-6 lg:-mx-10 px-6 lg:px-10"
              style={heroVisible ? { animation: 'countUp 0.6s 0.6s ease both' } : { opacity: 0 }}
            >
              <div className="ticker-track select-none">
                {[...Array(2)].map((_, ri) => (
                  <div key={ri} className="flex items-center gap-8 pr-8">
                    {['Campus Life', 'Student Stories', 'Events', 'Research', 'Community', 'Arts & Culture', 'Sport', 'Graduation'].map((t) => (
                      <span key={t} className="flex items-center gap-8 whitespace-nowrap">
                        <span className="font-display font-bold text-sm text-stone-400 uppercase tracking-[0.12em]">{t}</span>
                        <span className="w-1 h-1 rounded-full bg-[#e8390e]" />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MASONRY GRID ──────────────────────────────────────────── */}
        <section className="py-12 mx-auto max-w-7xl px-6 lg:px-10">
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
            {columns.map((col, ci) => (
              <div key={ci}>
                {col.map(({ item, originalIndex }) => (
                  <GalleryCard
                    key={item.title}
                    item={item}
                    index={originalIndex}
                    onOpen={openLightbox}
                    columnVisible={gridVisible}
                  />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
        <section className="border-t border-stone-200 py-20 text-center px-6">
          <p
            className="font-display font-extrabold text-stone-200 select-none leading-none mb-6"
            style={{ fontSize: 'clamp(4rem, 12vw, 11rem)' }}
          >
            SHARE
          </p>
          <p className="text-stone-500 text-sm max-w-sm mx-auto leading-7 -mt-4 mb-8">
            Have a photo that captures the Greenfield spirit? Submit it for a chance to be featured in our next collection.
          </p>
          <button className="px-8 py-3.5 rounded-full bg-[#141210] text-[#f5f4f0] text-sm font-bold font-display hover:bg-[#e8390e] transition-colors duration-300">
            Submit Your Photo
          </button>
        </section>
      </main>

      {/* ── LIGHTBOX ──────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <Lightbox
          items={GALLERY_ITEMS}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}

/* ─── Custom cursor component ────────────────────────────────────── */
function CustomCursor() {
  const cursorRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e) => {
      const el = cursorRef.current;
      if (!el) return;
      el.style.left = e.clientX + 'px';
      el.style.top = e.clientY + 'px';
    };

    const enter = (e) => { if (e.target.closest('.gallery-card')) setActive(true); };
    const leave = (e) => { if (e.target.closest('.gallery-card')) setActive(false); };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseenter', enter, true);
    document.addEventListener('mouseleave', leave, true);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseenter', enter, true);
      document.removeEventListener('mouseleave', leave, true);
    };
  }, []);

  return (
    <div ref={cursorRef} className={`custom-cursor ${active ? 'visible' : ''}`}>
      View
    </div>
  );
}