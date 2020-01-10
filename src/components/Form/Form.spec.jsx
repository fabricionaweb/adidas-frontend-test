import React from 'react';
import {
  render, fireEvent, act, waitForElement,
} from '@testing-library/react';
import { Form } from './Form';
import { sendSignUp } from '../../services/sign-up';
import '../../i18n';

jest.mock('../../services/sign-up');

describe('Form.jsx', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('invalid form', () => {
    const invalidEmail = {
      target: { value: 'foo' },
    };

    it('should display an error for invalid email', async () => {
      const { getByTestId } = render(<Form />);
      const form = getByTestId('form');
      const { email } = form.elements;

      await act(async () => {
        fireEvent.change(email, invalidEmail);
        fireEvent.submit(form);
      });

      const error = await waitForElement(() => getByTestId('error-email'));

      expect(error).toBeInTheDocument();
    });

    it('should display an error for confirm age', async () => {
      const { getByTestId } = render(<Form />);
      const form = getByTestId('form');

      await act(async () => {
        fireEvent.submit(form);
      });

      const error = await waitForElement(() => getByTestId('error-confirmAge'));

      expect(error).toBeInTheDocument();
    });
  });

  describe('valid form', () => {
    const validEmail = {
      target: { value: 'foo@bar.com' },
    };

    beforeEach(() => {
      sendSignUp.mockReturnValue(Promise.resolve());
    });

    it('should call sendSignUp', async () => {
      const { getByTestId } = render(<Form />);
      const form = getByTestId('form');
      const { email, confirmAge } = form.elements;

      await act(async () => {
        fireEvent.click(confirmAge);
        fireEvent.change(email, validEmail);
        fireEvent.submit(form);
      });

      expect(sendSignUp).toBeCalled();
    });
  });
});
