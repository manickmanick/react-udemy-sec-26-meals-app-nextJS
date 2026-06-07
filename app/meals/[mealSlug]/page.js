import { getMeal } from "@/lib/meals";
import cs from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={cs.header}>
        <div className={cs.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={cs.headerText}>
          <h1>{meal.title}</h1>
          <p className={cs.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={cs.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={cs.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
