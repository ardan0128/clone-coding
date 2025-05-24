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
        <Link href="/" className={styles.navLink}>
          ABOUT
        </Link>
        <Link href="/" className={styles.navLink}>
          NEWS
        </Link>
        <Link href="/" className={styles.navLink}>
          TALENTS
        </Link>
        <Link href="/" className={styles.navLink}>
          MUSIC
        </Link>
        <Link href="/" className={styles.navLink}>
          GOODS
        </Link>
        <Link href="/" className={styles.navLink}>
          GUIDELINE
        </Link>
        <Link href="/" className={styles.navLink}>
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
