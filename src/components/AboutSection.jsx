import { Link } from "react-router-dom";
import aboutImg from "../assets/about-student.jpeg";

export default function AboutSection() {
  return (
    <section className="bg-[#f7f7f7] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 px-4 sm:px-6 lg:px-8">
        {/* Left Side Image */}
        <div className="relative h-full">
          <div className="h-full overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={aboutImg}
              alt="Students"
              className="h-full min-h-[500px] w-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-4 -right-4 sm:bottom-[-20px] sm:right-[-20px] rounded-2xl bg-[#0B2E63] px-6 sm:px-8 py-5 sm:py-6 shadow-2xl">
            <h3 className="text-4xl sm:text-5xl font-extrabold leading-none text-[#F6B21A]">
              40+
            </h3>

            <p className="mt-2 max-w-[140px] sm:max-w-[160px] text-xs leading-5 text-white">
              Years of academic excellence and innovation
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        {/* Right Side Content */}
        <div className="flex h-full flex-col justify-between py-6 sm:py-8 lg:py-10">
          {/* Top Content */}
          <div>
            {/* Small Title */}
            <div className="mb-4 sm:mb-5 flex items-center gap-3">
              <div className="h-px w-8 sm:w-10 bg-[#0B2E63]" />
              <span className="text-xs font-bold uppercase tracking-[4px] text-[#0B2E63]/70">
                About The College
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#0B2E63]">
              A community of <span className="text-[#F6B21A]">curious</span>
              <br />
              <span className="text-[#F6B21A]">minds</span> and bold ideas.
            </h2>

            {/* Description */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              At Greenfield, we believe education is more than a degree — it's a
              launchpad. Our 220-acre campus brings together students from 80+
              countries, world-renowned faculty, and labs where breakthroughs
              happen.
            </p>

            {/* Cards */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {/* Card 1 */}
              <div className="rounded-2xl border border-[#F6B21A]/40 bg-white p-5 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F6B21A]/10 text-xl text-[#F6B21A]">
                  ◎
                </div>

                <h3 className="mt-3 sm:mt-5 text-base sm:text-lg font-bold text-[#0B2E63]">
                  Our Mission
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Empower students to lead and create across disciplines.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F6B21A]/10 text-xl text-[#F6B21A]">
                  ◉
                </div>

                <h3 className="mt-3 sm:mt-5 text-base sm:text-lg font-bold text-[#0B2E63]">
                  Our Vision
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  A globally relevant, inclusive learning ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="pt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 rounded-full border border-[#0B2E63] px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-[#0B2E63] transition hover:bg-[#0B2E63] hover:text-white"
            >
              Read More
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
