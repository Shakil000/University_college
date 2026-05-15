import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { FACULTY_MEMBERS, FACULTY_CATEGORIES } from '../data.js';
import { Link } from 'react-router-dom';

/* ─── Scroll-reveal hook ─────────────────────────────────────────── */
function useReveal(threshold = 0.12) {
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

/* ─── Animated filter pill ───────────────────────────────────────── */
function FilterBar({ categories, selected, onSelect }) {
  const barRef = useRef(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const btnRefs = useRef({});

  useLayoutEffect(() => {
    const btn = btnRefs.current[selected];
    const bar = barRef.current;
    if (!btn || !bar) return;
    const barRect = bar.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setPill({ left: btnRect.left - barRect.left, width: btnRect.width });
  }, [selected]);

  return (
    <div ref={barRef} className="relative inline-flex items-center gap-1 p-1.5 rounded-full border border-stone-200 bg-white/70 backdrop-blur-sm flex-wrap">
      {/* sliding pill */}
      <span
        className="absolute top-1.5 bottom-1.5 rounded-full bg-[#1c1917] pointer-events-none"
        style={{
          left: pill.left,
          width: pill.width,
          transition: 'left 0.35s cubic-bezier(0.34,1.56,0.64,1), width 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      />
      {categories.map((cat) => (
        <button
          key={cat}
          ref={(el) => { btnRefs.current[cat] = el; }}
          onClick={() => onSelect(cat)}
          className="relative z-10 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
          style={{ color: selected === cat ? '#faf7f2' : '#44403c' }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

/* ─── Faculty card ───────────────────────────────────────────────── */
function FacultyCard({ member, index, visible }) {
  return (
    <article
      className="faculty-card group relative overflow-hidden rounded-[20px] cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(36px) scale(0.97)',
        transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 70}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 70}ms`,
      }}
    >
      {/* image */}
      <div className="relative h-80 overflow-hidden bg-stone-200">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${member.image})` }}
        />
        {/* warm overlay on hover */}
        <div className="absolute inset-0 bg-[#c4622d]/0 group-hover:bg-[#c4622d]/15 transition-colors duration-500" />
        {/* department badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.16em] bg-[#faf7f2]/90 text-[#c4622d] backdrop-blur-sm">
            {member.department}
          </span>
        </div>
      </div>

      {/* info base */}
      <div className="bg-[#faf7f2] px-6 py-5 border-x border-b border-stone-200 rounded-b-[20px]">
        <h3 className="font-display text-xl font-bold text-[#1c1917] leading-tight mb-1 group-hover:text-[#c4622d] transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-sm text-stone-600 mb-0.5">{member.role}</p>
        <p className="text-xs text-stone-400 font-medium">{member.school}</p>
      </div>

      {/* hover overlay — slides up from bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-[#1c1917] px-6 py-6 flex flex-col gap-4 rounded-b-[20px]"
        style={{
          transform: 'translateY(100%)',
          transition: 'transform 0.42s cubic-bezier(0.34,1,0.64,1)',
        }}
        ref={(el) => {
          if (!el) return;
          const card = el.closest('.faculty-card');
          card.addEventListener('mouseenter', () => { el.style.transform = 'translateY(0)'; });
          card.addEventListener('mouseleave', () => { el.style.transform = 'translateY(100%)'; });
        }}
      >
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c4622d] mb-1">{member.department}</div>
          <div className="font-display text-lg font-bold text-[#faf7f2]">{member.name}</div>
          <div className="text-sm text-stone-400 mt-0.5">{member.role}</div>
        </div>
        <div className="flex items-center gap-2">
          {member.socials.map((icon, i) => (
            <button
              key={i}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-stone-300 hover:border-[#c4622d]/60 hover:text-[#c4622d] transition-all duration-200 text-sm"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ─── Main page ──────────────────────────────────────────────────── */
export default function FacultyPage() {
  const [selected, setSelected] = useState('All');
  const [displayList, setDisplayList] = useState(FACULTY_MEMBERS);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [heroRef, heroVisible] = useReveal(0.05);
  const gridRef = useRef(null);

  const allCategories = ['All', ...FACULTY_CATEGORIES.filter((c) => c !== 'All')];

  /* filter: flash out → swap list → flash in */
  const handleFilter = (cat) => {
    if (cat === selected) return;
    setCardsVisible(false);
    setTimeout(() => {
      setSelected(cat);
      setDisplayList(cat === 'All' ? FACULTY_MEMBERS : FACULTY_MEMBERS.filter((m) => m.department === cat));
      requestAnimationFrame(() => requestAnimationFrame(() => setCardsVisible(true)));
    }, 280);
  };

  /* initial reveal when grid scrolls into view */
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setCardsVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,700&family=Nunito+Sans:wght@300;400;600;700&display=swap');

        .font-display { font-family: 'Fraunces', Georgia, serif; }
        .font-body    { font-family: 'Nunito Sans', sans-serif; }

        @keyframes heroLine {
          from { opacity: 0; transform: translateY(28px) skewY(1.5deg); }
          to   { opacity: 1; transform: translateY(0) skewY(0deg); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-10px) rotate(-2deg); }
        }

        .hero-line {
          opacity: 0;
          animation: heroLine 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* paper texture overlay */
        .paper-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.6;
        }

        /* count badge on filter */
        .filter-wrap { overflow-x: auto; scrollbar-width: none; }
        .filter-wrap::-webkit-scrollbar { display: none; }
      `}</style>

      <main className="font-body bg-[#faf7f2] min-h-screen">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative paper-bg overflow-hidden pt-20 pb-16 px-6 lg:px-10">
          {/* large decorative background word */}
          <div
            className="absolute -top-6 right-0 font-display font-black text-[20vw] leading-none text-stone-900/[0.03] select-none pointer-events-none"
            style={{ animation: 'subtleFloat 14s ease-in-out infinite' }}
          >
            FACULTY
          </div>

          {/* decorative rule */}
          <div className="mx-auto max-w-7xl">
            <div
              className="flex items-center gap-4 mb-8 mt-8"
              style={heroVisible ? { animation: 'fadeSlideUp 0.6s 0.05s ease both' } : { opacity: 0 }}
            >
              <span className="h-px flex-1 max-w-[40px] bg-[#c4622d]" />
              <span className="text-[#c4622d] text-xs font-bold uppercase tracking-[0.24em]">Our Faculty</span>
            </div>

            <div className="overflow-hidden mb-3">
              <h1
                className="hero-line font-display font-black text-[#1c1917] leading-[1.0]"
                style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', animationDelay: '0.1s' }}
              >
                Meet the minds
              </h1>
            </div>
            <div className="overflow-hidden mb-6">
              <h1
                className="hero-line font-display font-black italic text-[#c4622d] leading-[1.0]"
                style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', animationDelay: '0.22s' }}
              >
                shaping tomorrow.
              </h1>
            </div>

            <p
              className="max-w-xl text-stone-500 text-base leading-8 mb-10"
              style={heroVisible ? { animation: 'fadeSlideUp 0.7s 0.38s ease both' } : { opacity: 0 }}
            >
              Recognised researchers, industry veterans, and award-winning educators — all committed to mentorship and discovery.
            </p>

            {/* filter bar */}
            <div
              className="filter-wrap"
              style={heroVisible ? { animation: 'fadeSlideUp 0.7s 0.5s ease both' } : { opacity: 0 }}
            >
              <FilterBar categories={allCategories} selected={selected} onSelect={handleFilter} />
            </div>

            {/* result count */}
            <p
              className="mt-5 text-xs text-stone-400 font-medium"
              style={heroVisible ? { animation: 'fadeSlideUp 0.6s 0.58s ease both' } : { opacity: 0 }}
            >
              Showing <span className="text-[#1c1917] font-bold">{displayList.length}</span> faculty member{displayList.length !== 1 ? 's' : ''}
              {selected !== 'All' && <> in <span className="text-[#c4622d] font-bold">{selected}</span></>}
            </p>
          </div>
        </section>

        {/* ── DECORATIVE DIVIDER ───────────────────────────────────────── */}
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center gap-3 py-2">
            <span className="h-px flex-1 bg-stone-200" />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#c4622d]">
              <path d="M8 0l2 6h6l-5 3.5 2 6L8 12l-5 3.5 2-6L0 6h6z" fill="currentColor" opacity="0.6"/>
            </svg>
            <span className="h-px flex-1 bg-stone-200" />
          </div>
        </div>

        {/* ── GRID ─────────────────────────────────────────────────────── */}
        <section className="py-14 mx-auto max-w-7xl px-6 lg:px-10">
          <div
            ref={gridRef}
            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            {displayList.map((member, i) => (
              <FacultyCard
                key={`${member.name}-${selected}`}
                member={member}
                index={i}
                visible={cardsVisible}
              />
            ))}
          </div>

          {/* empty state */}
          {displayList.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-display text-3xl font-bold text-stone-300 italic">No faculty found.</p>
              <p className="mt-3 text-sm text-stone-400">Try selecting a different department.</p>
            </div>
          )}
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-t border-stone-200 py-20 px-6 text-center bg-[#1c1917]">
          <div
            className="absolute inset-0 font-display font-black text-[18vw] leading-none text-white/[0.025] flex items-center justify-center select-none pointer-events-none"
            style={{ letterSpacing: '-0.02em' }}
          >
            JOIN US
          </div>
          <div className="relative z-10 mx-auto max-w-lg">
            <p className="text-[#c4622d] text-xs font-bold uppercase tracking-[0.22em] mb-4">Careers</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#faf7f2] mb-5 leading-tight">
              Interested in joining our <span className="italic text-[#c4622d]">faculty?</span>
            </h2>
            <p className="text-stone-400 text-sm leading-7 mb-8">
              We're always looking for passionate educators and researchers to join the Greenfield community.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/about" className="px-8 py-3.5 rounded-full bg-[#c4622d] text-[#faf7f2] text-sm font-bold hover:bg-[#b05528] transition-colors duration-200">
                View Open Positions
              </Link>
              <Link to="/contact" className="px-8 py-3.5 rounded-full border border-white/15 text-stone-300 text-sm font-medium hover:border-white/30 hover:text-white transition-all duration-200">
                Contact HR
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}