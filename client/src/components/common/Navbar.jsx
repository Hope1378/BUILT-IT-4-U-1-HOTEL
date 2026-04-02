import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../utils/constants';
import useLanguage from '../../hooks/useLanguage';
import MobileMenu from './MobileMenu';
import Container from './Container';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { languageCode, setLanguageCode, languageOptions, language } = useLanguage();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    if (window.innerWidth >= 768 || !isOpen) {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      return undefined;
    }

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className={[
      'sticky top-0 z-50 border-b transition-colors duration-300',
      isOpen ? 'border-white/15 bg-obsidian/95 backdrop-blur-2xl' : 'border-white/10 bg-obsidian/80 backdrop-blur-xl'
    ].join(' ')}>
      <Container className="relative flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img alt="Aurelia Grand" className="h-10 w-auto" src="/images/brand/logo-white.svg" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} className="text-xs uppercase tracking-[0.24em] text-white/70 transition hover:text-champagne" to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <label className="sr-only" htmlFor="language-switcher">Language</label>
          <select
            className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/75 outline-none"
            id="language-switcher"
            onChange={(event) => setLanguageCode(event.target.value)}
            value={languageCode}
          >
            {languageOptions.map((item) => (
              <option key={item.code} value={item.code}>{item.label}</option>
            ))}
          </select>
          <span className="rounded-full border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/45">{language.dir}</span>
          <Button href="/booking">Reserve</Button>
        </div>
        <button
          aria-expanded={isOpen}
          aria-label="Open menu"
          className="rounded-full border border-white/15 bg-black/30 p-3 text-white shadow-glass transition hover:border-white/30 hover:bg-black/45 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Navbar;
