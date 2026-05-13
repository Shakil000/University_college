import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-bg text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr] mb-14">
          <div className="max-w-[320px]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0d2818] text-white text-2xl font-black font-playfair">G</div>
              <div>
                <div className="font-playfair text-base font-bold text-white">Greenfield</div>
                <div className="text-xs text-white/75 uppercase tracking-[0.22em]">Int&apos;l College</div>
              </div>
            </div>
            <p className="mb-7 text-sm leading-7 text-white/75">
              Empowering future leaders through quality education, research excellence, and innovation since 1985.
            </p>
            <div className="flex gap-3">
              {['f', 't', 'i', 'in', '▶'].map((item) => (
                <div key={item} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/75 transition hover:border-amber-400 hover:text-amber-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-amber-400 font-playfair">Explore</div>
            <Link className="mb-3 block text-sm text-white/75 transition hover:text-white" to="/about">About Us</Link>
            <Link className="mb-3 block text-sm text-white/75 transition hover:text-white" to="/programs">Programs</Link>
            <Link className="mb-3 block text-sm text-white/75 transition hover:text-white" to="/admissions">Admissions</Link>
            <Link className="mb-3 block text-sm text-white/75 transition hover:text-white" to="/faculty">Faculty</Link>
            <Link className="mb-3 block text-sm text-white/75 transition hover:text-white" to="/gallery">Gallery</Link>
            <Link className="mb-3 block text-sm text-white/75 transition hover:text-white" to="/news">News & Events</Link>
          </div>

          <div>
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-amber-400 font-playfair">Contact</div>
            <div className="mb-4 flex items-start gap-3 text-sm leading-7 text-white/80">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">📍</span>
              <span>1247 University Ave, Greenfield, CA 94025</span>
            </div>
            <div className="mb-4 flex items-start gap-3 text-sm leading-7 text-white/80">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">📞</span>
              <span>+1 (650) 555-0142</span>
            </div>
            <div className="flex items-start gap-3 text-sm leading-7 text-white/80">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">✉️</span>
              <span>admissions@greenfield.edu</span>
            </div>
          </div>

          <div>
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-amber-400 font-playfair">Newsletter</div>
            <p className="mb-7 text-sm leading-7 text-white/75">
              Get updates on admissions, events and campus stories.
            </p>
            <div className="flex flex-wrap gap-3">
              <input className="min-w-[220px] flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none" type="email" placeholder="you@email.com" />
              <button className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-[#0f2f5c] transition hover:bg-amber-400">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-white/50">
          <div>© 2026 Greenfield International College. All rights reserved.</div>
          <div className="flex flex-wrap gap-6">
            <a className="transition hover:text-white" href="#">Privacy</a>
            <a className="transition hover:text-white" href="#">Terms</a>
            <a className="transition hover:text-white" href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
