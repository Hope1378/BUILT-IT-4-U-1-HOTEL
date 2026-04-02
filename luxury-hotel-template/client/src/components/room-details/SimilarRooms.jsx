import { Link } from 'react-router-dom';
import './SimilarRooms.css';

const SimilarRooms = ({ rooms }) => {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <h2 className="display-heading text-3xl text-ivory md:text-4xl">You May Also Like</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {rooms.map((item) => (
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]" key={item.id}>
            <img alt={item.name} className="h-40 w-full object-cover" src={item.image} />
            <div className="space-y-2 p-4">
              <h3 className="text-base font-semibold text-ivory">{item.name}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">{item.view}</p>
              <Link className="inline-flex text-xs uppercase tracking-[0.2em] text-champagne" to={'/rooms/' + item.id}>View</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SimilarRooms;
