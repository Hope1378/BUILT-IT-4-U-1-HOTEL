import { useEffect } from 'react';
import { defaultSeo } from '../utils/seoConfig';

const ensureMeta = (name) => {
  let tag = document.head.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  return tag;
};

const usePageSeo = (config = {}) => {
  useEffect(() => {
    const nextTitle = config.title || defaultSeo.title;
    const nextDescription = config.description || defaultSeo.description;
    const nextSchema = config.schema || defaultSeo.schema;

    document.title = nextTitle;
    ensureMeta('description').setAttribute('content', nextDescription);

    let script = document.getElementById('aurelia-json-ld');
    if (!script) {
      script = document.createElement('script');
      script.id = 'aurelia-json-ld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(nextSchema);
  }, [config.description, config.schema, config.title]);
};

export default usePageSeo;
