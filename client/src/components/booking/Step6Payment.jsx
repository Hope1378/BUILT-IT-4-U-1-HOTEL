import './Step6Payment.css';

const Step6Payment = ({ form, updateField, paymentMethods }) => {
  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <button className={['rounded-2xl border px-4 py-4 text-left transition', form.paymentOption === 'deposit' ? 'border-champagne bg-champagne/10' : 'border-white/10 bg-white/[0.03] hover:border-white/35'].join(' ')} onClick={() => updateField('paymentOption', 'deposit')} type="button">
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">Deposit</p>
          <p className="mt-2 text-lg text-ivory">Secure with 30%</p>
        </button>
        <button className={['rounded-2xl border px-4 py-4 text-left transition', form.paymentOption === 'full' ? 'border-champagne bg-champagne/10' : 'border-white/10 bg-white/[0.03] hover:border-white/35'].join(' ')} onClick={() => updateField('paymentOption', 'full')} type="button">
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">Full Payment</p>
          <p className="mt-2 text-lg text-ivory">Pay in full now</p>
        </button>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-white/45">Available methods</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {paymentMethods.map((method) => (
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70" key={method}>{method}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step6Payment;
