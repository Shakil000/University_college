import { useState } from 'react';
import { PROGRAMS, PROGRAM_CATEGORIES } from '../data.js';

export default function ProgramsPage() {
  const [selected, setSelected] = useState('All');
  const filteredPrograms = selected === 'All'
    ? PROGRAMS
    : PROGRAMS.filter((program) => program.category === selected);

  return (
    <main>
      <section className="bg-[#f8fbff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-500">
            <span className="block h-1 w-5 bg-amber-500" />
            Programs
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-[#0f2f5c] font-playfair">50+ programs designed for real-world impact.</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Explore undergraduate, postgraduate, diploma, and online courses across science, business, arts, engineering, law, and medicine.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,35,78,0.05)]">
            <input
              className="min-w-[260px] flex-1 rounded-full border border-slate-200 bg-[#f8fbff] px-4 py-3 text-slate-800 outline-none"
              type="search"
              placeholder="Search programs..."
            />
            <div className="flex flex-wrap gap-3">
              {PROGRAM_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`rounded-full px-4 py-3 text-sm font-semibold transition ${selected === category ? 'bg-slate-900 text-white' : 'border border-slate-200 bg-[#f8fbff] text-slate-800 hover:bg-slate-100'}`}
                  onClick={() => setSelected(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredPrograms.map((program) => (
              <article key={program.name} className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,35,78,0.05)] transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="grid h-[50px] w-[50px] place-items-center rounded-[18px] bg-slate-900 text-white text-xl">{program.icon}</div>
                  <span className="text-sm uppercase tracking-[0.12em] text-amber-500">{program.category}</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">{program.name}</h2>
                <p className="text-slate-600 leading-7 mb-6">{program.description}</p>
                <div className="mb-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1">{program.duration}</span>
                  <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1">{program.credits}</span>
                  <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1">{program.price}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Lead Faculty</div>
                    <div className="font-semibold text-slate-900">{program.lead}</div>
                  </div>
                  <button className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-[#0f2f5c] transition hover:bg-amber-400">
                    Apply →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
