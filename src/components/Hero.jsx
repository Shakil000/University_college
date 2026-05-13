import { useNavigate } from 'react-router-dom';
import bannerImg from '../assets/banner.jpeg';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative overflow-hidden text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B2E4F]/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 lg:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
          
          {/* Left Side */}
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 mt-12 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
              <span className="text-yellow-400">✨</span>
              <span className="text-sm font-semibold uppercase tracking-[3px] text-white">
                Admissions Open · 2026
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-extrabold leading-[1] tracking-tight sm:text-6xl lg:text-7xl">
              Empowering the<br />
              <em className="text-amber-300 italic">Future Leaders</em><br />
              of Tomorrow
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              For four decades Greenfield has cultivated original thinkers —
              combining academic rigor, world-class research, and a campus
              culture that turns ambition into impact.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigate('/programs')}
                className="rounded-full bg-amber-400 px-8 py-4 text-sm font-bold text-[#0B2E4F] transition hover:bg-amber-300"
              >
                Apply Now →
              </button>

              <button
                type="button"
                onClick={() => navigate('/admissions')}
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Explore Programs
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden items-center justify-center lg:flex">
            <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              
              {/* Outer Ring */}
              <div className="absolute h-[340px] w-[340px] rounded-full border border-amber-400/20" />

              {/* Inner Circle */}
              <div className="flex h-[250px] w-[250px] flex-col items-center justify-center rounded-full border border-amber-400/30 bg-[#0B2E4F]/60 text-center shadow-2xl">
                <h2 className="text-6xl font-black text-amber-400">
                  GIC
                </h2>

                <div className="mt-2 text-xs uppercase tracking-[4px] text-slate-300">
                  Est. 1978
                </div>

                <div className="my-4 h-px w-16 bg-amber-400" />

                <p className="max-w-[170px] text-xs uppercase tracking-[3px] text-slate-300">
                  Greenfield International College
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}