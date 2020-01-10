import React from 'react';
import {
  render, fireEvent, act, waitForElement,
} from '@testing-library/react';
import { Form } from './Form';
import { sendSignUp } from '../../services/sign-up';
import '../../i18n';

jest.mock('../../services/sign-up');

const validEmail = {
  target: { value: 'foo@bar.com' },
};

const invalidEmail = {
  target: { value: 'foo' },
};

describe('Form.jsx', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('invalid form', () => {
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

    it('should not call sendSignUp', async () => {
      const { getByTestId } = render(<Form />);
      const form = getByTestId('form');
      const { email } = form.elements;

      await act(async () => {
        fireEvent.change(email, invalidEmail);
        fireEvent.submit(form);
      });

      expect(sendSignUp).not.toBeCalled();
    });
  });

  describe('valid form', () => {
    it('should call sendSignUp', async () => {
      sendSignUp.mockReturnValue(Promise.resolve());

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
