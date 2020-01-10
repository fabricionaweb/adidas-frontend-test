import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Languages.module.css';

export function Languages() {
  const { t, i18n } = useTranslation();

  const changeLanguage = ({ target }) => {
    i18n.changeLanguage(target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <select
          data-testid="languages"
          value={i18n.language}
          onChange={changeLanguage}
        >
          <option value="en">{t('English')}</option>
          <option value="de">{t('Germany')}</option>
        </select>
      </div>
    </div>
  );
}

export default Languages;
