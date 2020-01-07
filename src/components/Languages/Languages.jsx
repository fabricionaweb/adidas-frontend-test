import React from 'react';
import styles from './Languages.module.css';

export function Languages() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <select>
          <option value="en">English</option>
          <option value="de">Germany</option>
        </select>
      </div>
    </div>
  );
}

export default Languages;
