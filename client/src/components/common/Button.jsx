import './Button.css';

const Button = ({ children, href, variant = 'primary', onClick, type = 'button' }) => {
  const className = variant === 'ghost'
    ? 'inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-white transition duration-300 hover:border-champagne hover:text-champagne'
    : 'inline-flex items-center justify-center rounded-full bg-champagne px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-obsidian transition duration-300 hover:-translate-y-0.5 hover:bg-ivory';

  if (href) {
    return <a className={className} href={href}>{children}</a>;
  }

  return <button className={className} onClick={onClick} type={type}>{children}</button>;
};

export default Button;
