import Link from "next/link";
import classes from "./main-header.module.css";
export default function MainNavigation() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
      </ul>
    </nav>
  );
}
