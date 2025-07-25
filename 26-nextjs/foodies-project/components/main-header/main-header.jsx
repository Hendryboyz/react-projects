import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "@/components/main-header/nav-link";

const routes = [
  {
    path: "/meals",
    title: "Browse Meals",
  },
  {
    path: "/community",
    title: "Foodies Community",
  },
];

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground/>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="A plate with food on it" priority/>
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            {routes.map((route) => (
              <li key={route.path}>
                <NavLink routePath={route.path}>{route.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}