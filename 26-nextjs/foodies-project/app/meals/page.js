import Link from "next/link";
import classes from "./page.module.css";
import {getMeals} from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";
import {Suspense} from "react";
import MealsLoadingPage from "@/app/meals/loading-fallback";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, create{' '}
          <span>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}