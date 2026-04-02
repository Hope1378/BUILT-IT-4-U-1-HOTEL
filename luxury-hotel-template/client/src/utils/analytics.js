export const trackEvent = (eventName, payload = {}) => {
  if (window?.console) {
    window.console.info('[analytics]', eventName, payload);
  }
};
