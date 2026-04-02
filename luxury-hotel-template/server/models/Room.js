class Room {
  constructor(payload) {
    Object.assign(this, payload);
  }
}

const roomSeed = [
  new Room({
    id: 'presidential-suite',
    name: 'Presidential Horizon Suite',
    category: 'Signature Stay',
    occupancy: 4,
    baseRate: 3400,
    squareMeters: 240,
    view: 'Panoramic ocean',
    beds: '2 king beds',
    status: 'available',
    amenities: ['Private butler', 'Cinema lounge', 'Spa bath', 'Sunrise terrace'],
    minimumStay: 2
  }),
  new Room({
    id: 'royal-suite',
    name: 'Royal Aurelia Suite',
    category: 'Royal Collection',
    occupancy: 3,
    baseRate: 2100,
    squareMeters: 168,
    view: 'Skyline and gardens',
    beds: '1 king bed',
    status: 'available',
    amenities: ['Club access', 'Arrival ritual', 'Dressing gallery'],
    minimumStay: 2
  }),
  new Room({
    id: 'deluxe-ocean-view',
    name: 'Deluxe Ocean View Room',
    category: 'Resort Escape',
    occupancy: 2,
    baseRate: 980,
    squareMeters: 72,
    view: 'Oceanfront',
    beds: '1 king bed',
    status: 'available',
    amenities: ['Breakfast atelier', 'Balcony daybed', 'Turndown ritual'],
    minimumStay: 1
  }),
  new Room({
    id: 'luxury-family-suite',
    name: 'Luxury Family Residence',
    category: 'Intergenerational',
    occupancy: 5,
    baseRate: 1650,
    squareMeters: 190,
    view: 'Lagoon gardens',
    beds: '2 king beds + twins',
    status: 'available',
    amenities: ['Family concierge', 'Game alcove', 'Kitchenette'],
    minimumStay: 3
  })
];

module.exports = {
  Room,
  roomSeed
};
