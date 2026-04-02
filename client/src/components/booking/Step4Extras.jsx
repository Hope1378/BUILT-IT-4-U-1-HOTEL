import './Step4Extras.css';

const extraOptions = ['Breakfast Atelier', 'Private Airport Transfer', 'Sunset Yacht Charter', 'In-suite Spa Session'];

const Step4Extras = ({ form, toggleExtra }) => {
  return (
    <div className="grid gap-3">
      {extraOptions.map((option) => {
        const isSelected = form.extras.includes(option);
        return (
          <button
            className={[
              'rounded-2xl border px-4 py-3 text-left text-sm transition',
              isSelected ? 'border-champagne bg-champagne/10 text-ivory' : 'border-white/10 bg-white/[0.03] text-white/75 hover:border-white/35'
            ].join(' ')}
            key={option}
            onClick={() => toggleExtra(option)}
            type="button"
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Step4Extras;
