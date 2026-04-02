import { localMedia } from './localMedia';

export const roomCollection = [
  {
    id: 'presidential-suite',
    name: 'Presidential Horizon Suite',
    tag: 'Signature Stay',
    description: 'A double-height sanctuary with private cinema lounge, sea-view spa bath, butler pantry, and wraparound terrace.',
    price: 3400,
    size: '240 sqm',
    occupancy: '4 guests',
    view: 'Panoramic ocean',
    image: localMedia.rooms.presidential,
    gallery: [
      localMedia.rooms.presidential,
      localMedia.gallery.architecture
    ],
    amenities: ['Private butler', 'Indoor spa bath', 'Cinema lounge', 'Sunrise terrace']
  },
  {
    id: 'royal-suite',
    name: 'Royal Aurelia Suite',
    tag: 'Royal Collection',
    description: 'Elegant residential suite with formal salon, marble bath, and hand-finished detailing inspired by grand European palaces.',
    price: 2100,
    size: '168 sqm',
    occupancy: '3 guests',
    view: 'Skyline and gardens',
    image: localMedia.rooms.royal,
    gallery: [
      localMedia.rooms.royal,
      localMedia.gallery.suites
    ],
    amenities: ['Arrival ritual', 'Club lounge access', 'Dressing gallery', 'On-call concierge']
  },
  {
    id: 'deluxe-ocean-view',
    name: 'Deluxe Ocean View Room',
    tag: 'Resort Escape',
    description: 'Soft coastal textures, artisan stone bath, and a private balcony floating over the waterline.',
    price: 980,
    size: '72 sqm',
    occupancy: '2 guests',
    view: 'Oceanfront',
    image: localMedia.rooms.ocean,
    gallery: [
      localMedia.rooms.ocean,
      localMedia.gallery.water
    ],
    amenities: ['Breakfast atelier', 'Rainforest shower', 'Balcony daybed', 'Turndown ritual']
  },
  {
    id: 'luxury-family-suite',
    name: 'Luxury Family Residence',
    tag: 'Intergenerational',
    description: 'Two-bedroom residence with family pantry, game alcove, and direct access to the lagoon promenade.',
    price: 1650,
    size: '190 sqm',
    occupancy: '5 guests',
    view: 'Lagoon gardens',
    image: localMedia.rooms.family,
    gallery: [
      localMedia.rooms.family,
      localMedia.gallery.events
    ],
    amenities: ['Family concierge', 'Connecting media room', 'Children amenities', 'Kitchenette']
  }
];

export const experienceCollection = [
  {
    title: 'Aerial Riviera Arrival',
    summary: 'Private helicopter arrival with sunset champagne transfer to the rooftop landing deck.',
    image: localMedia.experiences.yacht
  },
  {
    title: 'Chef-Led Ocean Tasting',
    summary: 'Ten-course tasting journey curated around the day’s catch and rare cellar pairings.',
    image: localMedia.experiences.chef
  },
  {
    title: 'Moonlit Yacht Charter',
    summary: 'Evening charter with string quartet, caviar service, and private marine guide.',
    image: localMedia.experiences.helicopter
  }
];

export const testimonialCollection = [
  {
    quote: 'This property feels less like a hotel and more like a privately curated world. Every detail was considered.',
    guest: 'Eleanor Vance',
    title: 'Private Wealth Advisor, London'
  },
  {
    quote: 'The booking experience, room design, dining, and wellness journey were executed with extraordinary restraint and taste.',
    guest: 'Ryo Nakamura',
    title: 'Creative Director, Tokyo'
  }
];
