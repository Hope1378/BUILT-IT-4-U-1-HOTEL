class Review {
  constructor(payload) {
    Object.assign(this, payload);
  }
}

const reviewSeed = [
  new Review({ id: 'r1', guest: 'Eleanor Vance', rating: 5, title: 'Effortless excellence', quote: 'The digital experience feels as refined as the property itself.', approved: true }),
  new Review({ id: 'r2', guest: 'Ryo Nakamura', rating: 5, title: 'Beautifully restrained', quote: 'The booking flow and service framing are exceptional.', approved: true })
];

module.exports = {
  Review,
  reviewSeed
};
