import { ADMISSION_REQUIREMENTS, APPLICATION_PROCESS, TUITION_FEES, SCHOLARSHIPS, IMPORTANT_DATES, FAQS } from '../data.js';

export default function AdmissionsPage() {
  return (
    <main>
      <section className="bg-[#f8fbff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-500">
            <span className="block h-1 w-5 bg-amber-500" />
            Admissions 2026
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-[#0f2f5c] font-playfair">Begin your Greenfield journey today.</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            A simple, transparent admissions process. Whether you're starting your undergraduate degree or advancing your career, we’ve designed a pathway just for you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-8 space-y-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,35,78,0.05)]">
              <div className="mb-6 text-xl font-semibold text-slate-900">Admission Requirements</div>
              <ul className="space-y-3 text-slate-600 list-disc list-inside">
                {ADMISSION_REQUIREMENTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,35,78,0.05)]">
              <div className="mb-6 text-xl font-semibold text-slate-900">Application Process</div>
              <div className="space-y-5">
                {APPLICATION_PROCESS.map((step) => (
                  <div key={step.title} className="flex gap-4 rounded-3xl border border-slate-200 p-5">
                    <div className="min-w-[60px] rounded-full bg-blue-900 px-4 py-2 text-center text-sm font-bold text-white">{step.step}</div>
                    <div>
                      <div className="font-semibold text-slate-900">{step.title}</div>
                      <div className="text-sm leading-6 text-slate-600">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,35,78,0.05)]">
              <div className="mb-4 text-3xl">🎓</div>
              <div className="text-lg font-semibold text-slate-900 mb-3">Tuition Fees</div>
              <div className="space-y-3 text-sm text-slate-600">
                {TUITION_FEES.map((item) => (
                  <div key={item.type} className="flex items-center justify-between">
                    <span>{item.type}</span>
                    <span className="font-semibold text-slate-900">{item.price}</span>
                  </div>
                ))}
              </div>
            </article>
            <article className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,35,78,0.05)]">
              <div className="mb-4 text-3xl">💰</div>
              <div className="text-lg font-semibold text-slate-900 mb-3">Scholarships</div>
              <p className="mb-4 text-sm leading-7 text-slate-600">Need- and merit-based scholarships covering up to 75% of tuition. 70% of students receive aid.</p>
              <ul className="space-y-3 text-sm text-slate-600 list-disc list-inside">
                {SCHOLARSHIPS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,35,78,0.05)]">
              <div className="mb-4 text-3xl">📅</div>
              <div className="text-lg font-semibold text-slate-900 mb-3">Important Dates</div>
              <div className="space-y-3 text-sm text-slate-600">
                {IMPORTANT_DATES.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <span className="font-semibold text-slate-900">{item.date}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <article className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,35,78,0.05)]">
            <div className="mb-6 text-xl font-semibold text-slate-900">Frequently asked questions</div>
            <div className="space-y-4 text-slate-600">
              {FAQS.map((item) => (
                <details key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <summary className="cursor-pointer font-semibold text-slate-900">{item.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
