import React from 'react';
import { render } from '@testing-library/react';
import * as Input from '.';

describe('Button.jsx', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Input.Button label="test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Checkbox.jsx', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Input.Checkbox id="test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('RadioGroup.jsx', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Input.RadioGroup values={['foo', 'bar']} id="test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Text.jsx', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Input.Text id="test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
