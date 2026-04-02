import './Modal.css';

const Modal = ({ isOpen, title, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4">
      <div className="glass-panel relative w-full max-w-3xl rounded-[2rem] p-8">
        <button className="absolute right-5 top-5 text-white/70" onClick={onClose} type="button">Close</button>
        <h3 className="display-heading text-3xl text-ivory">{title}</h3>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
