import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
export default function Logo() {
  return (
    <Link className={classes.logo} href="/">
      <Image src={logoImg} alt="NextLevel Food Logo" priority />
      NextLevel Food
    </Link>
  );
}