import './SectionTitle.css';

const SectionTitle = ({ eyebrow, title, copy, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={['flex max-w-3xl flex-col gap-4', alignment].join(' ')}>
      <span className="eyebrow text-champagne/80">{eyebrow}</span>
      <h2 className="display-heading text-4xl font-semibold leading-none text-ivory md:text-6xl">{title}</h2>
      {copy ? <p className="max-w-2xl text-base leading-8 text-white/70 md:text-lg">{copy}</p> : null}
    </div>
  );
};

export default SectionTitle;
