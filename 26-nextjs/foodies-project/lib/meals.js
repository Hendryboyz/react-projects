import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });

  return db.prepare('SELECT * FROM meals')
    .all(); // all use to fetch data
}

export async function getMeal(slug) {
  return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
}