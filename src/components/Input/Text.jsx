import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.css';

export const Text = forwardRef((props, ref) => {
  const {
    id, required, placeholder, label, type, error,
  } = props;

  return (
    <label className={styles.label} htmlFor={id}>
      {label}
      {' '}

      {error.message && (
        <span
          data-testid={`error-${id}`}
          className={styles.error}
        >
          {error.message}
        </span>
      )}

      <input
        data-testid={`input-${id}`}
        ref={ref}
        className={styles.input}
        required={required}
        placeholder={placeholder}
        id={id}
        name={id}
        type={type}
      />
    </label>
  );
});

Text.defaultProps = {
  required: false,
  placeholder: null,
  label: null,
  error: {},
  type: 'text',
};

Text.propTypes = {
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.node,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  type: PropTypes.oneOf([
    'text', 'password', 'email', 'number', // others
  ]),
};

export default Text;
