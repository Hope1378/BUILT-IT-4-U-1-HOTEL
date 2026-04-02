import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../utils/constants';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            aria-label="Close menu overlay"
            className="fixed inset-0 top-[73px] z-40 bg-obsidian/60 backdrop-blur-[3px] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            type="button"
          />
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="mobilemenu-shell absolute inset-x-0 top-full z-50 border-b border-white/10 bg-obsidian/95 shadow-glass md:hidden"
          >
            <div className="mx-4 flex flex-col gap-2 border-t border-white/10 pb-5 pt-4">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm uppercase tracking-[0.24em] text-white/88 transition hover:border-white/20 hover:bg-white/10 hover:text-champagne"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    onClose();
                  }}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default MobileMenu;
