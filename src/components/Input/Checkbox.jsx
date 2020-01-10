import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.css';

export const Checkbox = forwardRef((props, ref) => {
  const {
    id, required, label, error,
  } = props;

  return (
    <label className={styles.wrapper} htmlFor={id}>
      <input
        data-testid={`checkbox-${id}`}
        ref={ref}
        className={styles.input}
        required={required}
        id={id}
        name={id}
        type="checkbox"
      />

      <span className={styles.label}>
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
      </span>
    </label>
  );
});

Checkbox.defaultProps = {
  required: false,
  label: null,
  error: {},
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.node,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default Checkbox;
