import React from 'react';

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

      *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

      :root {
        --g900: #0d2818;
        --g800: #143520;
        --g700: #1a4731;
        --g600: #235c3f;
        --g500: #2d7a52;
        --gold: #c9a84c;
        --gold-lt: #e8c97a;
        --gold-pale: #f5e9c8;
        --cream: #f8f4ed;
        --cream-dk: #f0e9da;
        --txt: #1a1a1a;
        --txt-mid: #4a4a4a;
        --txt-lt: #7a7a7a;
      }

      html { scroll-behavior: smooth; }
      body {
        font-family: 'DM Sans', sans-serif;
        background: var(--cream);
        color: var(--txt);
        overflow-x: hidden;
      }

      /* ─── NAVBAR ─── */
      .navbar {
        position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
        background: rgba(255,255,255,0.96);
        border-bottom: 1px solid rgba(15, 35, 55, 0.08);
        backdrop-filter: blur(16px);
        transition: box-shadow 0.3s, transform 0.3s;
      }
      .navbar.scrolled {
        box-shadow: 0 18px 50px rgba(15, 35, 55, 0.08);
      }
      .nav-inner {
        max-width: 1280px; margin: 0 auto;
        display: flex; align-items: center; justify-content: space-between;
        height: 82px; padding: 0 2rem; gap: 1rem;
      }

      /* Logo */
      .logo-area {
        display: flex; align-items: center; gap: 0.9rem;
      }
      .logo-box {
        width: 52px; height: 52px; background: var(--g900);
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        border-radius: 18px;
      }
      .logo-g { font-family: 'Playfair Display', serif; font-weight: 900; font-size: 1.4rem; color: #fff; }
      .logo-text { margin-left: 0.75rem; }
      .logo-name { font-family: 'Playfair Display', serif; font-weight: 800; font-size: 1rem; color: #0f2f5c; line-height: 1.1; }
      .logo-sub { font-size: 0.65rem; color: #64748b; letter-spacing: 0.22em; text-transform: uppercase; }

      /* Nav links */
      .nav-links { display: flex; align-items: center; gap: 0.75rem; flex: 1; justify-content: center; }
      .nav-link {
        color: #0f2f5c; font-size: 0.95rem; font-weight: 600;
        letter-spacing: 0.02em; cursor: pointer; text-decoration: none;
        transition: color 0.2s, background 0.2s, transform 0.2s;
        padding: 0.92rem 1.1rem; border-radius: 999px;
        background: transparent;
        white-space: nowrap;
      }
      .nav-link:hover {
        color: var(--g900); background: rgba(13, 40, 24, 0.04);
      }
      .nav-link.active {
        color: #0f2f5c; font-weight: 700;
        background: rgba(14, 70, 121, 0.10);
        box-shadow: inset 0 0 0 1px rgba(14, 70, 121, 0.12);
      }

      /* Right side */
      .nav-right { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
      .theme-btn {
        width: 40px; height: 40px; border-radius: 50%;
        border: none; background: rgba(15, 47, 86, 0.05); cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        color: #0f2f5c; font-size: 1.05rem;
        transition: background 0.2s, transform 0.2s;
      }
      .theme-btn:hover { background: rgba(15, 47, 86, 0.12); transform: translateY(-1px); }
      .btn-apply {
        background: #f8b500; color: #0f2f5c; border: none;
        padding: 0.95rem 1.7rem; font-family: 'DM Sans', sans-serif;
        font-weight: 700; font-size: 0.95rem; letter-spacing: 0.01em;
        border-radius: 999px; cursor: pointer; transition: all 0.22s;
        box-shadow: 0 12px 24px rgba(248, 181, 0, 0.18);
      }
      .btn-apply:hover { background: #f5a500; transform: translateY(-1px); }

      /* Theme toggle */
      .theme-btn {
        width: 36px; height: 36px; border-radius: 50%;
        border: none; background: none; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        color: #64748b; font-size: 1.1rem;
        transition: background 0.2s, color 0.2s;
      }
      .theme-btn:hover { background: #f1f5f9; color: var(--g900); }

      /* Apply Now btn */
      .btn-apply {
        background: #f5a623; color: #1a1a1a; border: none;
        padding: 0.6rem 1.4rem; font-family: 'DM Sans', sans-serif;
        font-weight: 700; font-size: 0.88rem; letter-spacing: 0.01em;
        border-radius: 8px; cursor: pointer; transition: all 0.22s;
        white-space: nowrap;
      }
      .btn-apply:hover { background: #e09918; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(245,166,35,0.4); }

      /* ─── BUTTONS ─── */
      .btn-gold {
        background: var(--gold); color: var(--g900); border: none;
        padding: 0.65rem 1.5rem; font-family: 'DM Sans', sans-serif;
        font-weight: 600; font-size: 0.82rem; letter-spacing: 0.09em;
        text-transform: uppercase; cursor: pointer; transition: all 0.25s;
      }
      .btn-gold:hover { background: var(--gold-lt); transform: translateY(-1px); box-shadow: 0 5px 22px rgba(201,168,76,0.45); }
      .btn-outline-w {
        background: transparent; color: #fff;
        border: 1.5px solid rgba(255,255,255,0.45);
        padding: 0.75rem 2rem; font-family: 'DM Sans', sans-serif;
        font-weight: 500; font-size: 0.88rem; letter-spacing: 0.06em;
        cursor: pointer; transition: all 0.25s;
      }
      .btn-outline-w:hover { border-color: var(--gold); color: var(--gold); }
      .btn-outline-g {
        background: transparent; color: var(--g700);
        border: 1.5px solid var(--g700);
        padding: 0.65rem 1.5rem; font-family: 'DM Sans', sans-serif;
        font-weight: 600; font-size: 0.78rem; letter-spacing: 0.09em;
        text-transform: uppercase; cursor: pointer; transition: all 0.25s;
      }
      .btn-outline-g:hover { background: var(--g700); color: #fff; }

      /* ─── HERO ─── */
      .hero {
        min-height: 100vh;
        background: linear-gradient(140deg, #091e10 0%, #0d2818 30%, #1a4731 65%, #1e5438 100%);
        position: relative; overflow: hidden; display: flex; align-items: center;
      }
      .hero-noise {
        position: absolute; inset: 0; pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
        opacity: 0.5;
      }
      .hero-radial {
        position: absolute; inset: 0; pointer-events: none;
        background:
          radial-gradient(ellipse 60% 80% at 80% 50%, rgba(201,168,76,0.10) 0%, transparent 70%),
          radial-gradient(ellipse 50% 60% at 10% 90%, rgba(13,40,24,0.9) 0%, transparent 60%);
      }
      .hero-grid-lines {
        position: absolute; inset: 0; pointer-events: none;
        background-image:
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
        background-size: 64px 64px;
      }
      .hero-inner {
        position: relative; z-index: 2;
        max-width: 1200px; margin: 0 auto; padding: 7.5rem 2rem 4rem;
        width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 3rem;
      }
      .hero-content { max-width: 640px; }
      .hero-badge {
        display: inline-flex; align-items: center; gap: 9px;
        background: rgba(201,168,76,0.12); border: 1px solid rgba(201,168,76,0.28);
        color: var(--gold-lt); padding: 6px 16px; font-size: 0.72rem;
        letter-spacing: 0.16em; text-transform: uppercase; font-weight: 600;
        margin-bottom: 1.6rem;
        animation: fadeUp 0.7s 0.1s ease both;
      }
      .hero-h1 {
        font-family: 'Playfair Display', serif; font-weight: 900;
        font-size: clamp(2.6rem, 5.5vw, 4.8rem); color: #fff;
        line-height: 1.08; margin-bottom: 1.5rem;
        animation: fadeUp 0.7s 0.25s ease both;
      }
      .hero-h1 em { font-style: italic; color: var(--gold-lt); }
      .hero-sub {
        color: rgba(255,255,255,0.65); font-size: 1.05rem; line-height: 1.75;
        font-weight: 300; margin-bottom: 2.5rem; max-width: 520px;
        animation: fadeUp 0.7s 0.4s ease both;
      }
      .hero-btns {
        display: flex; gap: 1rem; flex-wrap: wrap;
        animation: fadeUp 0.7s 0.55s ease both;
      }
      .hero-divider {
        width: 100%; height: 1px; background: rgba(255,255,255,0.1);
        margin: 2.5rem 0 2rem;
        animation: fadeUp 0.7s 0.65s ease both;
      }
      .hero-stats-row {
        display: flex; gap: 2.5rem; flex-wrap: wrap;
        animation: fadeUp 0.7s 0.75s ease both;
      }
      .h-stat-num {
        font-family: 'Playfair Display', serif; font-size: 1.8rem;
        font-weight: 700; color: var(--gold-lt); line-height: 1;
      }
      .h-stat-lbl {
        font-size: 0.68rem; color: rgba(255,255,255,0.45);
        letter-spacing: 0.11em; text-transform: uppercase; margin-top: 5px;
      }
      .hero-emblem {
        flex-shrink: 0; position: relative;
        animation: fadeUp 0.9s 0.5s ease both;
      }
      .ring-outer {
        width: 380px; height: 380px; border-radius: 50%;
        border: 1px solid rgba(201,168,76,0.16);
        display: flex; align-items: center; justify-content: center;
      }
      .ring-inner {
        width: 290px; height: 290px; border-radius: 50%;
        border: 1px solid rgba(201,168,76,0.22);
        background: rgba(201,168,76,0.05);
        display: flex; align-items: center; justify-content: center;
        text-align: center;
      }
      .emblem-gic {
        font-family: 'Playfair Display', serif; font-size: 4.2rem;
        font-weight: 900; color: var(--gold); line-height: 1;
      }
      .emblem-est { font-size: 0.6rem; color: rgba(255,255,255,0.35); letter-spacing: 0.22em; text-transform: uppercase; margin-top: 6px; }
      .emblem-line { width: 36px; height: 1px; background: var(--gold); margin: 10px auto; }
      .emblem-full { font-size: 0.6rem; color: rgba(255,255,255,0.35); letter-spacing: 0.14em; text-transform: uppercase; }

      /* ─── STATS STRIP ─── */
      .stats-strip { background: var(--g900); padding: 3.5rem 0; }
      .stats-grid {
        max-width: 1200px; margin: 0 auto; padding: 0 2rem;
        display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; text-align: center;
      }
      .st-num {
        font-family: 'Playfair Display', serif; font-size: 2.8rem;
        font-weight: 900; color: var(--gold); line-height: 1;
      }
      .st-lbl {
        font-size: 0.72rem; color: rgba(255,255,255,0.5);
        letter-spacing: 0.13em; text-transform: uppercase; margin-top: 7px;
      }

      /* ─── SECTIONS ─── */
      .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
      .section { padding: 6rem 0; }
      .page-hero { padding-top: 10rem; padding-bottom: 3rem; background: #f8fbff; }
      .page-hero .sec-tag { color: var(--gold); letter-spacing: 0.18em; }
      .page-hero .sec-h2 { font-size: clamp(2.6rem, 4vw, 4rem); max-width: 900px; }
      .search-panel {
        display: flex; flex-wrap: wrap; align-items: center; gap: 1rem;
        margin-top: 2.25rem; padding: 1.25rem 1.5rem; background: #fff;
        border: 1px solid #e8eef7; border-radius: 28px; box-shadow: 0 18px 50px rgba(15, 35, 78, 0.05);
      }
      .search-input {
        flex: 1; min-width: 260px; border: 1px solid #e6eef7; padding: 0.95rem 1.1rem;
        border-radius: 999px; background: #f8fbff; color: #0f2f5c;
      }
      .pill-list { display: flex; flex-wrap: wrap; gap: 0.75rem; }
      .pill {
        border: 1px solid #e8eef7; border-radius: 999px; padding: 0.85rem 1.3rem;
        background: #f8fbff; color: #0f2f5c; font-weight: 700; cursor: pointer;
        transition: background 0.2s, color 0.2s, transform 0.2s;
      }
      .pill:hover { transform: translateY(-1px); }
      .pill.active { background: #0f2f5c; color: #fff; border-color: transparent; }
      .program-grid, .faculty-grid, .news-grid, .gallery-grid, .contact-cards-grid, .portal-features-grid {
        display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;
      }
      .program-card, .faculty-card, .news-card-wide, .gallery-card, .contact-card, .icon-card {
        background: #fff; border: 1px solid #e8eef7; border-radius: 24px; box-shadow: 0 18px 50px rgba(15, 35, 78, 0.05);
      }
      .program-card { padding: 1.75rem; display: flex; flex-direction: column; gap: 1.25rem; }
      .program-card-header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
      .program-icon { width: 50px; height: 50px; border-radius: 18px; background: #0f2f5c; display: grid; place-items: center; color: #fff; font-size: 1.3rem; }
      .program-label { padding: 0.45rem 0.85rem; border-radius: 999px; background: rgba(56, 189, 248, 0.12); color: #0f766e; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; }
      .program-title { font-family: 'Playfair Display', serif; font-size: 1.35rem; line-height: 1.2; color: #0f2f5c; }
      .program-copy { color: #475569; line-height: 1.8; }
      .program-meta { display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.92rem; color: #64748b; }
      .program-footer { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
      .program-subtitle { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.14em; color: #94a3b8; margin-bottom: 0.35rem; }
      .program-lead { font-weight: 700; color: #0f2f5c; }
      .requirements-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
      .info-card { padding: 2rem; }
      .card-title { font-family: 'Playfair Display', serif; font-size: 1.2rem; color: #0f2f5c; margin-bottom: 1rem; }
      .list-reset { list-style: none; padding: 0; margin: 0; }
      .list-reset li { display: flex; align-items: flex-start; gap: 0.8rem; padding: 0.75rem 0; color: #475569; }
      .list-reset li::before { content: '•'; color: var(--gold); margin-top: 0.35rem; }
      .process-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 1rem; }
      .process-list li { display: flex; gap: 1rem; align-items: flex-start; }
      .process-step { min-width: 32px; height: 32px; display: grid; place-items: center; border-radius: 50%; background: #0f2f5c; color: #fff; font-weight: 700; }
      .process-title { font-weight: 700; color: #0f2f5c; margin-bottom: 0.25rem; }
      .process-desc { color: #64748b; }
      .stats-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; margin-top: 2rem; }
      .icon-card { padding: 1.75rem; display: flex; gap: 1rem; }
      .icon-box { width: 46px; height: 46px; border-radius: 16px; display: grid; place-items: center; background: rgba(248, 181, 0, 0.16); font-size: 1.1rem; }
      .card-subtitle { text-transform: uppercase; letter-spacing: 0.16em; font-size: 0.72rem; color: #0f766e; margin-bottom: 0.8rem; }
      .card-copy { color: #475569; line-height: 1.8; margin-bottom: 0.95rem; }
      .card-meta-row { display: flex; align-items: center; justify-content: space-between; color: #475569; border-top: 1px solid #e8eef7; padding: 0.75rem 0; }
      .faq-card { padding: 2rem; }
      .faq-list details { border-top: 1px solid #e8eef7; padding: 1rem 0; }
      .faq-list summary { cursor: pointer; font-weight: 700; color: #0f2f5c; list-style: none; }
      .faq-list p { margin-top: 0.75rem; color: #64748b; line-height: 1.8; }
      .faculty-card { overflow: hidden; display: flex; flex-direction: column; }
      .faculty-image { min-height: 240px; background-size: cover; background-position: center; }
      .faculty-card-body { padding: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; }
      .faculty-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.16em; color: #0f766e; }
      .faculty-name { font-family: 'Playfair Display', serif; font-size: 1.2rem; color: #0f2f5c; }
      .faculty-role { color: #475569; }
      .faculty-meta { color: #64748b; font-size: 0.9rem; }
      .faculty-socials { display: flex; gap: 0.75rem; margin-top: 0.75rem; }
      .news-page-grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 1.5rem; align-items: start; }
      .news-featured-card { padding: 2rem; }
      .news-featured-label { font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase; color: #0f766e; margin-bottom: 1rem; }
      .news-featured-title { font-family: 'Playfair Display', serif; font-size: 2rem; color: #0f2f5c; margin-bottom: 1rem; }
      .news-featured-meta { color: #64748b; margin-bottom: 1rem; }
      .news-featured-copy { color: #475569; line-height: 1.8; margin-bottom: 1.5rem; }
      .news-sidebar { padding: 2rem; background: #fff; border-radius: 24px; }
      .sidebar-post { border-top: 1px solid #e8eef7; padding: 1rem 0; }
      .sidebar-post:first-child { border-top: none; }
      .sidebar-post-title { font-weight: 700; color: #0f2f5c; }
      .sidebar-post-date { color: #64748b; margin-top: 0.35rem; }
      .news-grid { margin-top: 2rem; }
      .news-card-wide { display: flex; flex-direction: column; overflow: hidden; }
      .news-card-image { min-height: 220px; background-size: cover; background-position: center; }
      .news-card-body { padding: 1.75rem; }
      .gallery-card { min-height: 260px; position: relative; background-size: cover; background-position: center; }
      .gallery-card-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 30%, rgba(6, 14, 24, 0.62) 100%); display: flex; align-items: flex-end; padding: 1.5rem; }
      .gallery-card-title { color: #fff; font-weight: 700; }
      .portal-grid { display: grid; gap: 2rem; }
      .portal-features-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .portal-signin-card { display: flex; justify-content: center; }
      .form-label { display: block; font-size: 0.85rem; color: #475569; margin: 1rem 0 0.45rem; }
      .form-input, .form-textarea { width: 100%; border: 1px solid #e8eef7; border-radius: 18px; background: #f8fbff; padding: 0.95rem 1rem; color: #0f2f5c; }
      .form-input:focus, .form-textarea:focus { outline: none; border-color: #0f2f5c; }
      .contact-layout { display: grid; gap: 2rem; }
      .contact-cards-grid { grid-template-columns: 1fr; }
      .contact-card { display: flex; gap: 1rem; align-items: start; padding: 1.75rem; }
      .contact-icon-box { width: 56px; min-width: 56px; height: 56px; display: grid; place-items: center; border-radius: 16px; background: rgba(15, 47, 86, 0.08); font-size: 1.25rem; }
      .contact-card-title { font-weight: 700; color: #0f2f5c; margin-bottom: 0.45rem; }
      .contact-card-copy { color: #64748b; line-height: 1.8; }
      .contact-form-card { display: flex; justify-content: center; }
      .form-row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
      .form-textarea { min-height: 150px; resize: vertical; }
      .footer-link { color: #0f2f5c; }
      .sec-tag::before {
        content: ''; display: block; width: 22px; height: 2px; background: var(--gold);
      }
      .sec-tag.light { color: var(--gold); }
      .sec-tag.light::before { background: var(--gold); }
      .sec-h2 {
        font-family: 'Playfair Display', serif; font-weight: 700;
        font-size: clamp(1.8rem, 3.2vw, 2.7rem); color: var(--g900); line-height: 1.18;
      }
      .sec-h2 em { font-style: italic; color: var(--g600); }
      .sec-h2.light { color: #fff; }
      .sec-h2.light em { color: var(--gold-lt); }
      .gold-bar { width: 52px; height: 3px; background: var(--gold); margin: 1rem 0; }
      .sec-body { color: var(--txt-mid); line-height: 1.75; font-size: 0.95rem; }

      /* ─── PROGRAMS ─── */
      .programs-bg { background: var(--cream); }
      .prog-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem; margin-top: 3rem;
      }
      .prog-card {
        background: #fff; border: 1px solid #e8e0d0;
        padding: 2rem; transition: all 0.3s ease;
        cursor: pointer; position: relative; overflow: hidden;
      }
      .prog-card::after {
        content: ''; position: absolute; bottom: 0; left: 0; right: 0;
        height: 3px; background: var(--gold);
        transform: scaleX(0); transform-origin: left; transition: transform 0.3s;
      }
      .prog-card:hover { transform: translateY(-5px); box-shadow: 0 14px 44px rgba(13,40,24,0.12); border-color: var(--gold-pale); }
      .prog-card:hover::after { transform: scaleX(1); }
      .prog-icon {
        width: 50px; height: 50px; background: var(--cream);
        display: flex; align-items: center; justify-content: center;
        font-size: 1.5rem; margin-bottom: 1.25rem;
      }
      .prog-name {
        font-family: 'Playfair Display', serif; font-size: 1.1rem;
        font-weight: 700; color: var(--g900); margin-bottom: 0.55rem;
      }
      .prog-desc { font-size: 0.87rem; color: var(--txt-mid); line-height: 1.65; margin-bottom: 1rem; }
      .prog-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 1rem; }
      .prog-tag {
        font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em;
        text-transform: uppercase; color: var(--g500);
        background: rgba(45,122,82,0.08); padding: 3px 9px;
      }
      .prog-footer { display: flex; align-items: center; justify-content: space-between; }
      .prog-students { font-size: 0.75rem; color: var(--txt-lt); }
      .prog-link { font-size: 0.78rem; color: var(--g600); font-weight: 600; cursor: pointer; transition: color 0.2s; }
      .prog-link:hover { color: var(--gold); }

      /* ─── WHY US ─── */
      .whyus-bg { background: var(--cream-dk); }
      .whyus-grid {
        display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start;
      }
      .feat-grid {
        display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
      }
      .feat-card {
        padding: 1.75rem; border-left: 3px solid var(--gold); background: #fff;
        transition: all 0.3s;
      }
      .feat-card:hover { background: var(--g900); }
      .feat-card:hover .feat-title { color: var(--gold-lt); }
      .feat-card:hover .feat-body { color: rgba(255,255,255,0.65); }
      .feat-icon { font-size: 1.4rem; margin-bottom: 0.7rem; }
      .feat-title {
        font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700;
        color: var(--g900); margin-bottom: 0.45rem; transition: color 0.3s;
      }
      .feat-body { font-size: 0.83rem; color: var(--txt-mid); line-height: 1.6; transition: color 0.3s; }

      /* ─── ADMISSIONS ─── */
      .admissions-bg { background: var(--g900); }
      .steps-grid {
        display: grid; grid-template-columns: repeat(4,1fr); gap: 2.5rem;
        margin-top: 3.5rem;
      }
      .step-num-big {
        font-family: 'Playfair Display', serif; font-size: 3.8rem;
        font-weight: 900; color: rgba(201,168,76,0.22); line-height: 1; margin-bottom: 0.4rem;
      }
      .step-bar { width: 36px; height: 2px; background: var(--gold); margin-bottom: 0.9rem; }
      .step-title {
        font-family: 'Playfair Display', serif; font-size: 1.05rem;
        font-weight: 700; color: #fff; margin-bottom: 0.5rem;
      }
      .step-body { font-size: 0.85rem; color: rgba(255,255,255,0.55); line-height: 1.65; }
      .admissions-cta { text-align: center; margin-top: 4rem; }
      .admissions-note { font-size: 0.75rem; color: rgba(255,255,255,0.35); margin-top: 1rem; }

      /* ─── TESTIMONIALS ─── */
      .testi-bg { background: var(--cream); }
      .testi-grid {
        display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem; margin-top: 3rem;
      }
      .testi-card {
        background: #fff; border: 1px solid #e8e0d0;
        padding: 2rem; position: relative;
      }
      .testi-quote {
        font-family: 'Playfair Display', serif; font-size: 5rem;
        color: var(--gold-pale); position: absolute; top: -0.6rem; left: 1.5rem; line-height: 1;
        pointer-events: none;
      }
      .testi-text {
        font-size: 0.9rem; line-height: 1.72; color: var(--txt-mid);
        font-style: italic; margin-bottom: 1.5rem; padding-top: 1.75rem;
      }
      .testi-avatar {
        width: 44px; height: 44px; border-radius: 50%; background: var(--g700);
        display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;
      }
      .testi-name { font-weight: 600; font-size: 0.875rem; color: var(--g900); }
      .testi-prog { font-size: 0.7rem; color: var(--gold); letter-spacing: 0.09em; text-transform: uppercase; margin-top: 2px; }

      /* ─── NEWS ─── */
      .news-bg { background: var(--cream-dk); }
      .news-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 3rem; flex-wrap: wrap; gap: 1rem; }
      .news-grid {
        display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem;
      }
      .news-card {
        background: #fff; border: 1px solid #e8e0d0;
        overflow: hidden; transition: all 0.3s;
      }
      .news-card:hover { transform: translateY(-5px); box-shadow: 0 14px 44px rgba(0,0,0,0.1); }
      .news-thumb {
        height: 190px; display: flex; align-items: center; justify-content: center;
        position: relative; overflow: hidden;
      }
      .news-thumb-gic {
        font-family: 'Playfair Display', serif; font-size: 5rem;
        font-weight: 900; color: rgba(255,255,255,0.12);
      }
      .news-label {
        position: absolute; top: 1rem; left: 1rem;
        background: var(--gold); padding: 3px 10px;
        font-size: 0.62rem; font-weight: 800; letter-spacing: 0.11em; color: var(--g900);
      }
      .news-body { padding: 1.5rem; }
      .news-date { font-size: 0.68rem; color: var(--gold); letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; margin-bottom: 0.5rem; }
      .news-title {
        font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700;
        color: var(--g900); margin-bottom: 0.75rem; line-height: 1.4;
      }
      .news-more { font-size: 0.78rem; color: var(--g600); font-weight: 600; cursor: pointer; transition: color 0.2s; }
      .news-more:hover { color: var(--gold); }

      /* ─── CTA BANNER ─── */
      .cta-bg {
        background: var(--g900); position: relative; overflow: hidden; padding: 6rem 0;
      }
      .cta-glow {
        position: absolute; top: -40%; right: -15%;
        width: 600px; height: 600px; border-radius: 50%;
        background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 60%);
        pointer-events: none;
      }
      .cta-inner { position: relative; z-index: 1; text-align: center; }
      .cta-kicker {
        font-size: 0.68rem; color: var(--gold); letter-spacing: 0.22em;
        text-transform: uppercase; font-weight: 700; margin-bottom: 1.25rem;
      }
      .cta-h2 {
        font-family: 'Playfair Display', serif; font-weight: 900;
        font-size: clamp(2rem, 4vw, 3.4rem); color: #fff;
        line-height: 1.18; margin-bottom: 1rem;
      }
      .cta-h2 em { font-style: italic; color: var(--gold-lt); }
      .cta-sub { color: rgba(255,255,255,0.55); max-width: 480px; margin: 0 auto 2.5rem; line-height: 1.72; }
      .cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

      /* ─── FOOTER ─── */
      .footer-bg {
        background: radial-gradient(circle at top left, rgba(255, 209, 83, 0.12) 0%, transparent 24%),
                    radial-gradient(circle at top right, rgba(255, 255, 255, 0.08) 0%, transparent 20%),
                    linear-gradient(180deg, #0f2f5c 0%, #081b35 100%);
        color: rgba(255,255,255,0.75);
      }
      .footer-inner { max-width: 1200px; margin: 0 auto; padding: 5rem 2rem 2.25rem; }
      .footer-grid {
        display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 3.5rem;
      }
      .footer-about { max-width: 320px; }
      .footer-logo-row { display: flex; align-items: center; gap: 14px; margin-bottom: 1.25rem; }
      .footer-desc { font-size: 0.95rem; line-height: 1.9; margin-bottom: 1.75rem; color: rgba(255,255,255,0.72); }
      .footer-socials { display: flex; gap: 0.85rem; }
      .social-box {
        width: 36px; height: 36px;
        border: 1px solid rgba(255,255,255,0.16);
        display: flex; align-items: center; justify-content: center;
        font-size: 0.82rem; color: rgba(255,255,255,0.72); cursor: pointer;
        border-radius: 50%; transition: all 0.2s;
      }
      .social-box:hover { border-color: var(--gold); color: var(--gold-lt); background: rgba(255,255,255,0.05); }
      .footer-col-title {
        font-family: 'Playfair Display', serif; font-size: 0.82rem; font-weight: 700;
        color: var(--gold); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 1.3rem;
      }
      .footer-link {
        color: rgba(255,255,255,0.75); text-decoration: none; font-size: 0.95rem;
        display: block; margin-bottom: 0.85rem; cursor: pointer; transition: color 0.2s;
      }
      .footer-link:hover { color: #fff; }
      .footer-contact-row {
        display: flex; align-items: flex-start; gap: 0.85rem; margin-bottom: 1rem;
        color: rgba(255,255,255,0.78); font-size: 0.95rem; line-height: 1.8;
      }
      .contact-icon {
        display: inline-flex; width: 30px; min-width: 30px; height: 30px;
        align-items: center; justify-content: center;
        border-radius: 10px; background: rgba(255,255,255,0.08);
      }
      .footer-newsletter {
        display: flex; gap: 0.75rem; flex-wrap: wrap;
      }
      .newsletter-input {
        flex: 1 1 100%; min-width: 220px;
        padding: 0.95rem 1.1rem; border-radius: 999px; border: 1px solid rgba(255,255,255,0.18);
        background: rgba(255,255,255,0.08); color: #fff;
        outline: none; font-size: 0.95rem;
      }
      .newsletter-input::placeholder { color: rgba(255,255,255,0.5); }
      .newsletter-btn {
        border: none; border-radius: 999px; padding: 0.95rem 1.75rem;
        background: var(--gold); color: var(--g900); font-weight: 700;
        cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
      }
      .newsletter-btn:hover { transform: translateY(-1px); box-shadow: 0 12px 28px rgba(201,168,76,0.25); }
      .footer-bottom {
        border-top: 1px solid rgba(255,255,255,0.08);
        padding-top: 1.8rem;
        display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
      }
      .footer-copy { font-size: 0.82rem; color: rgba(255,255,255,0.48); }
      .footer-legal { display: flex; gap: 1.7rem; flex-wrap: wrap; }
      .footer-legal a {
        font-size: 0.82rem; color: rgba(255,255,255,0.48); cursor: pointer;
        text-decoration: none; transition: color 0.2s;
      }
      .footer-legal a:hover { color: #fff; }

      /* ─── MOBILE MENU ─── */
      .mob-menu {
        position: fixed; inset: 0; background: var(--g900); z-index: 999;
        display: flex; flex-direction: column; padding: 2rem;
        transform: translateX(-100%); transition: transform 0.32s ease;
      }
      .mob-menu.open { transform: translateX(0); }
      .mob-menu-link {
        font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 700;
        color: #fff; display: block; margin-bottom: 1.25rem; cursor: pointer;
        border: none; background: none; text-align: left; transition: color 0.2s;
      }
      .mob-menu-link:hover { color: var(--gold-lt); }

      .about-hero { padding-top: 10rem; padding-bottom: 4rem; background: #f8fafc; }
      .about-hero .sec-tag { color: var(--gold); letter-spacing: 0.24em; }
      .about-hero .sec-h2 { max-width: 720px; font-size: clamp(2.8rem, 4vw, 4rem); line-height: 1.05; margin-top: 1rem; }
      .about-hero .sec-body { max-width: 720px; color: #475569; margin-top: 1.25rem; }
      .about-card-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 1.5rem; margin-top: 2.5rem; }
      .info-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 24px; padding: 2rem; box-shadow: 0 18px 45px rgba(15,23,42,0.06); }
      .info-icon { display: inline-flex; width: 48px; height: 48px; border-radius: 16px; align-items: center; justify-content: center; background: rgba(252,211,77,0.14); color: #b45309; font-size: 1.4rem; margin-bottom: 1rem; }
      .info-title { font-family: 'Playfair Display', serif; font-size: 1.12rem; font-weight: 700; color: #0f172a; margin-bottom: 0.75rem; }
      .quote-row { display: grid; grid-template-columns: 1.12fr 1.88fr; gap: 2rem; margin-top: 3rem; }
      .quote-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 24px; padding: 2rem; box-shadow: 0 18px 60px rgba(15,23,42,0.06); position: relative; }
      .quote-badge { font-size: 0.78rem; font-weight: 700; color: #0f172a; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1rem; display: inline-flex; align-items: center; gap: 0.6rem; }
      .quote-text { font-size: 1rem; line-height: 1.9; color: #334155; margin-bottom: 2rem; }
      .quote-meta { display: flex; align-items: center; gap: 1rem; }
      .quote-avatar { width: 104px; height: 104px; border-radius: 24px; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; color: #334155; font-weight: 700; }
      .quote-name { font-weight: 700; color: #0f172a; margin-bottom: 0.2rem; }
      .quote-role { font-size: 0.85rem; color: #64748b; }
      .about-stats-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 1.25rem; margin-top: 3rem; }
      .about-stat-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 22px; padding: 1.75rem; text-align: center; box-shadow: 0 12px 35px rgba(15,23,42,0.05); }
      .about-stat-number { font-family: 'Playfair Display', serif; font-size: 2.8rem; font-weight: 900; color: #0f172a; margin-bottom: 0.6rem; }
      .about-stat-label { font-size: 0.78rem; letter-spacing: 0.12em; color: #64748b; text-transform: uppercase; }
      .accreditation-row { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 1rem; margin-top: 2rem; }
      .accreditation-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 22px; padding: 1.5rem 1.75rem; text-align: center; box-shadow: 0 12px 35px rgba(15,23,42,0.05); }
      .accreditation-title { font-weight: 700; color: #0f172a; margin-top: 0.9rem; font-size: 0.88rem; }
      .timeline-wrap { position: relative; margin-top: 3rem; }
      .timeline-wrap::before { content: ''; position: absolute; left: 50%; top: 1rem; bottom: 0; width: 2px; background: rgba(13,40,24,0.1); transform: translateX(-50%); }
      .timeline-list { display: grid; gap: 1.75rem; }
      .timeline-item { position: relative; display: grid; grid-template-columns: 1fr; gap: 1rem; padding: 1.75rem 1.75rem 1.75rem 2.25rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 24px; width: min(650px, 100%); }
      .timeline-item::before { content: ''; position: absolute; left: 50%; top: 1.5rem; width: 16px; height: 16px; border-radius: 50%; background: var(--gold); border: 4px solid #fff; transform: translateX(-50%); }
      .timeline-item:nth-child(odd) { margin-right: auto; }
      .timeline-item:nth-child(even) { margin-left: auto; }
      .timeline-date { font-size: 0.76rem; color: #f59e0b; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 800; margin-bottom: 0.5rem; }
      .timeline-title { font-family: 'Playfair Display', serif; font-size: 1.22rem; font-weight: 700; color: #0f172a; margin-bottom: 0.75rem; }
      .timeline-body { color: #475569; line-height: 1.8; font-size: 0.95rem; }

      /* ─── ANIMATIONS ─── */
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      /* ─── DARK MODE ─── */
      :root.dark-mode {
        --g900: #f8f4ed;
        --g800: #e8e0ce;
        --g700: #d4c5b0;
        --g600: #bfaa8f;
        --g500: #a89570;
        --gold: #c9a84c;
        --gold-lt: #e8c97a;
        --gold-pale: #f5e9c8;
        --cream: #1a1a1a;
        --cream-dk: #2d2d2d;
        --txt: #f5f5f5;
        --txt-mid: #d0d0d0;
        --txt-lt: #a0a0a0;
      }

      .dark-mode {
        background: #1a1a1a;
        color: #f5f5f5;
      }

      .dark-mode .navbar {
        background: rgba(26, 26, 26, 0.96);
        border-bottom-color: rgba(255, 255, 255, 0.1);
      }

      .dark-mode .nav-link {
        color: #e8d5c4;
      }

      .dark-mode .nav-link:hover {
        background: rgba(232, 213, 196, 0.1);
        color: #f5f5f5;
      }

      .dark-mode .nav-link.active {
        background: rgba(201, 168, 76, 0.15);
        box-shadow: inset 0 0 0 1px rgba(201, 168, 76, 0.2);
      }

      .dark-mode .logo-name {
        color: #e8d5c4;
      }

      .dark-mode .logo-sub {
        color: #a0a0a0;
      }

      .dark-mode .theme-btn {
        background: rgba(255, 255, 255, 0.08);
        color: #e8d5c4;
      }

      .dark-mode .theme-btn:hover {
        background: rgba(255, 255, 255, 0.15);
      }

      .dark-mode .btn-apply {
        background: #c9a84c;
        color: #1a1a1a;
      }

      .dark-mode .btn-apply:hover {
        background: #e8c97a;
      }

      .dark-mode .hero {
        background: linear-gradient(140deg, #0d0d0d 0%, #1a1a1a 30%, #2d2d2d 65%, #3a3a3a 100%);
      }

      .dark-mode .program-card,
      .dark-mode .faculty-card,
      .dark-mode .news-card-wide,
      .dark-mode .gallery-card,
      .dark-mode .contact-card,
      .dark-mode .icon-card,
      .dark-mode .info-card,
      .dark-mode .quote-card,
      .dark-mode .about-stat-card,
      .dark-mode .accreditation-card,
      .dark-mode .timeline-item {
        background: #2d2d2d;
        border-color: rgba(255, 255, 255, 0.1);
        color: #f5f5f5;
      }

      .dark-mode .program-title,
      .dark-mode .card-title,
      .dark-mode .info-title,
      .dark-mode .quote-name,
      .dark-mode .about-stat-number,
      .dark-mode .accreditation-title,
      .dark-mode .timeline-title,
      .dark-mode .news-title {
        color: #f5f5f5;
      }

      .dark-mode .program-copy,
      .dark-mode .testi-text,
      .dark-mode .news-more,
      .dark-mode .quote-text,
      .dark-mode .timeline-body {
        color: #d0d0d0;
      }

      .dark-mode .testi-card {
        background: #2d2d2d;
        border-color: rgba(255, 255, 255, 0.1);
      }

      .dark-mode .search-panel {
        background: #2d2d2d;
        border-color: rgba(255, 255, 255, 0.1);
      }

      .dark-mode .search-input {
        background: #3a3a3a;
        border-color: rgba(255, 255, 255, 0.1);
        color: #f5f5f5;
      }

      .dark-mode .search-input::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }

      .dark-mode .pill {
        background: #3a3a3a;
        border-color: rgba(255, 255, 255, 0.1);
        color: #f5f5f5;
      }

      .dark-mode .pill.active {
        background: #c9a84c;
        color: #1a1a1a;
      }

      .dark-mode .page-hero {
        background: #2d2d2d;
      }

      .dark-mode .footer-bg {
        background: radial-gradient(circle at top left, rgba(201, 168, 76, 0.08) 0%, transparent 24%),
                    radial-gradient(circle at top right, rgba(255, 255, 255, 0.03) 0%, transparent 20%),
                    linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
      }

      .dark-mode .newsletter-input {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.15);
        color: #f5f5f5;
      }

      .dark-mode .newsletter-input::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }

      .dark-mode .footer-bottom {
        border-top-color: rgba(255, 255, 255, 0.08);
      }

      .dark-mode .feat-card:hover {
        background: #3a3a3a;
      }

      .dark-mode .feat-card:hover .feat-title {
        color: #e8c97a;
      }

      .dark-mode .feat-card:hover .feat-body {
        color: #d0d0d0;
      }

      .dark-mode .mob-menu {
        background: #1a1a1a;
      }

      .dark-mode .whyus-bg {
        background: #2d2d2d;
      }

      .dark-mode .news-bg {
        background: #2d2d2d;
      }

      .dark-mode .timeline-wrap::before {
        background: rgba(255, 255, 255, 0.1);
      }

      /* ─── RESPONSIVE ─── */
      @media (max-width: 1024px) {
        .stats-grid { grid-template-columns: repeat(2,1fr); }
        .whyus-grid { grid-template-columns: 1fr; gap: 3rem; }
        .steps-grid { grid-template-columns: repeat(2,1fr); }
        .testi-grid { grid-template-columns: repeat(2,1fr); }
        .news-grid { grid-template-columns: repeat(2,1fr); }
        .footer-grid { grid-template-columns: 1fr 1fr; }
      }
      @media (max-width: 768px) {
        .nav-links, .nav-right { display: none; }
        .hamburger { display: flex !important; }
        .hero-emblem { display: none; }
        .stats-grid { grid-template-columns: repeat(2,1fr); }
        .prog-grid { grid-template-columns: 1fr; }
        .feat-grid { grid-template-columns: 1fr; }
        .steps-grid { grid-template-columns: 1fr; }
        .testi-grid { grid-template-columns: 1fr; }
        .news-grid { grid-template-columns: 1fr; }
        .footer-grid { grid-template-columns: 1fr; }
        .hero-stats-row { gap: 1.5rem; }
        .nav-inner { padding: 0 1.25rem; }
        .about-card-grid { grid-template-columns: 1fr; }
        .quote-row { grid-template-columns: 1fr; }
        .about-stats-grid { grid-template-columns: 1fr; }
        .accreditation-row { grid-template-columns: 1fr; }
        .timeline-wrap::before { left: 1.5rem; }
        .timeline-item { margin: 0 auto; width: 100%; padding-left: 3.5rem; }
        .timeline-item::before { left: 1.5rem; transform: none; }
      }
    `}</style>
  );
}
