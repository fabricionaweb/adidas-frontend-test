import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

export function Header({ lead, title }) {
  return (
    <header className={styles.wrapper}>
      <h1 className={styles.heading}>
        {lead && <p>{lead}</p>}

        {title}
      </h1>
    </header>
  );
}

Header.defaultProps = {
  lead: null,
};

Header.propTypes = {
  lead: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Header;
