import React from 'react';
import styles from './Form.module.css';
import * as Input from '../Input';

export function Form() {
  return (
    <section className={styles.wrapper}>
      <form className={styles.form}>
        <Input.Text
          required
          label="Your e-mail"
          placeholder="you@company.com"
          id="email"
          type="email"
        />

        <Input.RadioGroup
          label="Select your gender"
          id="gender"
          values={[
            'Male', 'Female', 'Non-binary',
          ]}
        />

        <Input.Checkbox
          required
          label="I’m above a certain age"
          id="confirmAge"
        />

        <Input.Checkbox
          label="I want to receive a newsletter"
          id="newsletter"
        />

        <Input.Button
          type="submit"
          label="Submit"
        />
      </form>
    </section>
  );
}

export default Form;
