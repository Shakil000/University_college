import { useState, useEffect, useRef } from "react";
import director from "../assets/director.jpeg"

/* ─────────────── DATA ─────────────── */
const stats = [
  { value: 120, suffix: "+", label: "Students Enrolled" },
  { value: 140, suffix: "+", label: "Faculty Members" },
  { value: 120, suffix: "+", label: "Academic Programs" },
  { value: 98, suffix: "%", label: "Placement Rate" },
];

const timeline = [
  { year: "1985", title: "Foundation", desc: "Greenfield was established with a singular vision — to build a college where curiosity is currency.", side: "left" },
  { year: "1995", title: "First International Campus", desc: "Opened our first satellite campus in Singapore, beginning our global journey.", side: "right" },
  { year: "2006", title: "AACSB Accreditation", desc: "Business school joined elite global accreditation list, validating world-class standards.", side: "left" },
  { year: "2016", title: "AI Research Center", desc: "Launched a multidisciplinary AI & Robotics research center, pioneering the next frontier.", side: "right" },
  { year: "2024", title: "Top 50 Worldwide", desc: "Entered the QS World University Top 50 for the first time — four decades in the making.", side: "left" },
];

const accreditations = [
  { name: "AACSB Accredited", icon: "🏛" },
  { name: "QS Top 50 Worldwide", icon: "🌍" },
  { name: "ABET Engineering", icon: "⚙️" },
  { name: "Times Higher Education ★★★★★", icon: "🏆" },
];

const values = [
  { title: "Curiosity", desc: "Every discovery starts with a question. We reward students who ask boldly.", icon: "◎", color: "#3B82F6" },
  { title: "Integrity", desc: "Academic honesty and ethical leadership are the bedrock of everything we do.", icon: "◈", color: "#10B981" },
  { title: "Impact", desc: "Research that shapes policy, products, and lives — not just academic papers.", icon: "◆", color: "#F59E0B" },
];

/* ─────────────── COUNTER HOOK ─────────────── */
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
}

/* ─────────────── STAT CARD ─────────────── */
function StatCard({ value, suffix, label, started }) {
  const count = useCounter(value, 2200, started);
  return (
    <div className="text-center px-4 py-2">
      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px,4vw,52px)", fontWeight: 800, color: "white", lineHeight: 1, letterSpacing: "-1.5px", marginBottom: "8px" }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>{label}</div>
    </div>
  );
}

/* ─────────────── TIMELINE ITEM ─────────────── */
function TimelineItem({ item, index, inView }) {
  const isLeft = item.side === "left";
  return (
    <div
      className="relative flex items-center gap-0"
      style={{
        marginBottom: "0",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${index * 120}ms, transform 0.7s ease ${index * 120}ms`,
      }}
    >
      {/* Left content or spacer */}
      <div className="flex-1 flex justify-end pr-10">
        {isLeft ? (
          <div
            className="rounded-2xl p-6 max-w-sm w-full"
            style={{ background: "white", border: "1px solid rgba(15,30,60,0.07)", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
          >
            <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "11px", fontWeight: 800, color: "#F59E0B", letterSpacing: "0.15em" }}>{item.year}</span>
            <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "22px", fontWeight: 700, color: "#0d1e35", margin: "6px 0 8px", letterSpacing: "-0.3px" }}>{item.title}</h4>
            <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.65 }}>{item.desc}</p>
          </div>
        ) : <div className="max-w-sm w-full" />}
      </div>

      {/* Center dot */}
      <div
        className="flex-shrink-0 flex items-center justify-center"
        style={{ width: "20px", height: "20px", borderRadius: "50%", background: inView ? "#F59E0B" : "white", border: "3px solid #F59E0B", boxShadow: inView ? "0 0 0 5px rgba(245,158,11,0.15)" : "none", transition: `background 0.4s ease ${index * 120 + 400}ms, box-shadow 0.4s ease ${index * 120 + 400}ms`, zIndex: 2 }}
      />

      {/* Right content or spacer */}
      <div className="flex-1 pl-10">
        {!isLeft ? (
          <div
            className="rounded-2xl p-6 max-w-sm"
            style={{ background: "white", border: "1px solid rgba(15,30,60,0.07)", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
          >
            <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "11px", fontWeight: 800, color: "#F59E0B", letterSpacing: "0.15em" }}>{item.year}</span>
            <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "22px", fontWeight: 700, color: "#0d1e35", margin: "6px 0 8px", letterSpacing: "-0.3px" }}>{item.title}</h4>
            <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.65 }}>{item.desc}</p>
          </div>
        ) : <div className="max-w-sm" />}
      </div>
    </div>
  );
}

/* ─────────────── SECTION WRAPPER ─────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─────────────── MAIN COMPONENT ─────────────── */
export default function AboutPage() {
  const [heroRef, heroVisible] = useInView(0.1);
  const [statsRef, statsVisible] = useInView(0.3);
  const [missionRef, missionVisible] = useInView(0.2);
  const [quoteRef, quoteVisible] = useInView(0.2);
  const [tlRef, tlVisible] = useInView(0.05);
  const [accRef, accVisible] = useInView(0.2);
  const [valRef, valVisible] = useInView(0.2);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap";
    document.head.appendChild(link);
  }, []);

  const SectionLabel = ({ text }) => (
    <div className="flex items-center gap-3 mb-4">
      <div style={{ width: "24px", height: "1px", background: "#F59E0B" }} />
      <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#F59E0B" }}>{text}</span>
    </div>
  );

  return (
    <div style={{ fontFamily: "'DM Sans',sans-serif", background: "#f9f6f0", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ padding: "96px 0 80px", background: "linear-gradient(160deg,#f9f6f0 0%,#f3ede3 100%)" }}
      >
        {/* Background dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(15,30,60,0.05) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        {/* Decorative watermark */}
        <div className="absolute right-0 top-0 pointer-events-none select-none overflow-hidden" style={{ opacity: 0.04 }}>
          <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(80px,15vw,180px)", fontWeight: 800, color: "#0d1e35", whiteSpace: "nowrap", lineHeight: 1 }}>GREENFIELD</span>
        </div>
        {/* Decorative circle */}
        <div className="absolute pointer-events-none" style={{ width: "400px", height: "400px", borderRadius: "50%", border: "1px solid rgba(245,158,11,0.12)", top: "-100px", right: "5%", }} />
        <div className="absolute pointer-events-none" style={{ width: "240px", height: "240px", borderRadius: "50%", border: "1px solid rgba(245,158,11,0.1)", top: "40px", right: "12%", }} />

        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <div
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(24px)", transition: "all 0.8s ease" }}
            >
              <SectionLabel text="About Greenfield" />
            </div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond',serif", fontWeight: 700,
                fontSize: "clamp(40px,6vw,76px)", color: "#0d1e35", lineHeight: 1.08,
                letterSpacing: "-2px", marginBottom: "28px",
                opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(32px)",
                transition: "all 0.9s ease 0.1s",
              }}
            >
              Four decades of academic excellence, research,{" "}
              <em style={{ fontStyle: "italic", color: "#F59E0B" }}>and global impact.</em>
            </h1>
            <p
              style={{
                fontSize: "17px", color: "#475569", lineHeight: 1.75, maxWidth: "560px", fontWeight: 300,
                opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.9s ease 0.22s",
              }}
            >
              Greenfield International College was founded in 1985 with a singular ambition — build a college where curiosity is currency and where every student is empowered to lead change in their field.
            </p>

            {/* Hero badges */}
            <div
              className="flex flex-wrap gap-3 mt-8"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.9s ease 0.35s" }}
            >
              {["Est. 1985", "40+ Years", "Global Reach"].map((b) => (
                <span key={b} style={{ padding: "7px 16px", borderRadius: "50px", background: "white", border: "1px solid rgba(15,30,60,0.1)", fontSize: "12px", fontWeight: 600, color: "#0d1e35", fontFamily: "'Syne',sans-serif", letterSpacing: "0.04em", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section ref={missionRef} style={{ padding: "72px 0", background: "#f9f6f0" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Our Mission", icon: "◎", color: "#F59E0B", text: "To empower a diverse community of learners through rigorous academics, original research, and a culture of inclusion that turns ambition into measurable impact." },
              { label: "Our Vision", icon: "◈", color: "#10B981", text: "To be a globally relevant college recognized for educating curious minds, advancing science and art, and partnering with industry to solve real-world challenges." },
            ].map((card, i) => (
              <div
                key={card.label}
                className="rounded-2xl p-8 relative overflow-hidden group cursor-default"
                style={{
                  background: "white", border: "1px solid rgba(15,30,60,0.07)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                  opacity: missionVisible ? 1 : 0,
                  transform: missionVisible ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.7s ease ${i * 150}ms, transform 0.7s ease ${i * 150}ms`,
                }}
              >
                {/* Decorative background shape */}
                <div className="absolute top-0 right-0 pointer-events-none" style={{ width: "120px", height: "120px", borderRadius: "0 0 0 120px", background: `${card.color}08`, transition: "all 0.4s ease" }} />
                <div
                  className="flex items-center justify-center mb-5"
                  style={{ width: "48px", height: "48px", borderRadius: "14px", background: `${card.color}15`, fontSize: "22px", border: `1px solid ${card.color}25` }}
                >
                  {card.icon}
                </div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "20px", fontWeight: 700, color: "#0d1e35", marginBottom: "12px" }}>{card.label}</h3>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>{card.text}</p>
                {/* Bottom accent line */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${card.color}, transparent)`, borderRadius: "0 0 16px 16px" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHAIRPERSON QUOTE ── */}
      <section ref={quoteRef} style={{ padding: "0 0 80px" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{
              background: "white", border: "1px solid rgba(15,30,60,0.07)",
              boxShadow: "0 8px 48px rgba(0,0,0,0.06)",
              opacity: quoteVisible ? 1 : 0, transform: quoteVisible ? "translateY(0)" : "translateY(28px)",
              transition: "all 0.8s ease",
            }}
          >
            {/* Inner grid */}
            <div className="grid md:grid-cols-[280px_1fr]">
              {/* Left: Avatar + name */}
              <div
                className="flex flex-col items-center justify-center p-10"
                style={{ background: "linear-gradient(160deg,#0d1e35 0%,#1a3556 100%)", position: "relative", overflow: "hidden" }}
              >
                {/* Decorative circles */}
                <div style={{ position: "absolute", width: "200px", height: "200px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)", top: "-60px", right: "-60px" }} />
                <div style={{ position: "absolute", width: "150px", height: "150px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)", bottom: "-40px", left: "-40px" }} />
                {/* Avatar */}
                <div
                  style={{
                    width: "110px", height: "110px", borderRadius: "50%",
                    overflow: "hidden",
                    background: "linear-gradient(135deg,#F59E0B,#FBBF24)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "4px solid orange", marginBottom: "20px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  <img className="rounded-full w-full h-full object-cover" src={director} alt="Chairperson" />
                </div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "16px", fontWeight: 700, color: "white", marginBottom: "4px" }}>M Saddam Hossain </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>Executive Director</div>
                {/* Amber accent line */}
                <div style={{ width: "40px", height: "3px", background: "#F59E0B", borderRadius: "2px", marginTop: "16px" }} />
              </div>

              {/* Right: Quote */}
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "52px", color: "#F59E0B", lineHeight: 0.8, marginBottom: "16px", fontWeight: 700 }}>"</div>
                <blockquote
                  style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(18px,2.2vw,24px)", fontStyle: "italic", color: "#0d1e35", lineHeight: 1.6, marginBottom: "20px", fontWeight: 600, letterSpacing: "-0.2px" }}
                >
                  At Greenfield, we don't just prepare students for jobs — we prepare them to define what's next. Every classroom, lab, and studio is designed for the rigor and creativity tomorrow demands.
                </blockquote>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>
                  It is my privilege to welcome you to a community where excellence and empathy coexist, and where the future is built one student at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section ref={statsRef} style={{ background: "linear-gradient(135deg,#0d1e35 0%,#1a3556 60%,#0d2847 100%)", padding: "64px 0", position: "relative", overflow: "hidden" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute pointer-events-none" style={{ width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(ellipse,rgba(245,158,11,0.06),transparent 65%)", top: "-150px", right: "0" }} />
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={s.label} style={{ opacity: statsVisible ? 1 : 0, transition: `opacity 0.6s ease ${i * 100}ms` }}>
                <StatCard {...s} started={statsVisible} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section ref={valRef} style={{ padding: "80px 0", background: "#f9f6f0" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-12 text-center">
            <SectionLabel text="What drives us" />
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,4.5vw,52px)", fontWeight: 700, color: "#0d1e35", letterSpacing: "-1px", lineHeight: 1.15 }}>
              Our core values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl p-8 text-center relative overflow-hidden group"
                style={{
                  background: "white", border: `1px solid ${v.color}20`,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                  opacity: valVisible ? 1 : 0, transform: valVisible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.7s ease ${i * 150}ms, transform 0.7s ease ${i * 150}ms`,
                  cursor: "default",
                }}
              >
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: `linear-gradient(90deg,transparent,${v.color},transparent)`, opacity: 0.7 }} />
                <div style={{ fontSize: "36px", marginBottom: "16px", color: v.color }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "20px", fontWeight: 700, color: "#0d1e35", marginBottom: "10px" }}>{v.title}</h3>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCREDITATIONS ── */}
      <section ref={accRef} style={{ padding: "72px 0", background: "white" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <SectionLabel text="Accreditations & Achievements" />
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,4.5vw,52px)", fontWeight: 700, color: "#0d1e35", letterSpacing: "-1px", lineHeight: 1.15 }}>
              Recognized excellence
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {accreditations.map((a, i) => (
              <div
                key={a.name}
                className="rounded-2xl p-6 flex flex-col items-center text-center gap-3 group cursor-default"
                style={{
                  background: "#f9f6f0", border: "1px solid rgba(15,30,60,0.07)",
                  transition: "all 0.3s ease",
                  opacity: accVisible ? 1 : 0, transform: accVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${i * 100}ms`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(245,158,11,0.12)"; e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(15,30,60,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", border: "1px solid rgba(245,158,11,0.2)" }}>
                  {a.icon}
                </div>
                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "13px", fontWeight: 700, color: "#0d1e35", lineHeight: 1.3 }}>{a.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section ref={tlRef} style={{ padding: "80px 0 96px", background: "#f9f6f0" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <SectionLabel text="Our Journey" />
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,4.5vw,52px)", fontWeight: 700, color: "#0d1e35", letterSpacing: "-1px", lineHeight: 1.15 }}>
              A timeline of milestones
            </h2>
          </div>

          {/* Timeline track */}
          <div className="relative" style={{ paddingTop: "16px" }}>
            {/* Vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0"
              style={{
                width: "2px", transform: "translateX(-50%)",
                background: "linear-gradient(180deg, #F59E0B 0%, rgba(245,158,11,0.2) 100%)",
                opacity: tlVisible ? 1 : 0.1, transition: "opacity 1s ease",
              }}
            />

            <div className="flex flex-col" style={{ gap: "32px" }}>
              {timeline.map((item, i) => (
                <TimelineItem key={item.year} item={item} index={i} inView={tlVisible} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}