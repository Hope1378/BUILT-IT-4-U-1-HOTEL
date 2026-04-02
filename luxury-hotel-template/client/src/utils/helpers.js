export const scrollToElement = (id) => {
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const persistScrollPosition = () => {
  sessionStorage.setItem('aurelia-scroll-y', String(window.scrollY));
};

export const restoreScrollPosition = () => {
  const y = Number(sessionStorage.getItem('aurelia-scroll-y'));

  if (!Number.isNaN(y)) {
    window.scrollTo({ top: y, behavior: 'auto' });
  }
};
