import { Link } from 'react-router-dom';
import { ADMISSIONS } from '../data.js';

export default function Admissions() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-[#0d2818] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
          <span className="block h-1 w-5 bg-amber-400" />
          Admissions
        </div>
        <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-white font-playfair">
          Your Journey Starts with <em className="text-amber-300 italic">One Application</em>
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/80">
          Apply for fall or spring intake today and join a cohort built for innovation, leadership, and interdisciplinary learning.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ADMISSIONS.map((step) => (
            <div key={step.step} className="rounded-[24px] border border-white/10 bg-white/5 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.15)] backdrop-blur-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-lg font-bold text-slate-950">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-slate-200 leading-7">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link to="/admissions" className="rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-[#0f2f5c] transition hover:bg-amber-400">
            Start Your Application
          </Link>
          <p className="text-sm text-white/75 max-w-2xl">
            Need help? Contact admissions for guided support and scholarship opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
