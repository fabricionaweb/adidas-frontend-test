import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import '../../i18n';

describe('App.jsx', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
