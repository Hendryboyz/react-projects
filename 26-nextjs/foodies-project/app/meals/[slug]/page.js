import Image from 'next/image';
import styles from './page.module.css';
import {getMeal} from "@/lib/meals";
import {notFound} from "next/navigation";

// generate 'dynamic
export async function generateMetadata({ params }) {
  const {slug} = params;
  const meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  }
}

export default async function MealDetailsPage({ params }) {
  const {slug} = params;
  const meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }

  let {
    title,
    image,
    summary,
    instructions,
    creator,
    creator_email,
  } = meal;
  instructions = instructions.replace(/\n/g, '<br />')
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h1></h1>
          <p className={styles.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p className={styles.instructions} dangerouslySetInnerHTML={{
          __html: instructions
        }}></p>
      </main>
    </>
  );
}
