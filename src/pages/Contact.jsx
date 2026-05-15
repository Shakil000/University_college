import { useState, useEffect, useRef } from 'react';

// ─── Inline animation styles ───────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  .contact-root { font-family: 'DM Sans', sans-serif; }
  .display-font { font-family: 'Cormorant Garamond', serif; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes floatY {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50%       { transform: translateY(-18px) rotate(3deg); }
  }
  @keyframes floatX {
    0%, 100% { transform: translateX(0px) rotate(0deg); }
    50%       { transform: translateX(12px) rotate(-2deg); }
  }
  @keyframes pulse-ring {
    0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(212,175,55,0.4); }
    70%  { transform: scale(1);    box-shadow: 0 0 0 12px rgba(212,175,55,0); }
    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(212,175,55,0); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes lineGrow {
    from { width: 0; } to { width: 64px; }
  }
  @keyframes mapReveal {
    from { opacity: 0; transform: scale(0.97) translateY(20px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }

  .anim-fade-up   { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) forwards; }
  .anim-fade-in   { animation: fadeIn 0.8s ease forwards; }
  .anim-slide-r   { animation: slideRight 0.7s cubic-bezier(.22,.68,0,1.2) forwards; }
  .anim-map       { animation: mapReveal 0.9s cubic-bezier(.22,.68,0,1.2) forwards; }

  .delay-100 { animation-delay: 0.10s; }
  .delay-200 { animation-delay: 0.20s; }
  .delay-300 { animation-delay: 0.30s; }
  .delay-400 { animation-delay: 0.40s; }
  .delay-500 { animation-delay: 0.50s; }
  .delay-600 { animation-delay: 0.60s; }
  .delay-700 { animation-delay: 0.70s; }

  .float-1 { animation: floatY 6s ease-in-out infinite; }
  .float-2 { animation: floatX 8s ease-in-out infinite; }
  .float-3 { animation: floatY 10s ease-in-out infinite reverse; }

  .shimmer-btn {
    background: linear-gradient(90deg, #d4af37 0%, #f5e17a 40%, #d4af37 60%, #b8860b 100%);
    background-size: 200% auto;
    animation: shimmer 2.5s linear infinite;
  }
  .shimmer-btn:hover { animation-play-state: paused; filter: brightness(1.1); }

  .input-field {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(212,175,55,0.2);
    color: #f0ece0;
    transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
    outline: none;
  }
  .input-field::placeholder { color: rgba(240,236,224,0.3); }
  .input-field:focus {
    border-color: rgba(212,175,55,0.7);
    background: rgba(212,175,55,0.06);
    box-shadow: 0 0 0 3px rgba(212,175,55,0.1), 0 4px 20px rgba(212,175,55,0.08);
  }

  .card-hover {
    transition: transform 0.3s cubic-bezier(.22,.68,0,1.2), box-shadow 0.3s;
  }
  .card-hover:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,175,55,0.3);
  }

  .map-container {
    position: relative;
    overflow: hidden;
    border-radius: 24px;
  }
  .map-container::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid rgba(212,175,55,0.3);
    border-radius: 24px;
    z-index: 2;
    pointer-events: none;
  }
  .map-container iframe {
    display: block;
    filter: sepia(30%) hue-rotate(180deg) contrast(0.9) brightness(0.8);
  }

  .pulse-dot { animation: pulse-ring 2s ease-out infinite; }
  .line-grow { animation: lineGrow 0.8s cubic-bezier(.22,.68,0,1.2) 0.3s forwards; width: 0; }

  .section-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 4px 14px;
    border-radius: 999px;
    border: 1px solid rgba(212,175,55,0.4);
    color: #d4af37;
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    background: rgba(212,175,55,0.08);
  }
`;

// ─── Contact card data ────────────────────────────────────────────────────
const CONTACT_CARDS = [
  {
    icon: '📍',
    title: 'Visit Us',
    details: '123 University Avenue\nDhaka, Bangladesh 1205',
    color: 'from-amber-900/20 to-transparent',
  },
  {
    icon: '📞',
    title: 'Call Us',
    details: '+880 2-9123456\nMon–Fri, 8 AM – 5 PM',
    color: 'from-blue-900/20 to-transparent',
  },
  {
    icon: '✉️',
    title: 'Email Us',
    details: 'admissions@university.edu\nsupport@university.edu',
    color: 'from-emerald-900/20 to-transparent',
  },
  {
    icon: '🕐',
    title: 'Office Hours',
    details: 'Monday – Friday: 8 AM – 5 PM\nSaturday: 9 AM – 1 PM',
    color: 'from-purple-900/20 to-transparent',
  },
];

// ─── Component ────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    // tiny delay so initial CSS animations fire properly after mount
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <style>{styles}</style>

      <main
        className="contact-root min-h-screen relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0b0f 0%, #0e1118 50%, #080d14 100%)' }}
      >
        {/* ── Decorative orbs ─────────────────────────────────────── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="float-1 absolute rounded-full opacity-10"
            style={{
              width: 500, height: 500, top: '-10%', right: '-5%',
              background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)',
            }}
          />
          <div
            className="float-2 absolute rounded-full opacity-8"
            style={{
              width: 350, height: 350, bottom: '10%', left: '-5%',
              background: 'radial-gradient(circle, #1e3a5f 0%, transparent 70%)',
            }}
          />
          <div
            className="float-3 absolute rounded-full opacity-5"
            style={{
              width: 200, height: 200, top: '40%', left: '30%',
              background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)',
            }}
          />
          {/* grid lines */}
          <div
            className="absolute inset-0 opacity-3"
            style={{
              backgroundImage: 'linear-gradient(rgba(212,175,55,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.06) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative pt-24 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            {mounted && (
              <>
                <div className="opacity-0 anim-fade-in delay-100">
                  <span className="section-tag">✦ Get in Touch</span>
                </div>

                <h1
                  className="display-font opacity-0 anim-fade-up delay-200 mt-5"
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 7rem)',
                    fontWeight: 300,
                    lineHeight: 1.05,
                    color: '#f0ece0',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Let's Start a<br />
                  <span
                    style={{
                      fontStyle: 'italic',
                      background: 'linear-gradient(90deg, #d4af37, #f5e17a)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Conversation.
                  </span>
                </h1>

                <div className="opacity-0 anim-fade-up delay-400 mt-6 flex items-center gap-4">
                  <div className="line-grow h-px bg-gradient-to-r from-amber-400 to-transparent" />
                  <p style={{ color: 'rgba(240,236,224,0.5)', fontSize: '0.95rem', maxWidth: 480 }}>
                    Reach out for admissions queries, campus visits, partnerships, or just to say hello. We respond within 24 hours.
                  </p>
                </div>
              </>
            )}
          </div>
        </section>

        {/* ── Main grid ─────────────────────────────────────────────── */}
        <section className="relative px-6 pb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Left column — info cards + map */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              {mounted && CONTACT_CARDS.map((card, i) => (
                <div
                  key={card.title}
                  className={`card-hover opacity-0 anim-slide-r delay-${(i + 2) * 100} rounded-2xl p-5 flex gap-4 items-start`}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(212,175,55,0.15)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div
                    className="pulse-dot flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <div
                      className="display-font font-semibold text-base mb-1"
                      style={{ color: '#d4af37' }}
                    >
                      {card.title}
                    </div>
                    <div
                      className="text-sm leading-relaxed whitespace-pre-line"
                      style={{ color: 'rgba(240,236,224,0.55)' }}
                    >
                      {card.details}
                    </div>
                  </div>
                </div>
              ))}

              {/* Map */}
              {mounted && (
                <div className="opacity-0 anim-map delay-700 map-container" style={{ height: 240 }}>
                  <iframe
                    title="Campus Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2743507456956!2d90.39292887469558!3d23.737548788724077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%20University!5e0!3m2!1sen!2sbd!4v1716819345678!5m2!1sen!2sbd"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 z-10 p-3 flex items-center gap-2"
                    style={{ background: 'linear-gradient(to top, rgba(10,11,15,0.9) 0%, transparent 100%)' }}
                  >
                    <div className="w-2 h-2 rounded-full bg-amber-400 pulse-dot" />
                    <span className="text-xs" style={{ color: 'rgba(240,236,224,0.6)' }}>
                      University Campus, Dhaka
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right column — form */}
            {mounted && (
              <div className="lg:col-span-3 opacity-0 anim-fade-up delay-300">
                <div
                  className="rounded-3xl p-8 h-full relative overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(212,175,55,0.15)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  {/* corner accent */}
                  <div
                    className="pointer-events-none absolute top-0 right-0 w-48 h-28 rounded-bl-full opacity-10"
                    style={{ background: 'radial-gradient(circle at top right, #d4af37, transparent 70%)' }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2
                          className="display-font text-3xl font-semibold"
                          style={{ color: '#f0ece0', letterSpacing: '-0.01em' }}
                        >
                          Send a Message
                        </h2>
                        <p className="text-sm mt-1" style={{ color: 'rgba(240,236,224,0.4)' }}>
                          We'll get back to you within 24 hours.
                        </p>
                      </div>
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}
                      >
                        <span className="text-lg">✉</span>
                      </div>
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-medium mb-2 tracking-widest uppercase" style={{ color: 'rgba(212,175,55,0.8)' }}>
                          Full Name <span style={{ color: '#d4af37' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="input-field w-full px-4 py-3 rounded-xl text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-2 tracking-widest uppercase" style={{ color: 'rgba(212,175,55,0.8)' }}>
                          Email <span style={{ color: '#d4af37' }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="input-field w-full px-4 py-3 rounded-xl text-sm"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="mb-4">
                      <label className="block text-xs font-medium mb-2 tracking-widest uppercase" style={{ color: 'rgba(212,175,55,0.8)' }}>
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="input-field w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-7">
                      <label className="block text-xs font-medium mb-2 tracking-widest uppercase" style={{ color: 'rgba(212,175,55,0.8)' }}>
                        Message <span style={{ color: '#d4af37' }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us what's on your mind…"
                        className="input-field w-full px-4 py-3 rounded-xl text-sm resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={handleSubmit}
                        className="shimmer-btn relative px-8 py-3 rounded-full text-sm font-semibold cursor-pointer transition-all"
                        style={{
                          color: '#0a0b0f',
                          border: 'none',
                          letterSpacing: '0.05em',
                          boxShadow: '0 4px 24px rgba(212,175,55,0.3)',
                        }}
                      >
                        {submitted ? '✓ Message Sent!' : 'Send Message →'}
                      </button>

                      {submitted && (
                        <span
                          className="text-sm anim-fade-in"
                          style={{ color: 'rgba(212,175,55,0.7)' }}
                        >
                          We'll be in touch soon.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}