import React from 'react';
import PropTypes from 'prop-types';

export function RadioGroup(props) {
  const {
    id, required, label, values,
  } = props;

  const radioOptions = (value, index) => {
    const key = `${id}_${index}`;

    return (
      <li key={key}>
        <label htmlFor={key}>
          <input
            required={required}
            id={key}
            name={id}
            value={value}
            type="radio"
          />
          {' '}
          {value}
        </label>
      </li>
    );
  };

  return (
    <div>
      {label}

      <ul>
        {values.map(radioOptions)}
      </ul>
    </div>
  );
}

RadioGroup.defaultProps = {
  required: false,
  label: null,
};

RadioGroup.propTypes = {
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.element,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RadioGroup;
