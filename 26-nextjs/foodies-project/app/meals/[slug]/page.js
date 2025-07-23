export default function MealDetailsPage({ params }) {
  const {slug} = params;
  return (
    <main>
      <h1>Meal Details Page</h1>
      <p>item: {slug}</p>
    </main>
  );
}
