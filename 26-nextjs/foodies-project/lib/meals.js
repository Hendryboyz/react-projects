import fs from "node:fs";

import sql from 'better-sqlite3';
import slugify from "slugify";
import xss from "xss";

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

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  await writeImage(meal)
  // @ symbol is support by `better-sqlite` package and the lib will extract the variable
  // from the value object by the name you provided behind the @ symbol
  // this way can allow to avoid SQL injection attack
  db.prepare(`
  INSERT INTO meals (title, summary, image, instructions, creator, creator_email, slug)
  VALUES (@title, @summary, @image, @instructions, @creator, @creator_email, @slug)
  `).run(meal);
}

async function writeImage(meal) {
  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });

  // all request to the image will be sent to public/ folder automatically
  meal.image = `/images/${fileName}`;
}