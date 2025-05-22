`use client`;

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/">Home</Link>
      <Link href="/">Home</Link>
      <Link href="/">Home</Link>
    </nav>
  );
}
