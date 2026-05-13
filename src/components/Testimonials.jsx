import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Greenfield's research mentorship landed me at a top AI lab right after graduation. The community here is genuinely unmatched — professors treat you like a colleague, not a student.",
    name: "Aisha Khan",
    year: "Class of 2024",
    dept: "Computer Science",
    initials: "AK",
    bgColor: "#1e3a5f",
    tag: "Research",
    tagColor: "#3B82F6",
  },
  {
    id: 2,
    quote:
      "I came in undecided and left with a published paper, two internships, and lifelong friends. The interdisciplinary culture pushes you to think far beyond your major.",
    name: "Marcus Osei",
    year: "Class of 2023",
    dept: "Biomedical Engineering",
    initials: "MO",
    bgColor: "#3d1a0a",
    tag: "Innovation",
    tagColor: "#F97316",
  },
  {
    id: 3,
    quote:
      "The arts program here gave me a real platform. My senior thesis film screened at three international festivals. I couldn't have done it without the faculty and facilities.",
    name: "Sofia Reyes",
    year: "Class of 2024",
    dept: "Film & Media Arts",
    initials: "SR",
    bgColor: "#1a0a3d",
    tag: "Creative Arts",
    tagColor: "#8B5CF6",
  },
  {
    id: 4,
    quote:
      "Coming from abroad, I was nervous. But the campus felt like home within weeks. The diversity of thought here sharpens you in ways no textbook can.",
    name: "Yuna Park",
    year: "Class of 2025",
    dept: "Global Economics",
    initials: "YP",
    bgColor: "#0a3d1a",
    tag: "Global",
    tagColor: "#10B981",
  },
];

const AUTO_INTERVAL = 5000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap";
    document.head.appendChild(link);
    link.onload = () => setFontsLoaded(true);
    setTimeout(() => setFontsLoaded(true), 1000);
  }, []);

  const goTo = (idx) => {
    if (animating || idx === active) return;
    setAnimating(true);
    setPrev(active);
    setActive(idx);
    setProgress(0);
    setTimeout(() => {
      setAnimating(false);
      setPrev(null);
    }, 600);
  };

  const next = () => goTo((active + 1) % testimonials.length);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [active, animating]);

  // Progress bar
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / AUTO_INTERVAL) * 100, 100));
    }, 40);
    return () => clearInterval(progressRef.current);
  }, [active]);

  const t = testimonials[active];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f8f6f0 0%, #faf9f7 60%, #f0ede6 100%)",
        fontFamily: "'DM Sans', sans-serif",
        padding: "80px 0",
      }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Decorative background number */}
      <div
        className="absolute select-none pointer-events-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(240px, 30vw, 380px)",
          fontWeight: 600,
          color: "rgba(30,58,95,0.04)",
          top: "-40px",
          right: "-20px",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        "
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "28px", height: "1px", background: "#1e3a5f", opacity: 0.5 }} />
            <span
              style={{
                color: "#1e3a5f",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                fontFamily: "'Syne', sans-serif",
                opacity: 0.7,
              }}
            >
              Voices
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: "#0d1e35",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
            }}
          >
            What our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #F59E0B, #FBBF24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              students say
            </span>
          </h2>
        </div>

        {/* Main layout: 60/40 split */}
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: "1fr 340px", alignItems: "start" }}
        >
          {/* LEFT: Featured quote */}
          <div className="relative">
            {/* Decorative vertical line */}
            <div
              className="absolute left-0 top-0"
              style={{
                width: "3px",
                height: "100%",
                background: `linear-gradient(180deg, ${t.tagColor}, transparent)`,
                borderRadius: "4px",
                transition: "background 0.6s ease",
              }}
            />

            <div className="pl-8">
              {/* Tag */}
              <div
                className="inline-flex items-center gap-2 mb-6"
                style={{
                  background: `${t.tagColor}15`,
                  border: `1px solid ${t.tagColor}30`,
                  borderRadius: "20px",
                  padding: "5px 12px",
                  transition: "all 0.5s ease",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: t.tagColor,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: t.tagColor,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontFamily: "'Syne', sans-serif",
                    transition: "color 0.5s ease",
                  }}
                >
                  {t.tag}
                </span>
              </div>

              {/* Quote text */}
              <div
                key={`quote-${active}`}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(22px, 3vw, 34px)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#0d1e35",
                  lineHeight: 1.55,
                  marginBottom: "36px",
                  animation: "fadeSlideUp 0.6s ease forwards",
                }}
              >
                <span style={{ color: "#F59E0B", fontSize: "1.4em", lineHeight: 0.5, verticalAlign: "sub", marginRight: "4px" }}>"</span>
                {t.quote}
                <span style={{ color: "#F59E0B", fontSize: "1.4em", lineHeight: 0.5, verticalAlign: "sub", marginLeft: "4px" }}>"</span>
              </div>

              {/* Attribution */}
              <div
                key={`author-${active}`}
                className="flex items-center gap-4"
                style={{ animation: "fadeSlideUp 0.7s ease 0.1s both" }}
              >
                {/* Avatar circle */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${t.bgColor}, ${t.bgColor}cc)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "3px solid white",
                    boxShadow: `0 4px 20px ${t.tagColor}30`,
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "0.05em",
                    transition: "box-shadow 0.5s ease",
                  }}
                >
                  {t.initials}
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#0d1e35",
                      marginBottom: "2px",
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: "13px", color: "#64748b", fontWeight: 400 }}>
                    {t.year} · {t.dept}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-8" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      style={{
                        height: "3px",
                        borderRadius: "3px",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        transition: "all 0.4s ease",
                        width: i === active ? "32px" : "12px",
                        background: i === active ? "#F59E0B" : "rgba(30,58,95,0.2)",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      {i === active && (
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            height: "100%",
                            background: "#F59E0B",
                            width: `${progress}%`,
                            transition: "none",
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Prev / Next */}
                <div className="flex gap-2 ml-2">
                  {[
                    { label: "←", fn: () => goTo((active - 1 + testimonials.length) % testimonials.length) },
                    { label: "→", fn: next },
                  ].map(({ label, fn }, i) => (
                    <button
                      key={i}
                      onClick={fn}
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        border: "1px solid rgba(30,58,95,0.2)",
                        background: "white",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        color: "#1e3a5f",
                        transition: "all 0.2s ease",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#1e3a5f";
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "white";
                        e.currentTarget.style.color = "#1e3a5f";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Testimonial selector cards */}
          <div className="flex flex-col gap-3">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                onClick={() => goTo(i)}
                style={{
                  textAlign: "left",
                  background: i === active ? "white" : "rgba(255,255,255,0.5)",
                  border: `1px solid ${i === active ? item.tagColor + "40" : "rgba(30,58,95,0.08)"}`,
                  borderRadius: "14px",
                  padding: "16px 18px",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  boxShadow: i === active ? `0 8px 32px ${item.tagColor}15, 0 2px 8px rgba(0,0,0,0.05)` : "0 1px 4px rgba(0,0,0,0.04)",
                  transform: i === active ? "translateX(-6px)" : "translateX(0)",
                  borderLeft: `3px solid ${i === active ? item.tagColor : "transparent"}`,
                }}
                onMouseEnter={(e) => {
                  if (i !== active) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.85)";
                    e.currentTarget.style.transform = "translateX(-3px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (i !== active) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.5)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${item.bgColor}, ${item.bgColor}cc)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "white",
                      fontFamily: "'Syne', sans-serif",
                      flexShrink: 0,
                    }}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: i === active ? "#0d1e35" : "#64748b",
                        transition: "color 0.3s",
                      }}
                    >
                      {item.name}
                    </div>
                    <div style={{ fontSize: "11px", color: "#94a3b8" }}>{item.dept}</div>
                  </div>
                  {i === active && (
                    <div
                      style={{
                        marginLeft: "auto",
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: item.tagColor,
                        flexShrink: 0,
                        boxShadow: `0 0 8px ${item.tagColor}80`,
                      }}
                    />
                  )}
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: i === active ? "#475569" : "#94a3b8",
                    lineHeight: 1.55,
                    margin: 0,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    transition: "color 0.3s",
                  }}
                >
                  {item.quote}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom stats strip */}
        {/* <div
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(30,58,95,0.1)" }}
        >
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: "98%", label: "Graduate Employment Rate" },
              { value: "500+", label: "Student Testimonials" },
              { value: "4.9★", label: "Campus Experience Rating" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(24px, 3.5vw, 36px)",
                    fontWeight: 800,
                    color: "#0d1e35",
                    letterSpacing: "-1px",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "12px", color: "#94a3b8", letterSpacing: "0.03em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}