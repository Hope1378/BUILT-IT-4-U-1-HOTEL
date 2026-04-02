import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatters';
import { convertPrice } from '../../services/currencyService';
import useCurrency from '../../hooks/useCurrency';
import './RoomBookingSidebar.css';

const RoomBookingSidebar = ({ room }) => {
  const { currency } = useCurrency();

  return (
    <aside className="sticky top-24 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
      <p className="eyebrow text-champagne/75">Reserve This Residence</p>
      <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/45">From</p>
      <p className="display-heading mt-1 text-5xl text-ivory">{formatCurrency(convertPrice(room.price, currency), currency)}</p>
      <p className="mt-3 text-sm leading-7 text-white/70">Curated stay with flexible cancellation window, concierge pre-arrival planning, and payment split options.</p>
      <Link className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-champagne px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-obsidian" to="/booking">Reserve Now</Link>
    </aside>
  );
};

export default RoomBookingSidebar;
