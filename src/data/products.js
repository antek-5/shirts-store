const productsData = [
  {
    id: 1,
    name: 'react',
    title: 'React shirt',
    basePrice: 20,
    colors: ['Blue', 'Red', 'Green'],
    sizes: [
      { name: 'S', additionalPrice: 0 },
      { name: 'M', additionalPrice: 5 },
      { name: 'L', additionalPrice: 6 },
      { name: 'XL', additionalPrice: 8 }
    ]
  },
  {
    id: 2,
    name: 'kodilla',
    title: 'Kodilla shirt',
    basePrice: 25,
    colors: ['White', 'Black', 'Red'],
    sizes: [
      { name: 'S', additionalPrice: 0 },
      { name: 'M', additionalPrice: 2 },
      { name: 'L', additionalPrice: 3 },
      { name: 'XL', additionalPrice: 4 }
    ]
  }
];

export default productsData;