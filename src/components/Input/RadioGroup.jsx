import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './RadioGroup.module.css';

export const RadioGroup = forwardRef((props, ref) => {
  const {
    id, required, label, values,
  } = props;

  const radioOptions = (value, index) => {
    const key = `${id}_${index}`;

    return (
      <li key={key}>
        <label htmlFor={key}>
          <input
            ref={ref}
            className={styles.input}
            required={required}
            id={key}
            name={id}
            value={value}
            type="radio"
          />
          <span className={styles.label}>
            {value}
          </span>
        </label>
      </li>
    );
  };

  return (
    <div className={styles.wrapper}>
      {label}

      <ul className={styles.list}>
        {values.map(radioOptions)}
      </ul>
    </div>
  );
});

RadioGroup.defaultProps = {
  required: false,
  label: null,
};

RadioGroup.propTypes = {
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.node,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RadioGroup;
