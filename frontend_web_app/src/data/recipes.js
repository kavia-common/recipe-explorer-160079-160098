const recipes = [
  {
    id: 1,
    name: 'Classic Margherita Pizza',
    description: 'A simple yet delicious pizza topped with fresh mozzarella, ripe tomatoes, and basil.',
    time: '30 min',
    servings: 2,
    tags: ['Italian', 'Vegetarian', 'Quick'],
    images: [
      'https://images.unsplash.com/photo-1548365328-9f547fb09530?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541745537413-b804cc79ea28?q=80&w=1200&auto=format&fit=crop',
    ],
    ingredients: [
      'Pizza dough (1 ball)',
      'Tomato sauce (1/2 cup)',
      'Fresh mozzarella (200g, sliced)',
      'Fresh basil leaves',
      'Olive oil',
      'Salt and pepper'
    ],
    steps: [
      'Preheat oven to 475°F (245°C).',
      'Stretch dough into a 12-inch round on a floured surface.',
      'Spread tomato sauce evenly.',
      'Top with mozzarella slices and basil leaves.',
      'Drizzle with olive oil, season with salt and pepper.',
      'Bake 10-12 minutes until crust is golden and cheese is bubbly.'
    ]
  },
  {
    id: 2,
    name: 'Chicken Stir-Fry',
    description: 'Colorful veggies and tender chicken tossed in a savory-sweet sauce.',
    time: '25 min',
    servings: 3,
    tags: ['Asian', 'Gluten-Free option', 'High-Protein'],
    images: [
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1200&auto=format&fit=crop',
    ],
    ingredients: [
      'Chicken breast (400g), sliced',
      'Bell peppers (2), sliced',
      'Broccoli florets (2 cups)',
      'Soy sauce (3 tbsp)',
      'Honey (1 tbsp)',
      'Garlic (3 cloves), minced',
      'Cornstarch (1 tsp)',
      'Sesame oil (1 tsp)'
    ],
    steps: [
      'Whisk soy sauce, honey, minced garlic, cornstarch, and sesame oil.',
      'Stir-fry chicken in a hot pan until browned; remove.',
      'Stir-fry veggies until tender-crisp.',
      'Return chicken, pour sauce, and cook until thickened.'
    ]
  },
  {
    id: 3,
    name: 'Avocado Toast Deluxe',
    description: 'Creamy avocado on toasted sourdough topped with poached egg and chili flakes.',
    time: '15 min',
    servings: 1,
    tags: ['Breakfast', 'Vegetarian', 'Healthy'],
    images: [
      'https://images.unsplash.com/photo-1551183053-8b55a6a4b748?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533777324565-a040eb52fac1?q=80&w=1200&auto=format&fit=crop',
    ],
    ingredients: [
      'Sourdough bread (2 slices)',
      'Ripe avocado (1)',
      'Eggs (2), poached',
      'Lemon juice (1 tsp)',
      'Chili flakes, salt, pepper',
      'Olive oil'
    ],
    steps: [
      'Toast sourdough slices.',
      'Mash avocado with lemon juice, salt, and pepper.',
      'Spread on toast, top with poached egg.',
      'Sprinkle chili flakes and drizzle olive oil.'
    ]
  },
  {
    id: 4,
    name: 'Berry Yogurt Parfait',
    description: 'Layers of creamy yogurt, crunchy granola, and mixed berries.',
    time: '10 min',
    servings: 2,
    tags: ['Dessert', 'No-Bake', 'Quick'],
    images: [
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1569718212165-3f95ad8a21ce?q=80&w=1200&auto=format&fit=crop',
    ],
    ingredients: [
      'Greek yogurt (2 cups)',
      'Granola (1 cup)',
      'Mixed berries (1.5 cups)',
      'Honey (to taste)'
    ],
    steps: [
      'Layer yogurt, granola, and berries in glasses.',
      'Drizzle with honey and serve immediately.'
    ]
  },
  {
    id: 5,
    name: 'Spaghetti Bolognese',
    description: 'Rich and hearty Italian meat sauce served over al dente spaghetti.',
    time: '50 min',
    servings: 4,
    tags: ['Italian', 'Comfort Food'],
    images: [
      'https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604908176997-431623a1ce6a?q=80&w=1200&auto=format&fit=crop',
    ],
    ingredients: [
      'Spaghetti (400g)',
      'Ground beef (500g)',
      'Onion (1), diced',
      'Garlic (3 cloves), minced',
      'Tomato paste (2 tbsp)',
      'Crushed tomatoes (400g)',
      'Olive oil, salt, pepper, Italian herbs'
    ],
    steps: [
      'Sauté onion and garlic in olive oil.',
      'Brown beef, drain excess fat.',
      'Stir in tomato paste and crushed tomatoes.',
      'Simmer 25–30 minutes, season to taste.',
      'Cook spaghetti and combine with sauce.'
    ]
  }
];

export default recipes;
