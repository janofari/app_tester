import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li>
          <Link href="/">
            <Image
              src="/images/BisbatLogo.png"
              alt="Bisbat Logo"
              height={40}
              width={150} 
              className={styles.logo}
              priority
            />
          </Link>
        </li>
        <li><Link href="/projectes">Proyectos</Link></li>
        <li><Link href="/calendar">Calendario</Link></li>
      </ul>
    </nav>
  );
}