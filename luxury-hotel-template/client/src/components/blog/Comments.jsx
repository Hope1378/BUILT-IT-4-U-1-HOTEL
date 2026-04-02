import './Comments.css';

const Comments = ({ items }) => {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <h3 className="display-heading text-3xl text-ivory">Industry Commentary</h3>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5" key={item.name}>
            <p className="text-sm leading-7 text-white/72">{item.comment}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/45">{item.name} • {item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
