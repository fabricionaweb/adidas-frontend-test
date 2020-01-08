import React from 'react';
import PropTypes from 'prop-types';

export function Checkbox({ id, required, label }) {
  return (
    <label htmlFor={id}>
      {label}

      <input
        required={required}
        id={id}
        type="checkbox"
      />
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
  label: PropTypes.element,
};

export default Checkbox;
