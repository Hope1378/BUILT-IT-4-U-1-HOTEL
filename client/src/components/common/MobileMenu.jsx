import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../utils/constants';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="mobile-panel-right glass-panel fixed right-3 top-20 z-50 flex w-[min(86vw,340px)] flex-col gap-3 rounded-[1.75rem] p-5 md:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              className="rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.24em] text-white/78 transition hover:bg-white/10 hover:text-champagne"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onClose();
              }}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default MobileMenu;
