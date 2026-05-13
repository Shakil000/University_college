import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {

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
  ];

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
          {/* <Link to="/news" className="text-slate-600 hover:text-slate-900 font-semibold flex items-center gap-2 transition-colors">
            View all <span className="text-xl">→</span>
          </Link> */}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.slice(0, 3).map(article => (
            <article 
              key={article.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-[0_18px_50px_rgba(15,35,78,0.08)] hover:shadow-2xl transition-all duration-300 group"
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

                <Link 
                  to="/news" 
                  className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm hover:text-blue-600 transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Link to="/news" className="px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
            Load More Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;