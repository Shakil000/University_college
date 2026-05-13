import { GALLERY_ITEMS } from '../data.js';

export default function GalleryPage() {
  return (
    <main>
      <section className="bg-[#f8fbff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-500">
            <span className="block h-1 w-5 bg-amber-500" />
            Gallery
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-[#0f2f5c] font-playfair">Campus life, events, and community in motion.</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Explore campus scenes, student stories, and the Greenfield experience through curated imagery.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {GALLERY_ITEMS.map((item) => (
              <article key={item.title} className="group relative h-80 overflow-hidden rounded-[30px] shadow-[0_18px_50px_rgba(15,35,78,0.08)]">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="absolute inset-0 bg-slate-950/30" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="max-w-[80%] rounded-3xl bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 backdrop-blur-sm transition-all group-hover:bg-white">
                    {item.title}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
