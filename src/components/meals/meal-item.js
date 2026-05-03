import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image} suppressHydrationWarning>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText} suppressHydrationWarning>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content} suppressHydrationWarning>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions} suppressHydrationWarning>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
