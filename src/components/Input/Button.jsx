import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export function Button({ type, label, disabled }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={styles.button}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

Button.propTypes = {
  type: PropTypes.oneOf([
    'button', 'submit', 'reset',
  ]),
  label: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
