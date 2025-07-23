import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from './main-header.module.css';

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
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src={logo.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          {routes.map((route) => (
            <li key={route.path}><Link href={route.path}>{route.title}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}