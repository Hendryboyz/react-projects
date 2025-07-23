import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <Link href="/meals/me">My Meal</Link>
    </main>
  );
}