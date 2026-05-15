import { useEffect, useRef, useState } from 'react';
import { ADMISSION_REQUIREMENTS, APPLICATION_PROCESS, TUITION_FEES, SCHOLARSHIPS, IMPORTANT_DATES, FAQS } from '../data.js';

/* ─── Scroll-reveal hook ──────────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Animated counter hook ───────────────────────────────────────────── */
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ─── Stat card ───────────────────────────────────────────────────────── */
function StatCard({ value, suffix = '', label, started }) {
  const num = useCounter(value, 1600, started);
  return (
    <div className="text-center px-6 py-4 border-r border-white/10 last:border-0">
      <p className="text-4xl font-black text-amber-400 tracking-tight font-display">
        {num}{suffix}
      </p>
      <p className="mt-1 text-xs uppercase tracking-widest text-white/50">{label}</p>
    </div>
  );
}

/* ─── FAQ item ────────────────────────────────────────────────────────── */
function FaqItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-white/10 overflow-hidden transition-all duration-300"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-white/90 group-hover:text-amber-400 transition-colors duration-200 pr-4">
          {question}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/40 group-hover:border-amber-400/60 group-hover:text-amber-400 transition-all duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease, color 0.2s, border-color 0.2s' }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? '300px' : '0',
          opacity: open ? 1 : 0,
          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
          overflow: 'hidden',
        }}
      >
        <p className="pb-5 text-sm leading-7 text-white/55">{answer}</p>
      </div>
    </div>
  );
}

/* ─── Main component ──────────────────────────────────────────────────── */
export default function AdmissionsPage() {
  const [heroRef, heroVisible] = useReveal(0.05);
  const [statsRef, statsVisible] = useReveal(0.3);
  const [reqRef, reqVisible] = useReveal(0.1);
  const [cardsRef, cardsVisible] = useReveal(0.1);
  const [faqRef, faqVisible] = useReveal(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatA {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(14px) rotate(-4deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes lineGrow {
          from { height: 0; }
          to   { height: 100%; }
        }

        .reveal-item { opacity: 0; transform: translateY(24px); }
        .reveal-item.visible {
          animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        .shimmer-text {
          background: linear-gradient(90deg, #d4a853 0%, #f5e0a0 40%, #d4a853 60%, #c9922a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .glass-card {
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(12px);
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
        .glass-card:hover {
          background: rgba(255,255,255,0.065);
          border-color: rgba(212,168,83,0.3);
          transform: translateY(-3px);
        }

        .step-line::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 48px;
          width: 1px;
          background: linear-gradient(to bottom, rgba(212,168,83,0.4), transparent);
          transform: translateX(-50%);
        }
        .step-line.line-visible::before {
          animation: lineGrow 0.8s ease forwards;
        }

        .dot-grid {
          background-image: radial-gradient(circle, rgba(212,168,83,0.12) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .req-tag {
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .req-tag:hover {
          background: rgba(212,168,83,0.15);
          border-color: rgba(212,168,83,0.5);
          color: #d4a853;
        }
      `}</style>

      <main className="font-body bg-[#060e1a] text-white min-h-screen">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative min-h-[88vh] flex items-center overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 60% 40%, #0e2044 0%, #060e1a 65%)',
          }}
        >
          {/* dot grid bg */}
          <div className="absolute inset-0 dot-grid opacity-60" />

          {/* floating geometry */}
          <div className="absolute top-16 right-16 w-64 h-64 rounded-full border border-amber-400/10 opacity-60" style={{ animation: 'floatA 9s ease-in-out infinite' }} />
          <div className="absolute top-24 right-32 w-36 h-36 rounded-full border border-amber-400/15" style={{ animation: 'floatB 11s ease-in-out infinite' }} />
          <div className="absolute bottom-24 left-10 w-48 h-48 border border-white/5 rotate-45" style={{ animation: 'floatA 13s ease-in-out infinite 2s' }} />
          <div className="absolute top-40 left-1/3 w-2 h-2 rounded-full bg-amber-400/40" style={{ animation: 'floatB 7s ease-in-out infinite' }} />
          <div className="absolute bottom-40 right-1/4 w-1.5 h-1.5 rounded-full bg-amber-400/30" style={{ animation: 'floatA 8s ease-in-out infinite 1s' }} />

          {/* large bg text */}
          <div className="absolute top-12 right-0 font-display text-[18vw] font-bold text-white/[0.018] leading-none select-none pointer-events-none">
            2026
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-28">
            <div
              className="inline-flex items-center gap-3 mb-8"
              style={heroVisible ? { animation: 'fadeUp 0.6s ease both' } : { opacity: 0 }}
            >
              <span className="h-px w-8 bg-amber-400" />
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.22em]">Admissions 2026</span>
            </div>

            <h1
              className="font-display font-bold leading-[1.05] mb-6"
              style={heroVisible ? { animation: 'fadeUp 0.8s 0.1s ease both', fontSize: 'clamp(2.8rem, 6vw, 6rem)' } : { opacity: 0 }}
            >
              <span className="block text-white">Begin your</span>
              <span className="block shimmer-text italic">Greenfield</span>
              <span className="block text-white/90">journey today.</span>
            </h1>

            <p
              className="max-w-lg text-white/55 text-lg leading-8 mb-12"
              style={heroVisible ? { animation: 'fadeUp 0.8s 0.2s ease both' } : { opacity: 0 }}
            >
              A simple, transparent admissions process. Whether you're starting your undergraduate degree or advancing your career, we've designed a pathway just for you.
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={heroVisible ? { animation: 'fadeUp 0.8s 0.32s ease both' } : { opacity: 0 }}
            >
              <button className="px-8 py-3.5 rounded-full bg-amber-400 text-[#060e1a] text-sm font-semibold tracking-wide hover:bg-amber-300 transition-colors duration-200">
                Apply Now
              </button>
              <button className="px-8 py-3.5 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:border-white/40 hover:text-white transition-all duration-200">
                Download Prospectus
              </button>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
        <section ref={statsRef} className="border-y border-white/10 bg-[#040b16]">
          <div className="mx-auto max-w-5xl py-2">
            <div className="grid grid-cols-2 md:grid-cols-4">
              <StatCard value={4800}  suffix="+"  label="Students enrolled"  started={statsVisible} />
              <StatCard value={68}    suffix="%"  label="Receive financial aid" started={statsVisible} />
              <StatCard value={120}   suffix="+"  label="Programmes offered"  started={statsVisible} />
              <StatCard value={92}    suffix="%"  label="Graduate employment"  started={statsVisible} />
            </div>
          </div>
        </section>

        {/* ── REQUIREMENTS + PROCESS ────────────────────────────────────────── */}
        <section ref={reqRef} className="py-24 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Requirements */}
            <div
              className={`reveal-item ${reqVisible ? 'visible' : ''}`}
              style={{ animationDelay: '0ms' }}
            >
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Requirements</p>
              <h2 className="font-display text-3xl font-bold text-white mb-8">Admission Requirements</h2>
              <div className="flex flex-wrap gap-3">
                {ADMISSION_REQUIREMENTS.map((item, i) => (
                  <span
                    key={item}
                    className="req-tag px-4 py-2 rounded-full border border-white/10 text-white/65 text-sm cursor-default"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Application Process */}
            <div
              className={`reveal-item ${reqVisible ? 'visible' : ''}`}
              style={{ animationDelay: '120ms' }}
            >
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">How to apply</p>
              <h2 className="font-display text-3xl font-bold text-white mb-8">Application Process</h2>
              <div className="relative pl-10">
                {/* vertical line */}
                <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-amber-400/40 via-amber-400/20 to-transparent" />
                <div className="space-y-8">
                  {APPLICATION_PROCESS.map((step, i) => (
                    <div key={step.title} className="relative">
                      {/* dot */}
                      <div className="absolute -left-[calc(1.75rem+1px)] top-1 w-3.5 h-3.5 rounded-full border-2 border-amber-400/60 bg-[#060e1a]" />
                      <div className="text-xs text-amber-400/70 font-semibold uppercase tracking-widest mb-1">{step.step}</div>
                      <div className="font-semibold text-white text-sm mb-0.5">{step.title}</div>
                      <div className="text-white/50 text-sm leading-6">{step.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TUITION / SCHOLARSHIPS / DATES ───────────────────────────────── */}
        <section ref={cardsRef} className="pb-24 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-3">

            {/* Tuition */}
            <div
              className={`glass-card rounded-3xl p-7 reveal-item ${cardsVisible ? 'visible' : ''}`}
              style={{ animationDelay: '0ms' }}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3.33 2 8.67 2 12 0v-5"/></svg>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-5">Tuition Fees</h3>
              <div className="space-y-3">
                {TUITION_FEES.map((item) => (
                  <div key={item.type} className="flex items-center justify-between">
                    <span className="text-white/55 text-sm">{item.type}</span>
                    <span className="text-amber-400 font-semibold text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scholarships */}
            <div
              className={`glass-card rounded-3xl p-7 reveal-item ${cardsVisible ? 'visible' : ''}`}
              style={{ animationDelay: '100ms' }}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Scholarships</h3>
              <p className="text-white/50 text-sm leading-6 mb-5">
                Need- and merit-based scholarships covering up to 75% of tuition. 70% of students receive financial aid.
              </p>
              <div className="space-y-2.5">
                {SCHOLARSHIPS.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                    <span className="text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Dates */}
            <div
              className={`glass-card rounded-3xl p-7 reveal-item ${cardsVisible ? 'visible' : ''}`}
              style={{ animationDelay: '200ms' }}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-5">Important Dates</h3>
              <div className="space-y-3">
                {IMPORTANT_DATES.map((item, i) => (
                  <div key={item.label} className="flex items-center justify-between pb-3 border-b border-white/[0.06] last:border-0 last:pb-0">
                    <span className="text-white/55 text-sm">{item.label}</span>
                    <span className="text-white/90 font-semibold text-xs px-2.5 py-1 rounded-full bg-white/[0.06]">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section ref={faqRef} className="pb-28 mx-auto max-w-3xl px-6 lg:px-10">
          <div className={`reveal-item ${faqVisible ? 'visible' : ''}`}>
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-center">Got questions?</p>
            <h2 className="font-display text-4xl font-bold text-white mb-12 text-center">Frequently Asked</h2>
            <div>
              {FAQS.map((item, i) => (
                <FaqItem key={item.question} question={item.question} answer={item.answer} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 100%, #0e2044 0%, #060e1a 70%)' }} />
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="relative z-10 py-24 text-center px-6">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
              <span className="shimmer-text italic">Ready to apply?</span>
            </h2>
            <p className="text-white/50 max-w-md mx-auto text-base leading-7 mb-10">
              Applications for the 2026 intake are now open. Join thousands of students shaping their future at Greenfield.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-10 py-4 rounded-full bg-amber-400 text-[#060e1a] text-sm font-bold tracking-wide hover:bg-amber-300 transition-colors duration-200 shadow-lg shadow-amber-400/20">
                Start Your Application
              </button>
              <button className="px-10 py-4 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:border-white/35 hover:text-white transition-all duration-200">
                Book a Campus Tour
              </button>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}