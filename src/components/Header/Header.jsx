import React from 'react';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.wrapper}>
      <h1 className={styles.heading}>
        <p>Sign up form</p>
        Get more information
      </h1>
    </header>
  );
}

export default Header;
