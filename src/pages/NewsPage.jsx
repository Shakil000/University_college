import { useState, useEffect, useRef, useCallback } from 'react';

/* ─── Data ───────────────────────────────────────────────────────── */
const newsArticles = [
  {
    id: 1, category: 'Rankings', date: 'Feb 03, 2026', edition: 'Vol. 14',
    title: 'Greenfield ranked #14 globally for Engineering Research',
    excerpt: 'Our engineering school climbs eight spots in the latest QS subject rankings, marking the fastest rise in the institution\'s history.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    readTime: '3 min read',
  },
  {
    id: 2, category: 'Research', date: 'Jan 22, 2026', edition: 'Vol. 13',
    title: 'AI Lab unveils a new generative biology platform',
    excerpt: 'A breakthrough that could accelerate drug discovery and bioengineering by orders of magnitude.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    readTime: '5 min read',
  },
  {
    id: 3, category: 'Events', date: 'Jan 18, 2026', edition: 'Vol. 13',
    title: 'Annual Greenfest 2026 opens registrations',
    excerpt: 'Three days of music, art, hackathons, and global speakers spread across the entire campus grounds.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    readTime: '2 min read',
  },
  {
    id: 4, category: 'Partnership', date: 'Jan 04, 2026', edition: 'Vol. 12',
    title: 'Greenfield partners with NASA for space climate research',
    excerpt: 'Faculty and graduate students join a multi-institutional climate mission studying upper-atmosphere phenomena.',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',
    readTime: '4 min read',
  },
  {
    id: 5, category: 'Campus', date: 'Dec 28, 2025', edition: 'Vol. 12',
    title: 'New Innovation Hub opens with $10M investment',
    excerpt: 'State-of-the-art facility for startups and entrepreneurial ventures now officially open to students.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    readTime: '3 min read',
  },
  {
    id: 6, category: 'Announcement', date: 'Dec 15, 2025', edition: 'Vol. 11',
    title: 'Expanded Scholarship Program for 2026',
    excerpt: 'Greenfield increases financial aid by 40% for incoming students following record endowment growth.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
    readTime: '2 min read',
  },
];

const CATEGORIES = ['All', 'Rankings', 'Research', 'Events', 'Partnership', 'Campus', 'Announcement'];

const TICKER_ITEMS = [
  'Greenfield AI Lab publishes landmark study in Nature',
  'Campus library extended hours — now open until midnight',
  'Student startup raises $2.4M seed round',
  'Spring semester registration opens March 1st',
  'Greenfield Athletics wins regional championship',
  'New exchange partnerships with 12 European universities',
];

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

/* ─── Category pill ──────────────────────────────────────────────── */
const CATEGORY_ACCENT = {
  Rankings: '#1d4ed8', Research: '#7c3aed', Events: '#059669',
  Partnership: '#d97706', Campus: '#dc2626', Announcement: '#0891b2', All: '#1a1714',
};

/* ─── Article card ───────────────────────────────────────────────── */
function ArticleCard({ article, index, visible, size = 'normal' }) {
  const isFeatured = size === 'featured';
  const delay = index * 80;

  return (
    <article
      className="news-card group cursor-pointer flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {/* image */}
      <div className={`overflow-hidden relative bg-stone-200 ${isFeatured ? 'h-72 md:h-96' : 'h-52'}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1a1714]/0 group-hover:bg-[#1a1714]/10 transition-colors duration-500" />
        {/* edition stamp */}
        <div className="absolute top-3 right-3 bg-[#f7f3ec]/90 backdrop-blur-sm border border-[#1a1714]/10 px-2 py-1">
          <span className="font-mono text-[10px] text-[#1a1714]/50 tracking-widest">{article.edition}</span>
        </div>
      </div>

      {/* content */}
      <div className={`border border-t-0 border-[#1a1714]/10 bg-[#f7f3ec] flex flex-col flex-1 ${isFeatured ? 'p-7' : 'p-5'}`}>
        {/* meta row */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-[10px] font-black uppercase tracking-[0.18em] px-2.5 py-1"
            style={{ color: CATEGORY_ACCENT[article.category] || '#1a1714', border: `1px solid ${CATEGORY_ACCENT[article.category]}30`, background: `${CATEGORY_ACCENT[article.category]}0d` }}
          >
            {article.category}
          </span>
          <span className="text-[#1a1714]/35 text-xs font-mono">·</span>
          <span className="text-[#1a1714]/45 text-xs font-mono">{article.date}</span>
          <span className="text-[#1a1714]/35 text-xs font-mono">·</span>
          <span className="text-[#1a1714]/45 text-xs font-mono">{article.readTime}</span>
        </div>

        {/* headline with animated underline */}
        <h3 className={`font-display font-bold text-[#1a1714] leading-[1.15] mb-3 relative ${isFeatured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
          <span className="headline-link">{article.title}</span>
        </h3>

        <p className={`text-[#1a1714]/60 leading-7 flex-1 ${isFeatured ? 'text-sm md:text-base' : 'text-sm line-clamp-2'}`}>
          {article.excerpt}
        </p>

        <div className="mt-4 pt-4 border-t border-[#1a1714]/8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#1a1714] read-more-link">
            Read Article
            <svg className="w-3.5 h-3.5 read-more-arrow" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <span className="text-[#1a1714]/20 font-mono text-xs">#{String(article.id).padStart(3, '0')}</span>
        </div>
      </div>
    </article>
  );
}

/* ─── Side brief card ────────────────────────────────────────────── */
function BriefCard({ article, index, visible }) {
  return (
    <article
      className="group cursor-pointer flex gap-4 py-4 border-b border-[#1a1714]/8 last:border-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(16px)',
        transition: `opacity 0.5s ease ${index * 100 + 200}ms, transform 0.5s ease ${index * 100 + 200}ms`,
      }}
    >
      <div className="flex-shrink-0 w-20 h-20 overflow-hidden bg-stone-200">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: CATEGORY_ACCENT[article.category] }}>{article.category}</span>
        <h4 className="font-display font-bold text-[#1a1714] text-sm leading-snug mt-0.5 group-hover:text-[#c0392b] transition-colors duration-200 line-clamp-2">{article.title}</h4>
        <p className="font-mono text-[#1a1714]/40 text-[10px] mt-1">{article.date}</p>
      </div>
    </article>
  );
}

/* ─── Breaking ticker ────────────────────────────────────────────── */
function BreakingTicker() {
  return (
    <div className="bg-[#c0392b] flex items-stretch overflow-hidden">
      <div className="flex-shrink-0 bg-[#1a1714] px-4 flex items-center z-10">
        <span className="text-[#f7f3ec] text-[10px] font-black uppercase tracking-[0.22em] whitespace-nowrap">Breaking</span>
      </div>
      <div className="overflow-hidden flex-1 relative">
        <div className="ticker-track-news flex items-center h-full">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-6 pr-10 whitespace-nowrap text-white text-xs font-semibold tracking-wide">
              {item}
              <span className="text-white/40 text-base">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Animated word-by-word title ────────────────────────────────── */
function AnimatedTitle({ text, visible }) {
  const words = text.split(' ');
  return (
    <h1 className="font-display font-black text-[#1a1714] leading-[0.95] mb-0" style={{ fontSize: 'clamp(3rem, 7vw, 7.5rem)' }}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.22em]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.6s ease ${i * 80 + 100}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 80 + 100}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}

/* ─── Main page ──────────────────────────────────────────────────── */
export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [displayList, setDisplayList] = useState(newsArticles);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [heroRef, heroVisible] = useReveal(0.05);
  const [gridRef, gridVisible] = useReveal(0.05);
  const filterRef = useRef(null);

  /* Filter with transition */
  const handleFilter = (cat) => {
    if (cat === activeCategory) return;
    setCardsVisible(false);
    setTimeout(() => {
      setActiveCategory(cat);
      setDisplayList(cat === 'All' ? newsArticles : newsArticles.filter((a) => a.category === cat));
      requestAnimationFrame(() => requestAnimationFrame(() => setCardsVisible(true)));
    }, 250);
  };

  /* Initial grid reveal */
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setCardsVisible(true); obs.disconnect(); } },
      { threshold: 0.03 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const featured = displayList[0];
  const sideArticles = displayList.slice(1, 4);
  const gridArticles = displayList.slice(1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;0,6..72,800;1,6..72,400;1,6..72,700&family=Barlow:wght@300;400;500;600&family=Barlow+Condensed:wght@500;700;800&display=swap');

        .font-display { font-family: 'Newsreader', Georgia, serif; }
        .font-body    { font-family: 'Barlow', sans-serif; }
        .font-cond    { font-family: 'Barlow Condensed', sans-serif; }

        @keyframes tickerNewsScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track-news {
          animation: tickerNewsScroll 28s linear infinite;
          width: max-content;
        }
        .ticker-track-news:hover { animation-play-state: paused; }

        @keyframes rulerGrow {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }

        /* headline underline on hover */
        .headline-link {
          background: linear-gradient(#1a1714, #1a1714);
          background-size: 0% 2px;
          background-position: 0 100%;
          background-repeat: no-repeat;
          transition: background-size 0.4s cubic-bezier(0.22,1,0.36,1);
          padding-bottom: 2px;
        }
        .news-card:hover .headline-link {
          background-size: 100% 2px;
        }

        /* read more arrow slide */
        .read-more-link:hover .read-more-arrow {
          transform: translateX(4px);
          transition: transform 0.25s ease;
        }
        .read-more-arrow { transition: transform 0.25s ease; }

        /* masthead rule */
        .masthead-rule {
          animation: rulerGrow 1.2s 0.3s cubic-bezier(0.22,1,0.36,1) both;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <main className="font-body bg-[#f7f3ec] min-h-screen">

        {/* ── BREAKING TICKER ────────────────────────────────────────── */}
        <div className="h-9">
          <BreakingTicker />
        </div>

        {/* ── MASTHEAD ───────────────────────────────────────────────── */}
        <header ref={heroRef} className="border-b-2 border-[#1a1714] pt-10 pb-8 px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            {/* top meta strip */}
            <div
              className="flex items-center justify-between mb-6 text-[10px] font-mono text-[#1a1714]/40 uppercase tracking-widest mt-5"
              style={heroVisible ? { animation: 'fadeInUp 0.5s ease both' } : { opacity: 0 }}
            >
              <span>Est. 1962  ·  Greenfield University  ·  Independent Student Press</span>
              <span className="hidden md:block">Friday, May 15, 2026  ·  Vol. XIV, No. 8</span>
            </div>

            {/* newspaper name rule */}
            <div
              className="masthead-rule h-px bg-[#1a1714]/15 mb-5"
              style={heroVisible ? {} : { transform: 'scaleX(0)', transformOrigin: 'left' }}
            />

            {/* big title */}
            <AnimatedTitle text="News & Events" visible={heroVisible} />

            <div className="masthead-rule h-[3px] bg-[#1a1714] mt-5 mb-0" style={heroVisible ? {} : { transform: 'scaleX(0)', transformOrigin: 'left' }} />
          </div>
        </header>

        {/* ── CATEGORY FILTER ────────────────────────────────────────── */}
        <div className="border-b border-[#1a1714]/12 bg-[#f7f3ec] sticky top-0 z-20 shadow-[0_1px_0_rgba(26,23,20,0.08)]">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div ref={filterRef} className="flex items-center gap-0 overflow-x-auto scrollbar-none -mx-1 py-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  className="flex-shrink-0 relative px-5 py-4 text-xs font-cond font-bold uppercase tracking-[0.14em] transition-colors duration-200"
                  style={{ color: activeCategory === cat ? '#c0392b' : '#1a1714aa' }}
                >
                  {cat}
                  {activeCategory === cat && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#c0392b]" style={{ animation: 'rulerGrow 0.3s ease both' }} />
                  )}
                </button>
              ))}
              <div className="ml-auto flex-shrink-0 pl-4 border-l border-[#1a1714]/10 py-4">
                <span className="text-[10px] font-mono text-[#1a1714]/35">{displayList.length} stories</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ───────────────────────────────────────────── */}
        <div ref={gridRef} className="mx-auto max-w-7xl px-6 lg:px-10 py-10">

          {displayList.length === 0 ? (
            <div className="py-32 text-center">
              <p className="font-display text-4xl font-bold italic text-[#1a1714]/20">No stories found.</p>
            </div>
          ) : (
            <>
              {/* ── FEATURED LAYOUT (top section) ── */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">

                {/* Featured large card */}
                <div className="lg:col-span-2">
                  {featured && (
                    <ArticleCard article={featured} index={0} visible={cardsVisible} size="featured" />
                  )}
                </div>

                {/* Side briefs panel */}
                <div className="border border-[#1a1714]/10 bg-[#f7f3ec] p-6">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#1a1714]/10">
                    <span className="h-3 w-3 rounded-full bg-[#c0392b] animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1a1714]">In Brief</span>
                  </div>
                  {sideArticles.map((article, i) => (
                    <BriefCard key={article.id} article={article} index={i} visible={cardsVisible} />
                  ))}
                  <a href="#" className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#c0392b] hover:gap-3 transition-all duration-200">
                    All Stories
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3"><path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
              </div>

              {/* section divider */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#1a1714]/40">More Stories</span>
                <span className="flex-1 h-px bg-[#1a1714]/10" />
              </div>

              {/* ── STORY GRID ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {gridArticles.map((article, i) => (
                  <ArticleCard key={`${article.id}-${activeCategory}`} article={article} index={i} visible={cardsVisible} />
                ))}
              </div>
            </>
          )}

          {/* Load more / edition strip */}
          <div className="mt-14 pt-8 border-t-2 border-[#1a1714] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-display italic text-[#1a1714]/30 text-sm">— End of edition —</p>
            </div>
            <button className="px-8 py-3 border-2 border-[#1a1714] text-[#1a1714] text-xs font-black uppercase tracking-[0.18em] hover:bg-[#1a1714] hover:text-[#f7f3ec] transition-all duration-250">
              Load Earlier Editions
            </button>
            <div className="text-center md:text-right">
              <p className="font-mono text-[#1a1714]/25 text-[10px]">© 2026 Greenfield Press</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}