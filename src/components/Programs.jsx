import { Link } from 'react-router-dom';
import { PROGRAMS } from '../data.js';

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-[#f8fbff]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8 items-center gap-3 text-4xl font-bold uppercase tracking-[0.18em] text-amber-500">
          <span className="block w-5 bg-amber-500" />
          Our Programs
        </div>
        <div className='flex justify-between'>
        <h2 className="max-w-4xl text-4xl font-semibold text-[#0f2f5c] leading-tight font-playfair">
          Academic Programs for a <em className="text-[#235c3f]">New Era</em>
        </h2>
        <Link to="/programs" className='font-bold hover:text-amber-500'>
          See all programs →
        </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {PROGRAMS.slice(0, 6).map((program, idx) => (
            <article key={program.name} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-b from-white via-white to-slate-50 p-7 shadow-[0_25px_70px_rgba(15,35,78,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-slate-900 to-amber-400 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-[22px] bg-slate-900 text-white text-2xl shadow-lg">{program.icon}</div>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-600 shadow-sm">{program.category}</span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{program.name}</h3>
              <p className="text-slate-600 leading-7 mb-6 min-h-[4.5rem]">{program.description}</p>
              <div className="mb-6 grid gap-3 sm:grid-cols-2">
                <span className="inline-flex items-center justify-center rounded-2xl bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 shadow-inner">
                  {program.duration}
                </span>
                <span className="inline-flex items-center justify-center rounded-2xl bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 shadow-inner">
                  {program.credits}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
                <span className="font-semibold text-slate-900">{program.lead}</span>
                <span className="text-amber-500 font-semibold transition group-hover:translate-x-1">Learn More →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
