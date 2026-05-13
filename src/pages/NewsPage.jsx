import React, { useState } from 'react';

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const newsArticles = [
    {
      id: 1,
      category: 'Rankings',
      categoryColor: 'bg-blue-500',
      date: 'Feb 03, 2026',
      title: 'Greenfield ranked #14 globally for Engineering Research',
      excerpt: 'Our engineering school climbs eight spots in the latest QS subject rankings.',
      image: 'gradient-to-br from-pink-500 via-purple-500 to-blue-500',
      icon: '🏆',
    },
    {
      id: 2,
      category: 'Research',
      categoryColor: 'bg-purple-500',
      date: 'Jan 22, 2026',
      title: 'AI Lab unveils a new generative biology platform',
      excerpt: 'A breakthrough that could accelerate drug discovery and bioengineering.',
      image: 'gradient-to-br from-purple-600 via-pink-500 to-blue-400',
      icon: '🔬',
    },
    {
      id: 3,
      category: 'Events',
      categoryColor: 'bg-green-500',
      date: 'Jan 18, 2026',
      title: 'Annual Greenfest 2026 opens registrations',
      excerpt: 'Three days of music, art, hackathons, and global speakers across campus.',
      image: 'gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      icon: '🎉',
    },
    {
      id: 4,
      category: 'Partnership',
      categoryColor: 'bg-amber-500',
      date: 'Jan 04, 2026',
      title: 'Greenfield partners with NASA for space climate research',
      excerpt: 'Faculty and graduate students join a multi-institutional climate mission.',
      image: 'gradient-to-br from-blue-600 via-cyan-500 to-teal-500',
      icon: '🚀',
    },
    {
      id: 5,
      category: 'Campus',
      categoryColor: 'bg-rose-500',
      date: 'Dec 28, 2025',
      title: 'New Innovation Hub opens with $10M investment',
      excerpt: 'State-of-the-art facility for startups and entrepreneurial ventures.',
      image: 'gradient-to-br from-orange-500 via-red-500 to-pink-500',
      icon: '🏢',
    },
    {
      id: 6,
      category: 'Announcement',
      categoryColor: 'bg-indigo-500',
      date: 'Dec 15, 2025',
      title: 'Expanded Scholarship Program for 2026',
      excerpt: 'Greenfield increases financial aid by 40% for incoming students.',
      image: 'gradient-to-br from-indigo-600 via-purple-600 to-pink-600',
      icon: '💰',
    },
  ];

  const categories = ['All', 'Rankings', 'Research', 'Events', 'Partnership', 'Campus', 'Announcement'];
  
  const filteredNews = activeCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <p className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">
              ─ Latest News
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              News & <span className="text-amber-500">Events</span>
            </h2>
          </div>
          <a href="#" className="text-slate-600 hover:text-slate-900 font-semibold flex items-center gap-2 transition-colors">
            View all <span className="text-xl">→</span>
          </a>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                activeCategory === category
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {filteredNews.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Large Featured Card */}
              <div className="lg:col-span-2">
                <div className="group cursor-pointer">
                  <div className={`bg-gradient-to-br ${filteredNews[0].image} h-80 rounded-xl overflow-hidden relative mb-4 shadow-lg`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`${filteredNews[0].categoryColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                        {filteredNews[0].category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm opacity-90 mb-2">{filteredNews[0].date}</p>
                      <h3 className="text-xl md:text-2xl font-bold">{filteredNews[0].title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{filteredNews[0].excerpt}</p>
                  <a href="#" className="text-slate-900 font-bold hover:text-blue-600 transition-colors flex items-center gap-1">
                    Read More <span>→</span>
                  </a>
                </div>
              </div>

              {/* Side Cards */}
              <div className="space-y-4">
                {filteredNews.slice(1, 3).map(article => (
                  <div key={article.id} className="group cursor-pointer">
                    <div className={`bg-gradient-to-br ${article.image} h-32 rounded-lg overflow-hidden relative mb-3 shadow-md group-hover:shadow-xl transition-shadow`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute top-2 left-2">
                        <span className={`${article.categoryColor} text-white px-2 py-1 rounded text-xs font-bold`}>
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mb-1">{article.date}</p>
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h4>
                    <a href="#" className="text-xs text-slate-600 hover:text-slate-900 font-semibold">
                      Read →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.slice(0, 6).map(article => (
            <article 
              key={article.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className={`bg-gradient-to-br ${article.image} h-48 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`${article.categoryColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-4xl opacity-20">
                  {article.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-slate-500 font-semibold mb-2 tracking-wide uppercase">
                  {article.date}
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                  {article.excerpt}
                </p>

                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm hover:text-blue-600 transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          {/* <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
            Load More Articles
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;