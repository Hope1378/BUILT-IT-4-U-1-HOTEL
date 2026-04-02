import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../utils/constants';
import useLanguage from '../../hooks/useLanguage';
import MobileMenu from './MobileMenu';
import Container from './Container';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { languageCode, setLanguageCode, languageOptions, language } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-obsidian/65 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
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
        <button aria-label="Open menu" className="text-white md:hidden" onClick={() => setIsOpen((current) => !current)} type="button">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Navbar;
