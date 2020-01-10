import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export function Button(props) {
  const {
    id, type, label, disabled,
  } = props;

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={styles.button}
      disabled={disabled}
      type={type}
      id={id}
      name={id}
      data-testid={`button-${id}`}
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
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'button', 'submit', 'reset',
  ]),
  label: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
