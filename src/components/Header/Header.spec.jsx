import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';
import '../../i18n';

describe('Header.jsx', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
