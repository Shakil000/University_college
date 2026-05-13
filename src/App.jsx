import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import AppRouter from './router/AppRouter.jsx';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <AppRouter
      Navbar={<Navbar scrolled={scrolled} isDark={isDark} toggleTheme={toggleTheme} />}
      Footer={<Footer />}
    />
  );
}
