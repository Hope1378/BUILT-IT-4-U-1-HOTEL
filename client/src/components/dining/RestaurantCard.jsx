import './RestaurantCard.css';

const RestaurantCard = () => {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-white/70">
      <h3 className="display-heading text-3xl text-ivory">Restaurant Card</h3>
      <p className="mt-3 leading-7">A venue card should communicate cuisine, atmosphere, and reservation appeal within seconds while keeping the tone elevated.</p>
    </div>
  );
};

export default RestaurantCard;
