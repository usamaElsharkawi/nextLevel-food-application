import Logo from "./logo";
import MainNavigation from "./main-navigation";
import classes from "./main-header.module.css";
export default function MainHeader() {
  return (
    <>
      <header className={classes.header}>
        <Logo />
        <MainNavigation />
      </header>
    </>
  );
}
