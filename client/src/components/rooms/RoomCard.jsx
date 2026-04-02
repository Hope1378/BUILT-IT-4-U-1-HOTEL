import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatters';
import useCurrency from '../../hooks/useCurrency';
import { convertPrice } from '../../services/currencyService';
import './RoomCard.css';

const RoomCard = ({ room }) => {
  const { currency } = useCurrency();
  const convertedPrice = convertPrice(room.price, currency);

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
      <div className="overflow-hidden">
        <img alt={room.name} className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" src={room.image} />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow text-champagne/75">{room.tag}</p>
            <h3 className="display-heading mt-2 text-3xl text-ivory">{room.name}</h3>
          </div>
          <p className="text-right text-sm text-white/65">From<br /><span className="text-lg text-champagne">{formatCurrency(convertedPrice, currency)}</span></p>
        </div>
        <p className="text-sm leading-7 text-white/70">{room.description}</p>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/45">
          <span>{room.size}</span>
          <span>{room.occupancy}</span>
          <span>{room.view}</span>
        </div>
        <Link className="inline-flex text-sm uppercase tracking-[0.24em] text-champagne" to={'/rooms/' + room.id}>View residence</Link>
      </div>
    </article>
  );
};

export default RoomCard;
