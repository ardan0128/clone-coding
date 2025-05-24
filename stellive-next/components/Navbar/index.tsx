`use client`;

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={240} height={60} />
        </Link>
      </div>
      <div className={styles.navbarRight}>
        <Link href="/">
          <span className={styles.navLink}>ABOUT</span>
        </Link>
        <Link href="/">
          <span className={styles.navLink}>NEWS</span>
        </Link>
        <Link href="/">
          <span className={styles.navLink}>TALENTS</span>
        </Link>
        <Link href="/">
          <span className={styles.navLink}>MUSIC</span>
        </Link>
        <Link href="/">
          <span className={styles.navLink}>GOODS</span>
        </Link>
        <Link href="/">
          <span className={styles.navLink}>GUIDELINE</span>
        </Link>
        <Link href="/">
          <span className={styles.navLink}>CONTACT</span>
        </Link>
      </div>
    </nav>
  );
}
