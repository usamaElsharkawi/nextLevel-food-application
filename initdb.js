const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
  {
    title: 'Juicy Cheese Burger',
    slug: 'juicy-cheese-burger',
    image: '/images/burger.jpg',
    summary:
      'A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.',
    instructions: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.

      2. Cook the patty:
         Heat a pan with a bit of oil. Cook the patty for 2-3 minutes per side until browned.

      3. Assemble the burger:
         Toast the bun lightly. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.

      4. Serve:
         Complete the burger with the top half of the bun and serve hot.
    `,
    creator: 'John Doe',
    creator_email: 'johndoe@example.com',
  },
  {
    title: 'Spicy Curry',
    slug: 'spicy-curry',
    image: '/images/curry.jpg',
    summary:
      'A rich and spicy curry, infused with exotic spices and creamy coconut milk.',
    instructions: `
      1. Chop vegetables:
         Cut your choice of vegetables into small pieces.

      2. Sauté spices:
         In a pan, heat oil and sauté curry paste until fragrant.

      3. Add coconut milk and veggies:
         Pour in coconut milk and add the chopped vegetables. Simmer until tender.

      4. Serve:
         Enjoy your spicy curry with a side of rice or naan.
    `,
    creator: 'Max Schwarz',
    creator_email: 'max@example.com',
  },
  {
    title: 'Homemade Dumplings',
    slug: 'homemade-dumplings',
    image: '/images/dumplings.jpg',
    summary:
      'Tender dumplings filled with savory meat and vegetables, steamed to perfection.',
    instructions: `
      1. Prepare the filling:
         Mix ground pork, shredded cabbage, and soy sauce.

      2. Fill the dumplings:
         Place a spoonful of filling in the center of each dumpling wrapper. Wet the edges and fold to seal.

      3. Steam the dumplings:
         Place dumplings in a steamer basket over boiling water. Steam for 10 minutes.

      4. Serve:
         Enjoy hot with a dipping sauce of your choice.
    `,
    creator: 'Emily Chen',
    creator_email: 'emilychen@example.com',
  },
  {
    title: 'Classic Mac n Cheese',
    slug: 'classic-mac-n-cheese',
    image: '/images/macncheese.jpg',
    summary:
      "Creamy and cheesy macaroni, a comforting classic that's always a crowd-pleaser.",
    instructions: `
      1. Cook the macaroni:
         Boil macaroni according to package instructions until al dente.

      2. Prepare cheese sauce:
         In a saucepan, melt butter, add flour, and gradually whisk in milk until thickened. Stir in shredded cheddar cheese until melted.

      3. Combine:
         Mix the cooked macaroni with the cheese sauce.

      4. Serve:
         Serve hot, optionally garnished with parsley.
    `,
    creator: 'Laura Smith',
    creator_email: 'laurasmith@example.com',
  },
  {
    title: 'Authentic Pizza',
    slug: 'authentic-pizza',
    image: '/images/pizza.jpg',
    summary:
      'Hand-tossed pizza with a tangy tomato sauce, fresh mozzarella, and fragrant basil.',
    instructions: `
      1. Prepare the dough:
         Knead pizza dough and let it rise until doubled in size.

      2. Shape and add toppings:
         Roll out the dough, spread tomato sauce, and scatter fresh mozzarella and basil leaves.

      3. Bake the pizza:
         Bake in a hot oven at 220°C for 10-15 minutes until the crust is golden and the cheese is bubbly.

      4. Serve:
         Slice and serve hot.
    `,
    creator: 'Mario Rossi',
    creator_email: 'mariorossi@example.com',
  },
  {
    title: 'Wiener Schnitzel',
    slug: 'wiener-schnitzel',
    image: '/images/schnitzel.jpg',
    summary:
      'Crispy, golden-brown breaded veal cutlet, a classic Austrian dish served with lemon wedges.',
    instructions: `
      1. Prepare the veal:
         Pound veal cutlets until thin. Season with salt and pepper.

      2. Bread the schnitzel:
         Coat each cutlet in flour, then dipped in beaten eggs, and finally in breadcrumbs.

      3. Fry the schnitzel:
         Heat oil in a pan and fry the schnitzel until golden brown on both sides.

      4. Serve:
         Serve hot with a slice of lemon and a side of potato salad.
    `,
    creator: 'Franz Huber',
    creator_email: 'franzhuber@example.com',
  },
  {
    title: 'Fresh Tomato Salad',
    slug: 'fresh-tomato-salad',
    image: '/images/tomato-salad.jpg',
    summary:
      'A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy balsamic vinaigrette.',
    instructions: `
      1. Prepare the tomatoes:
         Slice ripe tomatoes and arrange them on a plate.

      2. Add basil and dressing:
         Scatter fresh basil leaves over the tomatoes. Drizzle with olive oil and balsamic vinegar.

      3. Season and serve:
         Sprinkle with salt and pepper. Serve immediately.
    `,
    creator: 'Sophia Wood',
    creator_email: 'sophiawood@example.com',
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
