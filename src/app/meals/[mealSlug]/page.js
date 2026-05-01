export default async function MealDetailsPage({ params }) {
  const { mealSlug } = await params;
  return <h1>Meal Details Page {mealSlug}</h1>;
}