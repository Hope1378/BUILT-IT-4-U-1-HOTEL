import { localMedia } from './localMedia';

export const diningVenues = [
  {
    name: 'Signature Atelier',
    type: 'Chef\'s tasting',
    image: localMedia.dining.signature,
    description: 'An intimate tasting room centered on coastal provenance, rare cellar pairings, and a quietly theatrical service cadence.'
  },
  {
    name: 'Altura Rooftop',
    type: 'Skyline bar',
    image: localMedia.dining.rooftop,
    description: 'Late-afternoon aperitivo, champagne ritual service, and panoramic views over the marina after dusk.'
  },
  {
    name: 'The Winter Lounge',
    type: 'All-day salon',
    image: localMedia.dining.lounge,
    description: 'Quiet breakfasts, tea service, and private conversations in a room designed like a residential gallery.'
  }
];

export const wellnessPrograms = [
  {
    title: 'Hammam & Mineral Ritual',
    length: '120 minutes',
    description: 'A multi-sensory purification journey with heated stone, marine minerals, and low-light recovery.'
  },
  {
    title: 'Longevity Reset',
    length: 'Half day',
    description: 'Breathwork, diagnostics, cryo contrast, infrared recovery, and nutrition-led replenishment.'
  },
  {
    title: 'Sunrise Movement Studio',
    length: 'Daily',
    description: 'Reformer, mobility, and guided meditation overlooking the waterline before breakfast service.'
  }
];

export const galleryCollections = [
  {
    title: 'Arrival & Architecture',
    image: localMedia.gallery.architecture
  },
  {
    title: 'Suites & Private Worlds',
    image: localMedia.gallery.suites
  },
  {
    title: 'Dining & After Dark',
    image: localMedia.gallery.night
  },
  {
    title: 'Wellness & Water',
    image: localMedia.gallery.water
  },
  {
    title: 'Events & Ceremony',
    image: localMedia.gallery.events
  },
  {
    title: 'Yachts & Destination Access',
    image: localMedia.gallery.access
  }
];

export const seasonalOffers = [
  {
    title: 'Grand Arrival Privilege',
    tag: 'Suite + transfer',
    description: 'Private airport transfer, welcome salon ritual, and daily breakfast atelier for two.',
    inclusion: 'From 3 nights'
  },
  {
    title: 'Wellness by the Water',
    tag: 'Spa escape',
    description: 'Oceanfront suite, hammam ritual, movement consultation, and hydrotherapy access.',
    inclusion: 'From 2 nights'
  },
  {
    title: 'Family Residence Season',
    tag: 'Intergenerational',
    description: 'Complimentary children concierge programming, connecting media lounge, and evening pantry service.',
    inclusion: 'School holiday dates'
  }
];

export const eventVenues = [
  {
    title: 'Grand Aurelia Ballroom',
    capacity: '280 seated',
    description: 'A chandelier-lined ballroom with discreet technical infrastructure and seamless gala transitions.'
  },
  {
    title: 'Marina Terrace',
    capacity: '160 reception',
    description: 'Golden-hour ceremony and cocktail setting overlooking yacht arrivals and the waterfront skyline.'
  },
  {
    title: 'Executive Board Salon',
    capacity: '24 boardroom',
    description: 'Quiet, high-design board setting for private negotiations, investor sessions, and leadership retreats.'
  }
];

export const weddingMoments = [
  'Dedicated wedding atelier and design concierge',
  'Private marina or helicopter arrival choreography',
  'Multi-day guest itinerary planning with spa and dining experiences',
  'Floral, lighting, and music direction curated to the property tone'
];

export const meetingAdvantages = [
  'Hybrid event-ready AV support',
  'Private check-in and executive concierge desk',
  'Residential breakout salons for leadership teams',
  'Wellness and dining add-ons for extended corporate stays'
];

export const brandStoryPoints = [
  {
    title: 'Quiet Grandeur',
    copy: 'The brand voice is precise, restrained, and intentionally free of mass-market hospitality cliches.'
  },
  {
    title: 'Residential Luxury',
    copy: 'Spaces are presented as private worlds rather than inventory units, increasing perceived exclusivity and value.'
  },
  {
    title: 'Service as Design',
    copy: 'Concierge, wellness, arrival, and dining are integrated into one coherent service ecosystem.'
  }
];

export const faqItems = [
  {
    question: 'What is the cancellation policy for suite reservations?',
    answer: 'Standard flexible reservations may be cancelled up to 72 hours before arrival, while peak and festive dates may require longer notice.'
  },
  {
    question: 'Can the hotel arrange private airport or marina transfers?',
    answer: 'Yes. Chauffeur, limousine, yacht-tender coordination, and helicopter transfer support can all be arranged through concierge.'
  },
  {
    question: 'Do rates include breakfast and lounge access?',
    answer: 'Selected suite categories include breakfast atelier and club privileges. The booking journey can also offer these as add-ons.'
  },
  {
    question: 'Are family and accessibility amenities supported?',
    answer: 'Yes. The template supports accessibility information, family concierge positioning, and inclusive amenity presentation.'
  }
];

export const restaurantStory = {
  name: 'Signature Atelier',
  chef: 'Chef Lucien Moreau',
  philosophy: 'A tasting room built around Mediterranean provenance, exacting technique, and low-volume personalized service.',
  tastingMoments: [
    'Eight and ten-course tasting menus with cellar pairings',
    'Private chef counter seating for six guests',
    'Seasonal marina terrace service at sunset',
    'Bespoke vegetarian and wellness-led menus on request'
  ]
};

export const journalPosts = [
  {
    slug: 'the-art-of-arrival',
    category: 'Guest Experience',
    title: 'The Art of Arrival in Modern Ultra-Luxury Hospitality',
    excerpt: 'Why the highest-value hotel experiences begin long before check-in, and how digital touchpoints shape perceived service quality.',
    image: localMedia.journal.arrival,
    author: 'Isabelle Laurent',
    readTime: '6 min read'
  },
  {
    slug: 'private-dining-by-the-water',
    category: 'Dining',
    title: 'Private Dining by the Waterline',
    excerpt: 'Designing culinary narratives that justify destination spending and deepen guest memory.',
    image: localMedia.journal.dining,
    author: 'Lucien Moreau',
    readTime: '4 min read'
  },
  {
    slug: 'wellness-with-residential-depth',
    category: 'Wellness',
    title: 'Wellness With Residential Depth',
    excerpt: 'How top-tier hotels merge spa, sleep, movement, and nutrition into one coherent product story.',
    image: localMedia.journal.wellness,
    author: 'Aya Nakamura',
    readTime: '5 min read'
  }
];

export const featuredArticle = {
  title: 'The Art of Arrival in Modern Ultra-Luxury Hospitality',
  subtitle: 'The best hotel brands understand that anticipation is part of the product.',
  body: [
    'Arrival is the first proof point of a luxury promise. Before a guest sees the suite or tastes the menu, they assess whether the brand feels composed, responsive, and deeply considered.',
    'That judgment increasingly begins online. The reservation flow, pre-arrival communication, and clarity of experience design all shape whether a property feels transactional or personal.',
    'In premium hospitality, elegance is often restraint. The strongest digital systems remove friction quietly, preserve confidence, and help the guest feel guided rather than processed.',
    'That is why templates for luxury hotels must do more than look expensive. They need to sequence information, emotion, and conversion in a way that mirrors real-world service excellence.'
  ],
  pullQuote: 'Luxury digital design is not decoration. It is service choreography made visible.',
  relatedTopics: ['Arrival rituals', 'Luxury booking UX', 'Service design', 'Hospitality branding']
};

export const sampleComments = [
  {
    name: 'Elena Rossi',
    role: 'Travel Advisor',
    comment: 'This framing of arrival as part of the product is exactly what luxury properties often miss in their digital strategy.'
  },
  {
    name: 'Marcus Hale',
    role: 'Brand Consultant',
    comment: 'The strongest point here is the balance between clarity and restraint. That is where premium brands win.'
  }
];
