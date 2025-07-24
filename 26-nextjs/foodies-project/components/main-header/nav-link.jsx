"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "@/components/main-header/nav-link.module.css";

export default function NavLink({routePath, children}) {
  const path = usePathname();
  return (
    <Link
      href={routePath}
      className={styles.link + (path.startsWith(routePath) ? ` ${styles.active}` : "")}
    >
      {children}
    </Link>
  );
}