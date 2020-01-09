import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.css';

export function Checkbox({ id, required, label }) {
  return (
    <label className={styles.wrapper} htmlFor={id}>
      <input
        className={styles.input}
        required={required}
        id={id}
        type="checkbox"
      />

      <span className={styles.label}>
        {label}
      </span>
    </label>
  );
}

Checkbox.defaultProps = {
  required: false,
  label: null,
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.node,
};

export default Checkbox;
