import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../data.js';

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
}

export default function Navbar({ scrolled, isDark, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/admissions');
    setOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-2xl border-b border-blue-100 transition-shadow ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-[3.25rem] h-[3.25rem] bg-blue-900 flex items-center justify-center rounded-2xl flex-shrink-0">
              <span className="font-playfair font-black text-2xl text-white">🎓</span>
            </div>
            <div>
              <div className="font-playfair font-bold text-base text-blue-900 leading-tight">Greenfield</div>
              <div className="text-xs text-slate-500 tracking-widest uppercase">INT'L COLLEGE</div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  isActive 
                    ? 'text-blue-900 font-bold bg-blue-100/15' 
                    : 'text-blue-900 hover:bg-blue-50'
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button 
              className="w-10 h-10 rounded-full border-none bg-blue-100 cursor-pointer flex items-center justify-center text-blue-900 transition-all hover:bg-blue-200"
              title="Toggle theme" 
              onClick={toggleTheme}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button 
              className="bg-amber-500 text-blue-900 border-none px-6 py-2.5 font-playfair font-bold text-sm rounded-full cursor-pointer transition-all hover:bg-amber-400 shadow-md"
              onClick={handleApplyNow}
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-6 h-0.5 bg-blue-800 block rounded-full" />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-blue-900 z-40 flex flex-col p-8 transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-[3.25rem] h-[3.25rem] bg-amber-500 flex items-center justify-center rounded-2xl flex-shrink-0">
              <span className="font-playfair font-black text-2xl text-blue-900">G</span>
            </div>
            <div className="font-playfair font-bold text-base text-white">Greenfield</div>
          </div>
          <button 
            onClick={() => setOpen(false)} 
            className="bg-transparent border-none text-white text-2xl cursor-pointer leading-none hover:text-amber-400"
          >
            ✕
          </button>
        </div>
        
        {NAV_ITEMS.map((item) => (
          <NavLink 
            key={item.to} 
            to={item.to} 
            className="text-white text-2xl font-bold mb-5 cursor-pointer block transition-colors hover:text-amber-400 font-playfair"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        
        <button 
          className="bg-amber-500 text-blue-900 border-none px-6 py-3 font-bold text-sm rounded-2xl cursor-pointer transition-all hover:bg-amber-400 mt-8 w-full"
          onClick={handleApplyNow}
        >
          Apply Now
        </button>
      </div>
    </>
  );
}
