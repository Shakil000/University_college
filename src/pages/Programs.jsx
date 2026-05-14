import React, { useState, useMemo } from 'react';

const ProgramsPagePremium = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const programs = [
    {
      id: 1,
      title: 'Computer Science',
      category: 'Undergraduate',
      description: 'AI, ML, Cybersecurity & Data Science.',
      duration: '4 Years',
      credits: 120,
      price: '$24,500/yr',
      faculty: 'Prof. Alan Whitaker',
      icon: '💻',
      featured: true,
      tag: 'Most Popular',
      badgeColor: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Business Administration',
      category: 'Undergraduate',
      description: 'Strategy, Finance, Marketing & Entrepreneurship.',
      duration: '4 Years',
      credits: 120,
      price: '$23,800/yr',
      faculty: 'Prof. Marina Costa',
      icon: '📊',
      badgeColor: 'bg-blue-500',
    },
    {
      id: 3,
      title: 'Engineering',
      category: 'Undergraduate',
      description: 'Mechanical, Electrical, Civil & Aerospace.',
      duration: '4 Years',
      credits: 132,
      price: '$26,100/yr',
      faculty: 'Dr. Rajesh Iyer',
      icon: '⚙️',
      badgeColor: 'bg-blue-500',
    },
    {
      id: 4,
      title: 'Arts & Humanities',
      category: 'Undergraduate',
      description: 'Literature, Philosophy, Visual Arts & Media.',
      duration: '3 Years',
      credits: 108,
      price: '$19,400/yr',
      faculty: 'Prof. Lina Okafor',
      icon: '🎨',
      badgeColor: 'bg-blue-500',
    },
    {
      id: 5,
      title: 'Medical Sciences',
      category: 'Undergraduate',
      description: 'Pre-Med, Nursing, Public Health.',
      duration: '5 Years',
      credits: 160,
      price: '$32,000/yr',
      faculty: 'Dr. Hana Suzuki',
      icon: '🩺',
      tag: 'High Demand',
      badgeColor: 'bg-blue-500',
    },
    {
      id: 6,
      title: 'Law',
      category: 'Postgraduate',
      description: 'Constitutional, Corporate & Int\'l Law.',
      duration: '3 Years',
      credits: 96,
      price: '$28,200/yr',
      faculty: 'Prof. Daniel Hart',
      icon: '⚖️',
      badgeColor: 'bg-purple-500',
    },
    {
      id: 7,
      title: 'MBA – Executive',
      category: 'Postgraduate',
      description: 'Globally ranked 2-year MBA program.',
      duration: '2 Years',
      credits: 60,
      price: '$48,000/yr',
      faculty: 'Dr. Priya Anand',
      icon: '🏢',
      tag: 'Top Ranked',
      badgeColor: 'bg-purple-500',
    },
    {
      id: 8,
      title: 'MSc Data Science',
      category: 'Postgraduate',
      description: 'ML, Big Data, Deep Learning & Analytics.',
      duration: '2 Years',
      credits: 48,
      price: '$31,500/yr',
      faculty: 'Prof. Kenji Tanaka',
      icon: '🔬',
      badgeColor: 'bg-purple-500',
    },
    {
      id: 9,
      title: 'Diploma in Digital Marketing',
      category: 'Diploma',
      description: 'SEO, Content & Performance Marketing.',
      duration: '1 Year',
      credits: 30,
      price: '$8,400',
      faculty: 'Ms. Carla Mendes',
      icon: '📱',
      badgeColor: 'bg-amber-500',
    },
    {
      id: 10,
      title: 'Diploma in Graphic Design',
      category: 'Diploma',
      description: 'Branding, UX & Motion Design.',
      duration: '1 Year',
      credits: 30,
      price: '$8,200',
      faculty: 'Mr. Theo Vance',
      icon: '✏️',
      badgeColor: 'bg-amber-500',
    },
    {
      id: 11,
      title: 'Online: Full-Stack Web Dev',
      category: 'Online Courses',
      description: 'Live projects and career mentorship.',
      duration: '6 Months',
      credits: 18,
      price: '$3,900',
      faculty: 'Mr. Adrian Cole',
      icon: '🌐',
      tag: 'New',
      badgeColor: 'bg-green-500',
    },
    {
      id: 12,
      title: 'Online: Financial Analytics',
      category: 'Online Courses',
      description: 'Excel, Python, Power BI & forecasting.',
      duration: '4 Months',
      credits: 12,
      price: '$2,400',
      faculty: 'Ms. Yuki Watanabe',
      icon: '📈',
      badgeColor: 'bg-green-500',
    },
  ];

  const categoryMeta = {
    Undergraduate: { label: 'Undergraduate', count: 5, color: 'bg-blue-500', bgLight: 'bg-blue-50' },
    Postgraduate: { label: 'Postgraduate', count: 3, color: 'bg-purple-500', bgLight: 'bg-purple-50' },
    Diploma: { label: 'Diploma', count: 2, color: 'bg-amber-500', bgLight: 'bg-amber-50' },
    'Online Courses': { label: 'Online Courses', count: 2, color: 'bg-green-500', bgLight: 'bg-green-50' },
  };

  const filteredPrograms = useMemo(() => {
    return programs.filter(prog => {
      const matchCategory = activeFilter === 'All' || prog.category === activeFilter;
      const matchSearch = searchQuery === '' || 
        prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.faculty.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeFilter, searchQuery]);

  const featuredProgram = !searchQuery && activeFilter === 'All' ? programs.find(p => p.featured) : null;
  const displayPrograms = featuredProgram ? filteredPrograms.filter(p => p.id !== featuredProgram.id) : filteredPrograms;

  return (
    <div className="min-h-screen bg-[#f9f6f0]">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f9f6f0] to-[#f3ede3]">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, rgba(15,30,60,0.05) 1px, transparent 1px)',
          backgroundSize: '26px 26px'
        }}></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-end">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 mb-4 mt-8">
                <div className="w-5 h-px bg-amber-500"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-amber-600">Programs</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-black text-slate-900 mb-4 leading-tight">
                50+ programs designed for<br />
                <span className="text-amber-500">real-world impact.</span>
              </h1>
              
              <p className="text-sm text-slate-600 leading-relaxed max-w-full">
                Explore undergraduate, postgraduate, diploma, and online courses across science, business, arts, engineering, law, and medicine. Explore undergraduate, postgraduate, diploma, and online courses across science, business, arts, engineering, law, and medicine. Explore undergraduate, postgraduate, diploma, and online courses across science, business, arts, engineering, law, and medicine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-200/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('All')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === 'All'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-400'
                }`}
              >
                All <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${activeFilter === 'All' ? 'bg-white/20' : 'bg-slate-100'}`}>
                  {programs.length}
                </span>
              </button>
              
              {Object.entries(categoryMeta).map(([key, meta]) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                    activeFilter === key
                      ? 'bg-slate-900 text-white'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${meta.color}`}></span>
                  {meta.label}
                  <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${activeFilter === key ? 'bg-white/20' : 'bg-slate-100'}`}>
                    {meta.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:w-56">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Search programs…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2 border border-slate-200 rounded-full bg-slate-50 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PROGRAMS SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Result Count */}
          <div className="mb-6 text-sm text-slate-600">
            Showing <b className="text-slate-900">{filteredPrograms.length}</b> {searchQuery ? `results matching "${searchQuery}"` : 'programs'}
          </div>

          {filteredPrograms.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No programs found</h3>
              <p className="text-slate-600">Try adjusting your search or filter.</p>
            </div>
          ) : (
            <>
              {/* Featured Card */}
              {featuredProgram && !searchQuery && (
                <div className="mb-8 p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-slate-700/50 text-white relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
                    backgroundSize: '22px 22px'
                  }}></div>
                  <div className="absolute -right-32 -top-32 w-96 h-96 bg-gradient-radial from-amber-500/10 to-transparent rounded-full pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-2xl">
                          {featuredProgram.icon}
                        </div>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-bold">
                            {featuredProgram.category.replace(' Courses', '')}
                          </span>
                          {featuredProgram.tag && (
                            <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-100 text-xs font-bold border border-amber-400/40">
                              ⭐ {featuredProgram.tag}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <h2 className="text-3xl font-black mb-2">{featuredProgram.title}</h2>
                      <p className="text-slate-300 text-sm mb-4">{featuredProgram.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div>🕐 {featuredProgram.duration}</div>
                        <div>📋 {featuredProgram.credits} credits</div>
                        <div>💰 {featuredProgram.price}</div>
                      </div>
                    </div>

                    <div className="lg:text-right">
                      <div className="text-xs text-slate-400 mb-2">Lead Faculty</div>
                      <div className="flex lg:flex-col items-center lg:items-end gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-blue-500/30 border border-blue-400 flex items-center justify-center text-xs font-bold text-blue-300">
                          {featuredProgram.faculty.split(' ').pop()[0]}
                        </div>
                        <span className="text-sm font-semibold text-blue-300">{featuredProgram.faculty}</span>
                      </div>
                      <button className="px-6 py-2 rounded-lg bg-amber-500/20 border border-amber-400/50 text-amber-200 font-bold text-sm hover:bg-amber-500/30 transition-all">
                        Apply Now →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Program Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayPrograms.map((program) => (
                  <div
                    key={program.id}
                    className="bg-white rounded-2xl border border-orange-500 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                    style={{ borderLeft: `4px solid ${program.badgeColor.replace('bg-', '#')}` }}
                  >
                    {/* Top Accent */}
                    <div className="h-1 bg-gradient-to-r from-slate-200 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-10 h-10 rounded-lg ${program.badgeColor} bg-opacity-10 flex items-center justify-center text-lg group-hover:scale-110 transition-transform`}>
                          {program.icon}
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className={`${program.badgeColor} text-white px-2 py-1 rounded text-xs font-bold`}>
                            {program.category.replace(' Courses', '')}
                          </span>
                          {program.tag && (
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">
                              {program.tag}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-base font-bold text-slate-900 mb-1">{program.title}</h3>
                      <p className="text-xs text-slate-600 mb-4">{program.description}</p>

                      {/* Meta */}
                      <div className="flex items-center gap-2 text-xs text-slate-600 mb-4 pb-4 border-b border-slate-100">
                        <span>🕐 {program.duration}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span>📋 {program.credits} credits</span>
                      </div>

                      {/* Price */}
                      <div className="mb-4">
                        <div className="text-2xl font-black text-slate-900">{program.price}</div>
                      </div>

                      {/* Faculty */}
                      <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
                        <div className={`w-6 h-6 rounded-full ${program.badgeColor} flex items-center justify-center text-xs font-bold text-white`}>
                          {program.faculty.split(' ').pop()[0]}
                        </div>
                        <span className={`text-xs font-bold ${program.badgeColor.replace('bg-', 'text-')}`}>
                          {program.faculty}
                        </span>
                      </div>

                      {/* Apply Button */}
                      <button className="w-full py-2 px-4 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-sm transition-all hover:shadow-lg">
                        Apply Now →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '22px 22px'
        }}></div>
        
        <div className="absolute -left-40 -top-40 w-80 h-80 bg-gradient-radial from-amber-500/10 to-transparent rounded-full pointer-events-none"></div>
        <div className="absolute -right-40 -bottom-40 w-80 h-80 bg-gradient-radial from-blue-500/10 to-transparent rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-px bg-amber-500"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-amber-500">Start Today</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
                Ready to start your <span className="text-amber-400">journey?</span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Speak with an admissions advisor today. We'll help you find the perfect program to match your ambitions and goals.
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col items-start lg:items-end gap-4">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
                Apply Now →
              </button>

              <button className="px-8 py-3 rounded-full border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold text-sm transition-all flex items-center gap-2">
                📞 Book a Free Consultation
              </button>

              <div className="flex flex-col gap-2 text-xs text-slate-400 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> No Application Fee
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Response in 24hrs
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Financial Aid Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPagePremium;