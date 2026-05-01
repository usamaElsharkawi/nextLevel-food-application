import NavLink from "./nav-link";
import classes from "./main-navigation.module.css";

export default function MainNavigation() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink href="/meals">Browse Meals</NavLink>
        </li>
        <li>
          <NavLink href="/community">Foodies Community</NavLink>
        </li>
      </ul>
    </nav>
  );
}
