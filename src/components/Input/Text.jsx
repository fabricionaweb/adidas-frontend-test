import React from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.css';

export function Text(props) {
  const {
    id, required, placeholder, label, type,
  } = props;

  return (
    <label className={styles.label} htmlFor={id}>
      {label}

      <input
        className={styles.input}
        required={required}
        placeholder={placeholder}
        id={id}
        type={type}
      />
    </label>
  );
}

Text.defaultProps = {
  required: false,
  placeholder: null,
  label: null,
  type: 'text',
};

Text.propTypes = {
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.element,
  type: PropTypes.oneOf([
    'text', 'password', 'email', 'number', // others
  ]),
};

export default Text;
