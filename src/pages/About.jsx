import { ABOUT_INFO } from '../data.js';

export default function About() {
  return (
    <main>
      <section id="about" className="py-24 bg-[#f8fbff]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-500">
            <span className="block h-1 w-5 bg-amber-500" />
            About Greenfield
          </div>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-[#0f2f5c] font-playfair">
            {ABOUT_INFO.hero.title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">{ABOUT_INFO.hero.description}</p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {ABOUT_INFO.highlights.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,35,78,0.05)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[16px] bg-amber-100 text-amber-700 text-xl">{item.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-7">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <article className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
              <div className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.12em] font-bold text-amber-500">
                Message from the President
              </div>
              <p className="text-slate-600 leading-8">{ABOUT_INFO.quote.text}</p>
              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-slate-100 text-2xl font-bold text-slate-700">HB</div>
                <div>
                  <div className="text-lg font-bold text-slate-900">{ABOUT_INFO.quote.name}</div>
                  <div className="text-sm text-slate-500">{ABOUT_INFO.quote.role}</div>
                </div>
              </div>
            </article>

            <div>
              <div className="grid gap-6 sm:grid-cols-2">
                {ABOUT_INFO.stats.map((item) => (
                  <div key={item.label} className="rounded-[22px] border border-slate-200 bg-white p-7 text-center shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
                    <div className="text-4xl font-black text-slate-900 font-playfair mb-3">{item.value}</div>
                    <div className="text-xs uppercase tracking-[0.12em] text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4">
                {ABOUT_INFO.accreditations.map((item) => (
                  <div key={item} className="rounded-[22px] border border-slate-200 bg-white p-6 text-center shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
                    <div className="text-sm font-bold text-slate-900">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-[24px] border border-slate-200 bg-white p-8 shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
            <div className="relative">
              <div className="mb-10 text-sm uppercase tracking-[0.16em] font-extrabold text-amber-500">Our Timeline</div>
              <div className="space-y-7">
                {ABOUT_INFO.timeline.map((item) => (
                  <div key={item.year} className="rounded-[24px] border border-slate-200 bg-white p-7">
                    <div className="mb-2 text-xs uppercase tracking-[0.16em] font-extrabold text-amber-500">{item.year}</div>
                    <div className="mb-3 text-xl font-semibold text-slate-900">{item.event}</div>
                    <p className="text-slate-600 leading-7">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
