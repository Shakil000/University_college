import React from "react";
import {
  BookOpen,
  Dumbbell,
  FlaskConical,
  Users,
  CalendarDays,
  Building2,
} from "lucide-react";

const campusItems = [
  {
    title: "Student Clubs",
    desc: "Join 60+ active clubs across arts, coding, business, music, and sports.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Sports Arena",
    desc: "Olympic-grade indoor and outdoor facilities for every athlete.",
    icon: Dumbbell,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    size: "",
  },
  {
    title: "Innovation Labs",
    desc: "AI, Robotics, Biotech, and Maker spaces designed for creators.",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    size: "",
  },
  {
    title: "Central Library",
    desc: "1.2M+ books, collaborative zones, and 24/7 quiet study spaces.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    size: "lg:col-span-2",
  },
  {
    title: "Campus Events",
    desc: "TEDx, hackathons, cultural nights, startup fairs, and concerts.",
    icon: CalendarDays,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    size: "",
  },
  {
    title: "Modern Hostels",
    desc: "Comfortable living spaces with dining, lounges, and wellness areas.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop",
    size: "",
  },
];

export default function CampusLifeSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-blue-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
            Campus Life
          </span>

          <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-6xl">
            More than classrooms —
            <span className="block bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
              a complete experience.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Discover a vibrant student environment designed for growth,
            creativity, collaboration, and unforgettable memories.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-20 grid auto-rows-[280px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {campusItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl ${item.size}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-yellow-400/20" />
                </div>

                {/* Content */}
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <span className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {/* <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:scale-105">
                        Explore
                      </button> */}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Border Effect */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30" />
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        {/* <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-slate-200 bg-white/70 p-8 backdrop-blur-lg md:grid-cols-4">
          {[
            ["60+", "Student Clubs"],
            ["24/7", "Library Access"],
            ["120+", "Campus Events"],
            ["15+", "Sports Facilities"],
          ].map(([num, label], i) => (
            <div key={i} className="text-center">
              <h4 className="text-4xl font-black text-slate-900">{num}</h4>
              <p className="mt-2 text-sm font-medium text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}