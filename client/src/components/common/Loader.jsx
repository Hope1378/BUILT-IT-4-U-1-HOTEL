import './Loader.css';

const Loader = () => {
  return (
    <div className="flex items-center gap-3 text-champagne">
      <span className="h-3 w-3 animate-pulse rounded-full bg-champagne" />
      <span className="text-sm uppercase tracking-[0.3em]">Preparing your stay</span>
    </div>
  );
};

export default Loader;
