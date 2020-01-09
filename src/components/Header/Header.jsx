import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.wrapper}>
      <h1 className={styles.heading}>
        <p>{t('Sign up form')}</p>
        {t('Get more information')}
      </h1>
    </header>
  );
}

export default Header;
