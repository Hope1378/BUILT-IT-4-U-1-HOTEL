export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14
    }
  }
};
