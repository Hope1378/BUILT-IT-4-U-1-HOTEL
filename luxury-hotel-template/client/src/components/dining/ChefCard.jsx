import './ChefCard.css';

const ChefCard = ({ chef, philosophy }) => {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8 text-white/72">
      <p className="eyebrow text-champagne/75">Chef Perspective</p>
      <h3 className="display-heading mt-4 text-4xl text-ivory">{chef}</h3>
      <p className="mt-4 text-sm leading-7">{philosophy}</p>
    </div>
  );
};

export default ChefCard;
