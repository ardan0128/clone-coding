`use client`;

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className={styles.navbarRight}>
        <Link href="/">ABOUT</Link>
        <Link href="/">NEWS</Link>
        <Link href="/">TALENTS</Link>
        <Link href="/">MUSIC</Link>
        <Link href="/">GOODS</Link>
        <Link href="/">GUIDELINE</Link>
        <Link href="/">CONTACT</Link>
      </div>
    </nav>
  );
}
