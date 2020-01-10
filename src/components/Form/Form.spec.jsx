import React from 'react';
import {
  render, fireEvent, act, waitForElement,
} from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import { Form } from './Form';
import { sendSignUp } from '../../services/sign-up';

jest.mock('../../services/sign-up');
jest.mock('react-i18next');

const mockLanguage = (language) => () => ({
  t: (k) => k,
  i18n: { language },
});

const validEmail = { target: { value: 'foo@bar.com' } };
const invalidEmail = { target: { value: 'foo' } };

describe('Form.jsx', () => {
  beforeEach(() => {
    useTranslation.mockImplementation(mockLanguage('en'));
  });

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

      expect(error).toBeTruthy();
    });

    it('should display an error for confirm age', async () => {
      const { getByTestId } = render(<Form />);
      const form = getByTestId('form');

      await act(async () => {
        fireEvent.submit(form);
      });

      const error = await waitForElement(() => getByTestId('error-confirmAge'));

      expect(error).toBeTruthy();
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

  describe('when language is "en"', () => {
    it('should display genders', () => {
      const { getByTestId } = render(<Form />);
      const form = getByTestId('form');
      const { gender } = form.elements;

      expect(gender).toBeTruthy();
    });

    it('should not display newsletter', () => {
      const { getByTestId } = render(<Form />);
      const form = getByTestId('form');
      const { newsletter } = form.elements;

      expect(newsletter).toBeFalsy();
    });
  });

  describe('when language is "de"', () => {
    beforeEach(() => {
      useTranslation.mockImplementation(mockLanguage('de'));
    });

    it('should not display genders', () => {
      const { getByTestId } = render(<Form />);
      const form = getByTestId('form');
      const { gender } = form.elements;

      expect(gender).toBeFalsy();
    });

    it('should display newsletter', () => {
      const { getByTestId } = render(<Form />);
      const form = getByTestId('form');
      const { newsletter } = form.elements;

      expect(newsletter).toBeTruthy();
    });
  });
});
