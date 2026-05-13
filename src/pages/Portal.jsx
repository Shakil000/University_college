import { PORTAL_FEATURES } from '../data.js';

export default function PortalPage() {
  return (
    <main>
      <section className="bg-[#f8fbff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-500">
            <span className="block h-1 w-5 bg-amber-500" />
            Student Portal
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-[#0f2f5c] font-playfair">Your academic life, in one place.</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Courses, grades, attendance, assignments, calendar and notifications — designed for clarity.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-8 space-y-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {PORTAL_FEATURES.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,35,78,0.05)]">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-[16px] bg-blue-900 text-white text-xl">{item.icon}</div>
                <div className="text-lg font-semibold text-slate-900 mb-3">{item.title}</div>
                <p className="text-slate-600 leading-7">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto max-w-md rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,35,78,0.08)]">
            <div className="mb-5 text-2xl font-bold text-blue-900 font-playfair">Sign in</div>
            <p className="mb-6 text-sm leading-7 text-slate-600">Demo mode — credentials pre-filled.</p>
            <form>
              <label className="mb-2 block text-sm font-semibold text-slate-800">Student Email</label>
              <input className="mb-4 w-full rounded-[18px] border border-slate-200 bg-[#f8fbff] px-4 py-3 text-slate-900 outline-none" type="email" defaultValue="aisha.khan@greenfield.edu" />
              <label className="mb-2 block text-sm font-semibold text-slate-800">Password</label>
              <input className="mb-4 w-full rounded-[18px] border border-slate-200 bg-[#f8fbff] px-4 py-3 text-slate-900 outline-none" type="password" defaultValue="********" />
              <button className="w-full rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-[#0f2f5c] transition hover:bg-amber-400" type="button">
                Sign in to Dashboard
              </button>
              <p className="mt-4 text-sm text-slate-500">This is a demo dashboard — no real authentication.</p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
