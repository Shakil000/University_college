import { useState } from 'react';
import { FACULTY_MEMBERS, FACULTY_CATEGORIES } from '../data.js';

export default function FacultyPage() {
  const [selected, setSelected] = useState('All');
  const filteredFaculty = selected === 'All'
    ? FACULTY_MEMBERS
    : FACULTY_MEMBERS.filter((member) => member.department === selected);

  return (
    <main>
      <section className="bg-[#f8fbff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-500">
            <span className="block h-1 w-5 bg-amber-500" />
            Faculty
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-[#0f2f5c] font-playfair">Meet the minds shaping tomorrow’s leaders.</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Our faculty are recognized researchers, industry veterans, and award-winning educators committed to mentorship and discovery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {FACULTY_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${selected === category ? 'bg-slate-900 text-white' : 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50'}`}
                onClick={() => setSelected(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredFaculty.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,35,78,0.05)]">
                <div className="h-72 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }} />
                <div className="space-y-3 p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-500">{member.department}</div>
                  <div className="text-xl font-semibold text-slate-900">{member.name}</div>
                  <div className="text-sm text-slate-600">{member.role}</div>
                  <div className="text-sm font-medium text-slate-500">{member.school}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.socials.map((icon) => (
                      <span key={icon} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-900 hover:text-blue-900">
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
