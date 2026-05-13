import { useEffect, useMemo, useState } from 'react';
import { STATS } from '../data.js';

function parseStatValue(value) {
  const match = value.match(/^([\d,.]+)(.*)$/);
  if (!match) {
    return { target: 0, suffix: '', original: value };
  }
  const rawNumber = match[1].replace(/,/g, '');
  const target = Number(rawNumber);
  return {
    target: Number.isNaN(target) ? 0 : target,
    suffix: match[2] || '',
    original: value,
  };
}

function formatCount(number) {
  return new Intl.NumberFormat('en-US').format(number);
}

export default function StatsStrip() {
  const stats = useMemo(
    () => STATS.map((item) => ({
      ...item,
      ...parseStatValue(item.num),
    })),
    []
  );

  const [counts, setCounts] = useState(() => stats.map((item) => 0));

  useEffect(() => {
    let animationFrameId;
    const duration = 1500;
    let startTimestamp = null;

    const tick = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      setCounts(
        stats.map((item) =>
          Math.round(item.target * progress)
        )
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrameId);
  }, [stats]);

  return (
    <section className="bg-[#0d2818] py-14">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:px-8 text-center text-slate-100 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div key={item.lbl}>
            <div className="text-4xl font-black text-amber-300">
              {item.target > 0 ? `${formatCount(counts[index])}${item.suffix}` : item.original}
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.12em] text-slate-300">{item.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
