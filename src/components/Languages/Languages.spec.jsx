import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Languages } from './Languages';
import '../../i18n';

describe('Languages.jsx', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Languages />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('default language "en"', () => {
    it('should contains "English" option', () => {
      const { getByText } = render(<Languages />);
      expect(getByText('English')).toBeTruthy();
    });

    it('should contains "Germany" option', () => {
      const { getByText } = render(<Languages />);
      expect(getByText('Germany')).toBeTruthy();
    });
  });

  describe('change language to "de"', () => {
    const event = {
      target: { value: 'de' },
    };

    it('should contains "Englisch" option', () => {
      const { getByText, getByTestId } = render(<Languages />);

      fireEvent.change(getByTestId('languages'), event);
      expect(getByText('Englisch')).toBeTruthy();
    });

    it('should contains "Deutschland" option', () => {
      const { getByText, getByTestId } = render(<Languages />);

      fireEvent.change(getByTestId('languages'), event);
      expect(getByText('Deutschland')).toBeTruthy();
    });
  });
});
