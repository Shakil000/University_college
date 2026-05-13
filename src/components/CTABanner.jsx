import { useNavigate } from 'react-router-dom';

export default function CTABanner() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#0d2818] py-24">
      <div className="pointer-events-none absolute -right-16 -top-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.1)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-5 text-xs uppercase tracking-[0.22em] font-bold text-amber-400">Join the Next Class</div>
        <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight text-white font-playfair">
          Transform Your Career with <em className="text-amber-300 italic">Purposeful Education</em>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-300">
          Apply now for spring intake and receive personalized guidance from our admission advisors.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => navigate('/admissions')}
            className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-[#0f2f5c] transition hover:bg-amber-400"
          >
            Apply Today
          </button>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Request a Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
